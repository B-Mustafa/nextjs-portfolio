"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "next-themes";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

interface AnimatedTimelineElementProps {
  isVisible: boolean;
  children: React.ReactNode;
}

function AnimatedTimelineElement({
  isVisible,
  children,
}: AnimatedTimelineElementProps) {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      {children}
    </motion.div>
  );
}

function Timeline() {
  const { theme } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true });

  const experiencesData = [
    {
      title: "Graduated bootcamp",
      location: "Miami, FL",
      description:
        "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
      icon: React.createElement(LuGraduationCap),
      date: "2019",
    },
    {
      title: "Front-End Developer",
      location: "Orlando, FL",
      description:
        "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
      icon: React.createElement(CgWorkAlt),
      date: "2019 - 2021",
    },
    {
      title: "Full-Stack Developer",
      location: "Houston, TX",
      description:
        "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
      icon: React.createElement(FaReact),
      date: "2021 - present",
    },
  ];

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <h2>My experience</h2>
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
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="font-normal !mt-0">{item.location}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>

  );
}

export default Timeline;