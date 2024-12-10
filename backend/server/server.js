const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the CORS package
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, doc, setDoc, getDoc, query, where, getDocs, updateDoc, deleteDoc } = require("firebase/firestore");

const app = express();
const port = 8000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // To handle JSON requests

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpOT2KxA0FqWUnZnNZeILITRXXeBIeipE",
  authDomain: "medblock-9305e.firebaseapp.com",
  projectId: "medblock-9305e",
  storageBucket: "medblock-9305e.appspot.com",
  messagingSenderId: "266663758075",
  appId: "1:266663758075:web:184fb1b14f56e7eb76085e",
  measurementId: "G-VKM81ZZVQ4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

// API to create a new record using Aadhar as the document ID
app.post('/createRecord/:publicAddress', async (req, res) => {
  const { 
        _publicAddress, 
        _name,
        _DOB, 
        _url, 
        _email, 
        _control, 
        _gender, 
        _aadhar,
        _patientId 
    } = req.body;
    const publicAddress = req.params.publicAddress;
   try {
    // Use setDoc with the Aadhar number as the document ID
    await setDoc(doc(firestore, "patient", _aadhar), {
      publicAddress: publicAddress,
      name: _name,
      DOB: _DOB,
      url: _url,
      email: _email,
      control: _control,
      gender: _gender,
      aadhar: _aadhar,
      patientId: _patientId
    });
    res.status(200).send({ message: "Medical Report written with Aadhar ID: " + _aadhar });
  } catch (error) {
    res.status(500).send({ error: "Error adding Record: " + error });
  }
});

// API to get a document by Aadhar (which is now the document ID)
app.get('/getRecord/:aadhar', async (req, res) => {
  const { aadhar } = req.params;
  try {
    const docRef = doc(firestore, "patient", aadhar);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      res.status(200).send(snap.data());
    } else {
      res.status(404).send({ error: "Record not found" });
    }
  } catch (error) {
    res.status(500).send({ error: "Error fetching Record: " + error });
  }
});

app.put('/updateRecord/:aadhar', async (req, res) => {
    const { aadhar } = req.params;
    const updates = req.body; // Extract only the fields provided in the request body
  
    try {
      const docRef = doc(firestore, "patient", aadhar);
  
      // Dynamically update only the provided fields
      if (Object.keys(updates).length > 0) {
        await updateDoc(docRef, updates);
        res.status(200).send({ message: "Record updated successfully" });
      } else {
        res.status(400).send({ error: "No fields provided for update" });
      }
    } catch (error) {
      res.status(500).send({ error: "Error updating Record: " + error });
    }
  });
  

// API to delete a document by Aadhar (document ID)
app.delete('/deleteRecord/:aadhar', async (req, res) => {
  const { aadhar } = req.params;
  try {
    const docRef = doc(firestore, "patient", aadhar);
    await deleteDoc(docRef);
    res.status(200).send({ message: "Document deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Error deleting document: " + error });
  }
});

// API to dynamically query records by any field
app.get('/api/queryRecords', async (req, res) => {
  try {
    const collectionRef = collection(firestore, "patient");

    // Dynamically build the query based on the request parameters
    const queryParams = req.query;

    if (Object.keys(queryParams).length !== 1) {
      return res.status(400).send({ error: "Please provide exactly one query parameter." });
    }

    // Extract the field and value from the query
    const field = Object.keys(queryParams)[0];
    const value = queryParams[field];
    // Construct the Firestore query dynamically
    const q = query(collectionRef, where(field, '==', value));
    const querySnapshot = await getDocs(q);

    // Collect all matching documents
    const results = [];
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).send(results);
  } catch (error) {
    res.status(500).send({ error: "Error querying documents: " + error });
  }
});

app.get('/getAllPatients',async (req,res)=>{
  try{
    const collectionRef = collection(firestore, "patient");
    const querySnapshot = await getDocs(collectionRef);
    const results = [];
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
      });
      res.status(200).send(results);   
  }catch(error){
    res.status(500).send({error:"Error fetching all patients: "+error});
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
