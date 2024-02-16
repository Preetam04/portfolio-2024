import React from "react";
import SectionHeader from "../components/SectionHeader";

const Footer = () => {
  return (
    <div className="max-w-[1440px] w-full h-full  px-5 sm:px-10 ">
      <div
        className="w-full py-16  flex flex-col justify-between lg:justify-center gap-8"
        id="testimonials"
      >
        {/* icon on the left side nex sent name and copyright*/}

        <div className="w-full h-full flex-row flex-wrap items-center ">
          <div className="flex items-start w-fit gap-2">
            <img
              src="./src/assets/Icon.svg"
              alt="icon"
              className="w-[2.5rem] sm:w-[3.4rem] lg:w-[4.4rem] "
            />{" "}
            <div className=" flex flex-col">
              <h2
                className={`text-textColorWhite font-boldText uppercase text-4xl sm:text-6xl lg:text-7xl leading-none z-10 text-left  inline-block`}
              >
                Preetam Patil
              </h2>

              <h3
                className={`text-subTextColor font-boldText uppercase text-xl lg:text-3xl leading-none z-10 text-left  inline-block`}
              >
                &copy; Portfolio 2024
              </h3>
            </div>
          </div>
          {/* right side navigation and social  */}
          <div className="">
            {/* navigation */}
            <div className=""></div>
            {/* socials */}
            <div className=""></div>
            {/* contact information */}
            <div className=""></div>
          </div>
          {/* button to scroll to top */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
