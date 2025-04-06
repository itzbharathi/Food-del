import React, { useState } from "react";
import "./styles.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "farmer@example.com" && password === "password123") {
      localStorage.setItem("isAuthenticated", "true");
      onLogin();
    } else {
      setError("Invalid credentials! Use farmer@example.com / password123");
    }
  };

  return (
    <div className="login-container">
      <h2>Farmer Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
