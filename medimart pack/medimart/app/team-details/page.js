"use client"
import React from 'react';
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { getAccounts, getMedicalRecord, updateRecordByDoctor } from "../../components/utils/web3.js"; // Added updateRecordByDoctor
import usePatients from "../../components/hooks/patient.zustand"
import { useState, useEffect} from 'react';


import { retrieveFileWithSignedURL,uploadFile } from '@/components/utils/pinata.js';
const ProgressBar = ({ label, percent }) => (
    <div className="progress-box">
      <p>{label}</p>
      <div className="bar">
        <div className="bar-inner count-bar" style={{ width: `${percent}%` }}></div>
        <div className="count-text">{`${percent}%`}</div>
      </div>
    </div>
  );


export default function Home() {

    //Doctor MetaMask and Web3 Methods

    //const [account, setAccount] = useState(null);
    const [accountConnected,setAccountConnected] = useState(false);
    let account = null;
    // Function to connect the wallet
    const connectWallet = async () => {
        try {
            
            const accounts = await getAccounts();
            //setAccount(accounts[0]);
            account = accounts[0];
            console.log("Connected account:", account);
            setAccountConnected(true);

            handleGetMedicalRecord(patient.publicAddress); 
            } catch (error) {
            console.error("Error connecting wallet:", error);
        }
    };


    //Patient Details
    const patient = usePatients((state)=>state.selectedPatient);


    //Medical Record
    const [medicalRecords, setMedicalRecords] = useState([
        {
            "NO RECORDS FOUND": "No Records Found"
        }
    ]); // State for storing medical records
    
    const [fileUrls, setFileUrls] = useState([]); // Array to store URLs for each record
    const [loading, setLoading] = useState([]);    // Array to track loading states for each record
    // Function to get a medical record using the Web3 contract
    const handleGetMedicalRecord = async (publicAddress) => {
        console.log("Handle get Medical Record with public Address : ",publicAddress);
        try {
            if (!publicAddress) {
                console.log("No public address provided");
                return;
            }
            const medicalRecord = await getMedicalRecord(publicAddress,account);

            console.log("Records Fetched by handleGetMedical Record : ",medicalRecord);
            setMedicalRecords(medicalRecord);

            return medicalRecord; // Return the fetched medical record
        } catch (e) {
            console.error("Error fetching medical record:", e);
            console.log("DOCTOR NOT CONNECTED");
            return [];
        }
    };

    //Function to Update Links whenever change in medical records
    useEffect(() => {
        if(medicalRecords.length > 0){
          medicalRecords.forEach((record, index) => {
    
            if (!fileUrls[index] && !loading[index] ) {
              if(record!="No records found")
              handleRetrieve(record, index);
              else{
                setFileUrls([...fileUrls, "No records found"]);
                setLoading([...loading, false]);
              } 
            }
          });
      }
    }, [medicalRecords]);

    //function to get file links from Pinata 
    const handleRetrieve = async (cid, index) => {
    if (!cid) return;

    try {
      setLoading((prev) => {
        const updatedLoading = [...prev];
        updatedLoading[index] = true;  // Set loading state for the current record
        return updatedLoading;
      });

      const url = await retrieveFileWithSignedURL(cid);

      setFileUrls((prev) => {
        const updatedUrls = [...prev];
        updatedUrls[index] = url;  // Store retrieved URL in the corresponding index
        return updatedUrls;
      });

    } catch (error) {
      console.error("Error retrieving file:", error);
    } finally {
      setLoading((prev) => {
        const updatedLoading = [...prev];
        updatedLoading[index] = false;  // Set loading state to false after fetching
        return updatedLoading;
      });

    }
    };





    //file to update
    const [file, setFile] = useState(null);
    //Pinata
    const [cid, setCid] = useState('');
    let newRecord = cid;
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleUpload = async () => {
        if (!file) {
          alert("Please select a file to upload");
          return;
        }
    
        try {
          const fileCid = await uploadFile(file);
          setCid(fileCid);
          console.log("File uploaded with CID:", fileCid);
          newRecord = fileCid;
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      };
   // Function to update a patient's medical record
    const handleUpdateMedicalRecord = async () => {
        
        console.log("Patient:", patient);
        console.log("New Record:", newRecord);
        try {
        
        if (!patient || !newRecord) {
            console.error("No patient selected or record entered.");
            alert("Please select a patient and upload a record to update");
            return;
        }

        const updatedRecord = await updateRecordByDoctor(patient.publicAddress, newRecord);
        console.log("Updated record:", updatedRecord);
        // Optionally, update the state to reflect the new record in the UI
        setMedicalRecords([...medicalRecords, newRecord]);

        } catch (error) {
        console.error("Error updating medical record:", error);
        }
    };

    return (
        <>
        {/* {
            account ? ( */}
                <>
                <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Team Details">
                    <section className="team-details sec-pad-2">
                    <div className="auto-container">
                        <div className="team-details-content mb_50">
                            <div className="row clearfix">
                                <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                                    <figure className="image-box mr_15"><img src={patient.image} alt="" /></figure>
                                </div>
                                <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <h2> {patient.name} </h2>
                                        <span className="designation">Adhar: {patient.aadhar} </span>
                                        <p>Eget lorem dolor sed viverra. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. consectetur adipiscing elit. Libero turpis blandit blandit mauris aliquam condimentum quam suspendisse Pellentesque habitant morbi tristique senectus et netus</p>
                                        <ul className="info-list mb_30 clearfix">
                                            <li><strong>Date of Birth: </strong>{patient.DOB} </li>
                                            <li><strong>Email: </strong><Link href="mailto:tanya.hill@example.com">{patient.email} </Link></li>
                                            <li><strong>Phone: </strong><Link href="tel:3035550105">{patient.contact} </Link></li>
                                        </ul>
                                        {/* <ul className="social-links clearfix">
                                            <li><Link href="/"><i className="icon-4"></i></Link></li>
                                            <li><Link href="/"><i className="icon-5"></i></Link></li>
                                            <li><Link href="/"><i className="icon-6"></i></Link></li>
                                            <li><Link href="/"><i className="icon-7"></i></Link></li>
                                        </ul> */}

                                        <button type="submit" className="theme-btn btn-one" onClick={connectWallet}><span>Connect Wallet</span></button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                        accountConnected
                        ?   (  
                            <>    
                            <p>Account Connected With Address : {account} </p>                  
                                <div className="experience-details mb_50">
                                    <h2>Previous Medical Records</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>

                               
                                <h4>Medical Records:</h4>
                                {medicalRecords.length > 0 ? (
                                    medicalRecords.map((record, index) => (
                                    <div key={index}>
                                        <strong>Record {index + 1}  : </strong>
                                        {fileUrls[index] ? (
                                        <a href={fileUrls[index]} target="_blank" rel="noopener noreferrer">
                                                :      Access File
                                        </a>
                                        ) : (
                                        <span className="loading-animation">Fetching record...</span>
                                        )}
                                    </div>
                                    ))
                                ) : (
                                    <p>No medical records Found!!<br></br> Or please connect a verified doctor's wallet.</p>
                                )}




                                <div className="two-column">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 skills-column">
                                            <div className="skills-box">
                                                <div className="text-box mb_30">
                                                    <h2>Update Record</h2>
                                                    <p>Consectetur adipiscing elit. Semper sagittis dolor aliquet quam feugiat ultrices feugiat Viverra facilisi turpis.</p>
                                                    <p>Show Medicines </p>
                                                </div>
                                                {/* <div className="progress-inner">
                                                    <ProgressBar label="Waste management" percent={85} />
                                                    <ProgressBar label="Recycling" percent={90} />
                                                    <ProgressBar label="Customer support" percent={80} />
                                                </div> */}
                                                <input type="file" onChange={handleFileChange} />
                                                <button type="submit" className="theme-btn btn-one" onClick={handleUpload}><span>Upload File !</span></button>
                                                {cid && <p> File uploaded successfully! CID: {cid}</p>}
                                                <button type="submit" className="theme-btn btn-one" onClick={handleUpdateMedicalRecord}><span>Update Medical Record</span></button>





                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 appointment-column">
                                            {/* <div className="appointment-inner">
                                                <h2>Book An Appointment</h2>
                                                <form method="post" action="team-details" className="default-form">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                            <input type="text" name="fname" placeholder="First Name" required />
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                            <input type="text" name="phone" placeholder="Phone Number" required />
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                            <input type="email" name="email" placeholder="Email" required />
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                            <input type="text" name="subject" placeholder="Subject" required />
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                            <textarea name="message" placeholder="Message"></textarea>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                            <button type="submit" className="theme-btn btn-one"><span>Send Message</span></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>


                            </>
                        )
                        :(
                            <div className="two-column">Account NOT Connected</div>
                        )

                        }


                    </div>
                    </section>

                    {/* subscibe */}
                    <section className="subscribe-section">
                                <div className="auto-container">
                                    <div className="inner-container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                                        <div className="text-box">
                                            <h2><span>Subscribe</span> for the exclusive updates!</h2>
                                        </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                                        <div className="form-inner">
                                            <form method="post" action="contact">
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Enter Your Email Address" required />
                                                <button type="submit" className="theme-btn btn-one"><span>Subscribe Now</span></button>
                                            </div>
                                            <div className="form-group">
                                                <div className="check-box">
                                                <input className="check" type="checkbox" id="checkbox1" />
                                                <label htmlFor="checkbox1">I agree to the <Link href="/">Privacy Policy.</Link></label>
                                                </div>
                                            </div>
                                            </form>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                    </section>
                    {/* subscibe end */}


                </Layout>
                </>

                {/* // ):(
                //     <>
                //     <button type="submit" className="theme-btn btn-one" onClick={connectWallet}><span>Connect Wallet</span></button>

                     </>
                 )
         } */}
        </>
    );
}

