import React from "react";
import WorkCard from "../components/WorkCard";
import SectionHeader from "../components/SectionHeader";

const Works = () => {
  return (
    <div className="max-w-[1440px] w-full h-full  px-5 sm:px-10 ">
      <div
        className="w-full py-16  flex flex-col justify-between lg:justify-center gap-8"
        id="work"
      >
        <div className=" flex flex-col w-full items-center">
          {/* heading */}

          <SectionHeader align={"center"} content={"My Work & Projects"} />
          {/* small description */}
          <p className="font-normalText text-textColorWhite font-normal  opacity-60 mt-4 capitalize text-sm leading-2 text-center w-full max-w-[30rem] sm:max-w-[35rem] sm:text-base md:text-wrap">
            No one shall be subjected to arbitrary arrest, detention or exile.
            Everyone is entitled in full equality to a fair and public hearing
          </p>
        </div>
        {/* card holder container */}
        <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-6 mt-4">
          {/* card */}

          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>
      </div>
    </div>
  );
};

export default Works;
