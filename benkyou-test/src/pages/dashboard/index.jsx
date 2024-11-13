/* eslint-disable no-unused-vars */
import React from "react";
// import Navbar from "../../components/navbar";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Content from "../../components/Content";

function Dashboard() {
  return (
    <div className="w-full text-lg [background:linear-gradient(240deg,#361f8e_0%,#7752FE_100%);]">
      {/* Navbar */}
      <Navbar />
      {/* Content & sidebar */}
      <div className="flex py-4">
        <Sidebar />

        <Content />
      </div>
    </div>
  );
}

export default Dashboard;
