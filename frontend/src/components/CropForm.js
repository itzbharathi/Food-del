import React, { useState } from "react";

function CropForm({ getRecommendation }) {
  const [cropType, setCropType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecommendation({ cropType });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Select Crop:</label>
      <select value={cropType} onChange={(e) => setCropType(e.target.value)} required>
        <option value="">--Choose Crop--</option>
        <option value="wheat">Wheat</option>
        <option value="rice">Rice</option>
        <option value="maize">Maize</option>
      </select>
      <button type="submit">Get Recommendation</button>
    </form>
  );
}

export default CropForm;
