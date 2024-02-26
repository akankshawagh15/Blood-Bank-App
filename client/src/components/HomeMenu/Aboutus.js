import React from "react";
import HomeHeader from "../shared/Layout/HomeHeader";
import "../../styles/Layout.css";

const AboutUs = () => {
  return (
    <>
      <HomeHeader />
      <div className="container us-container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/22/11/56/blood-group-2668701_1280.png"
              alt="Blood Group"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="uscontainer col-md-8 ">
            <h1 className="homequt my-4 mx-3">About Us</h1>
            <p className=" mt-5 my-4 mx-3">
              Welcome to the Blood Bank App, a revolutionary platform dedicated
              to saving lives through the power of blood donation. Our mission
              is to bridge the gap between blood donors and recipients,
              providing a seamless and efficient process for those in need.
            </p>
            <p className="my-4 mx-3">
              At Blood Bank App, we understand the critical importance of blood
              donations in emergency situations, medical treatments, and
              life-saving procedures. That's why we've created a user-friendly
              platform that connects donors with hospitals, clinics, and
              individuals in need of blood transfusions.
            </p>
            <p className="my-4 mx-3">
              Our platform offers a comprehensive solution that simplifies the
              donation process, ensuring timely access to blood resources and
              promoting a culture of altruism and compassion. Whether you're a
              donor looking to contribute to a noble cause or a recipient
              seeking vital blood supplies, Blood Bank App is here to help.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
