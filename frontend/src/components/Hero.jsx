import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side*/}
      <img className="w-full" src={assets.heg_01} alt="" />
      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2 justify-center">
            <p className="font-medium text-sm md:text-base leading-relaxed text-center">
              Future of E-Waste Recycling
            </p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed text-center">
            Recycling Solutions
          </h1>
          <div className="flex items-center gap-2 justify-center">
            <p className="font-semibold text-sm md:text-base text-center">
              Explore now!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
