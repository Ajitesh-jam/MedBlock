// import React, { useEffect, useState } from "react";
// import usePatients from "../../hooks/patient.zustand"; // Zustand store
// import { useNavigate } from "react-router-dom";
// import "./PatientPage.css"; // CSS for the page

// import { getMedicalRecord } from "../../utils/web3";

// import heart from "../../assets/heart.png";
// import brain from "../../assets/brain.png";
// import lungs from "../../assets/lungs.png";

// const PatientPage = () => {
//   // const  patient  = usePatients((state) => ({
//   //   patient: state.patient,
//   // }));
//   const patient = usePatients((state) => state.newPatient);

//   const [medicalRecords,setRecords]=useState();



//   const navigate = useNavigate();

//   //Redirect if no patient is logged in
//   useEffect(() => {
   
//     if (!patient) {
//       navigate("/");
//     }
//     getMedicalRecords();
//   }, [patient, navigate]);

//   async function getMedicalRecords(){
//     // Call the getMedicalRecord function from the web3 utility
//     const record = await getMedicalRecord(patient.publicAddress,patient.publicAddress);
//     setRecords(record);
//     console.log("Records:",medicalRecords);
//   }

//   const renderPatientDetails = () => {

//     console.log("Patient renderer: ",patient);
//     if (!patient) return null;
//     return (
//       <div className="patient-details">
//         <img src={patient.url} alt="Patient" className="patient-image" />
//         <h3>{patient.name}</h3>
//         <p>Aadhar: {patient.aadhar}</p>
//         <p>Email: {patient.email}</p>
//         <p>Public Address: {patient.publicAddress}</p>

//         {/* Render medical records */}
//         <div className="medical-records">
//           <h4>Medical Records:</h4>
//           {medicalRecords.length > 0 ? (
//             medicalRecords.map((record, index) => (
//               <p key={index}>
//                 <strong>Record {index + 1}:</strong> {record}
//               </p>
//             ))
//           ) : (
//             <p>No medical records found</p>
//           )}
          
//         </div>
//       </div>
//     );
//   }
   

//   return (
//     <div className="patient-page-container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         {patient?.url && (
//           <img src={patient.url} alt="Patient" className="patient-image" />
//         )}
//         <h3>{patient?.name}</h3>
//         <p>Email: {patient?.email}</p>
//         <p>Contact: {patient?.contact}</p>

//         <p>Gender: {patient?.gender}</p>
//         <p>Aadhar: {patient?.aadhar}</p>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         <h2>Welcome, {patient?.name}!</h2>

//         {/* Medical Records Section */}
//         <div className="medical-records">
//           <h3>Your Medical Records</h3>
//           <div className="records-content">
//             {/* Add real medical records dynamically if available */}
//             {renderPatientDetails}
//           </div>
//         </div>

//         {/* Health Quotes Section */}
//         <div className="health-tips">
//           <h3>Health Tips</h3>
//           <p>"Take care of your body. It's the only place you have to live." - Jim Rohn</p>
//           <p>"A healthy outside starts from the inside." - Robert Urich</p>
//         </div>

//         {/* Body Organs Animations */}
//         <div className="body-organs">
//           <h3>Stay Aware of Your Body</h3>
//           <div className="icons-container">
//             {/* Replace these with animated SVGs or icons for better effect */}
//             <img src={heart} alt="Heart" className="organ-icon" />
//             <img src={brain} alt="Brain" className="organ-icon" />
//             <img src={lungs} alt="Lungs" className="organ-icon" />
//             {/* You can add more organ images or icons */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PatientPage;
import React, { useEffect, useState } from "react";
import usePatients from "../../hooks/patient.zustand"; // Zustand store
import { useNavigate } from "react-router-dom";
import "./PatientPage.css"; // CSS for the page

import { getMedicalRecord } from "../../utils/web3";
import vid from "../../assets/d.mp4"
import heart from "../../assets/heart.png";
import brain from "../../assets/brain.png";
import lungs from "../../assets/lungs.png";
import Login from "../Login/login"
import PatientSignUp from "../SignUp/patientSignUp";
import Navbar from "../Navbar/Navbar";



const PatientPage = () => {
  const patient = usePatients((state) => state.newPatient);
  const [medicalRecords, setRecords] = useState([]);
  const navigate = useNavigate();

  // Redirect if no patient is logged in
  useEffect(() => {
    if (!patient) {
     navigate("/");
      return;
    }
    getMedicalRecords();
  }, [patient, navigate]);

  async function getMedicalRecords() {
    // Call the getMedicalRecord function from the web3 utility
    const record = await getMedicalRecord(patient.publicAddress, patient.publicAddress);
    setRecords(record || []); // Set an empty array if record is undefined
    console.log("Records:", record);
  }

  const renderPatientDetails = () => {
    if (!patient) return null;
    return (
      <div className="patient-details">
        <img src={patient.url} alt="Patient" className="patient-image" />
        <h3>{patient.name}</h3>
        <p>Aadhar: {patient.aadhar}</p>
        <p>Email: {patient.email}</p>
 

        {/* Render medical records */}
        <div className="medical-records">
          <h4>Medical Records:</h4>
          {medicalRecords && medicalRecords.length > 0 ? (
            medicalRecords.map((record, index) => (
              <p key={index}>
                <strong>Record {index + 1}:</strong> {record}
              </p>
            ))
          ) : (
            <p>No medical records found</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
    <div>
    <Navbar/>
    </div>


        <video className="video" autoPlay loop muted id="video">
          <source src={vid} type="video/mp4" />
        </video>
        

    <div className="patient-page-container">
      {/* Sidebar */}
      <div className="sidebar">
        {patient?.url && (
          <img src={patient.url} alt="Patient" className="patient-image" />
        )}
        <h3>{patient?.name}</h3>
        <p>Email: {patient?.email}</p>
        <p>Contact: {patient?.contact}</p>
        <p>Gender: {patient?.gender}</p>
        <p>Aadhar: {patient?.aadhar}</p>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Welcome, {patient?.name}!</h2>

        {/* Medical Records Section */}
        <div className="medical-records">
          <h3>Your Medical Records</h3>
          <div className="records-content">
            {renderPatientDetails()}
          </div>
        </div>

        {/* Health Quotes Section */}
        <div className="health-tips">
          <h3>Health Tips</h3>
          <p>"Take care of your body. It's the only place you have to live." - Jim Rohn</p>
          <p>"A healthy outside starts from the inside." - Robert Urich</p>
        </div>

        {/* Body Organs Animations */}
        <div className="body-organs">
          <h3>Stay Aware of Your Body</h3>
          <div className="icons-container">
            <img src={heart} alt="Heart" className="organ-icon" />
            <img src={brain} alt="Brain" className="organ-icon" />
            <img src={lungs} alt="Lungs" className="organ-icon" />
          </div>
        </div>
      </div>
    </div>
    {/* <PatientSignUp/> */}
    
    </>
  );
};

export default PatientPage;
