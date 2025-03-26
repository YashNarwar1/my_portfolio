import { ArrowBigRightDashIcon } from "lucide-react";
import { Card } from "./card";
import { Link } from "react-router-dom";
import { data } from "../lib/data";

const Project = () => {
  return (
    <div id="projects" className="w-full min-h-screen flex flex-col ">
      <h1 className="text-5xl font-bold tracking-wider">
        Projects<span className="text-4xl font-bold text-purple-600">.</span>
      </h1>
      <div className="grid mt-10 grid-cols-1 gap-12  lg:grid-cols-5 ">
        <div className=" lg:col-span-3 col-span-1">
          <Link to={`/projects/${data[0].id}`}>
            <Card
              className=" h-[20rem]"
              classNameHeader={"text-2xl"}
              height={"min-h-[20rem]"}
              imageUrl={"/jira.png"}
              title={"Jira Clone"}
              description={
                "An all rounder application for mangement of projects with adding tasks and a lot's more features."
              }
            />
          </Link>
        </div>
        <div className=" lg:col-span-2 col-span-1">
          <Link to={`/projects/${data[1].id}`}>
            <Card
              imageUrl={"/food_app.png"}
              classNameHeader={"text-2xl"}
              className={"h-[20rem]"}
              height={"min-h-[20rem]"}
              title={"Food Ordering App"}
              description={
                "A robust appliaction with multiple user friendly features for ordering food to opening your own shop to sell everythng in one application."
              }
            />
          </Link>
        </div>
        <div className=" lg:col-span-2 col-span-1 ">
          <Link to={`/projects/${data[2].id}`}>
            <Card
              imageUrl={"/bloom_chat.png"}
              className={"h-[20rem]"}
              classNameHeader={"text-2xl"}
              height={"min-h-[20rem]"}
              title={"Bloom Chat"}
              description={
                "A robust chat application with multiple user friendly features."
              }
            />
          </Link>
        </div>
        <div className=" lg:col-span-3 col-span-1">
          <Link to={`/projects/${data[3].id}`}>
            <Card
              className="lg:px-30 h-[20rem]"
              classNameHeader={"text-2xl"}
              height={"min-h-[20rem]"}
              imageUrl={"/taskify.png"}
              title={"Taskify"}
              description={
                "An all rounder application for mangement of big projects with mutiple users  with many boards to plan and manage your projects and a lot's more features."
              }
            />
          </Link>
        </div>
      </div>
      <div className="flex w-full py-10 justify-end">
        <Link to="/projects">
          <button className="w-[12rem] rounded-lg flex items-center justify-center gap-x-4 bg-purple-700 text-slate-200 px-4 py-2 mt-10 cursor-pointer hover:text-white hover:opacity-75">
            See More
            <ArrowBigRightDashIcon className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
