import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[1440px] w-full  px-5 sm:px-10 py-2">{children}</div>
  );
};

export default Container;
