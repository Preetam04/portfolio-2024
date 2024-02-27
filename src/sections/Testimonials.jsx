import React from "react";
import ParticlesBg from "../components/ParticlesBg";
import SectionHeader from "../components/SectionHeader";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaQuoteLeft } from "react-icons/fa6";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="max-w-[1440px] w-full h-full  px-5 sm:px-10 ">
      <div
        className="w-full py-16  flex flex-col justify-between lg:justify-center gap-8"
        id="testimonials"
      >
        <div className="">
          <SectionHeader
            align={"left"}
            content={"Client Testimonials"}
            textColor="TextColor"
          />
          <p className="font-normalText text-TextColor font-normal  opacity-60 mt-2 capitalize text-sm leading-2 text-left w-full max-w-[30rem] sm:max-w-[35rem] sm:text-base md:text-wrap">
            No one shall be subjected to arbitrary arrest, detention or exile.
            Everyone is entitled in full equality to a fair and public hearing
            by an independent and impartial tribunal, in the determination of
            his rights and obligations
          </p>
        </div>
        {/* card holder */}
        <div className="flex flex-col gap-4 md:flex-row">
          {/* cards */}

          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
