import React from "react";

function Button({ handleNext }) {
  return (
    // Button component for non-form pages
    <div className="d-flex justify-content-center pt-5 mb-4">
      <button className="btn btn-dark px-5" onClick={handleNext}>
        Continue
      </button>
    </div>
  );
}

export default Button;
