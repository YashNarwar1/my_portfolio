import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Footer } from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import AnimateLayout from "./components/animateLayout";
import { MobileNav } from "./components/mobile";
import { Navbar } from "./components/navbar";
import About from "./pages/About";
import ProjectIdPage from "./pages/projectIdPage";
import { LoadingScreen } from "./components/loading";

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const unlocked = sessionStorage.getItem("isUnlocked");

    if (unlocked === "true") {
      setIsUnlocked(true);
    }
  }, []);

  if (!isUnlocked) {
    return <LoadingScreen setIsUnlocked={setIsUnlocked} />;
  }

  return (
    <>
      <div
        className="max-w-[95rem] mx-auto text-white"
        style={{
          backgroundColor: "#252629",
          backgroundImage:
            "radial-gradient(circle, rgba(37,38,41,1) 0%, rgba(0,0,0,1) 37%, rgba(57,64,58,1) 64%, rgba(0,0,0,1) 83%)",
        }}>
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
