import React from "react";
import { BiDonateBlood } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FcBusinessContact } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcNews } from "react-icons/fc";

const HomeHeader = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid ">
          <div className="navbar-brand h1 ">
            <BiDonateBlood color="red" /> Blood Bank App
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <Link to="/homestart" className="nav-link">
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/aboutus" className="nav-link">
                <FcAbout /> About
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/news" className="nav-link">
                <FcNews /> News
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link to="/contactus" className="nav-link">
                <FcBusinessContact /> Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HomeHeader;
