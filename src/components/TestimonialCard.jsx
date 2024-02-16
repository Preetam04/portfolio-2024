import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

const TestimonialCard = () => {
  return (
    <div className="w-full h-full  max-h-96 bg-gray- border border-accentColor rounded-md  px-8 py-6 font-normalText relative">
      <FaQuoteLeft className="relative text-primaryColor text-5xl  text-opacity-40 -left-3 md:text-6xl" />
      <p className="w-full text-xl text-TextColor z-10 relative sm:mt-1">
        "No one shall be subjected to arbitrary arrest, detention or exile.
        Everyone is entitled in full equality to a fair and public hearing by an
        independent and impartial tribunal."
      </p>
      <div className="flex mt-6 flex-row items-center gap-3">
        <img
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="client-image"
          className="w-14 h-14 rounded-full cursor-zoom-in"
        />
        <div className=" self-end ">
          <h4 className="text-TextColor leading-none text-lg font-medium font-normalText">
            John Doe
          </h4>
          <span className="text-subTextColor text-sm leading-none">
            Client position
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
