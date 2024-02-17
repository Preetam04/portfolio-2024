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

        <div className="w-full h-full flex flex-row flex-wrap items-start gap-4 justify-between">
          <div className="flex items-start w-fit gap-2 ">
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
          <div className="text-textColorWhite flex items-start justify-between gap-10 self-end">
            {/* navigation */}
            {/* <div className=" w-fit">
              <h3 className="text-2xl">Navigate</h3>
              <ol className=" flex  flex-col font-medium opacity-60 text-textColorWhite mt-2">
                <a href="#home">
                  <li className=" transition-all text-base ease-in delay-100 cursor-pointer hover:text-primaryColor hover:font-semibold hover:translate-x-2 py-0.5">
                    Home
                  </li>
                </a>
                <a href="#about">
                  <li className=" transition-all text-base ease-in delay-100 cursor-pointer hover:text-primaryColor hover:font-semibold hover:translate-x-2 py-0.5">
                    About
                  </li>
                </a>
                <a href="/#services">
                  <li className=" transition-all text-base ease-in delay-100 cursor-pointer hover:text-primaryColor hover:font-semibold hover:translate-x-2 py-0.5">
                    Services
                  </li>
                </a>
                <a href="/#work">
                  <li className=" transition-all text-base ease-in delay-100 cursor-pointer hover:text-primaryColor hover:font-semibold hover:translate-x-2 py-0.5">
                    Work
                  </li>
                </a>
                <a href="/#testimonials">
                  <li className=" transition-all text-base ease-in delay-100 cursor-pointer hover:text-primaryColor hover:font-semibold hover:translate-x-2 py-0.5">
                    Testimonials
                  </li>
                </a>
                <a href="/#contact">
                  <li className=" transition-all text-base ease-in delay-100 cursor-pointer hover:text-primaryColor hover:font-semibold hover:translate-x-2 py-0.5">
                    Contact
                  </li>
                </a>
              </ol>
            </div> */}
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
    <div className=" w-fit">
      <h3 className="text-2xl">{title}</h3>
      <ol className=" flex  flex-col font-medium opacity-60 text-textColorWhite mt-2">
        {list.map((ele, key) => (
          <a href={ele.link} key={key}>
            <li className=" transition-all text-base ease-in delay-100 cursor-pointer hover:text-primaryColor hover:font-semibold hover:translate-x-2 py-0.5">
              {ele.title}
            </li>
          </a>
        ))}
      </ol>
    </div>
  );
};
