"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectFilter from "@/components/ProjectFilter";
import ProjectCard from "@/components/ProjectCard";
import { ProjectData } from "@/components/ProjectData";
import Footer from "@/components/Footer";

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>("all");
  const [filtered, setFiltered] = useState<ProjectData[]>([]);
  const [visibleProjects, setVisibleProjects] = useState(9);

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
  };

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <>
      <section className=" z-10 p-5  leading-8   flex flex-col bg-[#DEE4E7] dark:bg-gray-900 h-screen overflow-auto">
        <div className="grid-container">
          <div>
            <h2 className="text-3xl font-medium capitalize mb-8 text-left text-blue-700">Projects</h2>
          </div>
          <ProjectFilter setFiltered={setFiltered} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5  ">
            <AnimatePresence>
              {filtered.slice(0,visibleProjects).map((project, index) => (
                <motion.div
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false,
                }}
                custom={index}
                >
                  <ProjectCard
                    
                    index={index}  
                    name={project.name}
                    githubUrl={project.githubUrl}
                    description={project.description}
                    technology={project.technology}
                    projectUrl={project.projectUrl}
                    category={project.category}
                    deployed={project.deployed}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {visibleProjects < filtered.length && (
            <div className="text-center mt-4">
              <button className="show-more-button" onClick={loadMoreProjects}>
                Show More
              </button>
            </div>
          )}
        </div>
      </section>
       
      <Footer/>
        
    </>
  );
};

export default Projects;







