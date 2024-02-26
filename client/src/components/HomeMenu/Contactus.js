import React from 'react';
import HomeHeader from '../shared/Layout/HomeHeader';
import "../../styles/Layout.css"; // Make sure this path is correct
import { Link } from 'react-router-dom';
import { FaInstagramSquare, FaFacebookMessenger, FaTwitterSquare } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const ContactUs = () => {
  return (
    <>
      <HomeHeader />
      <div className="container">
        {/* Image with text */}
        <div className="row g-0">
          <img className='img-container' src="https://cdn.pixabay.com/photo/2021/10/11/17/37/doctor-6701410_1280.jpg" alt="contactus img" />
          {/* Text overlay */}
          <div className='text-overlay'>
            <h1 className="homequt my-4 mx-3 mt-3" style={{ textAlign: "center", color: "red" }}>Contact Us</h1>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-8" style={{ textAlign: "left" }}>
                  <h5 style={{ color: "red" }}>
                    If you have any questions or inquiries, please feel free to contact us using the form below or visit our blood bank in person.
                  </h5>
                  <p >
                    <strong>Office:</strong> The Blood bank <br />
                    <strong>Address:</strong> NH-28 B-block Sector 21 Noida <br />
                    <strong>Contact:</strong> +91 79920 22029 <br />
                    <strong>Email:</strong> trivedigulshan9454@gmail.com
                  </p>
                </div>
                <div className="col-md-4">
                  <div style={{ textAlign: "right" }}>
                    <p style={{ color: "#49108B", fontSize: "1.5rem" }}>You can follow us on:</p>
                    <Link to="https://www.instagram.com/" style={{ color: "black", fontSize: "1.5rem", display: "block", textDecoration: "none" }}><FaInstagramSquare /> Instagram</Link>
                    <Link to="https://www.facebook.com/" style={{ color: "black", fontSize: "1.5rem", display: "block", textDecoration: "none" }}><FaFacebookMessenger /> Facebook</Link>
                    <Link to="https://www.twitter.com/" style={{ color: "black", fontSize: "1.5rem", display: "block", textDecoration: "none" }}><FaTwitterSquare /> Twitter</Link>
                    <Link to="https://github.com/Parasmani29" style={{ color: "black", fontSize: "1.5rem", display: "block", textDecoration: "none" }}><CgWebsite /> Website</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
