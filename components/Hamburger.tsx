"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggler } from './ThemeToggler'
import { AiOutlineClose } from 'react-icons/ai'
import { RiMenu3Fill } from 'react-icons/ri'
import { useMenuStore } from '@/store/useMenuStore'

function Hamburger() {
    const { isOpen, closeMobileMenu , toggleMenu } = useMenuStore();
  return (
    <header className='flex item-center justify-between z-20'>
      <div className="text-2xl z-50  md:invisible flex justify-end p-2 absolute top-0 right-0" onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose /> : <RiMenu3Fill />}
        </div>
      <div className='flex justify-center item-center space-x-2 px-5  absolute top-0 right-5 md:right-2'>
        {/* Theme toggler */}
        <ThemeToggler/>

        
      </div>
    </header>
  )
}

export default Hamburger;
