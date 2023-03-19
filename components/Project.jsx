"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Project({ title, description, image }) {
  const [isHovered, setIsHovered] = useState(false);

  const hover = () => setIsHovered(true);
  const unHover = () => setIsHovered(false);

  const style = {
    background: `linear-gradient(
      to top,
      rgba(0, 0, 0, .8), 
      rgba(0, 0, 0, 0.3)
    ),
    url(${image})`
  }

  const hoverStyle = {
    background: `linear-gradient(
      to top,
      rgba(0, 10, 30, .8), 
      rgba(0, 10, 30, .8)
    ),
    url(${image})`
  }

  return (
    <motion.div
      onHoverStart={hover}
      onHoverEnd={unHover}
      style={style}
      className="bg-no-repeat bg-cover relative bg-center h-[300px] flex items-end p-4 cursor-pointer">
      <h4 className='text-white font-semibold text-[22px]'>{title}</h4>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            exit={{ y: 300 }}
            transition={{ type: 'just' }}
            style={hoverStyle}
            className="absolute bg-center bg-cover w-full h-full bg-blue-300 top-0 left-0 p-4 flex flex-col">
              <h4 className='font-semibold text-xl text-white'>{title}</h4>
              <p className='text-custom-lightGray mt-3 font-medium lg:text-lg'>{ description }</p>
              <a className='mt-auto text-custom-green font-medium md:text-lg'>
                View live
                <i className="fa-solid fa-arrow-right-long ml-2"></i>
              </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Project