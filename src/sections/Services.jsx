import React from "react";
import { FaDatabase, FaReact } from "react-icons/fa6";
import { MdWeb } from "react-icons/md";
import { SiWebflow } from "react-icons/si";

const Services = () => {
  return (
    <div
      className="w-full py-10 lg:py-24 flex flex-col xl:flex-row justify-between lg:justify-center gap-8"
      id="services"
    >
      {/* title */}
      <div className="w-full align-bottom self-end mb-4 lg:mb-14 xl:w-[60rem] ">
        <h1 className="text-TextColor font-boldText uppercase text-7xl leading-none z-10 text-left sm:text-8xl md:text-9xl   inline-block">
          What i Do?
        </h1>
        {/* decription */}
        <p className="font-normalText text-TextColor font-normal  opacity-60 mt-2 capitalize text-xs leading-2 text-left w-full max-w-[30rem] sm:max-w-[35rem] sm:text-base md:text-wrap">
          No one shall be subjected to arbitrary arrest, detention or exile.
          Everyone is entitled in full equality to a fair and public hearing by
          an independent and impartial tribunal, in the determination of his
          rights and obligations
        </p>
      </div>
      {/* cards div */}
      {/* <div
        className="  flex flex-row  px-2 justify-center items-center gap-4 flex-wrap  w-fit
      "
      >
        multi cards div
        <div className=" h-80 bg-red-200 rounded-md w-64 md:h-[22rem]"></div>
        <div className=" h-80 bg-red-200 rounded-md w-64 md:h-[22rem]  "></div>
        <div className=" h-80 bg-red-200 rounded-md w-64  md:h-[22rem]"></div>
        <div className=" h-80 bg-red-200 rounded-md w-64  md:h-[22rem]"></div>
      </div> */}

      <div className="grid grid-flow-cols grid-rows-4 grid-cols-1  sm:grid-rows-2 sm:grid-cols-2 gap-5 justify-center  w-full lg:max-w-5xl">
        <div className=" h-96 bg-primaryColor bg-opacity-20 rounded-md min-w-64 w-full  md:h-[22rem]">
          <div className="py-6 px-8 w-full h-full flex flex-col items-start justify-between">
            {/* image icon */}
            <FaReact className="text-white bg-primaryColor p-4 w-16 h-16 rounded-full text-xl bg-opacity-70 self-start" />
            {/* text heading */}
            <div>
              <h4 className="text-TextColor font-normalText capitalize font-medium text-3xl  z-10 text-left   inline-block mb-3">
                Frontend <br />
                development
              </h4>
              {/* text-description */}
              <p className="text-subTextColor ">
                No one shall be subjected to arbitrary arrest, detention or
                exile. Everyone is entitled in full equality to a fair and
                public hearing by
              </p>
            </div>
          </div>
        </div>
        <div className=" h-96 bg-primaryColor bg-opacity-20 rounded-md min-w-64 w-full  md:h-[22rem]">
          <div className="py-6 px-8 w-full h-full flex flex-col items-start justify-between">
            {/* image icon */}
            <MdWeb className="text-white bg-primaryColor p-4 w-16 h-16 rounded-full text-xl bg-opacity-70 self-start " />
            {/* text heading */}
            <div>
              <h4 className="text-TextColor font-normalText capitalize font-medium text-3xl  z-10 text-left   inline-block mb-3">
                Web <br />
                Design
              </h4>
              {/* text-description */}
              <p className="text-subTextColor  ">
                No one shall be subjected to arbitrary arrest, detention or
                exile. Everyone is entitled in full equality to a fair and
                public hearing by
              </p>
            </div>
          </div>
        </div>
        <div className=" h-96 bg-primaryColor bg-opacity-20 rounded-md min-w-64 w-full  md:h-[22rem]">
          <div className="py-6 px-8 w-full h-full flex flex-col items-start justify-between">
            {/* image icon */}
            <SiWebflow className="text-white bg-primaryColor p-4 w-16 h-16 rounded-full text-xl bg-opacity-70 self-start text-opacity-75" />
            {/* text heading */}
            <div>
              <h4 className="text-TextColor font-normalText capitalize font-medium text-3xl  z-10 text-left   inline-block mb-3">
                WebFlow <br />
                Development
              </h4>
              {/* text-description */}
              <p className="text-subTextColor  ">
                No one shall be subjected to arbitrary arrest, detention or
                exile. Everyone is entitled in full equality to a fair and
                public hearing by
              </p>
            </div>
          </div>
        </div>
        <div className=" h-96 bg-primaryColor bg-opacity-20 rounded-md min-w-64 w-full  md:h-[22rem]">
          <div className="py-6 px-8 w-full h-full flex flex-col items-start justify-between">
            {/* image icon */}
            <FaDatabase className="text-white bg-primaryColor p-4 w-16 h-16 rounded-full text-lg bg-opacity-70 self-start text-opacity-75" />
            {/* text heading */}
            <div>
              <h4 className="text-TextColor font-normalText capitalize font-medium text-3xl  z-10 text-left   inline-block mb-3">
                Backend <br />
                Development
              </h4>
              {/* text-description */}
              <p className="text-subTextColor  ">
                No one shall be subjected to arbitrary arrest, detention or
                exile. Everyone is entitled in full equality to a fair and
                public hearing by
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
