import React, { useState } from "react";
import "../styles/Role.css"; // Import CSS file for styling

// Import image files
import career from "../assets/icons/impact_9072508.png";
import new_topic from "../assets/icons/world_865060.png";
import math from "../assets/icons/shuffle_5343853.png";
import brain from "../assets/icons/target_3176382.png";
import other from "../assets/icons/eyes_13549592.png";

function Intrests({ handleNext, formData, handleOptionSelect }) {
  // State to track the index of the active item
  const [activeItem, setActiveItem] = useState(null);

  // Function to handle the click event of an item
  const handleClick = (index) => {
    // Toggle activeItem between the clicked index and null
    setActiveItem(index === activeItem ? null : index);
  };

  // List of all interest options with their values, labels, and icons
  const interestOptions = [
    {
      value: "career_skills",
      label: "Learning specific skills to advance my career",
      icon: career,
    },
    {
      value: "new_topics",
      label: "Exploring new topics I'm interested in",
      icon: new_topic,
    },
    {
      value: "math_foundations",
      label: "Refreshing my math foundations",
      icon: math,
    },
    {
      value: "brain_exercise",
      label: "Exercising my brain to stay sharp",
      icon: brain,
    },
    { value: "other", label: "Something else", icon: other },
  ];

  return (
    <div className="d-flex flex-column justify-content-center">
      {/* Header section */}
      <div className="header text-center">
        <h2>Which are you most interested in ?</h2>
        <p className="d-flex justify-content-center">
          Choose just one. This will help us get you started (but won't limit
          your experience).
        </p>
        {/* List of interest options */}
        <ul className="mt-4 mx-0 px-0 list-unstyled">
          {interestOptions.map((option, index) => (
            <li
              key={option.value}
              style={{ cursor: "pointer" }} // Set cursor style to pointer
              className={`my-2 p-3 d-flex align-items-center border border-1 border-opacity-50 rounded-1 ${
                index === activeItem ? "active" : "" // Apply 'active' class if index matches activeItem
              }`}
              onClick={() => {
                handleOptionSelect(option.value); // Call handleOptionSelect with the selected option value
                handleClick(index); // Call handleClick with the clicked index
              }}
            >
              <img src={option.icon} className="me-4" alt="icon" />
              {option.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Button Component with handleNext function */}
      <div className="d-flex justify-content-center mb-4">
        <button
          className="btn btn-dark px-5"
          onClick={handleNext}
          disabled={!formData.interest}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Intrests;
