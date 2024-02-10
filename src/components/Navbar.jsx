import React from "react";

const Navbar = () => {
  return (
    <div className=" h-14  w-full flex flex-row items-center justify-between px-5 sm:px-10 z-20">
      {/* name and icon */}
      <div className="flex items-center text-TextColor font-normalText text-base font-semibold gap-1 cursor-pointer">
        <img src="src\assets\Icon.svg" alt="Icon" className="w-6" />
        <p className="">Preetam Patil</p>
      </div>
      {/* services div */}
      <div className="right-0 top-0 text-left mt-[6.2rem] font-normalText ">
        <ol className="text-sm flex  flex-col font-medium opacity-60 text-TextColor">
          <a href="#about">
            <li className=" transition-all ease-in delay-100 cursor-pointer hover:text-primaryColor hover:font-semibold hover:translate-x-2 py-0.5">
              About
            </li>
          </a>
          <li className=" transition-all ease-in delay-100 cursor-pointer hover:text-primaryColor hover:font-semibold hover:translate-x-2 py-0.5">
            Services
          </li>
          <li className=" transition-all ease-in delay-100 cursor-pointer hover:text-primaryColor hover:font-semibold hover:translate-x-2 py-0.5">
            Work
          </li>
          <li className=" transition-all ease-in delay-100 cursor-pointer hover:text-primaryColor hover:font-semibold hover:translate-x-2 py-0.5">
            Testimonials
          </li>
          <li className=" transition-all ease-in delay-100 cursor-pointer hover:text-primaryColor hover:font-semibold hover:translate-x-2 py-0.5">
            Contact
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
