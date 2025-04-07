import { Link, useParams } from "react-router-dom";
import { data } from "../lib/data.js";
import { Card } from "../components/card.jsx";

import { MoreProjectCard } from "../components/moreProjectCard.jsx";
import { SimpleFooter } from "../components/simpleFooter.jsx";

const ProjectIdPage = () => {
  const { projectId } = useParams();
  console.log(projectId);
  const currentIndex = data.findIndex(
    (project) => String(project.id).trim() === String(projectId).trim()
  );

  if (currentIndex === -1) {
    return <h2>Project not found!</h2>;
  }

  const currentProject = data[currentIndex];
  console.log(currentProject);
  const nextProjects = [
    data[(currentIndex + 1) % data.length], // Next project
    data[(currentIndex + 2) % data.length], // Second next project
  ];

  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="w-full min-h-screen px-4 mt-20">
        {/* Current Project Info */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 ">
          {currentProject.title}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-7 border-l-8 pl-6 py-6 border-purple-700">
          {currentProject.description}
        </p>
        <Card
          visible={"hidden"}
          imageUrl={currentProject.imageUrl}
          smallImageUrl={currentProject.smallImageUrl}
          title={currentProject.title}
        />

        {/* Project Details */}
        <div className="w-full min-h-screen flex flex-col lg:flex-row mt-10 gap-8">
          <div className="w-[20rem] md:w-[25rem] min-h-[5rem] md:h-[10rem] border-2 rounded-2xl border-purple-700 flex flex-col  lg:sticky top-5 mx-auto  lg:p-6 px-3 py-3">
            <div className="flex gap-4 items-center justify-between">
              <h2 className="text-sm md:text-md flex flex-col tracking-wide font-bold mb-1 lg:mb-4">
                Year:{" "}
                <span className="text-xl font-semibold ">
                  {currentProject.Year}
                </span>
              </h2>
              <p className="text-md md:text-xl text-slate-800 font-bold ">
                Personal Project
              </p>
            </div>
            <div className="flex  items-center gap-8">
              <p className="text-sm md:text-lg font-semibold text-slate-800 tracking-wider mb-1 lg:mb-4 flex flex-col">
                Role:{" "}
                <span className="text-md md:text-xl">Software Developer</span>
              </p>
              <a href="https://github.com/YashNarwar1">
                {" "}
                <p className="w-5 h-5 flex hover:text-purple-700   font-bold cursor-pointer">
                  Github_link
                </p>{" "}
              </a>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-wider">
              Project Details
            </h1>
            <p className="text-xl text-slate-700  p-4 mb-8">
              {currentProject.Details}
            </p>
            <h1 className="text-4xl font-bold tracking-wider">Challenges</h1>
            <p className="text-xl text-slate-700  p-4 mb-8">
              {currentProject.Challanges}
            </p>
            <h1 className="text-4xl font-bold tracking-wider">About</h1>
            <p className="text-xl text-slate-700  p-4 mb-8">
              {currentProject.About}
            </p>
          </div>
        </div>
        <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2  lg:gap-10 gap-5 lg:mt-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden">
          <img
            src={currentProject.images[0]}
            className="lg:col-span-1 rounded-2xl"
          />
          <img
            src={currentProject.images[1]}
            className="lg:col-span-1 rounded-2xl"
          />
          <img
            src={currentProject.images[2]}
            className="lg:col-span-2 rounded-2xl"
          />
        </div>

        {/* More Projects Section */}
        <div className="w-full h-[calc(100vh-10rem)]  gap-6  mt-10 flex flex-col  ">
          <h1 className="text-6xl  font-bold tracking-wider my-15 ">
            More Projects<span className="text-6xl text-purple-700">.</span>
          </h1>

          <div className="h-full w-full flex flex-col  lg:flex-row justify-around items-center  ">
            {nextProjects.map((project) => (
              <Link to={`/projects/${project.id}`}>
                <MoreProjectCard
                  key={project.id} // Added the missing key prop
                  imageUrl={project.imageUrl}
                  title={project.title}
                  description={project.description}
                  projectsId={project.id}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
};

export default ProjectIdPage;
