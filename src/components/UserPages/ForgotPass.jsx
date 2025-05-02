import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function ForgotPass(){
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showCodeInput, setShowCodeInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Password reset link sent to your email.");
    setShowCodeInput(true);
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="card p-4 shadow-lg border-0 text-center p-5" style={{ maxWidth: "500px", width: "100%" }}>
        {/* Instagram Logo */}
        <h2 className="fw-bold  pb-3">CampusHub</h2>

        {/* Description */}
        <p className="text-muted">Enter your email, and we’ll send you a link to reset your password.</p>

        {/* Forgot Password Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control rounded-3 mb-3"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-primary w-100 fw-bold py-2 rounded-pill" >
            Send Login Link
          </button>
        </form>
        {/* Success Message */}
        {message && <p className="text-success mt-2">{message}</p>}

        {showCodeInput && (
          <form >
            <input type="text" className="form-control rounded-3" placeholder="Enter Code"/>
          </form>
        )}

        {/* Links for Login & Signup */}
        <div className="mt-3">
          <Link to="/login" className="text-decoration-none text-primary">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

