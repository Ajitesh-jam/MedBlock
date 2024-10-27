import { useState } from "react";
import "./App.css";
import { Link } from "react-scroll";
import vid from "./assets/d.mp4";
import logo from "./assets/medblock-high-resolution-logo (1).png";
import Card from "./components/Card/Card";
import TypeWriterEffect from "react-typewriter-effect";
import Navbar from "./components/Navbar/Navbar";
import doc from "./assets/download (24).jpeg";
import patient from "./assets/download (25).jpeg";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"; // Added Routes and useNavigate
import Doctor from "./components/DoctorPage/Doctor"; // Correct path to Doctor component
// import Web3AuthComponent from "./Components/Web3Auth";
import Patient from "./components/PatientPage/patient"; // Import Patient component

import Login from "./components/Login/login";
import PatientPage from "./components/PatientPage/patient";

import DoctorSignUp from "./components/SignUp/DoctorSignUp";
function App() {
  const navigate = useNavigate(); // Hook to navigate to routes

  // Handle card click to navigate to respective routes
  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <>
      <Navbar/>
      <div className="app-container">
        <video className="video" autoPlay loop muted id="video">
          <source src={vid} type="video/mp4" />
        </video>
      </div>

      <div className="logo1">
                    <img src={logo} alt="Logo" />
                </div>

        {/* <div className="app-navbar">
          <Link
            activeClass="active"
            to="home1"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Doctor
          </Link>

          <Link
            activeClass="active"
            to="home1"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Patients
          </Link>

          <Link
            activeClass="active"
            to="home2"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Sign Up
          </Link>
        </div> */}
      <div className="app-container1">
        <div className="intro-text">
        <h2 className="welcome-2">
        <div className="typewriter-container">
    <TypeWriterEffect
        startDelay={2000}
        cursorColor="Green"
        repeat={true}
        typeSpeed={80}
        nextTextDelay={5000}
        multiText={["Safe", "Personalised", "Secure", "Accessible"]}
    />
</div>
        </h2>
          
        <h3 className="welcome-3">
          "Making your medical records easy to access<br></br> Totally transparent,
          all in one place."
        </h3>
        </div>
<div className="Login" id="Login">
        <h1>Login Here</h1>
        <Card
          imageSrc={doc}
          text1="Doctor"
          text2="Click to Login"
          onClick={() => handleClick("/DoctorSignUp")} // Navigates to /Doctor route
        />
        <Card
          imageSrc={patient}
          text1="Patients"
          text2="Click to Login"
          onClick={() => handleClick("/Login")} // Navigates to /Patient route
        />
      </div>
      </div>

      {/* <div style={styles.appContainer} id="home2">
        <h1>
          Sign Up<br></br> Bring all your reports<br></br> at the tip of your
          Fingers!
        </h1>

        <Card
          imageSrc={doc}
          text1="Doctor"
          text2="Sign Up"
          onClick={() => handleClick("/Doctor")} // Navigates to /Doctor
        />
        <Card
          imageSrc={patient}
          text1="Patients"
          text2="Sign Up"
          onClick={() => handleClick("/Patient")} // Navigates to /Patient
        />
      </div> */}
      
        <div id="Footer">
        <Footer />
        </div>
        
       

    </>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    
    padding: 20,
    
    width: 1920,
    gap: "50px",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    backgroundColor: "#4B0082", // Purplish blue background
    color: "white",
  },
};

function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Doctor" element= {<><Navbar></Navbar> <Doctor /></> } />
        <Route path="/Patient" element={<Patient />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Patient" element={<PatientPage />} />
        <Route path="/DoctorSignUp" element={<DoctorSignUp></DoctorSignUp>} />
      </Routes>
    </Router>
  );
}

export default MainApp;
