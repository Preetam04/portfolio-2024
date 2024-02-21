import React, { useRef } from "react";
import { FiX } from "react-icons/fi";
import MenuBtn from "./MenuBtn";

const Sidebar = ({ status, toggleFunc }) => {
  const menuRef = useRef();

  return (
    <>
      <MenuBtn menuRef={menuRef} toggleFunc={toggleFunc} status={status} />

      <div
        className={`h-full w-full fixed left-0 z-[60] delay-200  items-center flex ${
          status ? "translate-x-0 opacity-100 " : "-translate-x-32 opacity-0 "
        }`}
      >
        <div className=" bg-lightBg h-[99vh] w-full min-w-80 sm:min-w-96 max-w-[32%] z-60 relative z-20 my-1.5 ml-1.5   rounded-md overflow-hidden">
          {/* <FiX
          className="absolute right-10 top-10 text-4xl text-subTextColor hover:text-TextColor cursor-pointer z-40 "
          onClick={() => {
            console.log("toggle");
            toggleFunc((prev) => !prev);
          }}
        /> */}
          {/* <div className="absolute w-[30rem] h-[30rem] bg-gradient-to-tr from-primaryColor opacity-75   to-white rounded-full rotate-45 -right-10 -bottom-40 scale-[175%]" /> */}
          <ol className=" flex  flex-col font-boldText font-medium  text-TextColor h-full justify-center ml-8 sm:ml-16 gap-3 relative ">
            <a href="#home">
              <li className=" transition-all text-5xl lg:text-7xl ease-in delay-100 cursor-pointer hover:text-primaryColor hover:translate-x-2 py-0.5">
                Home
              </li>
            </a>
            <a href="#about">
              <li className=" transition-all text-5xl lg:text-7xl ease-in delay-100 cursor-pointer hover:text-primaryColor hover:translate-x-2 py-0.5">
                About
              </li>
            </a>
            <a href="/#services">
              <li className=" transition-all text-5xl lg:text-7xl ease-in delay-100 cursor-pointer hover:text-primaryColor hover:translate-x-2 py-0.5">
                Services
              </li>
            </a>
            <a href="/#work">
              <li className=" transition-all text-5xl lg:text-7xl ease-in delay-100 cursor-pointer hover:text-primaryColor hover:translate-x-2 py-0.5">
                Work
              </li>
            </a>
            <a href="/#testimonials">
              <li className=" transition-all text-5xl lg:text-7xl ease-in delay-100 cursor-pointer hover:text-primaryColor hover:translate-x-2 py-0.5">
                Testimonials
              </li>
            </a>
            <a href="/#contact">
              <li className=" transition-all text-5xl lg:text-7xl ease-in delay-100 cursor-pointer hover:text-primaryColor hover:translate-x-2 py-0.5">
                Contact
              </li>
            </a>
          </ol>
        </div>
      </div>
      <div
        className={`h-full w-full fixed left-0 z-50  delay-200   items-center flex `}
      >
        <div
          className={`bg-black w-full h-full absolute top-0 z-10 ${
            status ? "bg-opacity-60  " : "bg-opacity-0 "
          }`}
        />
      </div>
    </>
  );
};

export default Sidebar;
