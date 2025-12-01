"use client";
import { PROJECTS } from "../data";
import { motion } from "framer-motion";
const iconVariants = () => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: "duration",
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Projects() {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 1 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="pb-4 "
    >
      <h2 className="my-20 text-center text-4xl "> My Projects </h2>
      <motion.div
        whileInView={{ opacity: 1, x: -1 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
      >
        {" "}
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-56-64 mb-6 rounded-xl "
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 ml-12  ">
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400 "> {project.description}</p>

              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 bg-stone-900 rounded p-1 text-sm font-medium text-stone-300 "
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
