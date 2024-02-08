"use client";

import React, { useState } from "react";
import HTMLicon from "@/public/assets/html.svg"
import CSSicon from "@/public/assets/css.svg"
import JSicon from "@/public/assets/javascript.svg"
import TSicon from "@/public/assets/typescript.svg"
import REACTJSicon from "@/public/assets/react.svg"
import NEXTJSicon from "@/public/assets/nextjs.svg"
import NODEJSicon from "@/public/assets/nodejs.svg"
import GITicon from "@/public/assets/git.svg"
import TAILWINDCSSicon from "@/public/assets/tailwind-css.svg"
import MONGODBicon from "@/public/assets/mongodb.png"
import FIREBASEicon from "@/public/assets/firebase.svg"
import EXPRESSJSicon from "@/public/assets/expressjs.svg"
import PYTHONicon from "@/public/assets/python.svg"


import { motion } from "framer-motion";
import Image from "next/image";

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

export default function Skills() {

 
    const SkillsData = [
        {icon: HTMLicon , name:"HTML" , description:"Skeleton of website"},
        {icon: CSSicon , name:"CSS" , description:""},
        {icon: JSicon , name:"Javascript" , description:"used for functionality"},
        {icon: TSicon , name:"" , description:""},
        {icon: REACTJSicon , name:"" , description:""},
        {icon: NEXTJSicon , name:"" , description:""},
        {icon: NODEJSicon , name:"" , description:""},
        {icon: GITicon , name:"" , description:""},
        {icon: TAILWINDCSSicon , name:"" , description:""},
        {icon: PYTHONicon , name:"" , description:""},
        {icon: MONGODBicon , name:"" , description:""},
        {icon: FIREBASEicon , name:"" , description:""},
        {icon: EXPRESSJSicon , name:"" , description:""},
    ]


  return (
    <section
      id="skills"
      
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 items-center "
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-left text-blue-700">My skills</h2>
      <ul className="flex flex-wrap  justify-around gap-3 text-lg text-gray-800">
        {SkillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
            custom={index}
            
          >
          
              <Image src={skill.icon} alt="tech-icon" />
             
          </motion.li>
        ))}
      </ul>
    </section>
  );
}