import React, { useState, useEffect } from "react"; // Import React here
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Footer } from "./components/footer"; // Assuming Footer is separate
import ScrollToTop from "./components/scrollToTop";
import AnimateLayout from "./components/animateLayout";
import { MobileNav } from "./components/mobile";
import { Navbar } from "./components/navbar";
import About from "./pages/About";
import ProjectIdPage from "./pages/projectIdPage";
import { LoadingScreen } from "./components/loading"; // Adjust path if necessary

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Check if it's unlocked from sessionStorage on mount
  useEffect(() => {
    // --- CHANGE HERE ---
    const unlocked = sessionStorage.getItem("isUnlocked");
    // --- END CHANGE ---
    if (unlocked === "true") {
      setIsUnlocked(true); // Skip loading screen if already unlocked in this session
    }
    // No cleanup needed, runs only once on mount
  }, []); // Empty dependency array ensures this runs only once on mount

  // Show loader if not unlocked yet for this session
  if (!isUnlocked) {
    return <LoadingScreen setIsUnlocked={setIsUnlocked} />;
  }

  // Otherwise, show the main application
  return (
    // It's good practice to wrap multi-line returns in parentheses
    // Also added React.Fragment <> </> wrapper as Routes/Footer might be siblings
    <>
      <div className="max-w-[95rem] mx-auto bg-gradient-to-tr from-white via-slate-50 to-gray-100">
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
        {/* Assuming Footer should be outside AnimateLayout but inside the main div */}
      </div>
      <Footer /> {/* Render Footer here */}
    </>
  );
}

export default App;
