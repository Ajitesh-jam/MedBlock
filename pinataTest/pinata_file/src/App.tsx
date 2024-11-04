// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import { PinataSDK } from "pinata";
// function App() {
//   const [count, setCount] = useState(0);

//   const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkMzhlNmY0Ni1hN2NmLTQzM2QtYjAyZS0wNWJhMDA0ZmMyYjMiLCJlbWFpbCI6ImFqaXRlc2guamFtQGtncGlhbi5paXRrZ3AuYWMuaW4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNDdhMzY3Yzc3MGMyYWIxN2Y4MDYiLCJzY29wZWRLZXlTZWNyZXQiOiJlMDA5ZTQ5YjgwM2JjMWIwYmEyYjQ1NjlkNzY3NTExZjY3ZDcyYWE5NmFlZjcyY2ZkNzE2ZmRkNGIxYWRkMjkwIiwiZXhwIjoxNzYyMTcyOTU0fQ.yhRKYLMxbbsboa5yVAzgk9Wb55yHgXvCCeQqlPrNW9s";

// //   async function upload() {


// //   try {
// //     const formData = new FormData();

// //     const file = new File(["hello"], "Testing.txt", { type: "text/plain" });

// //     formData.append("file", file);

// //     const request = await fetch("https://uploads.pinata.cloud/v3/files", {
// //       method: "POST",
// //       headers: {
// //         Authorization: `Bearer ${JWT}`,
// //       },
// //       body: formData,
// //     });
// //     const response = await request.json();
// //     console.log(response);
// //   } catch (error) {
// //     console.log(error);
// //   }
// //   }






// // async function url() {
// //   try {
// //     const payload = JSON.stringify({
// //       url: "https://olive-defiant-ox-42.mypinata.cloud/files/bafkreibm6jg3ux5qumhcn2b3flc3tyu6dmlb4xa7u5bf44yegnrjhc4yeq",
// //       expires: 500000,
// //       date: 1724875300,
// //       method: "GET"
// //     })

// //     const request = await fetch(
// //       `https://api.pinata.cloud/v3/files/sign`,
// //     {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         Authorization: `Bearer ${JWT}`,
// //       },
// //       body: payload
// //     });
// //     const response = await request.json();
// //     console.log(response);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }



// //   const getData = async () => {

// //     const pinata = new PinataSDK({
// //       pinataJwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkMzhlNmY0Ni1hN2NmLTQzM2QtYjAyZS0wNWJhMDA0ZmMyYjMiLCJlbWFpbCI6ImFqaXRlc2guamFtQGtncGlhbi5paXRrZ3AuYWMuaW4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNDdhMzY3Yzc3MGMyYWIxN2Y4MDYiLCJzY29wZWRLZXlTZWNyZXQiOiJlMDA5ZTQ5YjgwM2JjMWIwYmEyYjQ1NjlkNzY3NTExZjY3ZDcyYWE5NmFlZjcyY2ZkNzE2ZmRkNGIxYWRkMjkwIiwiZXhwIjoxNzYyMTcyOTU0fQ.yhRKYLMxbbsboa5yVAzgk9Wb55yHgXvCCeQqlPrNW9s",
// //       pinataGateway: "olive-defiant-ox-42.mypinata.cloud",
// //     });
    
// //     const { data, contentType } = await pinata.gateways.get(
// //       "bafkreibm6jg3ux5qumhcn2b3flc3tyu6dmlb4xa7u5bf44yegnrjhc4yeq"
// //     )

// //     console.log(data, contentType);

// //   }
  








// async function main() {
//   const pinata = new PinataSDK({
//     pinataJwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkMzhlNmY0Ni1hN2NmLTQzM2QtYjAyZS0wNWJhMDA0ZmMyYjMiLCJlbWFpbCI6ImFqaXRlc2guamFtQGtncGlhbi5paXRrZ3AuYWMuaW4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNDdhMzY3Yzc3MGMyYWIxN2Y4MDYiLCJzY29wZWRLZXlTZWNyZXQiOiJlMDA5ZTQ5YjgwM2JjMWIwYmEyYjQ1NjlkNzY3NTExZjY3ZDcyYWE5NmFlZjcyY2ZkNzE2ZmRkNGIxYWRkMjkwIiwiZXhwIjoxNzYyMTcyOTU0fQ.yhRKYLMxbbsboa5yVAzgk9Wb55yHgXvCCeQqlPrNW9s " ,
//    pinataGateway: "olive-defiant-ox-42.mypinata.cloud",
//  });
//   try {
//     const file = new File(["hello yoo"], "Testingmlfm.txt", { type: "text/plain" });
//     const upload = await pinata.upload.file(file);
//     console.log(upload);
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function retrive() {
//   const pinata = new PinataSDK({
//     pinataJwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkMzhlNmY0Ni1hN2NmLTQzM2QtYjAyZS0wNWJhMDA0ZmMyYjMiLCJlbWFpbCI6ImFqaXRlc2guamFtQGtncGlhbi5paXRrZ3AuYWMuaW4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNDdhMzY3Yzc3MGMyYWIxN2Y4MDYiLCJzY29wZWRLZXlTZWNyZXQiOiJlMDA5ZTQ5YjgwM2JjMWIwYmEyYjQ1NjlkNzY3NTExZjY3ZDcyYWE5NmFlZjcyY2ZkNzE2ZmRkNGIxYWRkMjkwIiwiZXhwIjoxNzYyMTcyOTU0fQ.yhRKYLMxbbsboa5yVAzgk9Wb55yHgXvCCeQqlPrNW9s " ,
//    pinataGateway: "olive-defiant-ox-42.mypinata.cloud",
//  });
//   try {
//     const data = await pinata.gateways.get("bafkreicb4bn6uwgc5p5h4lonr635cirio2ol6zyfkscqqlqbbbaanmxxma");
//     console.log(data)

//     const url = await pinata.gateways.createSignedURL({
//        	cid: "bafkreicb4bn6uwgc5p5h4lonr635cirio2ol6zyfkscqqlqbbbaanmxxma",
//     	expires: 1800,
//     })
//     console.log(url)

//   } catch (error) {
//     console.log(error);
//   }
// }







//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>

//       {/* <button onClick={upload}>Upload</button>
//       <button onClick={getData}>GET</button>
//       <button onClick={url}>URL</button> */}
//       <button onClick={main}>upload by gaetway</button>
//       <button onClick={retrive}>retrive by gaetway</button>
//     </>
//   )
// }

// export default App


import { useState } from 'react';

import './App.css';

import { PinataSDK } from "pinata";
// Replace this with your actual JWT token
const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkMzhlNmY0Ni1hN2NmLTQzM2QtYjAyZS0wNWJhMDA0ZmMyYjMiLCJlbWFpbCI6ImFqaXRlc2guamFtQGtncGlhbi5paXRrZ3AuYWMuaW4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNDdhMzY3Yzc3MGMyYWIxN2Y4MDYiLCJzY29wZWRLZXlTZWNyZXQiOiJlMDA5ZTQ5YjgwM2JjMWIwYmEyYjQ1NjlkNzY3NTExZjY3ZDcyYWE5NmFlZjcyY2ZkNzE2ZmRkNGIxYWRkMjkwIiwiZXhwIjoxNzYyMTcyOTU0fQ.yhRKYLMxbbsboa5yVAzgk9Wb55yHgXvCCeQqlPrNW9s";


function App() {
  const [fileData, setFileData] = useState("bafkreiejhjplunzelrflv5moyxhflgeloa7h5oogeyt4dygtvwci2uf2ty");
  const [signedUrl, setSignedUrl] = useState('');

  // Function to upload a file to Pinata private storage
  async function uploadFileToPrivateStorage() {
    try {
      const pinata = new PinataSDK({
        pinataJwt: JWT,
        pinataGateway: "olive-defiant-ox-42.mypinata.cloud",
      });
      
      const file = new File(["Hello, Yeh Test karney ke liye !"], "VideoTest.txt", { type: "text/plain" });

      const upload = await pinata.upload.file(file);
      console.log(upload);
      


    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }

  // Function to retrieve the file using a signed URL
  async function retrieveFileWithSignedURL() {
    const pinata = new PinataSDK({
      pinataJwt: JWT,
      pinataGateway: "olive-defiant-ox-42.mypinata.cloud",
    });

    try {
      
  
      const url = await pinata.gateways.createSignedURL({
           cid: "bafkreidaiqxemi2lbd3i4wvg4lphghgib5fmuwnjfaytflje242oz3vtxe",
        expires: 5,
      });
      console.log(url);
  
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>Pinata Private File Storage</h1>
      <button onClick={uploadFileToPrivateStorage}>Upload to Private Storage</button>
      <button onClick={retrieveFileWithSignedURL}>Retrieve File via Gateway</button>

      {signedUrl && (
        <div>
          <p>File URL (expires in 30 minutes):</p>
          <a href={signedUrl} target="_blank" rel="noopener noreferrer">
            Access Private File
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
