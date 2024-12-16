
// 'use client'
// import Layout from "@/components/layout/Layout"

// import Link from "next/link"
// import { useState } from 'react'
// import ModalVideo from 'react-modal-video'
// import { getAccounts } from "../../components/utils/web3.js"; 

// import usePatients from "@/components/hooks/patient.zustand.js";
// import { useRouter } from "next/navigation";
// export default function Home() {
//     const [isOpen, setOpen] = useState(false)
//     const [isActive, setIsActive] = useState({
//         status: false,
//         key: 1,
//     })

//     const handleToggle = (key) => {
//         if (isActive.key === key) {
//             setIsActive({
//                 status: false,
//             })
//         } else {
//             setIsActive({
//                 status: true,
//                 key,
//             })
//         }
//     }
//     const patients = usePatients((state) => state.setNewPatient);



//     const [accountConnected,setAccountConnected] = useState(false);
//     let account = null;
//     // Function to connect the wallet
//     const connectWallet = async () => {
//         try {

//             const accounts = await getAccounts();
//             //setAccount(accounts[0]);
//             account = accounts[0];
//             console.log("Connected account:", account);
//             setAccountConnected(true);


//             } catch (error) {
//             console.error("Error connecting wallet:", error);
//         }
//     };
//     //router to navigate
//     const router = useRouter();
//     const submit = async ()=>{
//         console.log("submitting");
//         console.log("Connected account:", account);

//         //from the form get the information and call the API - localhost:8000/createRecord/{account}
//         // app.post('/createRecord/:publicAddress', async (req, res) => {
//         //     const { 
//         //           _name,
//         //           _DOB, 
//         //           _img, 
//         //           _email, 
//         //           _control, 
//         //           _gender, 
//         //           _aadhar,

//         //       } = req.body;
//         //       const publicAddress = req.params.publicAddress;
//         //      try {
//         //       // Use setDoc with the Aadhar number as the document ID
//         //       await setDoc(doc(firestore, "patient", _aadhar), {
//         //         publicAddress: publicAddress,
//         //         name: _name,
//         //         DOB: _DOB,
//         //         image: _img,
//         //         email: _email,
//         //         control: _control,
//         //         gender: _gender,
//         //         aadhar: _aadhar,

//         //       });
//         //       res.status(200).send({ message: "Medical Report written with Aadhar ID: " + _aadhar });
//         //     } catch (error) {
//         //       res.status(500).send({ error: "Error adding Record: " + error });
//         //     }
//         //   });

//         patients(patient);//make patient object with every info available
//         //like name: name, publicAddress: account, contact: contact, email: email, DOB: DOB, aadhar: aadhar, image: image,

//         //naviagte to /patinet
//         router.push("/patient");


//     }



//     return (
//         <>
//             <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Patient Signup">
//                 {/* Appointments-section */}
//                 <section className="appointment-section sec-pad-2">
//       <div className="outer-container p_relative">
//       <div
//             className="bg-layer"
//                     style={{
//                         backgroundImage: "url(https://ennoblecare.com/wp-content/uploads/2023/09/iStock-1152844782.jpg)",
//                         width: "287px",
//                         height: "220px",

//                         backgroundSize: "cover", // Ensures the image covers the area
//                         backgroundPosition: "center", // Centers the image within the div
//                     }}
//                     ></div>

//         <div className="auto-container">
//           <div className="row clearfix">
//             <div className="col-lg-7 col-md-12 col-sm-12 form-column">
//               <div className="form-inner">
//                 <form action="appointments" method="post" className="default-form">
//                   <div className="row clearfix">
//                     {/* <div className="col-lg-12 col-md-12 col-sm-12 form-group">
//                       <label>Select Department</label>
//                       <div className="select-box">
//                         <select className="selectmenu">
//                           <option>pathology</option>
//                           <option>Cardiology</option>
//                           <option>Dental Clinic</option>
//                           <option>Neurosurgery</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="col-lg-12 col-md-12 col-sm-12 form-group">
//                       <label>Choose Doctor by Name</label>
//                       <div className="select-box">
//                         <select className="selectmenu">
//                           <option>Haddam Banksy</option>
//                           <option>Black Marvin</option>
//                           <option>Eleanor Pena</option>
//                           <option>Arlene Maccy</option>
//                         </select>
//                       </div>
//                     </div> */}
//                     <div className="col-lg-12 col-md-12 col-sm-12 form-group">
//                       <input type="text" name="name" placeholder="Name" required />
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                       <input type="text" name="phone" placeholder="Contact" required />
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                       <input type="email" name="email" placeholder="Email" required />
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                       <input type="text" name="date" placeholder="DOB (DD-MM-YYYY)" id="DOB" />
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                       <input type="text" name="adhar" placeholder="Adhar" />
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                       <input type="file" name="Image" placeholder="Upload Image" />
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                       <input type="text" name="Image" placeholder="Gender" />
//                     </div>


//                     <div className="col-lg-12 col-md-12 col-sm-12 form-group">
//                       <input type="text" name="pass" placeholder="Password" required />
//                     </div>
//                     <div className="col-lg-12 col-md-12 col-sm-12 form-group">
//                       <input type="text" name="cnf_pass" placeholder="Confirm Password" required />
//                     </div>

//                     <div className="col-lg-12 col-md-12 col-sm-12 form-group">
//                       <p>Please Download MetaMask and connect your wallet</p>
//                       <button type="submit" className="theme-btn btn-one" onClick={connectWallet}><span>Connect Wallet</span></button>
//                     </div>
//                     <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
//                       <button type="submit" className="theme-btn btn-one"><span>Sign UP</span></button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//                 </section>
//                 {/* Appointments-section end */}


//                 {/* video */}
//                 <section className="video-section p_relative">
//                     <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images/background/video-bg.jpg)' }}></div>
//                     <figure className="image-layer"><img src="assets/images/resource/video-1.png" alt="" /></figure>
//                     <div className="auto-container">
//                         <div className="inner-box">
//                         <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-17.png)' }}></div>
//                         <div className="video-btn">
//                         <a onClick={() => setOpen(true)}><i className="fas fa-play"></i></a>
//                         </div>
//                         <h2>Online Consultations With <br />Qualified Doctors</h2>
//                         <div className="btn-box">
//                             <Link href="/" className="theme-btn btn-one"><span>Make an Appointment</span></Link>
//                         </div>
//                         </div>
//                     </div>
//                 </section>
//                 {/* video end */}


//                 {/* team-section */}
//                <section className="team-section sec-pad bg-color-1 centred">
//             <div className="shape">
//                 <div className="shape-1 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-15.png)' }}></div>
//                 <div className="shape-2"></div>
//                 <div className="shape-3 float-bob-x" style={{ backgroundImage: 'url(assets/images/shape/shape-16.png)' }}></div>
//             </div>
//             <div className="auto-container">
//                 <div className="sec-title mb_50">
//                     <span className="sub-title">Our Team</span>
//                     <h2>Meet our experienced doctors <br />for the best treatment</h2>
//                 </div>
//                 <div className="row clearfix">
//                     <div className="col-lg-3 col-md-6 col-sm-12 team-block">
//                         <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
//                             <div className="inner-box">
//                                 <div className="image-box">
//                                     <figure className="image"><img src="assets/images/team/team-1.jpg" alt="" /></figure>
//                                     <ul className="social-links clearfix">
//                                         <li><Link href="/"><i className="icon-4"></i></Link></li>
//                                         <li><Link href="/"><i className="icon-5"></i></Link></li>
//                                         <li><Link href="/"><i className="icon-6"></i></Link></li>
//                                         <li><Link href="/"><i className="icon-7"></i></Link></li>
//                                     </ul>
//                                 </div>
//                                 <div className="lower-content">
//                                     <h3><Link href="team-details">Black Marvin</Link></h3>
//                                     <span className="designation">Medical Assistant</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6 col-sm-12 team-block">
//                         <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
//                             <div className="inner-box">
//                                 <div className="image-box">
//                                     <figure className="image"><img src="assets/images/team/team-2.jpg" alt="" /></figure>
//                                     <ul className="social-links clearfix">
//                                         <li><Link href="/"><i className="icon-4"></i></Link></li>
//                                         <li><Link href="/"><i className="icon-5"></i></Link></li>
//                                         <li><Link href="/"><i className="icon-6"></i></Link></li>
//                                         <li><Link href="/"><i className="icon-7"></i></Link></li>
//                                     </ul>
//                                 </div>
//                                 <div className="lower-content">
//                                     <h3><Link href="team-details">Eleanor Pena</Link></h3>
//                                     <span className="designation">Doctor</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6 col-sm-12 team-block">
//                         <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
//                             <div className="inner-box">
//                                 <div className="image-box">
//                                     <figure className="image"><img src="assets/images/team/team-3.jpg" alt="" /></figure>
//                                     <ul className="social-links clearfix">
//                                         <li><Link href="/"><i className="icon-4"></i></Link></li>
//                                         <li><Link href="/"><i className="icon-5"></i></Link></li>
//                                         <li><Link href="/"><i className="icon-6"></i></Link></li>
//                                         <li><Link href="/"><i className="icon-7"></i></Link></li>
//                                     </ul>
//                                 </div>
//                                 <div className="lower-content">
//                                     <h3><Link href="team-details">Arlene Maccy</Link></h3>
//                                     <span className="designation">Nursing Assistant</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6 col-sm-12 team-block">
//                         <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
//                             <div className="inner-box">
//                                 <div className="image-box">
//                                     <figure className="image"><img src="assets/images/team/team-4.jpg" alt="" /></figure>
//                                     <ul className="social-links clearfix">
//                                         <li><Link href="/"><i className="icon-4"></i></Link></li>
//                                         <li><Link href="/"><i className="icon-5"></i></Link></li>
//                                         <li><Link href="/"><i className="icon-6"></i></Link></li>
//                                         <li><Link href="/"><i className="icon-7"></i></Link></li>
//                                     </ul>
//                                 </div>
//                                 <div className="lower-content">
//                                     <h3><Link href="team-details">Jenny Wilson</Link></h3>
//                                     <span className="designation">Senior Doctor</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//                 {/* team-section */}






//                 {/* subscibe */}
//                 <section className="subscribe-section">
//                 <div className="auto-container">
//                     <div className="inner-container">
//                     <div className="row align-items-center">
//                         <div className="col-lg-6 col-md-12 col-sm-12 text-column">
//                         <div className="text-box">
//                             <h2><span>Subscribe</span> for the exclusive updates!</h2>
//                         </div>
//                         </div>
//                         <div className="col-lg-6 col-md-12 col-sm-12 form-column">
//                         <div className="form-inner">
//                             <form method="post" action="contact">
//                             <div className="form-group">
//                                 <input type="email" name="email" placeholder="Enter Your Email Address" required />
//                                 <button type="submit" className="theme-btn btn-one"><span>Subscribe Now</span></button>
//                             </div>
//                             <div className="form-group">
//                                 <div className="check-box">
//                                 <input className="check" type="checkbox" id="checkbox1" />
//                                 <label htmlFor="checkbox1">I agree to the <Link href="/">Privacy Policy.</Link></label>
//                                 </div>
//                             </div>
//                             </form>
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//                 </section>
//                   {/* subscibe end */}

//                   <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="nfP5N9Yc72A" onClose={() => setOpen(false)} />


//             </Layout>
//         </>
//     )
// }



'use client';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { getAccounts } from "../../components/utils/web3.js";
import usePatients from "@/components/hooks/patient.zustand.js";
import { useRouter } from "next/navigation";
import axios from "axios";
import bcrypt from "bcryptjs";

export default function Home() {
    const [isOpen, setOpen] = useState(false);
    const [isActive, setIsActive] = useState({ status: false, key: 1 });
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        DOB: "",
        aadhar: "",
        gender: "",
        password: "",
        confirmPassword: "",
        image: "",
    });
    const [account, setAccount] = useState(null);


    const patients = usePatients((state) => state.setNewPatient);
    const router = useRouter();

    const handleToggle = (key) => {
        setIsActive((prev) => ({
            status: prev.key !== key,
            key,
        }));
    };

    const connectWallet = async () => {
        try {
            const accounts = await getAccounts();
            setAccount(accounts[0]);

            console.log("Connected account:", accounts[0]);
        } catch (error) {
            console.error("Error connecting wallet:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // const handleFileChange = (e) => {
    //     setFormData((prev) => ({
    //         ...prev,
    //         image: e.target.files[0],
    //     }));
    // };

    const submit = async (e) => {
        e.preventDefault();

        if (!account) {
            alert("Please connect your wallet first.");
            return;
        }
        //encrypt the password
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const hashedPassword = await bcrypt.hash(formData.password, 10);
        formData.password = hashedPassword;
        const patientData = {
            ...formData,
            publicAddress: account
        };
        console.log("Submitting form with data:", patientData);

        // API call or Zustand action
        axios.post(`http://localhost:8000/createRecord/${account}`, patientData);


        patients(patientData);
        router.push("/patient");
    };

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Patient Signup">
                {/* Appointments-section */}
                <section className="appointment-section sec-pad-2">
                    <div className="outer-container p_relative">
                        <div
                            className="bg-layer"
                            style={{
                                backgroundImage: "url(https://ennoblecare.com/wp-content/uploads/2023/09/iStock-1152844782.jpg)",
                                // width: "1608px",
                                // height: "937px",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-7 col-md-12 col-sm-12 form-column">
                                    <div className="form-inner">
                                        <form className="default-form" onSubmit={submit}>
                                            <div className="row clearfix">
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="Name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        placeholder="Contact"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        placeholder="Email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input
                                                        type="date"
                                                        name="DOB"
                                                        placeholder="DOB (DD-MM-YYYY)"
                                                        value={formData.DOB}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="aadhar"
                                                        placeholder="Aadhar"
                                                        value={formData.aadhar}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-9 col-sm-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="image"
                                                        placeholder="Provide valid image url for upload"
                                                        onChange={handleInputChange}

                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-3 col-sm-12 form-group">
                                                    
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        
                                                        value="male"
                                                        checked={formData.gender === "male"}
                                                        onChange={handleInputChange}
                                                    /> Male
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        
                                                        value="female"
                                                        checked={formData.gender === "female"}
                                                        onChange={handleInputChange}
                                                    /> Female

                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="password"
                                                        placeholder="Password"
                                                        value={formData.password}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="confirmPassword"
                                                        placeholder="Confirm Password"
                                                        value={formData.confirmPassword}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <p>Please Download MetaMask and connect your wallet</p>
                                                    <button
                                                        type="button"
                                                        className="theme-btn btn-one"
                                                        onClick={connectWallet}
                                                    >
                                                        <span>Connect Wallet</span>
                                                    </button>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                    <button type="submit" className="theme-btn btn-one">
                                                        <span>Sign UP</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

