// eslint-disable-next-line no-unused-vars
import React from "react";
// import imgBanner from "";

function Banner() {
  return (
    <div className="absolute w-[1161px] h-[598px] top-[92px] left-[164px]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-4xl mb-8 font-semibold text-[#184657]">
            Hello, Welcome
          </h1>
          <h2 className="text- 5xl mb-8 font-extrabold text-black">
            Find Your Dreame Job
          </h2>
          <div className="text-xl mb-10 font-normal text-black">
            Work in a place that your comfortable. <br />
            Register noew free.
          </div>
        </div>
      </div>
      <div className="w-1/2">
        {/* <img src={imgBanner} alt="img banner" className="w-[553px] h-[5]" /> */}
      </div>
    </div>
  );
}

export default Banner;
