import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaGithub } from 'react-icons/fa';


interface ProjectCardProps{
    name: string;
    githubUrl: string;
    description: string;
    technology: string; 
    projectUrl?: string; 
    category: string;
    deployed?: boolean; 
    index: number;
  }

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

const ProjectCard: React.FC<ProjectCardProps> = ({name , githubUrl, description, technology, projectUrl, category, deployed , index}) => {
    return(
        <motion.div
        
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={index}
            className="flex flex-col justify-between p-4 bg-light-background border border-dark-accent rounded-lg shadow-lg dark:bg-dark-background"
        >
            <h3>{name}</h3>
            <div className='mb-2'>
            <p>{description}</p>
            </div>
            <hr className='bg-light-primary p-[1px]'/>
            <div className='py-3'>
            <p className='text-sm'>Technologies: </p>
            <p>{technology}</p>
            </div>
            <hr className='bg-light-primary p-[1px] '/>
            
            <div className='flex space-x-3 text-xl py-3'>
                <a href={githubUrl} target="_blank">
                    <FaGithub />
                </a>
                {deployed && (
                <a href={projectUrl} target="_blank" className="deployed-link icon text-light-text dark:text-dark-text" rel="noreferrer">
                    <FaEye/>
                </a>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard
