/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";
import HeaderDasboard from "./HeaderDashboard";

function Content() {
  return (
    <div className="flex-1 p-7 bg-white txet-black rounded-lg mx-4">
      <h1 className="text-2xl font-semibold mb-3">Dashboard</h1>
      <HeaderDasboard />
      <div className="all-card flex gap-5 my-3 flex-wrap">
        <Card textTitle={"Materials"} textValue={"230"} />
      </div>
    </div>
  );
}

export default Content;
