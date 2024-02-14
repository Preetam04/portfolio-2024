import React from "react";

const Works = () => {
  return (
    <div
      className="w-full py-10 lg:py-24 flex flex-col justify-between lg:justify-center gap-8"
      id="work"
    >
      <div className=" flex flex-col w-full items-center">
        {/* heading */}
        <h2 className="text-TextColor font-boldText uppercase text-7xl leading-none z-10 text-center sm:text-8xl md:text-9xl   inline-block ">
          My Work and Projects
        </h2>
        {/* small description */}
        <p className="font-normalText text-TextColor font-normal  opacity-60 mt-4 capitalize text-xs leading-2 text-center w-full max-w-[30rem] sm:max-w-[35rem] sm:text-base md:text-wrap">
          No one shall be subjected to arbitrary arrest, detention or exile.
          Everyone is entitled in full equality to a fair and public hearing
        </p>
      </div>
      {/* card holder container */}
      <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-6 mt-4">
        {/* card */}
        <div className="w-full h-fit border border-gray-300 p-5 rounded-md ">
          {/* imag div */}
          <div className="w-full h-96 md:h-[27rem] bg-primaryColor bg-opacity-40 rounded sm:" />
          <div className="mt-5 px-1">
            {/* title */}
            <h5 className="text-TextColor font-boldText capitalize font-medium text-5xl  z-10 text-left   inline-block ">
              Project 1
            </h5>
            {/* tags */}
            <div className="mt-4 flex flex-row gap-2">
              {/* tag */}
              <span className="font-normalText text-primaryColor border border-primaryColor px-2 py-1 rounded-md text-xs">
                Development
              </span>
              <span className="font-normalText text-primaryColor border border-primaryColor px-2 py-1 rounded-md text-xs">
                Design
              </span>
            </div>
          </div>
          {/* <div /> */}
        </div>
        <div className="w-full h-fit">
          {/* imag div */}
          <div className="w-full h-96 md:h-[27rem] bg-primaryColor bg-opacity-40 rounded sm:" />
          <div className="mt-5 px-1">
            {/* title */}
            <h5 className="text-TextColor font-boldText capitalize font-medium text-5xl  z-10 text-left   inline-block ">
              Project 1
            </h5>
            {/* tags */}
            <div className="mt-4 flex flex-row gap-2">
              {/* tag */}
              <span className="font-normalText text-primaryColor border border-primaryColor px-2 py-1 rounded-md text-xs">
                Development
              </span>
              <span className="font-normalText text-primaryColor border border-primaryColor px-2 py-1 rounded-md text-xs">
                Design
              </span>
            </div>
          </div>
          {/* <div /> */}
        </div>
        <div className="w-full h-fit">
          {/* imag div */}
          <div className="w-full h-96 md:h-[27rem] bg-primaryColor bg-opacity-40 rounded sm:" />
          <div className="mt-5 px-1">
            {/* title */}
            <h5 className="text-TextColor font-boldText capitalize font-medium text-5xl  z-10 text-left   inline-block ">
              Project 1
            </h5>
            {/* tags */}
            <div className="mt-4 flex flex-row gap-2">
              {/* tag */}
              <span className="font-normalText text-primaryColor border border-primaryColor px-2 py-1 rounded-md text-xs">
                Development
              </span>
              <span className="font-normalText text-primaryColor border border-primaryColor px-2 py-1 rounded-md text-xs">
                Design
              </span>
            </div>
          </div>
          {/* <div /> */}
        </div>
        <div className="w-full h-fit">
          {/* imag div */}
          <div className="w-full h-96 md:h-[27rem] bg-primaryColor bg-opacity-40 rounded sm:" />
          <div className="mt-5 px-1">
            {/* title */}
            <h5 className="text-TextColor font-boldText capitalize font-medium text-5xl  z-10 text-left   inline-block ">
              Project 1
            </h5>
            {/* tags */}
            <div className="mt-4 flex flex-row gap-2">
              {/* tag */}
              <span className="font-normalText text-primaryColor border border-primaryColor px-2 py-1 rounded-md text-xs">
                Development
              </span>
              <span className="font-normalText text-primaryColor border border-primaryColor px-2 py-1 rounded-md text-xs">
                Design
              </span>
            </div>
          </div>
          {/* <div /> */}
        </div>
      </div>
    </div>
  );
};

export default Works;
