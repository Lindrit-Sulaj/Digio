import React from 'react';
import { motion } from 'framer-motion';

function Step({ title, text, img }) {
  return (
    <div className='w-full flex items-center flex-wrap justify-between gap-y-10'>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: 'just' }}
        className='w-full lg:w-1/2'>
        <h4 className='text-white font-semibold text-xl md:text-2xl mb-4'>{title}</h4>
        <p className='md:text-[17px] font-medium text-custom-lightGray leading-8 max-w-3xl'>{text}</p>
        <button className='mt-4 text-lg text-blue-400 font-medium underline underline-offset-4 hover:text-blue-300'>Learn more</button>
      </motion.div>
      <motion.img
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: 'just' }} className='w-full lg:w-1/2 md:max-w-[400px] mx-auto xl:max-w-[500px]' src={img} alt={`${title} image`} />
    </div>
  )
}

export default Step