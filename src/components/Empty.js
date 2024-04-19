import React from "react";
import "../styles/Empty.css"; // Import CSS files
import image from "../assets/Images/9350.jpg"; // Import images
import Button from "./Button"; // Button Component

function Empty({ handleNext }) {
  return (
    <div className="w-100 h-100 py-lg-5 main">
      <div className="d-flex flex-wrap justify-content-around align-items-center gap-lg-0 gap-4">
        {/* Image Section */}
        <img src={image} className="p-1 img-fluid" alt="Loading" />
        <div className="col-lg-5  col-10 content">
          {/* Content Section */}
          <h2 className="pb-3">You're in the right place</h2>

          <p className="pe-2 fw-semi-bold">
            Brilliant gets your hands-on to help improve your professional
            skills and knowledge. You'll interact with concepts and solve fun
            problems in math, science and computer science.
          </p>
        </div>
      </div>

      {/* Button Component */}
      <Button handleNext={handleNext} />
    </div>
  );
}

export default Empty;
