"use client";

import React, { useEffect, useState } from "react";
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




function Timeline() {
  const { theme } = useTheme();
  
  const [key, setKey] = useState(0); 

  useEffect(() => {
     
     setKey(prevKey => prevKey + 1);
  }, [theme]);


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
      <h2 className="text-3xl font-medium capitalize mb-8 text-left text-light-accent dark:text-dark-accent">My experience</h2>
      <VerticalTimeline key={key} lineColor="">
        {experiencesData.map((item, index) => (
          
          <VerticalTimelineElement
          key={index}
          contentStyle={{
            background: theme == "dark" ? "#0d0702" : "#fdf7f2",
            boxShadow: "none",
            border: "1px solid #c86b3c",
            textAlign: "left",
            padding: "1.3rem 2rem",
            visibility: "visible",
          }}
          contentArrowStyle={{
            borderRight: theme == "dark" ? "0.4rem solid #cfa087" : "0.4rem solid #784930",
            visibility: "visible",
          }}
          date={item.date}
          icon={item.icon}
          iconStyle={{
            background: theme == "dark" ? "#0d0702" : "#fdf7f2",
            fontSize: "1.5rem",
            visibility: "visible",
          }}
        >
            
         

            <h3 className="font-semibold capitalize">{item.title}</h3>
          
            <p className="font-normal !mt-0">{item.location}</p>
            <p className="!mt-1 !font-normal text-light-text dark:text-dark-text">{item.description}</p>
          
          </VerticalTimelineElement>
          
        ))}
      </VerticalTimeline>

     
    </section>

  );
}

export default Timeline;