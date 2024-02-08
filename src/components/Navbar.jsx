import React from "react";

const Navbar = () => {
  return (
    <div className=" h-14  w-full flex flex-row items-center justify-between px-10 ">
      {/* name and icon */}
      <div className="flex items-center text-TextColor font-Nunito text-base font-semibold gap-1">
        <img src="src\assets\Icon.svg" alt="Icon" className="w-6" />
        <p>Preetam Patil</p>
      </div>
      {/* services div */}
      <div className="flex">
        <ol className="text-sm flex gap-5">
          <li>About</li>
          <li>Services</li>
          <li>Work</li>
          <li>Testimonials</li>
          <li>Contant</li>
        </ol>
      </div>

      {/* Contact information */}
      <div className=""></div>
    </div>
  );
};

export default Navbar;
