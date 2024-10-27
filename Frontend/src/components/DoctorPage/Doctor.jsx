import "./Doctor.css";
import { useState, useEffect } from "react";
import { getAccounts, getMedicalRecord, updateRecordByDoctor } from "../../utils/web3"; // Added updateRecordByDoctor
import usePatients from "../../hooks/patient.zustand"; // Zustand hook
import vid from "../../assets/d.mp4";
import logo from "../../assets/medblock-high-resolution-logo (1).png";
import TypeWriterEffect from "react-typewriter-effect";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import Footer from "../Footer/Footer";

function Doctor() {
  const [account, setAccount] = useState(null);
  const [patient, setPatient] = useState(null); // State for selected patient
  const [allPatients, setAllPatients] = useState([]); // State for all fetched patients
  const [searchQuery, setSearchQuery] = useState(''); // Search query state
  const [searchBy, setSearchBy] = useState('name'); // Search filter option
  const [filteredPatients, setFilteredPatients] = useState([]); // Filtered patients based on search
  const [medicalRecords, setMedicalRecords] = useState([]); // State for storing medical records
  const [newRecord, setNewRecord] = useState(''); // New record input

  const patients = usePatients((state) => state.patients); // Zustand hook at the top level
  const addPatient = usePatients((state) => state.addPatient); // Zustand action to add a patient

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

  // Function to select a patient from the search results
  const selectPatient = async (selectedPatient) => {
    setPatient(selectedPatient); // Set the selected patient
    const medicalRecords = await handleGetMedicalRecord(selectedPatient.publicAddress); // Fetch medical record via Web3
    setMedicalRecords(medicalRecords); // Store fetched medical records
  };

  // Function to get a medical record using the Web3 contract
  const handleGetMedicalRecord = async (publicAddress) => {
    try {
      if (!publicAddress) {
        console.log("No public address provided");
        return;
      }
      const medicalRecord = await getMedicalRecord(publicAddress,account);
      console.log("Medical Record:", medicalRecord);
      return medicalRecord; // Return the fetched medical record
    } catch (e) {
      console.error("Error fetching medical record:", e);
      console.log("DOCTOR NOT CONNECTED");
      return [];
    }
  };

  // Function to update a patient's medical record
  const handleUpdateMedicalRecord = async () => {
    try {
      if (!patient || !newRecord) {
        console.error("No patient selected or record entered.");
        return;
      }

      const updatedRecord = await updateRecordByDoctor(patient.publicAddress, newRecord);
      console.log("Updated record:", updatedRecord);


      // Optionally, update the state to reflect the new record in the UI
      setMedicalRecords([...medicalRecords, newRecord]);
      setNewRecord(''); // Clear the input after updating
    } catch (error) {
      console.error("Error updating medical record:", error);
    }
  };

  // Render the selected patient's details and medical records
  const renderPatientDetails = () => {
    if (!patient) return null;
    return (
      <div className="patient-details">
        <img src={patient.url} alt="Patient" className="patient-image" />
        <h3>{patient.name}</h3>
      
        
        {/* <p>Public Address: {patient.publicAddress}</p> */}

        {/* Render medical records */}
        <div className="medical-records">
          <h4>Medical Records:</h4>
          {medicalRecords.length > 0 ? (
            medicalRecords.map((record, index) => (
              <p key={index}>
                <strong>Record {index + 1}:</strong> {record}
              </p>
            ))
          ) : (
            <p>No medical records found Or Please Connect Verified Doctor wallet</p>
          )}

          <div>
            <input
              type="text"
              value={newRecord}
              onChange={(e) => setNewRecord(e.target.value)}
              placeholder="Update record"
              className="update-Record"
            />

            <button onClick={handleUpdateMedicalRecord}>Update Record</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="app-container">
        <video className="video" autoPlay loop muted id="video">
          <source src={vid} type="video/mp4" />
        </video>
        
      </div>

     

      

     <div className="login-container">
     
      

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

      {/* Display search results */}
      <div className="search-results">
        {filteredPatients.map((patient, index) => (
          <div key={index} className="search-results-item" onClick={() => selectPatient(patient)}>
            <img src={patient.url} alt={patient.name} className="result-image" />
            <p>{patient.name}</p>
          </div>
        ))}
      </div>
<div>
      {/* Render selected patient's details */}
      {renderPatientDetails()}

      {/* Action buttons */}
      <button onClick={connectWallet}>Connect Wallet</button>
      </div>
      </div>
     
      
    </>
  );
}

export default Doctor;
