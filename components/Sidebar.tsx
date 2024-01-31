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
    href: '/services',
    icon: FaServicestack,
  },
  {
    name: 'Blogs',
    href: '/blog',
    icon: FaBlog,
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
        <aside className='z-10 ' >
          
          <section className={`z-10 h-screen overflow-y-auto ${isOpen ? "max-lg:block" : "max-md:hidden"} relative w-60 lg:max-w[150px] dark:bg-gray-800 bg-[#d5dbdf]`}>
            <div className="flex w-full  flex-col gap-10 justify-between items-center">
              <div className="flex w-full flex-1 flex-col gap-10 justify-between items-center ">
                <Image src="/assets/sidemenu.jpg" width={100} height={50} alt="Mustafa" className='rounded-full' />
                <p className="font-bold text-xl text-black dark:text-white">Mustafa </p>
              </div>
    
              <div>
                {SidebarItems.map((link) => {
                  const isActive = activeLink === link;
    
                  return (
                    <a
                      href={`${link.href}`}
                      key={link.name}
                      className={`items-center  text-lg text-black flex bg-[#f3f4f6] dark:bg-gray-700 rounded-md dark:text-white  mb-4 p-3  ${
                        isActive ? " text-blue-600 dark:text-blue-600" : "text-black dark:text-white"
                      }`}
                      onClick={() => handleLinkClick(link)}
                      >
                      {<link.icon className="item-center" />}
                      <p className='pl-2'>{link.name}</p>
                    </a>
                  );
                })}
              </div>
               
              </div>
            
          </section>
        </aside>
      );
    };
    
    export default Sidebar;