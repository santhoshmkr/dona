import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../config/Appwrite";

// This component will protect routes that require authentication
const PrivateRouter = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const checkAuth = async () => {
      try {
        await account.get(); // Try to get user info
        setIsAuthenticated(true); // If successful, set authenticated to true
      } catch (err) {
        setIsAuthenticated(false); // If there's an error, set authenticated to false
        navigate("/login"); // Redirect to login if not authenticated
      }
    };
    checkAuth();
  }, [navigate]);

  if (!isAuthenticated) {
    return null; // Optionally, you can return a loading state until authentication check completes
  }

  return <>{children}</>; // Return the protected route component if authenticated
};

export default PrivateRouter;
