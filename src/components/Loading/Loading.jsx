// LoadingSpinner.jsx
import React from "react";
import "./Loading.scss";

const Loading = ({ size = "medium", color = "primary" }) => {
  return (
    <div className={`spinner-container ${size} ${color}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;