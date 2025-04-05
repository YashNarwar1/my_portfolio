import { CodeIcon, Monitor } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { cn } from "../lib/utils";

export const MoreProjectCard = ({
  imageUrl,
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

  return (
    <div className="relative">
      <div className="w-[calc(100%-1rem)] xl:w-[calc(100%-5rem)] mx-auto h-[50%]  flex gap-4 rounded-2xl border-2 overflow-hidden">
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
          className="w-[80%] lg:w-[87%] h-[90%] lg:h-[70%] flex flex-col justify-center gap-4  absolute bottom-3 lg:bottom-5 left-4 lg:left-10 bg-black/70 pl-10 overflow-hidden">
          <h1 className="text-2xl font-bold tracking-wider text-slate-200">
            {title}
          </h1>
          <p className="text-md font-semibold tracking-wide text-slate-300">
            {description}
          </p>
        </motion.div>

        <div className="w-full h-full">
          <img
            src={imageUrl || "/component/back.jpg"}
            className="w-full h-full object-cover object-center rounded-2xl"
            alt="Project Screenshot"
          />
        </div>
      </div>
    </div>
  );
};
