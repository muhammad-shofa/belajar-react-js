/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios"; // library untuk mengirim request HTTP ke backend
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notfound from "./pages/Notfound";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UsersDashboard from "./pages/UsersDashboard";
import ClassDashboard from "./pages/ClassDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
              <UsersDashboard />
              <ClassDashboard />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/users-dashboard" element={<UsersDashboard />} /> */}
        {/* <Route path="/class-dashboard" element={<ClassDashboard />} /> */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
