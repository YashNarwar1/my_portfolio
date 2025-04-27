import { Hero } from "./hero";
import Project from "./project";
import About from "./About";
import { AnimatePresence } from "framer-motion";
import { Footer } from "./footer";
import { LoadingScreen } from "./loading";
import { useState } from "react";

const Home = () => {
  return (
    <div id="home" className=" w-full flex flex-col ">
      <AnimatePresence>
        <Hero />
        <Project />
        <About />
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Home;
