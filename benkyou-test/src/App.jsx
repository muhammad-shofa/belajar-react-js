/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Dashboard from "./pages/Dashboard";
import UsersDashboard from "./pages/UsersDashboard";
import ClassDashboard from "./pages/ClassDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users-dashboard" element={<UsersDashboard />} />
        <Route path="/class-dashboard" element={<ClassDashboard />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
