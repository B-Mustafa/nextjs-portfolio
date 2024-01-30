"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "next-themes";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { motion } from "framer-motion";
import Footer from "./Footer";

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


function Timeline() {
  const { theme } = useTheme();
  

  const experiencesData = [
    {
      title: "Education",
      location: "Gujarat ",
      description:
        "I am currently pursuing my Diploma in Computer Engineering from Gujarat Technological University.",
      icon: React.createElement(LuGraduationCap),
      date: "2022-present",
    },
    {
      title: "Experience",
      location: "Gujarat , Godhra",
      description:
        "I worked as an Intern at PHN Technology Pvt. Ltd. for 3 months where I worked on projects based on HTML , CSS , JavaScript .",
      icon: React.createElement(CgWorkAlt),
      date: "2023",
    },
    {
      title: "Full-Stack Developer",
      location: "Gujarat , Godhra",
      description:
        "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, MongoDB , FireBase. I'm open to full-time opportunities.",
      icon: React.createElement(FaReact),
      date: "2023 - present",
    },
  ];

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <h2 className="text-3xl font-medium capitalize mb-8 text-left text-blue-700">My experience</h2>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          
            <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
              visibility: "visible" ,
            }}
            contentArrowStyle={{
              borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)",
              visibility:  "visible",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
              visibility:  "visible" ,
            }}
          >
            <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
          custom={index}
          >

            <h3 className="font-semibold capitalize">{item.title}</h3>
          
            <p className="font-normal !mt-0">{item.location}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p>
          </motion.div>
          </VerticalTimelineElement>
          
        ))}
      </VerticalTimeline>

     
    </section>

  );
}

export default Timeline;