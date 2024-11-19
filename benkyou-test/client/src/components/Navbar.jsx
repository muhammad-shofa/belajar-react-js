/* eslint-disable no-unused-vars */
import React from "react";


function Navbar() {
  return (
    <nav className="flex px-3 w-full h-[60px] rounded-b-xl items-center justify-between [background:linear-gradient(240deg,#361f8e_0%,#7752FE_100%);]">
      <h1 className="text-bold text-white">Benkyou</h1>
      <div className="flex">
        <button className="bg-red-600 px-2 py-1 text-white rounded-md">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
