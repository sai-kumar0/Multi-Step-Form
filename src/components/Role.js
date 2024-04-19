import React, { useState } from "react";
import "../styles/Role.css"; // Import CSS file
import student from "../assets/icons/student_3750011.png"; // Import images
import professional from "../assets/icons/businessman_13798997.png";
import parent from "../assets/icons/dad_3048150.png";
import learner from "../assets/icons/learning_4637873.png";
import teacher from "../assets/icons/teacher_11985539.png";
import other from "../assets/icons/man_4086679.png";

function Role({ handleNext, formData, handleOptionSelect }) {
  const [activeItem, setActiveItem] = useState(null); // State for active item

  // Function to handle click on an option
  const handleClick = (index) => {
    setActiveItem(index === activeItem ? null : index); // Toggle active item
  };

  // Array of role options
  const roleOptions = [
    {
      value: "student",
      label: "Student or soon to be enrolled",
      icon: student,
    },
    {
      value: "professional",
      label: "Professional pursuing a career",
      icon: professional,
    },
    { value: "parent", label: "Parent of a school-age child", icon: parent },
    { value: "lifelong_learner", label: "Lifelong learner", icon: learner },
    { value: "teacher", label: "Teacher", icon: teacher },
    { value: "other", label: "Other", icon: other },
  ];

  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="header text-center">
        <h2>Which describes you best ?</h2>
        <p className="d-flex justify-content-center">
          This will help us personalize your experience.
        </p>
        <ul className="mt-4 mx-0 px-0 list-unstyled">
          {roleOptions.map((option, index) => (
            <li
              key={option.value}
              style={{ cursor: "pointer" }} // Set cursor to pointer
              className={`my-2 p-3 d-flex align-items-center border border-1 border-opacity-50 rounded-1 cursor-pointer ${
                index === activeItem ? "active" : "" // Add active class if item is active
              }`}
              onClick={() => {
                handleOptionSelect(option.value); // Handle option selection
                handleClick(index); // Handle click event
              }}
            >
              <img src={option.icon} className="me-4" alt="icon" />
              {option.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="d-flex justify-content-center mt-1 mb-4">
        <button
          className="btn btn-dark px-5"
          onClick={handleNext}
          disabled={!formData.role} // Disable button if role is not selected
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Role;
