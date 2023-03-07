"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { merriweather, poppins, sourceSans } from '@/app/layout';
import useMediaQuery from '@/utils/useMediaQuery';

const Navbar = () => {
  const [windowWidth, breakpoint] = useMediaQuery();
  const [navOpened, setNavOpened] = useState(false);

  return (
    <div className=' absolute top-0 h-[75px] w-full bg-white border-solid  border-b-[1px] border-b-neutral-300'>
      <nav className={`${sourceSans.className} h-full container mx-auto flex justify-between items-center px-3 md:px-4 text-[17px]`}>
        {breakpoint !== 'sm' ? (
          <>
            <div className='flex items-center'>
              <h1 className={`text-2xl font-bold mr-6 flex gap-2 items-center ${merriweather.className}`}>
                <i className="fa-solid fa-chart-simple"></i>
                <span>Digio</span>
              </h1>
              <NavLink
                title="Services"
                hoverComponent={
                  <div className='flex gap-8 px-5 py-4 h-auto'>
                    <div className='w-[200px]'>
                      <h3 className={`text-base font-medium text-neutral-800 ${poppins.className}`}>
                        <span>Digital Marketing</span>
                        <i className="fa-solid fa-arrow-right-long ml-3 text-green-600"></i>
                      </h3>
                      <hr className='mt-3 border-green-300' />
                      <ul className='pt-4 pb-2 px-1 flex flex-col gap-y-3 text-neutral-700'>
                        <li><a href="">SEO</a></li>
                        <li><a href="">Social Media Management</a></li>
                        <li><a href="">PPC</a></li>
                        <li><a href="">Content Marketing</a></li>
                      </ul>
                    </div>
                    <div className='w-[200px]'>
                      <h3 className={`text-base font-medium text-neutral-800 ${poppins.className}`}>
                        <span>Website</span>
                        <i className="fa-solid fa-arrow-right-long ml-3 text-green-600"></i>
                      </h3>
                      <hr className='mt-3 border-green-300' />
                      <ul className='pt-4 pb-2 px-1 flex flex-col gap-y-3 text-neutral-700'>
                        <li><a href="">Development</a></li>
                        <li><a href="">Design</a></li>
                        <li><a href="">Maintenance</a></li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                      </ul>
                    </div>
                  </div>} />
              <NavLink
                title="Solutions"
                hoverComponent={<p>Solutions Card</p>} />
              <NavLink
                title="Company"
                hoverComponent={<p>Company Card</p>} />
              <a href="#" className='px-3 md:px-4 lg:px-5 text-neutral-600'>Pricing</a>
            </div>

            <div className='flex gap-6'>
              <button>Sign in</button>
              <button className={`md:px-4 px-3 md:py-[10px] py-2 border-solid border-[1px] border-neutral-600  bg-green-400 font-medium rounded-md hover:bg-emerald-300 transition-all text-base ${poppins.className}`}>Get Started</button>
            </div>
          </>
        ) : (
          <div className='flex justify-between items-center w-full'>
            <h1 className={`text-2xl font-bold mr-6 flex gap-2 items-center ${merriweather.className}`}>
              <i className="fa-solid fa-chart-simple"></i>
              <span>Digio</span>
            </h1>

            <button className='text-2xl' onClick={() => setNavOpened(!navOpened)}>
              <i className="fa-solid fa-bars"></i>
            </button>

            <AnimatePresence>
              {navOpened && (
                <motion.div
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100vw" }}
                  transition={{ type: 'just', duration: .2 }}
                  className="bg-white h-[calc(100vh-75px)] w-full absolute top-[75px] left-0" >
                  Navbar
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

      </nav>

      <div>{breakpoint}</div>
    </div>
  )
}

const NavLink = ({ hoverComponent, title }) => {
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <div className="navLink relative">
      <motion.a
        onHoverStart={(e) => setIsLinkHovered(true)}
        onHoverEnd={(e) => setIsLinkHovered(false)}
        href="#"
        className='cursor-pointer px-3 md:px-4 lg:px-5 text-neutral-600'>{title}</motion.a>

      {
        isLinkHovered && <motion.div className='absolute bg-white border-solid border-[1px] border-neutral-300 rounded-lg p-3 pt-4 top-8 w-auto' layoutId="card">
          {hoverComponent}
        </motion.div>
      }
    </div>
  )
}

export default Navbar