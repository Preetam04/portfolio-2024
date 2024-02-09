import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[80vh] relative ">
      <div className=" w-[30rem] h-[33rem] bg-slate-400 absolute z-0 bg-gradient-to-bl from-primaryColor    to-white rounded-full -rotate-[30deg] mr-10   " />
      <h1 className="text-TextColor font-boldText uppercase text-9xl leading-none z-10">
        Hi there,
        <br />
        <span className="w-[5.5rem] inline-block"></span> I'm Preetam.
      </h1>
      <p className="text-center font-normalText font-medium  opacity-60 mt-4 capitalize text-md leading-6">
        I Make Aesthetic no-code & coded <br /> websites and Web-Applications.
      </p>
    </div>
  );
};

export default Home;
