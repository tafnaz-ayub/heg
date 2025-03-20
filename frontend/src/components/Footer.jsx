import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="text-xl font-medium mb-5">Hitech Eco Green</p>
          <p className="w-full md:w-1/2 text-gray-900">
            Hitech Eco Green is a disruptive innovator, pioneering processes in
            formalized General waste, e-waste & Hazardous waste management in
            India. We are licensed initiators who facilitate proper and safe
            collection, transportation, segregation and disposal of e-waste.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Our Collection Centers</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Karnataka</li>
            <li>Tamil Nadu</li>
            <li>Maharashtra</li>
            <li>Andhra Pradesh</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+(91) 95915 48863</li>
            <li>admin@hitechecogreen.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ heg-ppd.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
