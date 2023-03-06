"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { merriweather, poppins, sourceSans } from '@/app/layout';

const Navbar = () => {
  return (
    <div className=' absolute top-0 h-[75px] w-full bg-white border-solid  border-b-[1px] border-b-neutral-300'>
      <nav className={`${sourceSans.className} h-full container mx-auto flex justify-between items-center px-4 text-[17px]`}>
        <div className='flex items-center'>
          <h1 className={`text-2xl font-bold mr-6 ${merriweather.className}`}>Digio</h1>
          <NavLink
            title="Products"
            hoverComponent={<p>Products Card</p>} />
          <NavLink
            title="Solutions"
            hoverComponent={<p>Solutions Card</p>} />
          <NavLink
            title="Company"
            hoverComponent={<p>Company Card</p>} />
          <a href="#" className='px-4 text-neutral-600'>Pricing</a>
        </div>

        <div className='flex gap-4'>
          <button>Sign in</button>
          <button className='px-4 py-2 border-solid border-[1px] border-neutral-600  bg-green-400 font-medium rounded-md hover:bg-emerald-300 transition-all'>Get Started</button>
        </div>
      </nav>
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
        className='cursor-pointer px-4 text-neutral-600'>{title}</motion.a>

      {
        isLinkHovered && <motion.div className='absolute bg-blue-300 px-10 py-8 top-8' layoutId="card">
          {hoverComponent}
        </motion.div>
      }
    </div>
  )
}

export default Navbar