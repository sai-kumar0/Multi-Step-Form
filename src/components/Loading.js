import React from "react";

function Loading() {
  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center gap-5 text-center">
      {/* Loader  */}
      <div
        style={{
          width: "70px",
          height: "70px",
          border: "15px solid #FFFF00",
          borderRadius: "50%",
        }}
      ></div>
      {/* Text */}
      <h3>
        Finding learning path recommendations for you based on your responses
      </h3>
    </div>
  );
}

export default Loading;
