// import { useCallback, useEffect, useState } from "react";
// import axios from "axios";
// import { LoginProps } from "@/utils/types";
// import { logout } from "@/utils/common";
// import { useMagic } from "@/hooks/MagicProvider";
// import useWeb3 from "@/hooks/Web3";
// import Card from "@/components/ui/Card";
// import Spinner from "@/components/ui/Spinner";

// interface Patient {
//   name: string;
//   DOB: string;
//   ImageUrl: string;
//   publicAddress: string;
//   contact: string;
//   gender: string;
//   adhar: string;
// }

// const UserInfo = ({ token, setToken }: LoginProps) => {
//   const { magic } = useMagic();
//   const web3 = useWeb3();
//   const [balance, setBalance] = useState("...");
//   const [copied, setCopied] = useState("Copy");
//   const [publicAddress] = useState(localStorage.getItem("user"));
//   const [formData, setFormData] = useState<Patient>({
//     name: "",
//     DOB: "",
//     ImageUrl: "",
//     publicAddress: "",
//     contact: "",
//     gender: "",
//     adhar: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const { name, DOB, ImageUrl, contact, gender, adhar } = formData;
    
//     try {
//       const response = await axios.post("http://localhost:8000/createRecord", {
//         _publicAddress: publicAddress,
//         _name: name,
//         _DOB: DOB,
//         _url: ImageUrl,
//         _email:"not@gmail.com",
//         _control: "controlCode",
//         _gender: gender,
//         _aadhar: adhar,
//         _patientId: "patient123",
//       });
//       console.log("Create Record Response:", response.data);
//       setFormData({ name: "", DOB: "", ImageUrl: "", publicAddress: "", contact: "", gender: "", adhar: "" });
//     } catch (error) {
//       console.error("Error creating patient record:", error);
//     }
//   };

//   return (
//     <Card >
//       <div style={{ marginBottom: "20px", fontSize: "24px", color: "#9deeab" }}>Patient Sign-Up</div>
//       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Name"
//           required
//           style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <input
//           type="date"
//           name="DOB"
//           value={formData.DOB}
//           onChange={handleChange}
//           required
//           style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <input
//           type="text"
//           name="ImageUrl"
//           value={formData.ImageUrl}
//           onChange={handleChange}
//           placeholder="Image URL"
//           required
//           style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <input
//           type="tel"
//           name="contact"
//           value={formData.contact}
//           onChange={handleChange}
//           placeholder="Contact Number"
//           required
//           style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <select
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           required
//           style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
//         >
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>
//         <input
//           type="text"
//           name="adhar"
//           value={formData.adhar}
//           onChange={handleChange}
//           placeholder="Aadhar"
//           required
//           style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <button type="submit" style={{ padding: "10px", borderRadius: "5px", backgroundColor: "#4B0082", color: "white" }}>
//           Sign Up
//         </button>
//       </form>
//     </Card>
//   );
// };

// export default UserInfo;
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { LoginProps } from "@/utils/types";
import { logout } from "@/utils/common";
import { useMagic } from "@/hooks/MagicProvider";
import useWeb3 from "@/hooks/Web3";
import Card from "@/components/ui/Card";
import Spinner from "@/components/ui/Spinner";

interface Patient {
  name: string;
  DOB: string;
  ImageUrl: string;
  publicAddress: string;
  contact: string;
  gender: string;
  adhar: string;
}

const UserInfo = ({ token, setToken }: LoginProps) => {
  const { magic } = useMagic();
  const web3 = useWeb3();
  const [balance, setBalance] = useState("...");
  const [copied, setCopied] = useState("Copy");
  const [publicAddress] = useState(localStorage.getItem("user"));
  const [formData, setFormData] = useState<Patient>({
    name: "",
    DOB: "",
    ImageUrl: "",
    publicAddress: "",
    contact: "",
    gender: "",
    adhar: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, DOB, ImageUrl, contact, gender, adhar } = formData;

    try {
      // const response = await axios.post("http://localhost:8000/createRecord", {
      //   _publicAddress: publicAddress,
      //   _name: name,
      //   _DOB: DOB,
      //   _url: ImageUrl,
      //   _email: "not@gmail.com",
      //   _control: "controlCode",
      //   _gender: gender,
      //   _aadhar: adhar,
      //   _patientId: "patient123",
      // });
      // console.log("Create Record Response:", response.data);

      setFormData({ name: "", DOB: "", ImageUrl: "", publicAddress: "", contact: "", gender: "", adhar: "" });
      setSuccess(true); // Set success state to true on successful submission
    } catch (error) {
      console.error("Error creating patient record:", error);
    }
  };

  return (
    <Card >
      {success ? (
        <div style={{ textAlign: "center", color: "#4B0082" }}>
          <h2>You have successfully signed up!</h2>
          <p>Now you can go back to the home page and log in using your Aadhar number.</p>
          <div style={{ border: "1px solid black", padding: "10px" }}>
  <a href="http://localhost:5173/">Home</a>
</div>

        </div>
      ) : (
        <div>
          <div style={{ marginBottom: "20px", fontSize: "24px", color: "#9deeab" }}>Patient Sign-Up</div>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            <input
              type="date"
              name="DOB"
              value={formData.DOB}
              onChange={handleChange}
              required
              style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            <input
              type="text"
              name="ImageUrl"
              value={formData.ImageUrl}
              onChange={handleChange}
              placeholder="Image URL"
              required
              style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact Number"
              required
              style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="text"
              name="adhar"
              value={formData.adhar}
              onChange={handleChange}
              placeholder="Aadhar"
              required
              style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            <button type="submit" style={{ padding: "10px", borderRadius: "5px", backgroundColor: "#4B0082", color: "white" }}>
              Sign Up
            </button>
          </form>
        </div>
      )}
    </Card>
  );
};

export default UserInfo;
