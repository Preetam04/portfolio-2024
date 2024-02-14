import React from "react";

const Navbar = () => {
  return (
    <div className=" h-14  w-full flex flex-row items-center justify-between px-3 sm:px-10 z-20 ">
      {/* name and icon */}
      <div className="flex items-center justify-center text-TextColor font-normalText text-lg font-semibold gap-1.5 cursor-pointer">
        <img src="./src/assets/Icon.svg" alt="Icon" className="w-7" />
        <p className="mt-1">Preetam Patil</p>
      </div>
      {/* services div */}
      <div className="right-0 top-0 text-left self-start mt-4 font-normalText ">
        <ol className=" flex  flex-col font-medium opacity-60 text-TextColor">
          <a href="#about">
            <li className=" transition-all text-lg ease-in delay-100 cursor-pointer hover:text-primaryColor hover:font-semibold hover:translate-x-2 py-0.5">
              About
            </li>
          </a>
          <a href="/#services">
            <li className=" transition-all text-lg ease-in delay-100 cursor-pointer hover:text-primaryColor hover:font-semibold hover:translate-x-2 py-0.5">
              Services
            </li>
          </a>
          <a href="/#work">
            <li className=" transition-all text-lg ease-in delay-100 cursor-pointer hover:text-primaryColor hover:font-semibold hover:translate-x-2 py-0.5">
              Work
            </li>
          </a>
          <li className=" transition-all text-lg ease-in delay-100 cursor-pointer hover:text-primaryColor hover:font-semibold hover:translate-x-2 py-0.5">
            Testimonials
          </li>
          <li className=" transition-all text-lg ease-in delay-100 cursor-pointer hover:text-primaryColor hover:font-semibold hover:translate-x-2 py-0.5">
            Contact
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
