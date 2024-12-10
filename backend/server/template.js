// const { initializeApp } = require("firebase/app");
// const { getFirestore, collection, addDoc ,doc ,getDoc, query,where,getDocs,updateDoc} = require("firebase/firestore");


// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCpOT2KxA0FqWUnZnNZeILITRXXeBIeipE",
//   authDomain: "medblock-9305e.firebaseapp.com",
//   projectId: "medblock-9305e",
//   storageBucket: "medblock-9305e.appspot.com",
//   messagingSenderId: "266663758075",
//   appId: "1:266663758075:web:184fb1b14f56e7eb76085e",
//   measurementId: "G-VKM81ZZVQ4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firestore
// const firestore = getFirestore(app);

// // Write data to Firestore
// const writeData = async () => {
//   try {
//     const result = await addDoc(collection(firestore, "patient"), {
//         publicAddress: "_publicAddress",
//         name:"_name",
//         DOB: "_DOB",
//         url: "_url",
//         email: "_email",
//         control: "_control",
//         gender: "_gender",
//         aadhar: "_aadhar",
//       });
//     console.log("Document written with ID: ", result.id);
//   } catch (error) {
//     console.error("Error adding document: ", error);
//   }
// };

// // 
// const getdocument=async ()=>{
//     const ref=doc(firestore,"cities","OtiCRWgPCqNetVE1wLVy");
//     const snap=await getDoc(ref);
//     console.log("Snap : ",snap.data());
// }

// const getDocsbyQuery=async()=>{
//     const collectionref=collection(firestore,"cities");
//     const q=query(collectionref,where('name','==','Khuch hai'));
//     const querySnapshot=await getDocs(q);
//     querySnapshot.forEach((doc)=>{
//         console.log(doc.id,'=>',doc.data());
//     });

// }

// const updateDock=async ()=>{
//     const docRef=doc(firestore,'cities','OtiCRWgPCqNetVE1wLVy');
//     await updateDoc(docRef,{
//         name:"Khuch nhi hai bc"
//     });
// }
// writeData();


const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc, doc, getDoc, query, where, getDocs, updateDoc } = require("firebase/firestore");

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
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

// Function to write data to Firestore
const { setDoc } = require("firebase/firestore"); // Import setDoc and doc from Firestore

const writeData = async (patientData) => {
  const { publicAddress, name, DOB, url, email, control, gender, aadhar,patientId } = patientData;

  try {
    // Use the aadhar as the document ID
    const docRef = doc(firestore, "patient", aadhar);
    
    // Use setDoc instead of addDoc to specify the ID (aadhar)
    await setDoc(docRef, {
      publicAddress,
      name,
      DOB,
      url,
      email,
      control,
      gender,
      aadhar,
      patientId

    });

    console.log("Document written with ID: ", aadhar);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

// Function to get a document by ID
const getDocument = async (documentId) => {
  try {
    const ref = doc(firestore, "cities", documentId);  // Adjust collection name based on your need
    const snap = await getDoc(ref);
    if (snap.exists()) {
      console.log("Document data: ", snap.data());
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching document: ", error);
  }
};

// Function to get documents by query
const getDocsByQuery = async () => {
  try {
    const collectionRef = collection(firestore, "cities");  // Adjust collection name as needed
    const q = query(collectionRef, where('name', '==', 'Khuch hai'));  // Modify the field and value accordingly
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  } catch (error) {
    console.error("Error querying documents: ", error);
  }
};

// Function to update a document
const updateDocById = async (documentId, newData) => {
  const { name } = newData;  // Adjust fields according to your needs
  try {
    const docRef = doc(firestore, 'cities', documentId);  // Adjust collection and ID
    await updateDoc(docRef, { name });  // Specify which fields to update
    console.log("Document updated successfully");
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};

// Example usage
writeData({
  publicAddress: "0x123456",
  name: "John Doe",
  DOB: "1990-01-01",
  url: "http://example.com",
  email: "john.doe@example.com",
  control: "controlValue",
  gender: "male",
  aadhar: "123456789013",
  patientId:1
});

// getDocument("OtiCRWgPCqNetVE1wLVy");  // Example document ID
// getDocsByQuery();  // Querying documents by a specific field
// updateDocById("OtiCRWgPCqNetVE1wLVy", { name: "Updated Name" });  // Updating a document by ID
