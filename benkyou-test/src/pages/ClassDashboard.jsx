/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Navbar from "../components/navbar";
// import Card from "../components/Card";
import Table from "../components/Table";

function Class() {
  return (
    <div className="w-full text-lg [background:linear-gradient(240deg,#361f8e_0%,#7752FE_100%);]">
      {/* Navbar */}
      <Navbar />
      {/* Content & sidebar */}
      <div className="flex py-4">
        <Sidebar />
        <Content titlePage="Class" tableData={<Table />}></Content>
      </div>
    </div>
  );
}

export default Class;