import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

const About = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    if (globeRef.current) {
      // Focus on Delhi, India
      globeRef.current.pointOfView(
        { lat: 28.6139, lng: 77.209, altitude: 1.5 },
        1000
      );

      // Disable zooming
      globeRef.current.controls().enableZoom = false;

      // Allow smooth rotation
      globeRef.current.controls().enableRotate = true;

      globeRef.current.controls().enableVerticalRotate = false;
    }
  }, []);

  const locationTag = [
    {
      lat: 28.6139, // Delhi, India
      lng: 77.209,
      label: "Currently Living Delhi, India",
    },
  ];

  const skillsRow = [
    "Next.js",
    "Tailwind",
    "MERN",
    "Docker",
    "Three.js",
    "TypeScript",
  ];
  const skillsRow2 = ["Hono", "TanStack", "Framer Motion", "Zustand", "Git"];

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 17,
        ease: "linear",
      },
    },
    animateReverse: {
      x: ["-100%", "0%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 19,
        ease: "linear",
      },
    },
  };

  return (
    <div className="w-full px-4">
      <div className="w-full flex flex-col md:flex-row gap-x-4 items-center p-3 ">
        <div className="relative w-full lg:w-[45%] bg-gray-300 rounded-xl p-6 my-10 overflow-hidden">
          <h1 className="text-3xl font-bold mb-6 py-6 ml-4">
            My Stack<span className="text-purple-700">.</span>
          </h1>

          {/* Marquee Container */}
          <div className="flex flex-col gap-2 flex-nowrap ">
            <div className="flex gap-2 flex-nowrap space-y-6">
              {[...Array(2)].map((_, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-12 px-8"
                  variants={marqueeVariants}
                  animate="animate">
                  {skillsRow.map((skill, index) => (
                    <div
                      key={index}
                      className="inline-flex w-auto h-10 px-6 py-2 min-w-max bg-black text-white rounded-lg shadow-lg transition-all hover:scale-105">
                      {skill}
                      <span className="text-purple-700 ml-2">★</span>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
            <div className="flex gap-2 flex-nowrap space-y-6">
              {[...Array(2)].map((_, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-12 px-8"
                  variants={marqueeVariants}
                  animate="animateReverse">
                  {skillsRow2.map((skill, index) => (
                    <div
                      key={index}
                      className="inline-flex w-auto h-10 px-6 py-2 min-w-max bg-black text-white rounded-lg shadow-lg transition-all hover:scale-105">
                      {skill}
                      <span className="text-purple-700 ml-2">★</span>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center grayscale-75">
          <Globe
            ref={globeRef}
            height={396}
            width={396}
            backgroundColor="rgba(0,0,0,0)"
            backgroundImageOpacity={0.5}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            showAtmosphere
            htmlElementsData={locationTag}
            htmlElement={(d) => {
              const el = document.createElement("div");
              el.innerHTML = `<div style="color: white; background: rgba(0,0,0,0.7); 
                padding: 4px 8px; border-radius: 8px; font-size: 12px; 
                white-space: nowrap;">📍 ${d.label}</div>`;
              el.style.pointerEvents = "none"; // prevent blocking globe interaction
              return el;
            }}
            showGraticules
          />
        </div>
      </div>
      <div className="w-full pt-10 px-2 flex flex-col gap-2 ">
        <h1 className=" text-3xl md:text-6xl font-bold tracking-wider mb-8">
          My Story<span className="text-6xl font-bold text-purple-700">.</span>
        </h1>
        <p className="px-3 text-lg md:text-xl text-slate-700">
          My journey into web development began with pure curiosity and a drive
          for creativity. Despite graduating with a degree in Economics and
          English, I was drawn to the limitless possibilities of building things
          online. In 2022, I took the leap into freelancing, diving headfirst
          into the world of full-stack development. Over time, I honed my skills
          in the{" "}
          <span className="text-purple-700 font-bold">MERN stack, Next.js</span>{" "}
          , and Git, creating everything from real-time chat apps to AI-powered
          platforms. Along the way, I discovered a deep passion for 3D web
          experiences, using{" "}
          <span className="text-purple-700 font-bold">Three.js</span> to bring
          imaginative, interactive visuals to life. Today, I strive to blend
          functionality with creativity, building scalable, user-centric
          applications that push the boundaries of what’s possible on the web.
        </p>
      </div>
    </div>
  );
};

export default About;
