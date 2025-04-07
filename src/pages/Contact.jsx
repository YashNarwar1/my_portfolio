import { LucideMessageSquareDiff, PhoneCallIcon } from "lucide-react";
import { SimpleFooter } from "../components/simpleFooter";

const Contact = () => {
  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="flex gap-4 flex-col items-center mt-20 md:mt-0  w-full px-4">
        <div className="flex flex-col justify-center mt-30 lg:mt-0 lg:flex-row items-center h-screen mx-4 lg:gap-6">
          <div className="flex flex-col gap-5 ">
            <h1 className="text-5xl lg:text-7xl  font-bold tracking-wider">
              Get In Touch
              <span className="text-5xl font-bold text-purple-700">.</span>
            </h1>
            <p className="text-2xl text-slate-609 mb-10">
              Feel free to reach out if you have any questions or just want to
              connect. I'm always open to new opportunities and collaborations!
            </p>
            <p className="flex gap-6  items-center">
              <span className="p-3 rounded-full border-2 border-slate-600">
                <LucideMessageSquareDiff className="w-8 h-8 text-slate-600" />
              </span>{" "}
              Yashnarwar111@gmail.com{" "}
            </p>
            <p className="flex gap-6 items-center">
              <span className="p-3 border-2 rounded-full border-slate-600">
                <PhoneCallIcon className="w-8 h-8 text-slate-600" />
              </span>{" "}
              +91 7060946107{" "}
            </p>
          </div>
          <div className=" flex items-center justify-center">
            <div className="flex items-end justify-center border-2 border-purple-700 rounded-full  w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[30rem] mx-auto md:ml-40 mt-20 mb-20 md:0 ">
              <img
                src="/yash.jpg"
                alt="user"
                className="w-full h-full grayscale-75  rounded-full p-2 bg-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
};

export default Contact;
