import React from "react";

const MenuBtn = ({ menuRef, toggleFunc, status }) => {
  return (
    <div
      ref={menuRef}
      className={`fixed bg-primaryColor bg-opacity-65 w-14 h-14 delay-300 left-7 top-8 z-[70] rounded-full  py-4 px-4  flex flex-col  items-center justify-center cursor-pointer ${
        status ? "gap-5" : "gap-2 "
      }`}
      onClick={() => {
        console.log("toggle");
        toggleFunc((prev) => !prev);
      }}
    >
      {/* <hr className="bg-white w-8 h-[2px] " />
      <hr className="bg-white w-8 h-[2px]   " /> */}
      {/* <div className="w-full h-full flex flex-col  items-center justify-center"></div> */}
      <div
        className={`bg-white w-8 h-[2px] delay-300 origin-top-left  ${
          status ? "rotate-45 ml-2.5 " : "rotate-0 "
        }`}
      ></div>
      <div
        className={`bg-white w-8 h-[2px] delay-300 origin-bottom-left   ${
          status ? "-rotate-45 ml-2.5 " : "rotate-0 "
        }`}
      ></div>
      {/* <div className="bg-white w-10 h-[2px] -rotate-45 "></div> */}
      {/* <div className="bg-white w-10 h-[2px] -rotate-45 mb-3"></div> */}
      {/* ActiveSection */}
    </div>
  );
};

export default MenuBtn;
