/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";
import HeaderDasboard from "./HeaderDashboard";
// import { useState } from "react";

function Content({ titlePage, children, headerDashboard, tableData }) {
  // const [isOpen, setIsOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="flex-1 p-7 bg-white txet-black rounded-lg mx-4">
      <h1 className="text-2xl font-semibold mb-3">{titlePage}</h1>
      {/* <HeaderDasboard /> */}
      <div>{headerDashboard}</div>
      <div>{tableData}</div>
      <div className="all-card flex gap-5 my-3 flex-wrap">{children}</div>
    </div>
  );
}

export default Content;
