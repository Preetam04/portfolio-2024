import React from "react";
import { FiArrowDown } from "react-icons/fi";

const About = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-full h-[100vh] relative "
      id="about"
    >
      {/* xl breakpoint layout */}
      <div className="flex flex-row justify-between items-center w-full h-full gap-10">
        {/* image section */}
        <div className="w-full h-full hidden xl:block ">
          <div className="w-full h-full relative">
            <img
              src="src\assets\bg-overlays\about-us-image-bg.svg"
              alt="overlay"
              className="absolute w-[36.5rem] h-fit top-16 left-10 z-0 text-accentColor"
            />
            <div className="w-[34rem] h-[30.625rem] bg-primaryColor  z-10 relative top-[7rem] left-[10rem] opacity-70"></div>
            <div className="bottom-[4.5rem] left-96 relative flex flex-col items-end z-40 w-fit">
              <h3 className="text-TextColor font-boldText uppercase text-9xl leading-none z-10 text-right">
                About Me
              </h3>
              <p className="font-normalText font-medium  opacity-60 mt-2 capitalize text-md leading-6 text-right   w-[51rem]">
                No one shall be subjected to arbitrary arrest, detention or
                exile. Everyone is entitled in full equality to a fair and
                public hearing by an independent and impartial tribunal, in the
                determination of his rights and obligations and of any criminal
                charge against him. No one shall be subjected to arbitrary
                interference with his privacy, family
              </p>
              <button className=" flex flex-row justify-between items-center bg-primaryColor text-white font-normalText mt-5 gap-3 py-2 px-3 rounded-md bg-opacity-70 font-medium">
                My services
                <FiArrowDown className="relative top-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* responsive breakpoint layout */}

        <div className="w-full h-full block xl:hidden" id="responsive">
          <div className="w-full h-full relative py-7 flex flex-col items-center">
            <h3 className="text-TextColor font-boldText uppercase text-7xl leading-none z-10 text-center sm:text-8xl">
              About Me
            </h3>
            <div className="mt-3 sm:mt-5 ">
              <img
                src="./src/assets/bg-overlays/about-us-image-bg.svg"
                alt="overlay"
                className="relative w-72  h-fit top-3  z-0 text-accentColor sm:w-96  sm:right-12 "
              />
              <div className="w-[17.3rem] h-64 bg-primaryColor bg-opacity-70 relative left-[2.5rem] bottom-[4.1rem] sm:w-[24rem] sm:bottom-24 sm:left-7 sm:h-96"></div>
            </div>
            <p className="font-normalText font-normal  opacity-60 mt-2 capitalize text-sm leading-2 text-center w-full max-w-[30rem] relative bottom-12 sm:bottom-20 sm:max-w-[36rem]">
              No one shall be subjected to arbitrary arrest, detention or exile.
              Everyone is entitled in full equality to a fair and public hearing
              by an independent and impartial tribunal, in the determination of
              his rights and obligations and of any criminal charge against him.
              No one shall be subjected to arbitrary interference with his
              privacy, family
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
