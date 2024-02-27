import React from "react";
import SectionHeader from "../components/SectionHeader";
import { FiSend } from "react-icons/fi";

const FinalCTA = () => {
  return (
    <div className="max-w-[1440px] w-full h-full  px-5 sm:px-10 ">
      <div
        className="w-full py-16  flex flex-col  md:flex-row justify-between lg:justify-center gap-8"
        id="contact"
      >
        {/* title description */}
        <div className="w-full  flex flex-col items-start">
          <h2
            className={`text-TextColor font-boldText uppercase text-7xl lg:text-8xl xl:text-9xl leading-none z-10 text-left w-full  inline-block`}
          >
            Get in <span className="text-primaryColor">Touch</span>
          </h2>

          <p className="font-normalText text-subTextColor font-normal   capitalize text-sm lg:text-lg leading-2 text-left w-full max-w-[30rem] sm:max-w-[32rem] sm:text-base md:text-wrap ">
            Have a project in mind? Let's collaborate to create something
            exceptional! Start your project today and gain that unfair
            advantage!
          </p>
        </div>

        <div className="flex flex-row w-full items-center justify-between lg:mt-20">
          <div className="flex flex-col items-center w-full">
            <form action="" className="w-full">
              <div className="w-full flex flex-col sm:flex-row items-start gap-4">
                <div className="w-full">
                  <label htmlFor="Name" className="font-normalText text-base">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className=" bg-white shadow-sm border w-full max-w-[28rem] border-gray-300 text-TextColor text-md font-normalText  ring-subTextColor focus:ring-2 focus:ring-primaryColor  outline-none rounded-md block p-2 mt-2 "
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="Name" className="font-normalText text-base">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="nolan@gmail.com"
                    className=" bg-white shadow-sm border w-full max-w-[28rem] border-gray-300 text-TextColor text-md font-normalText  ring-subTextColor focus:ring-2 focus:ring-primaryColor  outline-none rounded-md block p-2 mt-2 "
                  />
                </div>
              </div>
              <div className="w-full mt-3">
                <label htmlFor="content" className="font-normalText text-base">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="content"
                  placeholder="Write Project Details"
                  id=""
                  cols="30"
                  rows="10"
                  className="bg-white shadow-sm border w-full  border-gray-300 text-TextColor text-md font-normalText  ring-subTextColor focus:ring-2 focus:ring-primaryColor  outline-none rounded-md block p-3 mt-2 "
                />
              </div>
              <button className="bg-primaryColor text-lg  text-white font-normalText px-3 py-2 mt-6 md:mt-10 font-semibold rounded-md w-fit h-fit flex gap-2.5 items-center">
                <span className="opacity-70">
                  <FiSend />{" "}
                </span>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
