import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Heavenhunter" element={<LandingPage />} />
        <Route path="/Heavenhunter/search" element={<Search />} />
        <Route path="/Heavenhunter/home" element={<Home />} />
        <Route path="/Heavenhunter/signup" element={<Signup />} />
        <Route path="/Heavenhunter/login" element={<Login />} />
        <Route path="/Heavenhunter/privacy" element={<PrivacyPolicy />} />
        <Route
          path="/Heavenhunter/terms-of-service"
          element={<TermsOfService />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
