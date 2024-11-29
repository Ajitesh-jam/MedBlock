// import { useState } from 'react';

// import './App.css';

// import { PinataSDK } from "pinata";
// // Replace this with your actual JWT token
// const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkMzhlNmY0Ni1hN2NmLTQzM2QtYjAyZS0wNWJhMDA0ZmMyYjMiLCJlbWFpbCI6ImFqaXRlc2guamFtQGtncGlhbi5paXRrZ3AuYWMuaW4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNDdhMzY3Yzc3MGMyYWIxN2Y4MDYiLCJzY29wZWRLZXlTZWNyZXQiOiJlMDA5ZTQ5YjgwM2JjMWIwYmEyYjQ1NjlkNzY3NTExZjY3ZDcyYWE5NmFlZjcyY2ZkNzE2ZmRkNGIxYWRkMjkwIiwiZXhwIjoxNzYyMTcyOTU0fQ.yhRKYLMxbbsboa5yVAzgk9Wb55yHgXvCCeQqlPrNW9s";


// function App() {
//   const [fileData, setFileData] = useState("bafkreiejhjplunzelrflv5moyxhflgeloa7h5oogeyt4dygtvwci2uf2ty");
//   const [signedUrl, setSignedUrl] = useState('');

//   // Function to upload a file to Pinata private storage
//   async function uploadFileToPrivateStorage() {
//     try {
//       const pinata = new PinataSDK({
//         pinataJwt: JWT,
//         pinataGateway: "olive-defiant-ox-42.mypinata.cloud",
//       });
      
//       const file = new File(["Hello, Yeh Test karney ke liye !"], "VideoTest.txt", { type: "text/plain" });

//       const upload = await pinata.upload.file(file);
//       console.log(upload);
      


//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   }

//   // Function to retrieve the file using a signed URL
//   async function retrieveFileWithSignedURL() {
//     const pinata = new PinataSDK({
//       pinataJwt: JWT,
//       pinataGateway: "olive-defiant-ox-42.mypinata.cloud",
//     });

//     try {
      
  
//       const url = await pinata.gateways.createSignedURL({
//            cid: "bafkreidi6t533bir4jessfdqq2us7a6i6npbuookeqww3vmd2m6bwjnm5y",
//         expires: 5,
//       });
//       console.log(url);
  
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div className="App">
//       <h1>Pinata Private File Storage</h1>
//       <button onClick={uploadFileToPrivateStorage}>Upload to Private Storage</button>
//       <button onClick={retrieveFileWithSignedURL}>Retrieve File via Gateway</button>

//       {signedUrl && (
//         <div>
//           <p>File URL (expires in 30 minutes):</p>
//           <a href={signedUrl} target="_blank" rel="noopener noreferrer">
//             Access Private File
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import { PinataSDK } from "pinata";

const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkMzhlNmY0Ni1hN2NmLTQzM2QtYjAyZS0wNWJhMDA0ZmMyYjMiLCJlbWFpbCI6ImFqaXRlc2guamFtQGtncGlhbi5paXRrZ3AuYWMuaW4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNDdhMzY3Yzc3MGMyYWIxN2Y4MDYiLCJzY29wZWRLZXlTZWNyZXQiOiJlMDA5ZTQ5YjgwM2JjMWIwYmEyYjQ1NjlkNzY3NTExZjY3ZDcyYWE5NmFlZjcyY2ZkNzE2ZmRkNGIxYWRkMjkwIiwiZXhwIjoxNzYyMTcyOTU0fQ.yhRKYLMxbbsboa5yVAzgk9Wb55yHgXvCCeQqlPrNW9s";//will be JWT of hospital
const pinata = new PinataSDK({
  pinataJwt: JWT,
  pinataGateway: "olive-defiant-ox-42.mypinata.cloud",
});

/**
 * Uploads a file to Pinata's private storage.
 * @param {File} file - The file to be uploaded.
 * @returns {Promise<string>} - The CID of the uploaded file.
 */
export async function uploadFile(file) {
  try {
    const upload = await pinata.upload.file(file);
    console.log("Uploaded file:", upload);

    return upload.cid;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}

/**
 * Retrieves a signed URL for accessing a file on Pinata's private storage.
 * @param {string} cid - The CID of the file to retrieve.
 * @returns {Promise<string>} - The signed URL for accessing the file.
 */
export async function retrieveFile(_cid) {
  console.log("Retrieving file:", _cid);
  try {
    const signedUrlResponse = await pinata.gateways.createSignedURL({
      cid:_cid,
   
    });
    console.log("Signed URL:", signedUrlResponse.url);
    return signedUrlResponse.url;
  } catch (error) {
    console.error("Error retrieving file:", error);
    throw error;
  }
}


export async function retrieveFileWithSignedURL(_cid) {
  const pinata1 = new PinataSDK({
    pinataJwt: JWT,
    pinataGateway: "olive-defiant-ox-42.mypinata.cloud",
  });

  try {
    console.log("Retrieving file:", _cid);
    const url = await pinata1.gateways.createSignedURL({
         cid: _cid.toString(),
      expires: 5000,
    });
    //console.log("URL:",url);
    return url;

  } catch (error) {
    console.log(error);
  }
}