import { Card } from "./card";
import { data } from "../lib/data";
import { sizeIsMobile } from "../lib/sizeIsMobile";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowBigRightDashIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Project = () => {
  const targetRef = useRef(null);

  const scrollContainerRef = useRef(null);
  const { isMobile } = sizeIsMobile();

  const [maxScrollX, setMaxScrollX] = useState(0);

  useEffect(() => {
    const measureScrollWidth = () => {
      if (scrollContainerRef.current) {
        const scrollWidth = scrollContainerRef.current.scrollWidth;

        const viewportWidth = window.innerWidth;

        setMaxScrollX(scrollWidth - viewportWidth);
      }
    };

    measureScrollWidth();
    window.addEventListener("resize", measureScrollWidth);
    return () => window.removeEventListener("resize", measureScrollWidth);
  }, []);

  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScrollX]);
  const smoothX = useSpring(x, { stiffness: 70, damping: 30 });

  if (isMobile) {
    return (
      <div className="min-h-screen relative flex flex-col gap-20 my-10 mx-auto">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex-none w-[80vw] h-[70vh]">
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}>
              <Card
                imageUrl={data[i].imageUrl}
                smallImageUrl={data[i].smallImageUrl}
                title={data[i].title}
                description={data[i].description}
                liveUrl={data[i].liveUrl}
                projectUrl={`/projects/${data[i].id}`}
              />
            </motion.div>
          </div>
        ))}
        {/* CTA button */}
        <div className="flex w-full justify-end pr-16 ">
          <Link to="/projects">
            <button className="w-[8rem] rounded-lg flex items-center justify-center gap-x-4 text-purple-600 bg-slate-200 px-4 py-2 mt-10 cursor-pointer hover:text-black hover:opacity-75">
              More
              <ArrowBigRightDashIcon className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      id="projects"
      ref={targetRef}
      className="h-[500vh] relative pb-10 md:px-20">
      <h1 className="text-5xl font-bold tracking-wider my-10 ">
        Projects<span className="text-4xl font-bold text-purple-600">.</span>
      </h1>

      {/* Sticky container that pins the horizontal scroll */}
      <div className="h-screen sticky top-0 flex items-center overflow-hidden">
        <motion.div
          ref={scrollContainerRef}
          className="flex gap-[3vw] px-16 w-max"
          style={{ x: smoothX }}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex-none w-[80vw] h-[70vh]">
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeIn" }}>
                <Card
                  imageUrl={data[i].bgImage}
                  smallImageUrl={data[i].smallImageUrl}
                  title={data[i].title}
                  description={data[i].description}
                  liveUrl={data[i].liveUrl}
                  projectUrl={`/projects/${data[i].id}`}
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA button */}
      <div className="flex w-full justify-end pr-16 absolute bottom-0.5 right-0">
        <Link to="/projects">
          <button className="w-[8rem] rounded-lg flex items-center justify-center gap-x-4 text-purple-600 bg-slate-200 px-4 py-2 mt-10 cursor-pointer hover:text-black hover:opacity-75">
            More
            <ArrowBigRightDashIcon className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Project;

// import { Card } from "./card";

// import { data } from "../lib/data";
// import { sizeIsMobile } from "../lib/sizeIsMobile";
// import { useRef } from "react";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import { ArrowBigRightDashIcon } from "lucide-react";
// import { Link } from "react-router-dom";

// const Project = () => {
//   const targetRef = useRef(null);
//   const { isMobile } = sizeIsMobile();
//   const { scrollYProgress } = useScroll({ target: targetRef });
//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);
//   const smoothX = useSpring(x, { stiffness: 70, damping: 30 });

//   {
//     return isMobile ? (
//       // Vertical layout for small screens
//       <div className="flex flex-col gap-10 px-4">
//         <div className="flex-none w-[80vw] h-[70vh]">
//           <motion.div
//             initial={{ opacity: 0, y: 150 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, ease: "easeIn" }}>
//             <Card
//               imageUrl={"/jira.png"}
//               smallImageUrl={"/jira_sm.png"}
//               title={"Jira Clone"}
//               description={
//                 "An all rounder application for mangement of projects with adding tasks and a lot's more features."
//               }
//               projectUrl={`/projects/${data[0].id}`}
//             />
//           </motion.div>
//         </div>
//         <div className="flex-none w-[80vw] h-[70vh]">
//           <motion.div
//             initial={{ opacity: 0, y: 150 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, ease: "easeIn" }}>
//             <Card
//               imageUrl={"/food_app.png"}
//               smallImageUrl={"/food_sm.png"}
//               title={"Tasty"}
//               description={
//                 "A robust appliaction with multiple user friendly features for ordering food to opening your own shop to sell everythng in one application."
//               }
//               projectUrl={`/projects/${data[1].id}`}
//             />
//           </motion.div>
//         </div>
//         <div className="flex-none w-[80vw] h-[70vh]">
//           <motion.div
//             initial={{ opacity: 0, y: 150 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, ease: "easeIn" }}>
//             <Card
//               imageUrl={"/chat.png"}
//               smallImageUrl={"/chat_sm.png"}
//               title={"Bloom Chat"}
//               description={
//                 "A robust chat application with multiple user friendly features."
//               }
//               liveUrl={"https://bloom-chat-app-2.onrender.com"}
//               projectUrl={`/projects/${data[2].id}`}
//             />
//           </motion.div>
//         </div>
//         <div className="flex-none w-[80vw] h-[70vh]">
//           <motion.div
//             initial={{ opacity: 0, y: 150 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, ease: "easeIn" }}>
//             <Card
//               imageUrl={"/taskify.png"}
//               smallImageUrl={"/taskify_sm.png"}
//               title={"Taskify"}
//               description={
//                 "An all rounder application for mangement of big projects with mutiple users  with many boards to plan and manage your projects and a lot's more features."
//               }
//               projectUrl={`/projects/${data[3].id}`}
//             />
//           </motion.div>
//         </div>
//       </div>
//     ) : (
//       // Horizontal layout for larger screens
//       <div
//         id="projects"
//         ref={targetRef}
//         className="h-[500vh] relative pb-10 md:px-20">
//         <h1 className="text-5xl font-bold tracking-wider my-10 ">
//           Projects<span className="text-4xl font-bold text-purple-600">.</span>
//         </h1>

//         {/* Sticky container that pins the horizontal scroll */}
//         <div className="h-screen sticky top-0 flex items-center overflow-hidden">
//           <motion.div className="flex gap-[3vw] w-max" style={{ x: smoothX }}>
//             <div className="flex-none w-[80vw] h-[70vh]">
//               <motion.div
//                 initial={{ opacity: 0, y: 150 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, ease: "easeIn" }}>
//                 <Card
//                   imageUrl={"/jira.png"}
//                   smallImageUrl={"/jira_sm.png"}
//                   title={"Jira Clone"}
//                   description={
//                     "An all rounder application for mangement of projects with adding tasks and a lot's more features."
//                   }
//                   projectUrl={`/projects/${data[0].id}`}
//                 />
//               </motion.div>
//             </div>

//             <div className="flex-none w-[80vw] h-[70vh]">
//               <motion.div
//                 initial={{ opacity: 0, y: 150 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, ease: "easeIn" }}>
//                 <Card
//                   imageUrl={"/food_app.png"}
//                   smallImageUrl={"/food_sm.png"}
//                   title={"Tasty"}
//                   description={
//                     "A robust appliaction with multiple user friendly features for ordering food to opening your own shop to sell everythng in one application."
//                   }
//                   projectUrl={`/projects/${data[1].id}`}
//                 />
//               </motion.div>
//             </div>

//             <div className="flex-none w-[80vw] h-[70vh]">
//               <motion.div
//                 initial={{ opacity: 0, y: 150 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, ease: "easeIn" }}>
//                 <Card
//                   imageUrl={"/chat.png"}
//                   smallImageUrl={"/chat_sm.png"}
//                   title={"Bloom Chat"}
//                   description={
//                     "A robust chat application with multiple user friendly features."
//                   }
//                   liveUrl={"https://bloom-chat-app-2.onrender.com"}
//                   projectUrl={`/projects/${data[2].id}`}
//                 />
//               </motion.div>
//             </div>

//             <div className="flex-none w-[80vw] h-[70vh]">
//               <motion.div
//                 initial={{ opacity: 0, y: 150 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, ease: "easeIn" }}>
//                 <Card
//                   imageUrl={"/taskify.png"}
//                   smallImageUrl={"/taskify_sm.png"}
//                   title={"Taskify"}
//                   description={
//                     "An all rounder application for mangement of big projects with mutiple users  with many boards to plan and manage your projects and a lot's more features."
//                   }
//                   projectUrl={`/projects/${data[3].id}`}
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* CTA button */}
//         <div className="flex w-full justify-end pr-16 absolute bottom-0.5 right-0">
//           <Link to="/projects">
//             <button className="w-[8rem] rounded-lg flex items-center justify-center gap-x-4 text-purple-600 bg-slate-200 px-4 py-2 mt-10 cursor-pointer hover:text-black hover:opacity-75">
//               More
//               <ArrowBigRightDashIcon className="w-5 h-5" />
//             </button>
//           </Link>
//         </div>
//       </div>
//     );
//   }
// };

// export default Project;

// // {/* <div
// // id="projects"
// // ref={targetRef}
// // className="h-[500vh] relative pb-10  md:px-20">
// // <h1 className="text-5xl font-bold tracking-wider my-10 ">
// //   Projects<span className="text-4xl font-bold text-purple-600">.</span>
// // </h1>

// // {/* Sticky container that pins the horizontal scroll */}
// // <div className="h-screen sticky top-0 flex  items-center overflow-hidden">
// //   <motion.div
// //     className="flex gap-[3vw] px-16 w-max"
// //     style={{ x: smoothX }}>
// //     <div className="flex-none w-[80vw] h-[70vh]">
// //       <motion.div
// //         initial={{ opacity: 0, y: 150 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5, ease: "easeIn" }}>
// //         <Card
// //           imageUrl={"/jira.png"}
// //           smallImageUrl={"/jira_sm.png"}
// //           title={"Jira Clone"}
// //           description={
// //             "An all rounder application for mangement of projects with adding tasks and a lot's more features."
// //           }
// //           projectUrl={`/projects/${data[0].id}`}
// //         />
// //       </motion.div>
// //     </div>
// //     <div className="flex-none w-[80vw] h-[70vh]">
// //       <motion.div
// //         initial={{ opacity: 0, y: 150 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5, ease: "easeIn" }}>
// //         <Card
// //           imageUrl={"/food_app.png"}
// //           smallImageUrl={"/food_sm.png"}
// //           title={"Tasty"}
// //           description={
// //             "A robust appliaction with multiple user friendly features for ordering food to opening your own shop to sell everythng in one application."
// //           }
// //           projectUrl={`/projects/${data[1].id}`}
// //         />
// //       </motion.div>
// //     </div>
// //     <div className="flex-none w-[80vw] h-[70vh]">
// //       <motion.div
// //         initial={{ opacity: 0, y: 150 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5, ease: "easeIn" }}>
// //         <Card
// //           imageUrl={"/chat.png"}
// //           smallImageUrl={"/chat_sm.png"}
// //           title={"Bloom Chat"}
// //           description={
// //             "A robust chat application with multiple user friendly features."
// //           }
// //           liveUrl={"https://bloom-chat-app-2.onrender.com"}
// //           projectUrl={`/projects/${data[2].id}`}
// //         />
// //       </motion.div>
// //     </div>
// //     <div className="flex-none w-[80vw] h-[70vh]">
// //       <motion.div
// //         initial={{ opacity: 0, y: 150 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5, ease: "easeIn" }}>
// //         <Card
// //           imageUrl={"/taskify.png"}
// //           smallImageUrl={"/taskify_sm.png"}
// //           title={"Taskify"}
// //           description={
// //             "An all rounder application for mangement of big projects with mutiple users  with many boards to plan and manage your projects and a lot's more features."
// //           }
// //           projectUrl={`/projects/${data[3].id}`}
// //         />
// //       </motion.div>
// //     </div>
// //   </motion.div>
// // </div>

// // {/* CTA button */}
// // <div className="flex w-full justify-end pr-16 absolute bottom-0.5 right-0">
// //   <Link to="/projects">
// //     <button className="w-[8rem] rounded-lg flex items-center justify-center gap-x-4 text-purple-600 bg-slate-200 px-4 py-2 mt-10 cursor-pointer hover:text-black hover:opacity-75">
// //       More
// //       <ArrowBigRightDashIcon className="w-5 h-5" />
// //     </button>
// //   </Link>
// // </div>
// // </div> */}
