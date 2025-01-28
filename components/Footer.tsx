import Link from 'next/link'
import React from 'react'

import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaPatreon, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer items-center pb-2 text-light-text dark:text-dark-text px-5  relative bottom-0 dark:bg-dark-background bg-light-background">
    <div className="container2 max-w-[800px] my-auto flex justify-between items-center ">
      <div className="social-icons flex gap-2 ">
        <Link href="https://www.linkedin.com/in/mustafa-bhikhapur" className=" text-2xl text-light-text dark:text-dark-text" target="_blank" rel="noopener noreferrer" >
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/B-Mustafa" className=" text-2xl text-light-text dark:text-dark-text" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </Link>
        <Link href="https://discord.com/users/790966930043305984" className=" text-2xl text-light-text dark:text-dark-text" target="_blank" rel="noopener noreferrer">
          <FaDiscord />
        </Link>
        <Link href="https://www.instagram.com/_mustafa_0203/?igshid=MzNINGNkZWQ4Mg%3D%3D" className=" text-2xl text-light-text dark:text-dark-text" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </Link>
        <Link href="https://www.youtube.com/@MUSTAFA-up2ej" className=" text-2xl text-light-text dark:text-dark-text" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </Link>
      </div>
      <p className="copyright text-base">&copy; Copyright 2024 Mustafa . All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
