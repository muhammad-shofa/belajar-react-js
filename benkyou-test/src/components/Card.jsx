/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Card({ textTitle, textValue, imgValue }) {
  return (
    <div className="card max-w-[350px] w-full bg-gray-100 rounded-md p-4">
      <img src="bd-materials.png" alt="" />
      <h2 className="font-bold">{textTitle ? textTitle : "#Create Title"}</h2>
      <p>{textValue ? textValue : "#Masukkan text"}</p>
    </div>
  );
}

export default Card;
