import React, { useState } from "react";
import "../styles/Empty.css"; // Import CSS file for styling

// Import image files
import Arithmetic from "../assets/Images/01.jpg";
import Algebra from "../assets/Images/02.jpg";
import Intermediate from "../assets/Images/03.jpg";
import Calculus from "../assets/Images/04.jpg";

function MathLevel({ handleNext, formData, handleOptionSelect }) {
  // State to track the index of the active item
  const [activeItem, setActiveItem] = useState(null);

  // Function to handle the click event of an item
  const handleClick = (index) => {
    // Toggle activeItem between the clicked index and null
    setActiveItem(index === activeItem ? null : index);
  };

  // List of all math level options with their values, labels, and images
  const mathOptions = [
    {
      value: "Arithmetic",
      label: "Introductory",
      image: Arithmetic,
    },
    {
      value: "Basic Algebra",
      label: "Foundational",
      image: Algebra,
    },
    {
      value: "Intermediate Algebra",
      label: "Intermediate",
      image: Intermediate,
    },
    { value: "Calculus", label: "Advanced", image: Calculus },
  ];

  return (
    <div className="d-flex flex-column justify-content-center w-100 h-100">
      {/* Header section */}
      <div className="header text-center">
        <h2>What is your math comfort level ?</h2>
        <p className="fw-semi-bold">
          Choose the highest level you feel confident in - you can always adjust
          later
        </p>
        {/* List of math level options */}
        <div className="d-flex flex-lg-nowrap justify-content-center gap-3 flex-wrap py-5">
          {mathOptions.map((option, index) => (
            <div
              key={index}
              style={{ cursor: "pointer" }} // Set cursor style to pointer
              className={`border border-1 border-opacity-50 rounded-2 ${
                index === activeItem ? "active" : ""
              }`}
              onClick={() => {
                handleOptionSelect(option.value); // Call handleOptionSelect with the selected option value
                handleClick(index); // Call handleClick with the clicked index
              }}
            >
              <img
                src={option.image}
                alt="Loading"
                className="w-50 h-50 img-fluid"
              />
              <h5>{option.value}</h5>
              <p>{option.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Button Component with handleNext function */}
      <div className="d-flex justify-content-center py-3 mb-4">
        <button
          className="btn btn-dark px-5"
          onClick={handleNext}
          disabled={!formData.mathLevel}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default MathLevel;
