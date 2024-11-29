import React, { useState } from 'react';
import ipfs from '../../utils/ipfsClient'; // The IPFS client instance



import {useEffect } from 'react';

function DisplayImage() {
  const [imageUrl, setImageUrl] = useState('');

  // Replace with your actual Pinata URL
  const pinataLink =
    'https://olive-defiant-ox-42.mypinata.cloud/files/bafkreib4xcrp7w2lytod7p2tkghjlntlw6wxmvpemxmdsflnnmypytvhdq?X-Algorithm=PINATA1&X-Date=1732909243&X-Expires=5000&X-Method=GET&X-Signature=4cc8a021211598de3a1f05350c61083c05a57051f2e24120cae0d1e9cb5c6c8b';

  useEffect(() => {
    // Simulate an API fetch if needed
    setImageUrl(pinataLink);
  }, []);

  return (
    <div>
      <h2>Directly Rendered Image</h2>
      {imageUrl ? (
        <img src={imageUrl} alt="Fetched from Pinata" style={{ width: '100%', maxWidth: '400px' }} />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}





const UploadToIPFS = () => {
  const [file, setFile] = useState(null);
  const [ipfsUrl, setIpfsUrl] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadToIPFS = async () => {
    if (!file) return alert('Please select a file');

    try {
      const added = await ipfs.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setIpfsUrl(url);
      console.log('Uploaded file:', url);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    // <div>
    //   <input type="file" onChange={handleFileChange} />
    //   <button onClick={uploadToIPFS}>Upload to IPFS</button>

    //   {ipfsUrl && (
    //     <div>
    //       <p>File Uploaded to IPFS:</p>
    //       <a href={ipfsUrl} target="_blank" rel="noopener noreferrer">
    //         {ipfsUrl}
    //       </a>
    //       <br />
    //       <img src={ipfsUrl} alt="Uploaded" style={{ maxWidth: '300px', marginTop: '10px' }} />
    //     </div>
    //   )}
    // </div>

    <DisplayImage />
  );
};

export default UploadToIPFS;
