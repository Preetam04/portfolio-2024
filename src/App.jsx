import { React, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import Works from "./sections/Works";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Container from "./components/Container";

function App() {
  const [bgColor, setBgColor] = useState("lightBg");

  return (
    <div className="flex flex-col items-center w-full bg-transparent overflow-x-hidden">
      <Navbar />
      <Home />
      {/* <Container>
      </Container> */}
      <div className="w-full h-full bg-darkBg flex flex-col justify-center items-center">
        <About />
        <Services />
        <Works />
      </div>
      {/* <Container bgType={"dark"}>


        
      </Container>
      <Testimonials /> */}
      {/*  <Footer />*/}
    </div>
  );
}

export default App;
