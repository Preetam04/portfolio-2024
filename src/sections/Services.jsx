import React from "react";

const Services = () => {
  return (
    <div
      className="w-full py-10 lg:py-24 flex flex-col lg:flex-row justify-between lg:justify-center gap-8"
      id="services"
    >
      {/* title */}
      <div className="w-full align-bottom self-end mb-4 lg:mb-14 lg:w-[40rem] ">
        <h1 className="text-TextColor font-boldText uppercase text-7xl leading-none z-10 text-left sm:text-8xl md:text-9xl   inline-block">
          What i Do?
        </h1>
        {/* decription */}
        <p className="font-normalText font-normal  opacity-60 mt-2 capitalize text-xs leading-2 text-left w-full max-w-[30rem] sm:max-w-[35rem] sm:text-base md:text-wrap">
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

      <div className="grid grid-flow-cols grid-rows-4 grid-cols-1  sm:grid-rows-2 sm:grid-cols-2 gap-5 justify-center grid  w-full lg:max-w-5xl">
        <div className=" h-80 bg-red-200 rounded-md min-w-64 w-full  md:h-[22rem]"></div>
        <div className=" h-80 bg-red-200 rounded-md min-w-64 w-full  md:h-[22rem]"></div>
        <div className=" h-80 bg-red-200 rounded-md min-w-64 w-full  md:h-[22rem]"></div>
      </div>
    </div>
  );
};

export default Services;
