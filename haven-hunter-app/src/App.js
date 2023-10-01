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
        <Route path="/HeavenHunter" element={<LandingPage />} />
        <Route path="/HeavenHunter/search" element={<Search />} />
        <Route path="/HeavenHunter/home" element={<Home />} />
        <Route path="/HeavenHunter/signup" element={<Signup />} />
        <Route path="/HeavenHunter/login" element={<Login />} />
        <Route path="/HeavenHunter/privacy" element={<PrivacyPolicy />} />
        <Route
          path="/HeavenHunter/terms-of-service"
          element={<TermsOfService />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
