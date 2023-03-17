"use client"
import React from 'react'
import { motion } from 'framer-motion'

function Testimonial({ text, name, job, instagram, direction, variants }) {
  return (
    <motion.div
      custom={direction}
      key={text}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: .2 }
      }}
      className='border-slate-700 shadow-xl border-solid border-[1px] px-10 md:h-[260px] h-[220px] rounded-3xl flex flex-col justify-around bg-darkBackground'>

      <h2 className='text-lg md:text-[22px] text-slate-200 font-medium'>
        "{text}"
      </h2>
      <div>
        <p className=''>
          <span className='text-white font-medium'>{name}</span>
          <span className='ml-1 text-custom-lightGray italic'>{instagram}</span>
        </p>
        <p className='text-custom-lightGray mt-2'>{job}</p>
      </div>
    </motion.div>
  )
}

export default Testimonial