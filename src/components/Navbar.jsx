import React from "react";

const Navbar = () => {
  return (
    <div className=" h-14  w-full flex flex-row  items-center bg-lightBg justify-between px-3 sm:px-10  ">
      {/* name and icon */}
      <div className="flex items-center justify-center text-TextColor font-normalText text-xl font-semibold gap-1.5 cursor-pointer">
        <img src="./src/assets/Icon.svg" alt="Icon" className="w-7" />
        <p className="">Preetam Patil</p>
      </div>
      {/* services div */}
      <div className="right-0 top-0 text-left self-start mt-4 font-normalText ">
        <ol className=" flex  flex-col font-medium opacity-60 text-TextColor font-normalText">
          <a href="#about">
            <li className=" transition-all text-lg ease-in delay-100 cursor-pointer  py-0.5">
              About
            </li>
          </a>
          <a href="/#services">
            <li className=" transition-all text-lg ease-in delay-100 cursor-pointer  py-0.5">
              Services
            </li>
          </a>
          <a href="/#work">
            <li className=" transition-all text-lg ease-in delay-100 cursor-pointer  py-0.5">
              Work
            </li>
          </a>
          <a href="/#testimonials">
            <li className=" transition-all text-lg ease-in delay-100 cursor-pointer  py-0.5">
              Testimonials
            </li>
          </a>
          <a href="/#contact">
            <li className=" transition-all text-lg ease-in delay-100 cursor-pointer  py-0.5">
              Contact
            </li>
          </a>
        </ol>
      </div>
      {/* <div className="flex flex-row w-fit sm:gap-5 md:gap-10">
        <ol className="sm:flex  flex-row items-center font-medium sm:gap-5 md:gap-10 opacity-60 text-TextColor font-normalText hidden">
          <a href="#about">
            <li className=" transition-all   md:text-lg ease-in delay-100 cursor-pointer  py-0.5 ">
              About
            </li>
          </a>
          <a href="/#services">
            <li className=" transition-all   md:text-lg ease-in delay-100 cursor-pointer  py-0.5">
              Services
            </li>
          </a>
          <a href="/#work">
            <li className=" transition-all   md:text-lg ease-in delay-100 cursor-pointer  py-0.5">
              Work
            </li>
          </a>
        </ol>
        <a href="/#contact">
          <button className="bg-primaryColor  text-white font-normalText px-3 py-2 font-semibold rounded-md w-fit h-fit">
            Let's Connect
          </button>
        </a>
      </div> */}
    </div>
  );
};

export default Navbar;
