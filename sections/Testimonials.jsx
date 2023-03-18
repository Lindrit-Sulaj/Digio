"use client"
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Testimonial from '@/components/Testimonial';

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 300 : -300,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    };
  }
};


const testimonials = [
  {
    text: "Digio listened to my needs and delivered a beautiful and user-friendly site",
    profession: "Graphic Designer",
    instagram: "@artlover87",
    name: "Sarah Johnson"
  },
  {
    text: "I was impressed by Digio's professionalism and attention to detail",
    profession: "Small Business Owner",
    instagram: "@shopaholic22",
    name: "John Smith"
  },
  {
    text: "Digio's web development skills are top-notch. They created a custom e-commerce platform for my online store!",
    profession: "Entrepreneur",
    instagram: "@startupsavvy",
    name: "Emily Davis"
  }
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 is right, -1 is left

  const paginate = (newDirection) => {
    setIndex(index + newDirection);
    setDirection(newDirection)
  }

  return (
    <section className="testimonials bg-backgroundSecondary px-4 py-14 lg:px-0 lg:py-20">
      <div className='flex flex-wrap lg:flex-nowrap gap-y-10 mx-auto container items-center gap-x-8'>
        <div className='w-full lg:w-1/2'>
          <h2 className='text-white font-bold text-3xl md:text-4xl'>Don't just take our word for it</h2>
          <p className='max-w-xl text-custom-lightGray text-[17px] font-medium mt-4'>Check out what our clients have to say about our services and see why Digio is the best choice for your digital marketing and web development needs.</p>

          <div className='border-solid border-[1px] border-neutral-600 px-3 py-3 flex rounded-full w-[80px] justify-center gap-1 mt-10'>
            <motion.span layout className={`${index === 0 ? "w-8 bg-custom-green" : "w-3 bg-white"} h-2 rounded-full`}></motion.span>
            <motion.span layout className={`${index === 1 ? "w-8 bg-custom-green" : "w-3 bg-white"} h-2 rounded-full`}></motion.span>
            <motion.span layout className={`${index === 2 ? "w-8 bg-custom-green" : "w-3 bg-white"} h-2 rounded-full `}></motion.span>
          </div>
        </div>

        <div className='w-full lg:w-1/2'>
          <AnimatePresence initial={false} custom={direction}>
            <Testimonial
              direction={direction}
              variants={variants}
              name={testimonials[index].name}
              job={testimonials[index].profession}
              instagram={testimonials[index].instagram}
              text={testimonials[index].text} />
          </AnimatePresence>

          <div className='flex justify-end gap-4 mt-4 px-8'>
            <button disabled={index === 0} onClick={() => paginate(-1)} className={`bg-white w-10 h-10 rounded-full ${index === 0 && "opacity-50"}`}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button disabled={index + 1 === testimonials.length} onClick={() => paginate(1)} className={`bg-custom-green w-10 h-10 rounded-full ${index + 1 === testimonials.length && "opacity-50"}`}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials