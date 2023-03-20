"use client"
import React, { useState } from 'react'
import useMediaQuery from '@/utils/useMediaQuery';
import { motion, AnimatePresence } from 'framer-motion'

function Project({ title, description, image }) {
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, breakpoint] = useMediaQuery();

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
      rgba(0, 3, 10, .9), 
      rgba(0, 3, 10, .9)
    ),
    url(${image})`
  }

  return (
    <>
      {breakpoint !== "sm" ? (
        <motion.div
          onHoverStart={hover}
          onHoverEnd={unHover}
          style={style}
          className="bg-no-repeat bg-cover relative bg-center h-[180px] md:h-[300px] flex items-end p-4 cursor-pointer">
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
                <p className='text-custom-lightGray mt-3 font-medium lg:text-lg'>{description}</p>
                <a className='mt-auto text-custom-green font-medium md:text-lg'>
                  View live
                  <i className="fa-solid fa-arrow-right-long ml-2"></i>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className='px-4 py-2 cursor-pointer hover:bg-slate-100 rounded-lg mx-3'>
          <div className="flex justify-between gap-6">
            <div className='w-3/4'>
              <h4 className='font-semibold text-lg text-blue-600'>{title}</h4>
              <p className='text-neutral-500 mt-3'>{description.length > 60 ? `${description.slice(0, 60)}...` : description}</p>
            </div>
            <img className='w-1/4 object-cover rounded-md' src={image} alt={title} />
          </div>
        </div>
      )}

    </>
  )
}

export default Project