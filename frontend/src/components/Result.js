import React from "react";

function Result({ recommendation }) {
  return (
    <div className="result-box">
      <h2>Recommended Crop Plan</h2>
      <p>{recommendation}</p>
    </div>
  );
}

export default Result;
