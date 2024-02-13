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
  return (
    <div className="flex flex-col items-center w-full bg-accentColor bg-opacity-10 overflow-x-hidden">
      <Navbar />
      <Container>
        <Home />
      </Container>
      <Container>
        <About />
      </Container>
      <Container>
        <Services />
      </Container>
      {/* <Works />
        <Testimonials />
        <Footer />*/}
    </div>
  );
}

export default App;
