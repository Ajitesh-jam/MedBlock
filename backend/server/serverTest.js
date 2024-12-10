const axios = require('axios');

// POST request: create a new record
axios.post('http://localhost:8000/createRecord', {
  _publicAddress: "0x12345",
  _name: "John Doe",
  _DOB: "1990-01-01",
  _url: "http://example.com",
  _email: "john@example.com",
  _control: "controlCode",
  _gender: "male",
  _aadhar: "123456789017",
  _patientId: "patient123"
})
.then((response) => {
  console.log("Create Record Response:", response.data);
})
.catch((error) => {
  console.error("Error in creating record:", error);
});

//PUT request: update only a few fields (targeting the correct URL)
axios.put('http://localhost:8000/updateRecord/123456789017', {  // Use the aadhar number in the URL
  email: "ajitesh@gmail.com",   // Only updating email in this case
  url: "http://newurl.com"
})
.then((response) => {
  console.log("Update Record Response:", response.data);
})
.catch((error) => {
  console.error("Error in updating record:", error);
});

//GET request: Fetch medical record by Aadhar
axios.get('http://localhost:8000/getRecord/123456789014')
  .then((response) => {
    console.log("Get Record Response:", response.data);
  })
  .catch((error) => {
    console.error("Error in fetching record:", error);
  });
//DELETE request: Delete medical record by Aadhar
axios.delete('http://localhost:8000/deleteRecord/123456789013')
  .then((response) => {
    console.log("Delete Record Response:", response.data);
  })
  .catch((error) => {
    console.error("Error in deleting record:", error);
  });

  // GET request: Query medical records based on a specific field
axios.get('http://localhost:8000/api/queryRecords?email=ajitesh@gmail.com')
.then((response) => {
  console.log("Query Record Response:", response.data);
})
.catch((error) => {
  console.error("Error in querying record:", error);
});


axios.get('http://localhost:8000/getAllPatients').then((response)=>{
  console.log(response.data);
})





