import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../config/Appwrite";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const checkAuth = async () => {
      try {
        await account.get(); // Try to get user info
        setIsLoggedIn(true); // If successful, user is logged in
      } catch (err) {
        setIsLoggedIn(false); // If there's an error, user is not logged in
      }
    };
    checkAuth();
  }, []);

  const logout = async () => {
    try {
      await account.deleteSession("current"); // Logout user
      setIsLoggedIn(false); // Set login status to false
      navigate("/login"); // Redirect to login page
    } catch (err) {
      console.log("Logout failed:", err);
    }
  };

  return (
    <nav>
      <h1 id="nav-logo">
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          Dona :)
        </Link>
      </h1>

      <div id="nav-btn">
        {isLoggedIn ? (
          // Show Logout button if user is logged in
          <button id="nav-btn1" onClick={logout}>
            Logout
          </button>
        ) : (
          // Show Login and Signup buttons if user is not logged in
          <>
            <button id="nav-btn1">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="login"
              >
                Login
              </Link>
            </button>
            <button id="nav-btn1">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="signup"
              >
                Sign Up
              </Link>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
