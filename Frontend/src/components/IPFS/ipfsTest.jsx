import React, { useState } from 'react';
import ipfs from '../../utils/ipfsClient'; // The IPFS client instance

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
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadToIPFS}>Upload to IPFS</button>

      {ipfsUrl && (
        <div>
          <p>File Uploaded to IPFS:</p>
          <a href={ipfsUrl} target="_blank" rel="noopener noreferrer">
            {ipfsUrl}
          </a>
          <br />
          <img src={ipfsUrl} alt="Uploaded" style={{ maxWidth: '300px', marginTop: '10px' }} />
        </div>
      )}
    </div>
  );
};

export default UploadToIPFS;
