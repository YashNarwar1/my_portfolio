import { ArrowBigRightDashIcon } from "lucide-react";
import { Card } from "./card";
import { Link } from "react-router-dom";
import { data } from "../lib/data";

const Project = () => {
  return (
    <div id="projects" className="w-full min-h-screen flex flex-col gap-4">
      <h1 className="text-5xl font-bold tracking-wider my-10">
        Projects<span className="text-4xl font-bold text-purple-600">.</span>
      </h1>
      <div className="flex flex-col ">
        <div className="w-full h-screen">
          <Link to={`/projects/${data[0].id}`}>
            <Card
              imageUrl={"/jira.png"}
              smallImageUrl={"/jira_sm.png"}
              title={"Jira Clone"}
              description={
                "An all rounder application for mangement of projects with adding tasks and a lot's more features."
              }
            />
          </Link>
        </div>
        <div className="w-full h-screen">
          <Link to={`/projects/${data[1].id}`}>
            <Card
              imageUrl={"/food_app.png"}
              smallImageUrl={"/food_sm.png"}
              title={"Food Ordering App"}
              description={
                "A robust appliaction with multiple user friendly features for ordering food to opening your own shop to sell everythng in one application."
              }
            />
          </Link>
        </div>
        <div className="w-full h-screen">
          <Link to={`/projects/${data[2].id}`}>
            <Card
              imageUrl={"/chat.png"}
              smallImageUrl={"/chat_sm.png"}
              title={"Bloom Chat"}
              description={
                "A robust chat application with multiple user friendly features."
              }
            />
          </Link>
        </div>
        <div className="w-full h-screen">
          <Link to={`/projects/${data[3].id}`}>
            <Card
              imageUrl={"/taskify.png"}
              smallImageUrl={"/taskify_sm.png"}
              title={"Taskify"}
              description={
                "An all rounder application for mangement of big projects with mutiple users  with many boards to plan and manage your projects and a lot's more features."
              }
            />
          </Link>
        </div>
      </div>
      <div className="flex w-full justify-end">
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
