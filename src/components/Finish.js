import React from "react";
import "../styles/Empty.css"; // Css File import
// Image imports
import image from "../assets/Images/05.jpg";
import stars from "../assets/Images/stars.jpg";
import Button from "./Button"; // Button component

function Finish({ handleNext }) {
  return (
    <div className="w-100 h-100 py-lg-5 main">
      <div className="d-flex flex-wrap justify-content-around align-items-center gap-lg-0 gap-4">
        {/* Image Section */}
        <img src={image} className="p-1 img-fluid" alt="Loading" />
        <div className="col-lg-5  col-10 content">
          {/* content Section */}
          <h2 className="pb-3">You're on the way !</h2>
          <img src={stars} alt="stars" className="img-fluid stars" />
          <p className="pe-2 fw-semi-bold">
            "Through its engaging and well - structured courses, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand, I now feel confident approaching both technical job
            interviews and real world problem solving situations."
          </p>
          <p>- Jacob S.</p>
        </div>
      </div>
      {/* Button Component */}
      <Button handleNext={handleNext} />
    </div>
  );
}

export default Finish;
