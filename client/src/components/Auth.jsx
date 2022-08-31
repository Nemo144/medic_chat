import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import signinImage from "../assets/signup.jpg";

const Auth = () => {
  const handleChange = () => {
    console.log("");
  };
  const [isSignup, setIsSignup] = useState(true);
  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign Up" : "Sign In"}</p>

          <form onSubmit={{}}>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="auth__form-container_fields-content_input">
              <label htmlFor="username">Username</label>
              <input
                name="Username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                required
              />
            </div>

            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="PhoneNumber">Phone Number</label>
                <input
                  name="PhoneNumber"
                  type="text"
                  placeholder="PhoneNumber"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
