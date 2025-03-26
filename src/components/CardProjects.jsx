import { LucideCircleArrowOutUpRight } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { data } from "../lib/data.js";

export const CardProjects = ({
  className,
  classNameHeader,
  imageUrl,
  title,
  description,
  height,
  projectsId,
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full h-screen sticky top-2 bg-white  rounded-xl flex flex-col gap-2 mt-4  px-3 grayscale-70",
        height
      )}>
      <div
        className={cn(
          "flex items-center justify-center w-full h-full overflow-hidden  px-10  rounded-xl bg-[url('/bg.jpg')] bg-cover filter-grayscale hover:filter-none",
          className
        )}>
        <motion.div
          className="w-full h-[98%] rounded-3xl  bg-cover bg-no-repeat"
          style={{
            scale,
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      </div>
      <Link to={`/projects/${projectsId}`}>
        <h1
          className={cn(
            "flex items-center gap-4  font-bold text-black pt-2",
            classNameHeader
          )}>
          {title}
          <LucideCircleArrowOutUpRight className="w-5 h-5 hover:text-purple-700 border-1 cursor-pointer" />
        </h1>
      </Link>
      <p className="text-lg text-slate-500 ">{description}</p>
    </div>
  );
};
