import React from "react";
import HomeHeader from "../shared/Layout/HomeHeader";
import "../../styles/Layout.css";
import { Link } from "react-router-dom";
import { FaGetPocket } from "react-icons/fa";

const HomeStart = () => {
  return (
    <>
      <div>
        <HomeHeader />

        <div className="homediv boxed-text">
          <p className="container text-center display-5 size-5">
            The Blood Bank App
          </p>
          <h2 className="homequt my-4 mx-3">
            Every drop counts, every donation saves a life. Join us in the noble
            journey of giving the gift of life through our Blood Bank App
          </h2>

          <div className="getstart-container text-center">
            <Link to="/login" className="getstart">
            <FaGetPocket />Get Started
            </Link>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8">
              <div className="homequttext">
                <h2>Hello India!</h2>
                <pre>
                  We welcome you to the Blood Bank database on our website <br />
                  If you are a donor, we appreciate you signing up online. <br />
                  If you need blood, we are happy to help you.
                  <br />
                  <br/>
                
                  <h3 className="uscontainer">Thank you for visiting</h3>
                </pre>
              </div>
            </div>
            <div className="col-md-4">
  <img 
    src="https://cdn.pixabay.com/photo/2017/05/13/07/52/hand-2308932_1280.jpg" 
    alt="loginImage" 
    style={{ width: "100%", height: "auto" }} 
  />
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HomeStart;
