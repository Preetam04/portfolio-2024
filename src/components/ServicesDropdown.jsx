import React, { useState } from "react";
import { MdAdd, MdMaximize } from "react-icons/md";

const ServicesDropdown = ({ title }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  if (dropDownOpen) {
    console.log("clicker");
  }

  return (
    <div
      className=" rounded-md w-full lg:w-[40rem] cursor-pointer"
      onClick={() => {
        setDropDownOpen((prev) => !prev);
      }}
    >
      <h4
        className={`font-boldText capitalize font-medium text-4xl sm:text-5xl  z-10 text-left w-full   border- border-TextColor pb-3 flex justify-between items-center ${
          dropDownOpen ? "text-primaryColor translate-x-2" : "text-TextColor "
        }`}
      >
        {title}
        <span>
          {/* {dropDownOpen ? (
            <MdMaximize className="font-normal text-3xl -translate-x-6 text-TextColor" />
          ) : (
            )} */}
          <MdAdd className="font-normal text-3xl " />
        </span>
      </h4>
      <hr className="bg-TextColor  h-[2px] w-full" />
      <p
        className={` ${
          dropDownOpen ? "flex" : "hidden"
        } font-normalText text-TextColor font-normal  opacity-60 mt-2 capitalize text-xs leading-2 text-left w-full  sm:max-w-[35rem] sm:text-base md:text-wrap pb-`}
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
