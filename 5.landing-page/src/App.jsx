/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner.jsx";

export default function App() {
  return (
    <div className="flex flex-row justify-center w-full">
      <div className="w-[100%] h-[776px] [background:linear-gradient(240deg,rgba(37,69,244,0.5)_0%,rgba(255,255,255,0)_100%)]">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
}
