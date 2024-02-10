import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-full h-[100vh] relative "
      id="about"
    >
      <div className="flex flex-row justify-between items-center w-full h-full gap-10">
        {/* image section */}
        <div className="w-full h-full">
          <div className="w-full h-full relative">
            <img
              src="src\assets\bg-overlays\about-us-image-bg.svg"
              alt="overlay"
              className="absolute w-[36.5rem] top-16 left-10 z-0 text-accentColor"
            />
            {/* <img
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="my-image"
              className="w-[26rem] h-[3rem] z-10 relative top-36 left-32"
            /> */}
            <div className="w-[29.75] h-[28.625rem] bg-primaryColor  z-10 relative top-[10.5rem] left-[9.5rem] opacity-70"></div>
          </div>
        </div>
        {/* text section */}
        <div className="w-full h-full z-30 flex flex-col justify-center ">
          <div className="top-14 relative">
            <h3 className="text-TextColor font-boldText uppercase text-9xl leading-none z-10 text-right">
              About Me
            </h3>
            <p className="font-normalText font-medium  opacity-60 mt-2 capitalize text-md leading-6 text-right absolute  right-0 w-[51rem]">
              No one shall be subjected to arbitrary arrest, detention or exile.
              Everyone is entitled in full equality to a fair and public hearing
              by an independent and impartial tribunal, in the determination of
              his rights and obligations and of any criminal charge against him.
              No one shall be subjected to arbitrary interference with his
              privacy, family
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
