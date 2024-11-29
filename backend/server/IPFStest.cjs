const IPFS = require('ipfs-mini');
const CryptoJS = require('crypto-js');
const fs = require('fs');

//import { create } from 'ipfs-http-client';


// Step 1: Configure IPFS client (using Infura as an example)
const ipfs = new IPFS({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
});
console.log('IPFS client created successfully!');

// Step 2: Encrypt the file
function encryptFile(filePath, secretKey) {
  const fileData = fs.readFileSync(filePath); // Read file
  const encrypted = CryptoJS.AES.encrypt(fileData.toString(), secretKey).toString(); // Encrypt file
  return encrypted;
}

// Step 3: Upload encrypted file to IPFS
async function uploadToIPFS(encryptedData) {
  try {
  const file = await ipfs.add(encryptedData);

  console.log('IPFS CID:', file.path); // This is the CID you’ll store on the blockchain
  return file.path;
  } catch (error) {
    console.error('Error uploading to IPFS:', error); 
  }
}

// Step 4: Main function to handle encryption and upload
async function main() {
  const filePath = './example.txt'; // Replace with your file path
  const secretKey = 'mySecretKey123'; // Use a strong, unique key

  console.log('Encrypting file...');
  const encryptedData = encryptFile(filePath, secretKey);
  console.log('Encrypting file data', encryptedData);

  console.log('Uploading to IPFS...');
  const cid = await uploadToIPFS(encryptedData);

  console.log('File successfully uploaded!');
  console.log('IPFS CID:', cid);
  console.log('Encryption Key:', secretKey); // Securely share this key
}

main().catch(console.error);
