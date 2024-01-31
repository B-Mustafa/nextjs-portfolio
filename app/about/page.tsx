"use client";

import React from "react";

import { motion } from "framer-motion";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";


export default function About() {
  
  
  return (
  <>
    <motion.section
      
      className=" max-w-full p-5 items-center leading-8  scroll-mt-28 flex flex-col bg-[#DEE4E7] dark:bg-gray-900 h-screen"
      
     
     
      id="about"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-left text-blue-700">About me</h2>
      <p className="mb-3">
        After completing my 12th  in{" "}
        <span className="font-medium">Science Biology</span>, I decided to pursue my
        passion for programming. I enrolled in a a Diploma Course of{" "}
        <span className="font-medium">Computer Engineering</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript . I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies and surfing over web to keep myself updated. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Artificial Intelligence</span>
      </p>
    
    </motion.section>

    <motion.section
    className=" max-w-full p-5 text-center leading-8  scroll-mt-28 flex flex-col bg-[#DEE4E7] dark:bg-gray-900 "
    >
      <Skills/>

    </motion.section>

    <motion.section
    className=" max-w-full p-5 text-center leading-8  scroll-mt-28 flex flex-col bg-[#DEE4E7] dark:bg-gray-900 "
    >
      <Timeline/>

    </motion.section>

     <Footer/>
    </>
  );
}