import React from "react";
import ParticlesBg from "../components/ParticlesBg";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen relative ">
      <div className="w-[30rem] h-[33rem] scale-[60%] sm:scale-90 md:scale-100 bg-slate-400 absolute z-0 bg-gradient-to-bl from-primaryColor    to-white rounded-full -rotate-[30deg] mr-0 md:mr-10   " />
      <div className="absolute w-100 h-100">{/* <ParticlesBg /> */}</div>
      <h1 className="text-TextColor font-boldText uppercase text-[3.2rem] sm:text-8xl md:text-9xl lg:text-[9rem] leading-none z-10 ">
        Hi there,
        <br />
        <span className="w-9  sm:w-[5.5rem] inline-block"></span> I'm Preetam.
      </h1>
      <p className="text-center font-normalText font-medium  opacity-60 mt-2 sm:mt-4 capitalize text-xs sm:text-sm md:text-md leading-6">
        I Make Aesthetic no-code & coded <br /> websites and Web-Applications.
      </p>
    </div>
  );
};

export default Home;
