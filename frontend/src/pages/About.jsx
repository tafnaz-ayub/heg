import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_us} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            We are one stop solution to recycle all the general waste, E-waste
            And hazardous waste Of industries and society a one step forward to
            make a greener earth free from hazards.
          </p>
          <p>
            Our mission is to recycle general waste, E-waste And hazardous waste
            across india and world utilizing research and innovative
            technologies to preserve the environment and make world a better and
            greener place to live in with highest business standards, work
            ethics, quality which is harmonious with the environment
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            To be worlds's most reliable and innovative recycler of general
            waste, e-waste, Hazardous and metals and environment solution
            providers to industries and Society in handling and maintaining a
            greener place.
          </p>
        </div>
      </div>

      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Secure & Transparent</b>
          <p className=" text-gray-600">
            We provide complete transparency, tracing every step of your
            recycling process from pickup to the final destination, ensuring
            full compliance with Pollution Control Board, security, and
            environmental regulations.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Scientific Approach</b>
          <p className=" text-gray-600">
            Founded on thorough scientific assessments, we integrate social,
            environmental, and economic considerations in managing General,
            E-waste, and Hazardous waste.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Life Cycle Management</b>
          <p className=" text-gray-600">
            Our experts research the full lifecycle of products—from production
            to disposal—to optimize resource management and sustainability.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
