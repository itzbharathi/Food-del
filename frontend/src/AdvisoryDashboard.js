import React, { useState } from "react";
import CropForm from "./components/CropForm";
import Result from "./components/Result";
import Login from "./components/Login";
import "./components/styles.css";


function AdvisoryDashboard() {
  const [cropRecommendation, setCropRecommendation] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  const getRecommendation = (data) => {
    const recommendations = {
      wheat: "Best season: Winter. Requires moderate water.",
      rice: "Best season: Monsoon. Requires high water levels.",
      maize: "Best season: Summer. Requires well-drained soil.",
    };
    setCropRecommendation(recommendations[data.cropType] || "No recommendation found.");
  };

  return (
    <div className="container">
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <div className="header">
            <h1>🌱 Crop Rotation Advisory System</h1>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <CropForm getRecommendation={getRecommendation} />
          {cropRecommendation && <Result recommendation={cropRecommendation} />}
        </>
      )}
    </div>
  );
}

export default AdvisoryDashboard;
