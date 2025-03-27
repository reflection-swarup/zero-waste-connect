import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import FarmerDashboard from "./pages/dashboards/FarmerDashboard";
import FarmerProfileForm from "./components/ProfileCompletionForm/FarmerProfileForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<FarmerDashboard />} />
        <Route path="/form" element={<FarmerProfileForm/>} />
      </Routes>
    </Router>
  );
};

export default App;  // ✅ Ensure App is exported properly
