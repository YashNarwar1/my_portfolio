import { useState, useEffect } from "react";
import { CodeIcon, Monitor } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { cn } from "../lib/utils";

export const Card = ({
  imageUrl,
  smallImageUrl,
  title,
  description,
  gitUrl,
  liveUrl,
  visible,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  const sidebar = visible || "lg:flex";

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 624);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 624);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundImage = isLargeScreen
    ? `url(${imageUrl})`
    : `url(${smallImageUrl})`;

  return (
    <div className="relative">
      <div className="w-[calc(100%-1rem)] xl:w-[calc(100%-5rem)] mx-auto h-[calc(100vh-10rem)]  flex rounded-2xl  overflow-hidden">
        {/* Left Panel (Desktop) */}
        <div
          className={cn(
            "w-[30%] lg:h-full bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20  py-10 hidden  flex-col justify-end pt-4 gap-10 px-4",
            sidebar
          )}>
          <h1 className="text-4xl font-bold tracking-wider text-slate-700">
            {title}
          </h1>
          <p className="text-md font-semibold tracking-wide text-slate-700">
            {description}
          </p>
          <div className="flex items-start gap-4">
            <a href={gitUrl || "#"} target="_blank" rel="noopener noreferrer">
              <button className="flex gap-2 px-4 py-2 bg-purple-700 text-sm rounded-2xl items-center justify-center text-slate-200">
                Code <CodeIcon className="w-5 h-5" />
              </button>
            </a>
            <a href={liveUrl || "#"} target="_blank" rel="noopener noreferrer">
              <button className="flex gap-2 text-sm px-4 py-2 rounded-2xl items-center justify-center bg-purple-700 text-slate-200">
                Live <Monitor className="w-5 h-5" />
              </button>
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div
          className="w-full h-full bg-cover bg-no-repeat transition-all duration-300"
          style={{ backgroundImage }}>
          {/* content */}
        </div>
      </div>

      {/* Mobile Text Overlay */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
        className="w-full flex flex-col gap-4 lg:hidden absolute bottom-10 left-10">
        <h1 className="text-4xl font-bold tracking-wider text-slate-100 md:text-slate-800">
          {title}
        </h1>
        <p className="text-md font-semibold tracking-wide text-slate-100 md:text-slate-800">
          {description}
        </p>
        <div className="flex items-start gap-4">
          <a href={gitUrl} target="_blank" rel="noopener noreferrer">
            <button className="flex gap-2 px-4 py-2 text-sm rounded-2xl items-center justify-center bg-purple-700 text-slate-200">
              Code <CodeIcon className="w-5 h-5" />
            </button>
          </a>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <button className="flex gap-2 text-sm px-4 py-2 rounded-2xl items-center justify-center bg-purple-700 text-slate-200">
              Live <Monitor className="w-5 h-5" />
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};
