import "./Doctor.css";
import { useState, useEffect } from "react";
import { getAccounts, getMedicalRecord, updateRecordByDoctor } from "../../utils/web3"; // Added updateRecordByDoctor
import vid from "../../assets/d.mp4";
import axios from "axios";
import { uploadFile ,retrieveFileWithSignedURL} from "../../utils/pinata";


function Doctor() {
  const [account, setAccount] = useState(null);
  const [patient, setPatient] = useState(null); // State for selected patient
  const [allPatients, setAllPatients] = useState([]); // State for all fetched patients
  const [searchQuery, setSearchQuery] = useState(''); // Search query state
  const [searchBy, setSearchBy] = useState('name'); // Search filter option
  const [filteredPatients, setFilteredPatients] = useState([]); // Filtered patients based on search
  const [medicalRecords, setMedicalRecords] = useState([]); // State for storing medical records
  const [file, setFile] = useState(null);
  const [cid, setCid] = useState('');
  const [fileUrls, setFileUrls] = useState([]); // Array to store URLs for each record
  const [loading, setLoading] = useState([]);    // Array to track loading states for each record


  let newRecord = cid;

    // Fetch all patients from the web2 API on mount
    useEffect(() => {
      const fetchPatients = async () => {
        try {
          const response = await axios.get('http://localhost:8000/getAllPatients');
          console.log(response.data);
          setAllPatients(response.data); // Store fetched patients
          setFilteredPatients(response.data); // Initially, all patients are shown
        } catch (error) {
          console.error("Error fetching patients:", error);
        }
      };
      fetchPatients();
    }, []);

      // Fetch URLs for all medical records on initial render
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

  // Function to connect the wallet
  const connectWallet = async () => {
    try {
      const accounts = await getAccounts();
      setAccount(accounts[0]);

      console.log("Connected account:", account);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  // Function to search patients by selected option (name, Aadhar, or email)
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === "") {
      setFilteredPatients(allPatients); // Show all patients if search query is empty
    } else {
      let filtered;
      if (searchBy === 'aadhar') {
        filtered = allPatients.filter((patient) => patient.aadhar.includes(query));
      } else if (searchBy === 'name') {
        filtered = allPatients.filter((patient) => patient.name.toLowerCase().includes(query.toLowerCase()));
      } else if (searchBy === 'email') {
        filtered = allPatients.filter((patient) => patient.email.toLowerCase().includes(query.toLowerCase()));
      }
      setFilteredPatients(filtered); // Filter patients based on search query and selected option
    }
  };

  const selectPatient = async (selectedPatient) => {
    setMedicalRecords([]); // Set to null to indicate loading
    setPatient(selectedPatient);    // Set the selected patient
    setFileUrls([]); // Reset file URLs
    setLoading([]); // Reset loading statesz
  };
  
  useEffect(() => {
    // When medicalRecords is null, we fetch new medical records

    if (medicalRecords.length===0 && patient) {
      (async () => {
        const records = await handleGetMedicalRecord(patient.publicAddress);
        setMedicalRecords(records);
        
      })();
    }
  }, [medicalRecords, patient]);

  // Function to get a medical record using the Web3 contract
  const handleGetMedicalRecord = async (publicAddress) => {

    try {
      if (!publicAddress) {
        console.log("No public address provided");
        return;
      }
      const medicalRecord = await getMedicalRecord(publicAddress,account);
      

      
      return medicalRecord; // Return the fetched medical record
    } catch (e) {
      console.error("Error fetching medical record:", e);
      console.log("DOCTOR NOT CONNECTED");
      return [];
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

  // Function to fetch the file URL only once per CID
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

  const renderPatientDetails = () => {
    
    if (!patient) return null;

    return (
      <>
      
      <div className="patient-details">
      <div className="patient-details">
        <img src={patient.url} alt="Patient" className="patient-image" />
        <h3>{patient.name}</h3>
      </div>
        <div className="medical-records">
          <h4>Medical Records:</h4>
          {medicalRecords.length > 0 ? (
            medicalRecords.map((record, index) => (
              <div key={index}>
                <strong>Record {index + 1}          </strong>
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
          <div>
            <h2>Upload File</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload File</button>
            {cid && <p> File uploaded successfully! CID: {cid}</p>}
          </div>
          <div>
            <br />
            <button onClick={handleUpdateMedicalRecord}>Add Record</button>
          </div>
        </div>
      </div>
      </>
    );
  };

  return (
    <>

    {
      account ? (
        <>
          <div className="login-container">
          <div className="app-container">
            <video className="video" autoPlay loop muted id="video">
              <source src={vid} type="video/mp4" />
            </video>
          </div>

          {/* Render selected patient's details */}
            
          {renderPatientDetails()}
          
            {/* Search bar */}
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={handleSearch}
              placeholder={`Search by ${searchBy}`}
              className="search-bar"
            />
            
            <div className="search-filter">
              <label htmlFor="searchBy">Search by:</label>
              <select id="searchBy" value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
                <option value="aadhar">Aadhar</option>
                <option value="name">Name</option>
                <option value="email">Email</option>
              </select>
            </div>
            Your Patients

            {/* Display search results */}
            <div className="search-results">
              {filteredPatients.map((patient, index) => (
                <div key={index} className="search-results-item" onClick={() => 
                  selectPatient(patient)
                 
                }>
                  <img src={patient.url} alt={patient.name} className="result-image" />
                  <p>{patient.name}</p>
                </div>
              ))}
            </div>
            <div>
            

            {/* Action buttons */}

            </div>
            </div>

      </>
      ):(
         <button onClick={connectWallet}>Connect Wallet</button>
      )
    }
      
    </>
  );
}

export default Doctor;
