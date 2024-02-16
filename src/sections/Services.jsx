import React from "react";
import { FaDatabase, FaReact } from "react-icons/fa6";
import { MdWeb } from "react-icons/md";
import { SiWebflow } from "react-icons/si";
import ServicesDropdown from "../components/ServicesDropdown";
import SectionHeader from "../components/SectionHeader";

const Services = () => {
  return (
    <div className="max-w-[1440px] w-full h-full  px-5 sm:px-10 ">
      <div
        className="w-full py-14 flex flex-col flex-wrap xl:flex-nowrap justify-between  gap-6 "
        id="services"
      >
        {/* title */}
        <div className="w-full align-bottom self-start mb-4 lg:mb-6 lg:w-[60rem] ">
          <SectionHeader content={"What I Do."} align={"left"} />
          {/* decription */}
          <p className="font-normalText text-textColorWhite font-normal  opacity-60 mt-2 capitalize text-sm leading-2 text-left w-full max-w-[30rem] sm:max-w-[35rem] sm:text-base md:text-wrap">
            No one shall be subjected to arbitrary arrest, detention or exile.
            Everyone is entitled in full equality to a fair and public hearing
            by an independent and impartial tribunal, in the determination of
            his rights and obligations
          </p>
        </div>
        {/* cards div */}

        <div className="w-full xl:w-fit h-fit flex lg:self-end flex-col flex-wrap gap-4 justify-end  relative xl:bottom-10 xl:mt-[-3rem]">
          <ServicesDropdown title={"Web Development"} />
          <ServicesDropdown title={"Web Design"} />
          <ServicesDropdown title={"Webflow Development"} />
        </div>
      </div>
    </div>
  );
};

export default Services;

// {/* <div className="grid grid-flow-cols grid-rows-4 grid-cols-1  sm:grid-rows-2 sm:grid-cols-2 gap-5 justify-center  w-full lg:max-w-5xl">
//         <div className=" h-96 bg-primaryColor bg-opacity-20 rounded-md min-w-64 w-full  md:h-[22rem]">
//           <div className="py-6 px-8 w-full h-full flex flex-col items-start justify-between">
//             {/* image icon */}
//             <FaReact className="text-white bg-primaryColor p-4 w-16 h-16 rounded-full text-xl bg-opacity-70 self-start" />
//             {/* text heading */}
//             <div>
//               <h4 className="text-TextColor font-normalText capitalize font-medium text-3xl  z-10 text-left   inline-block mb-3">
//                 Frontend <br />
//                 development
//               </h4>
//               {/* text-description */}
//               <p className="text-subTextColor ">
//                 No one shall be subjected to arbitrary arrest, detention or
//                 exile. Everyone is entitled in full equality to a fair and
//                 public hearing by
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className=" h-96 bg-primaryColor bg-opacity-20 rounded-md min-w-64 w-full  md:h-[22rem]">
//           <div className="py-6 px-8 w-full h-full flex flex-col items-start justify-between">
//             {/* image icon */}
//             <MdWeb className="text-white bg-primaryColor p-4 w-16 h-16 rounded-full text-xl bg-opacity-70 self-start " />
//             {/* text heading */}
//             <div>
//               <h4 className="text-TextColor font-normalText capitalize font-medium text-3xl  z-10 text-left   inline-block mb-3">
//                 Web <br />
//                 Design
//               </h4>
//               {/* text-description */}
//               <p className="text-subTextColor  ">
//                 No one shall be subjected to arbitrary arrest, detention or
//                 exile. Everyone is entitled in full equality to a fair and
//                 public hearing by
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className=" h-96 bg-primaryColor bg-opacity-20 rounded-md min-w-64 w-full  md:h-[22rem]">
//           <div className="py-6 px-8 w-full h-full flex flex-col items-start justify-between">
//             {/* image icon */}
//             <SiWebflow className="text-white bg-primaryColor p-4 w-16 h-16 rounded-full text-xl bg-opacity-70 self-start text-opacity-75" />
//             {/* text heading */}
//             <div>
//               <h4 className="text-TextColor font-normalText capitalize font-medium text-3xl  z-10 text-left   inline-block mb-3">
//                 WebFlow <br />
//                 Development
//               </h4>
//               {/* text-description */}
//               <p className="text-subTextColor  ">
//                 No one shall be subjected to arbitrary arrest, detention or
//                 exile. Everyone is entitled in full equality to a fair and
//                 public hearing by
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className=" h-96 bg-primaryColor bg-opacity-20 rounded-md min-w-64 w-full  md:h-[22rem]">
//           <div className="py-6 px-8 w-full h-full flex flex-col items-start justify-between">
//             {/* image icon */}
//             <FaDatabase className="text-white bg-primaryColor p-4 w-16 h-16 rounded-full text-lg bg-opacity-70 self-start text-opacity-75" />
//             {/* text heading */}
//             <div>
//               <h4 className="text-TextColor font-normalText capitalize font-medium text-3xl  z-10 text-left   inline-block mb-3">
//                 Backend <br />
//                 Development
//               </h4>
//               {/* text-description */}
//               <p className="text-subTextColor  ">
//                 No one shall be subjected to arbitrary arrest, detention or
//                 exile. Everyone is entitled in full equality to a fair and
//                 public hearing by
//               </p>
//             </div>
//           </div>
//         </div>
//       </div> */}
