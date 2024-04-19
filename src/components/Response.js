import React, { useState, useEffect } from "react";
import "../styles/Empty.css"; // Import CSS file for styling
import path from "../assets/Images/path.jpg"; // Import image file
import Loading from "./Loading"; // Import Loading component

function Response() {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Simulate a loading process with a timer
    const timer = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after 2000ms (2 seconds)
    }, 2000);

    // Cleanup function to clear the timer when component unmounts or re-renders
    return () => clearTimeout(timer);
  }, []); // Run useEffect only once on component mount

  return (
    <div
      style={{ width: "100%", height: "80vh" }} // Set the width and height of the container
      className="d-flex align-items-center"
    >
      {/* Conditional rendering based on isLoading state */}
      {isLoading ? (
        // If isLoading is true, render the Loading component
        <Loading />
      ) : (
        // If isLoading is false, render the learning paths
        <div className="d-flex flex-column justify-content-center w-100 header text-center">
          {/* Header section */}
          <h2>Learning paths based on your answers</h2>
          <p className="fw-semi-bold">
            Choose one to get started. You can switch anytime.
          </p>
          {/* List of learning paths */}
          <div className="d-flex flex-lg-nowrap justify-content-center gap-4 flex-wrap py-4 col">
            {/* Learning path 1 */}
            <div
              className="d-flex col-lg-4 col-md-6 col-10 justify-content-center align-items-center border border-1 border-opacity-50 rounded-2"
              style={{ cursor: "pointer" }}
            >
              <p>
                <span className="fw-bold">Foundational Math</span> Build your
                foundational skills in algebra, geometry, and probability.
              </p>
              <img src={path} alt="Loading" className="img-fluid w-50 h-auto" />
            </div>
            {/* Learning path 2 */}
            <div
              className="d-flex col-lg-4 col-md-6 col-10 justify-content-center align-items-center border border-1 border-opacity-50 rounded-2"
              style={{ cursor: "pointer" }}
            >
              <p>
                <span className="fw-bold">Mathematical Thinking</span> Build
                your foundational skills in algebra, geometry, and probability.
              </p>
              <img src={path} alt="Loading" className="img-fluid w-50 h-auto" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Response;
