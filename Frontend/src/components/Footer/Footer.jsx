// import React from 'react';
// import './Footer.css'; // Import the CSS file
// import logo from "../../assets/medblock-high-resolution-logo (1).png"

// const Footer = () => {
//     return (
//         <footer className="footer" id="contact">
//             <div className="footer-content">
//                 <div className="logo">
//                     <img src={logo} alt="Logo" />
//                 </div>
//                 <div className="button-column">
//                     <button>Button 1</button>
//                     <button>Button 2</button>
//                     <button>Button 3</button>
//                     <button>Button 4</button>
//                 </div>
//             </div>
//             <div className="rights-reserved">
//                 &copy; 2024 Your Company. All Rights Reserved.
//             </div>
//         </footer>
//     );
// };

// export default Footer;


import React from 'react';
import './Footer.css'; // Import the CSS file
import logo from "../../assets/medblock-high-resolution-logo (1).png"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
            <img src={logo} alt="Logo" />
            </div>
            <div className="footer-columns">
                <div className="footer-column">
                    <h4> About </h4>
                    <ul>
                        <li>Github </li>
                        <li>Developers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Socials</h4>
                    <ul>
                        <li>X</li>
                        <li>Instagram</li>
                        <li>Farcaster</li>
                        <li>Discord</li>
                    </ul>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
