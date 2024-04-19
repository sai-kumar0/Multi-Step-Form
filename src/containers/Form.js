import React, { useState } from "react";
import Role from "../components/Role"; // Import Role component
import Intrests from "../components/Intrests"; // Import Intrests component
import Empty from "../components/Empty"; // Import Empty component
import MathLevel from "../components/MathLevel"; // Import MathLevel component
import Finish from "../components/Finish"; // Import Finish component
import Response from "../components/Response"; // Import Response component
import "../App.css"; // Import CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
function Form() {
  const [page, setPage] = useState(1); // State for current page
  const [formData, setFormData] = useState({
    role: "",
    interest: "",
    mathLevel: "",
  }); // State for form data

  // Function to handle option selection
  const handleOptionSelect = (option, type) => {
    setFormData({
      ...formData,
      [type]: option,
    });
  };

  // Function to navigate to the next page
  const handleNext = () => {
    setPage(page + 1);
  };

  // Function to navigate back to the previous page
  const handleBack = () => {
    setPage(page - 1);
  };

  return (
    <div className="container mt-4">
      {/* Progress bar */}
      <div className="load-bar d-flex align-items-center">
        <button
          className="btn"
          onClick={handleBack}
          disabled={page === 1} // Disable back button on first page
          style={{
            border: "none",
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        {/* Progress bar with dynamic width */}
        <div className="progressBar ms-3">
          <div
            className="progress-bar"
            style={{
              width:
                page === 1
                  ? "20%"
                  : page === 2
                  ? "40%"
                  : page === 3
                  ? "60%"
                  : page === 4
                  ? "80%"
                  : "100%",
            }}
          ></div>
        </div>
      </div>
      {/* Form container */}
      <div className="form-container d-flex justify-content-center mt-4">
        {/* Render different components based on the current page */}
        {page === 1 ? (
          <Role
            handleNext={handleNext}
            handleOptionSelect={(option) => handleOptionSelect(option, "role")}
            formData={formData}
          />
        ) : page === 2 ? (
          <Intrests
            handleNext={handleNext}
            handleOptionSelect={(option) =>
              handleOptionSelect(option, "interest")
            }
            formData={formData}
          />
        ) : page === 3 ? (
          <Empty handleNext={handleNext} />
        ) : page === 4 ? (
          <MathLevel
            handleNext={handleNext}
            handleOptionSelect={(option) =>
              handleOptionSelect(option, "mathLevel")
            }
            formData={formData}
          />
        ) : page === 5 ? (
          <Finish handleNext={handleNext} />
        ) : page === 6 ? (
          <Response />
        ) : (
          <h1>Hello</h1>
        )}
      </div>
    </div>
  );
}

export default Form;
