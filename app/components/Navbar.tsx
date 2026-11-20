'use client'
import React, { useEffect, useRef, useState } from 'react'
import {assets} from '../../assets/assets'
import Image from 'next/image'


const Navbar = ({
    isDarkMode,
    setIsDarkMode,
}: {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

    const [isScroll, setIsScroll] = useState(false);

    const sideMenuRef = useRef<HTMLUListElement | null>(null);

    const openMenu = ()=>{
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(-16rem)';
        }
    }

    const closeMenu = ()=>{
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)';
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50) {
                    setIsScroll(true)
            } else {
                    setIsScroll(false)
            }
        })
    },[])

  return (
   <>
   {/* FIND A better gradient, and make sure the gradient onlystay inside within the navbar space, 
   make sure the color goes and combines with the rest of the website */}
        <div className="fixed top-0 right-0 w-11/12 -z-10 pointer-events-none dark:hidden">
            <Image
                src={assets.header_bg_color}
                alt="Header Background"
                className="w-full -translate-y-[80%]"
                priority
            />
        </div>

        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center 
        justify-between backdrop-blur-md z-50 ${isScroll ? "dark:bg-darkTheme bg-white bg-opacity-50 backdrop-blur-lg shadow-sm": ""}`}>
           
            <a href="#top">
            <Image src={assets.logo} className='w-38 cursor-pointer mr-1' alt="Logo"/>
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
            dark:rounded-sm dark:text-white dark:bg-emerald-950 dark:border-gray-400 dark:border-1
             ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
                <li> <a className='font-Ovo' href="#header">Home</a> </li>
                <li> <a className='font-Ovo' href="#about">About</a> </li>
                <li> <a className='font-Ovo' href="#contact">Contact</a> </li>
                <li> <a className='font-Ovo' href="#services">Services</a> </li>
                <li> <a className='font-Ovo' href="#work">Portfolio</a> </li>
            </ul>

            <div className='flex items-center gap-4'>
                                            <button
                            onClick={() => {
                                alert("NAVBAR BUTTON WORKS");
                                setIsDarkMode((prev: boolean) => !prev);
                            }}
                            className="cursor-pointer"
                            >
                            <Image
                                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                                className="w-6"
                                alt="Moon Icon"
                            />
                            </button>
                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border
                 border-gray-500 rounded-md ml-4 font-Ovo dark:bg-emerald-950 dark:text-white'>Contact
                 <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3' alt="Contact Icon"/>
                </a>
                <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
                    <Image src={isDarkMode ? assets.menu_white : assets.menu_black} className='w-6' alt="Menu Icon"/>
                </button>
            </div>

            {/* Mobile Menu */}
            <ul ref={sideMenuRef} className="flex items-center md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 
            w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-emerald-950 dark:text-white">
                
                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={isDarkMode ? assets.close_white : assets.close_black} className='w-3 h-3 cursor-pointer' alt="Close Icon"/>
                </div>
                <li> <a className='font-Ovo'onClick={closeMenu} href="#header">Home</a> </li>
                <li> <a className='font-Ovo'onClick={closeMenu} href="#about">About</a> </li>
                <li> <a className='font-Ovo'onClick={closeMenu} href="#contact">Contact</a> </li>
                <li> <a className='font-Ovo'onClick={closeMenu} href="#services">Services</a> </li>
                <li> <a className='font-Ovo'onClick={closeMenu} href="#portfolio">Portfolio</a> </li>
                <li> <a className='font-Ovo'onClick={closeMenu} href="">Blog</a> </li>                
            </ul> 
        </nav>
   
   
   </>
  )
}

export default Navbar