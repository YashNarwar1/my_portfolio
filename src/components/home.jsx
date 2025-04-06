import { Hero } from "./hero";
import Project from "./project";
import About from "./About";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <div id="home" className="min-h-screen w-full   flex flex-col ">
      <AnimatePresence>
        <Hero />
        <Project />
        <About />
      </AnimatePresence>
    </div>
  );
};

export default Home;
