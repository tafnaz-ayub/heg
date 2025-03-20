import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.pay_icon} className="w-12 m-auto mb-5" alt="" />
        <p className=" font-semibold">Secure Payments</p>
        <p className=" text-gray-400">Safe transactions for every download</p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className=" font-semibold">Instant PDF Access</p>
        <p className=" text-gray-400">Get your PDF instantly upon payment</p>
      </div>
      <div>
        <img src={assets.pdf_icon} className="w-12 m-auto mb-5" alt="" />
        <p className=" font-semibold">Unlimited Downloads</p>
        <p className=" text-gray-400">Access purchased PDFs anytime</p>
      </div>
    </div>
  );
};

export default OurPolicy;
