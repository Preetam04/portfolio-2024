import React from "react";
import SectionHeader from "../components/SectionHeader";

const Footer = () => {
  const navData = [
    {
      title: "Home",
      link: "/#home",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Services",
      link: "/#services",
    },
    {
      title: "Work",
      link: "/#work",
    },
    {
      title: "Testimonials",
      link: "/#testimonials",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
  ];

  const socialsData = [
    {
      title: "Linkedin",
      link: "",
    },
    {
      title: "Github",
      link: "",
    },
    {
      title: "Dribble",
      link: "",
    },
    {
      title: "Bento",
      link: "",
    },
  ];

  return (
    <footer className="max-w-[1440px] w-full h-full  px-5 sm:px-10 ">
      <div
        className="w-full py-16  flex flex-col justify-between lg:justify-center gap-8"
        id="testimonials"
      >
        {/* icon on the left side nex sent name and copyright*/}

        <div className="w-full h-full flex flex-col  items-start gap-4 justify-between gap-x-60 lg:flex-row">
          <div className="flex  items-start w-fit gap-2 ">
            <img
              src="./src/assets/Icon.svg"
              alt="icon"
              className="w-[2.5rem] sm:w-[3.4rem] lg:w-[4.4rem] "
            />{" "}
            <div className=" flex flex-col">
              <h2
                className={`text-textColorWhite font-boldText uppercase text-4xl sm:text-6xl lg:text-7xl leading-none z-10 text-left  inline-block`}
              >
                Preetam Patil
              </h2>

              <h3
                className={`text-subTextColor font-boldText uppercase text-xl lg:text-3xl leading-none z-10 text-left  inline-block`}
              >
                &copy; Portfolio 2024
              </h3>
            </div>
          </div>
          {/* right side navigation and social  */}
          <div className="text-textColorWhite flex flex-col items-start justify-center gap-4 w-full flex-1 self-end pl-8 mt-5 sm:flex-row lg:mt-0">
            {/* navigation */}

            <ListComp title={"Navigation"} list={navData} />
            {/* socials */}
            <ListComp title={"Socials"} list={socialsData} />

            {/* contact information */}

            {/* <div className=""></div> */}
          </div>
          {/* button to scroll to top */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const ListComp = ({ title, list }) => {
  return (
    <div className=" w-full ">
      <ol className=" flex  font-normalText flex-col font-normal text-subTextColor mt-2">
        {list.map((ele, key) => (
          <a href={ele.link} key={key}>
            <li className=" transition-all text-base w-fit ease-in delay-100 cursor-pointer hover:text-primaryColor  hover:translate-x-2 py-1">
              {ele.title}
            </li>
          </a>
        ))}
      </ol>
    </div>
  );
};
