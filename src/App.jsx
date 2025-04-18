import Home from "./components/home";
import Projects from "./pages/Projects";

import Contact from "./pages/Contact";

import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import AnimateLayout from "./components/animateLayout";

import { MobileNav } from "./components/mobile";
import { Navbar } from "./components/navbar";
import About from "./pages/About";
import ProjectIdPage from "./pages/projectIdPage";

function App() {
  return (
    <>
      <div className=" max-w-[95rem] mx-auto bg-gradient-to-tr from-white via-slate-50 to-gray-100">
        <ScrollToTop />
        <Navbar />
        <MobileNav />
        <AnimateLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectIdPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimateLayout>
      </div>
    </>
  );
}

export default App;
