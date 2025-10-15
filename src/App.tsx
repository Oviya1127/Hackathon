import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Dashboard";
import SignupPage from "./pages/signup";
import './index.css';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
       
        {/* You can add more routes later */}
      </Routes>
    </Router>
  );
};

export default App;
