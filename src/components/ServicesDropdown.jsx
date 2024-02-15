import React, { useState } from "react";
import { MdAdd, MdMaximize } from "react-icons/md";

const ServicesDropdown = ({ title }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  if (dropDownOpen) {
    console.log("clicker");
  }

  return (
    <div
      className={` rounded-md w-full xl:w-[40rem] cursor-pointer overflow-hidden p-4  ${
        dropDownOpen
          ? "h-[13rem] sm:h-[12.5rem] bg-lightBg"
          : "h-[3.95rem] sm:h-[5.5rem] "
      }`}
    >
      <h4
        className={`font-boldText capitalize font-medium text-3xl sm:text-5xl  z-10 text-left w-full overflow-hidden  border- border-textColorWhite  pb-2 sm:pb-3 flex justify-between items-center ${
          dropDownOpen
            ? "text-primaryColor translate-x-2"
            : "text-textColorWhite "
        }`}
        onClick={() => {
          setDropDownOpen((prev) => !prev);
        }}
      >
        {title}
        <span>
          {/* {dropDownOpen ? (
            <MdMaximize className="font-normal text-3xl -translate-x-6 text-textColorWhite" />
          ) : (
            )} */}
          <MdAdd className="font-normal text-3xl " />
        </span>
      </h4>
      <hr
        className={`${
          dropDownOpen ? "bg-primaryColor bg-opacity-70" : "bg-textColorWhite"
        }  h-[2px] w-full`}
      />
      <p
        // className={` ${
        //   dropDownOpen ? "flex" : "hidden"
        // } font-normalText text-textColorWhite font-normal  opacity-60 mt-2 capitalize text-xs leading-2 text-left w-full  sm:max-w-[35rem] sm:text-base md:text-wrap pb-`}

        className={`font-normalText text-TextColor font-medium  opacity-60 mt-2 capitalize text-sm leading-2 text-left w-full  sm:max-w-[35rem] sm:text-base md:text-wrap px-2`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni labore
        velit beatae error necessitatibus eveniet ducimus natus nobis nisi,
        quibusdam nam voluptatum tempore assumenda deserunt eligendi impedit
        iste quos!
      </p>
    </div>
  );
};

export default ServicesDropdown;
