import React from "react";

const Container = ({ children, bgType }) => {
  // console.log(bgColor);
  return (
    <div
      className={`max-w-[1440px] w-full   px-5 sm:px-10 py-2 ${
        bgType === "dark" ? "bg-darkBg" : "bg-lightBg"
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
