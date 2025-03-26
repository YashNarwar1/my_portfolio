import { Hero } from "./hero";
import Project from "./project";
import About from "./About";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <div id="home" className="min-h-screen w-full mx-auto  flex flex-col">
      <AnimatePresence>
        <Hero />
      </AnimatePresence>
      <Project />
      <About />
    </div>
  );
};

export default Home;
