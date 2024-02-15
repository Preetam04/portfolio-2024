import React from "react";

const WorkCard = () => {
  return (
    <div className="w-full h-fit">
      {/* imag div */}
      <div className="w-full h-96 md:h-[27rem] bg-primaryColor bg-opacity-40 rounded sm:" />
      <div className="mt-5 px-1 flex  items-center justify-between">
        {/* title */}
        <h5 className="text-TextColor font-boldText capitalize font-medium text-3xl  z-10 text-left   inline-block ">
          Project 1
        </h5>
        {/* tags */}
        <div className=" flex flex-row gap-2">
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
  );
};

export default WorkCard;
