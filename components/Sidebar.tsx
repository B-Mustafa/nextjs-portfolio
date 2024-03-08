"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { FaAddressBook, FaBlog, FaHome, FaProjectDiagram, FaServicestack, FaUser } from 'react-icons/fa';
import { useMenuStore } from '@/store/useMenuStore';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu3Fill } from 'react-icons/ri';

// Define SidebarItems
const SidebarItems = [
  {
    name: 'Home',
    href: '/',
    icon: FaHome,
  },
  {
    name: 'About',
    href: '/about',
    icon: FaUser,
  },
  {
    name: 'Projects',
    href: '/project',
    icon: FaProjectDiagram,
  },
  {
    name: 'Services',
    href: '/service',
    icon: FaServicestack,
  },

  {
    name: 'Contact',
    href: '/contact',
    icon: FaAddressBook,
  },
];

const Sidebar = () => {
    const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(SidebarItems[0]);
  const { isOpen, closeMobileMenu , toggleMenu } = useMenuStore();

  const handleLinkClick = (link:typeof SidebarItems[0]) => {
    closeMobileMenu();
    setActiveLink(link);
  };

  const handleScroll = () => {
    const sections = SidebarItems.map((link) => document.getElementById(link.href));

    const scrollPosition = window.scrollY;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section) {
        if (section.offsetTop <= scrollPosition + 100) {
          setActiveLink(SidebarItems[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const cleanedPathname = pathname.replace(/^#/, "");

    const matchedLink = SidebarItems.find(
      (link) => cleanedPathname === link.href || (link.href === "/" && cleanedPathname === "")
    );
    if (matchedLink) {
      setActiveLink(matchedLink);
    }
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  
    return (
        <aside className='z-10 items-center' >
          
          <section className={`z-10 h-screen overflow-y-auto ${isOpen ? "max-lg:block" : "max-md:hidden"} relative w-60 lg:max-w[150px] dark:bg-dark-background bg-light-background shadow-md shadow-dark-background dark:shadow-light-background flex justify-center`} >
           
    
              <div className='flex flex-col justify-center'>
                <p className="font-bold text-xl text-light-text dark:text-dark-text text-center mb-6">Mustafa </p>
                {SidebarItems.map((link) => {
                  const isActive = activeLink === link;
    
                  return (
                    <a
                      href={`${link.href}`}
                      key={link.name}
                      className={`items-center  text-lg text-text flex bg-light-background dark:bg-dark-background rounded-md dark:text-dark-text text-light-text  mb-4 p-3 border border-dark-accent dark:border-light-accent dark:border-opacity-30  border-opacity-30 ${
                        isActive ? " text-blue-600" : "text-text "
                      }`}
                      onClick={() => handleLinkClick(link)}
                      >
                      {<link.icon className="item-center" />}
                      <p className='pl-2'>{link.name}</p>
                    </a>
                  );
                })}
              </div>
               
        
            
          </section>
        </aside>
      );
    };
    
    export default Sidebar;