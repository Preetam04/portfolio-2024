import React from "react";
import ParticlesBg from "../components/ParticlesBg";

const Home = () => {
  return (
    <div
      className="w-full h-full bg-lightBg flex justify-center items-center"
      id="home"
    >
      <div className="max-w-[1440px] w-full   px-5 sm:px-10 ">
        <div className="flex flex-col justify-center items-center w-full h-screen relative ">
          <div className="w-[30rem] h-[33rem] scale-[60%] sm:scale-90 md:scale-100 bg-slate-400 absolute z-0 bg-gradient-to-bl from-primaryColor    to-white rounded-full -rotate-[30deg] mr-0 md:mr-10   " />
          {/* <div className="absolute  w-[100vw] h-[100vh] z-0">
            <ParticlesBg />
          </div> */}
          <h1 className="text-TextColor font-boldText uppercase text-[4.2rem] sm:text-8xl md:text-9xl lg:text-[9rem] leading-none z-10 ">
            Hi there,
            <br />
            <span className="w-9  sm:w-[5.5rem] inline-block"></span> I'm
            Preetam.
          </h1>
          <p className="text-center font-normalText font-medium  opacity-60 mt-2 sm:mt-4 capitalize text-sm sm:text-md md:text-lg leading-6 text-TextColor">
            I Make Aesthetic no-code & coded <br /> websites and
            Web-Applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
