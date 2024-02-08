"use client";

import React, { useState } from "react";
import HTMLicon from "@/public/assets/Techs/html.svg"
import CSSicon from "@/public/assets/Techs/css.svg"
import JSicon from "@/public/assets/Techs/javascript.svg"
import TSicon from "@/public/assets/Techs/typescript.svg"
import REACTJSicon from "@/public/assets/Techs/react.svg"
import NEXTJSicon from "@/public/assets/Techs/nextjs.svg"
import NODEJSicon from "@/public/assets/Techs/nodejs.svg"
import GITicon from "@/public/assets/Techs/git.svg"
import TAILWINDCSSicon from "@/public/assets/Techs/tailwind-css.svg"
import MONGODBicon from "@/public/assets/Techs/mongodb.png"
import FIREBASEicon from "@/public/assets/Techs/firebase.svg"
import PYTHONicon from "@/public/assets/Techs/python.svg"
import vscode from "@/public/assets/Techs/vscode.svg"
import figma from "@/public/assets/Techs/figma.svg"
import chrome from "@/public/assets/Techs/chrome.svg"
import github from "@/public/assets/Techs/github.svg"
import virtualbox from "@/public/assets/Techs/virtualbox.svg"


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
        {icon: HTMLicon },
        {icon: CSSicon },
        {icon: JSicon },
        {icon: TSicon },
        {icon: REACTJSicon },
        {icon: NEXTJSicon },
        {icon: NODEJSicon },
        {icon: GITicon },
        {icon: TAILWINDCSSicon },
        {icon: PYTHONicon },
        {icon: MONGODBicon },
        {icon: FIREBASEicon },
        {icon: vscode },
        {icon: figma }, 
        {icon: chrome }, 
        {icon: github }, 
        {icon: virtualbox }, 
    ]


  return (
    <section
      id="skills"
      
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 items-center "
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-left text-blue-700">My Backpack</h2>
      <li className="text-lg mb-5 text-left ">technologies i use !</li>
      <ul className="flex flex-wrap  justify-space-between gap-5 text-lg text-gray-800">
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