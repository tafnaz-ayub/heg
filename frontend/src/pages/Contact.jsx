import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_heg}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Contact</p>
          <p className=" text-gray-500">
            Plot No 104A, Sompura Industrial Area 1st Stage, Nelamangala Taluk,
            Bangalore - 562111 Karnataka
          </p>
          <p className=" text-gray-500">
            Tel: +(91) 95915 48863 <br />
            admin@hitechecogreen.com
          </p>
          <p className=" text-gray-500">Everyday 9:00-17:00</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
