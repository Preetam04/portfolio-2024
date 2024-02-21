import { React, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Works from "./sections/Works";
import MenuBtn from "./components/MenuBtn";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(!true);

  const activeSection = useRef();

  // window.addEventListener("scroll", (e) => {
  //   console.log(e.target);
  // });

  return (
    <div className="flex flex-col items-center w-full bg-transparent overflow-x-hidden">
      <Navbar />

      {/* <div
        className={`h-full w-full fixed left-0 z-50   items-center ${
          sidebarOpen ? "flex" : "hidden"
        }`}
      >
      </div> */}
      {/* <Sidebar status={sidebarOpen} toggleFunc={setSidebarOpen} /> */}

      <Home />
      {/* <Container>
      </Container> */}
      <div className="w-full h-full bg-darkBg flex flex-col justify-center items-center pb-12">
        <About />
        <Services />
        <Works />
      </div>
      <div className="w-full h-full bg-lightBg flex flex-col justify-center items-center">
        <Testimonials />
        <FinalCTA />
      </div>

      <div className="w-full h-full bg-darkBg flex flex-col justify-center items-center ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
