import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export const Card = ({
  className,
  classNameHeader,
  imageUrl,
  title,
  description,
  height,
}) => {
  return (
    <div
      className={cn(
        "w-full  rounded-xl flex flex-col justify-center gap-2 mt-4  px-3 grayscale-70 mb-10 lg:mb-0 ",
        height
      )}>
      <div
        className={cn(
          "flex items-center justify-center   px-10  rounded-3xl bg-[url('/bg.jpg')] bg-cover filter-grayscale hover:filter-none",
          className
        )}>
        <div
          className="w-full h-[80%] md:h-[90%] rounded-3xl  bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>

      <h1
        className={cn(
          "flex items-center gap-4  font-bold text-black pt-2",
          classNameHeader
        )}>
        {title}
      </h1>

      <p className="text-lg text-slate-500 ">{description}</p>
    </div>
  );
};
