import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from "./components/PrivateRouter"; // Import the ProtectedRoute component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Route */}
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account /> {/* Only accessible if logged in */}
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
