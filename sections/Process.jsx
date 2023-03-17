"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { playfair } from '@/app/layout';

const processStages = [
  {
    title: "Discovery",
    text: "We begin by getting to know you and your business. We conduct research, interviews, and surveys to understand your goals, audience, and requirements. We also analyze your competition, industry trends, and best practices. This allows us to create a solid foundation for the project and align our vision with yours.",
    image: ""
  },
  {
    title: "Design",
    text: "We translate your ideas and needs into a visual and functional design that captures your brand identity and resonates with your audience. We create wireframes, mockups, and prototypes to illustrate the user experience and gather feedback from you. We also ensure that the design is responsive, accessible, and optimized for performance.",
    image: ""
  },
  {
    title: "Development",
    text: "We bring the design to life using the latest technologies and programming languages. We develop the front-end and back-end components of the project and integrate them into a seamless and user-friendly system. We also implement any third-party tools or APIs that are needed to enhance the functionality.",
    image: ""
  },
  {
    title: "Testing",
    text: "We rigorously test the project to ensure that it meets the highest standards of quality and usability. We perform functional testing, user acceptance testing, security testing, and performance testing. We also involve you in the testing process to gather feedback and ensure that the project meets your expectations.",
    image: ""
  },
]

function Process() {
  return (
    <section className="process py-20 bg-darkBackground">
      <div className='container mx-auto'>
        <h2 className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl text-white font-medium tracking-wide`}>Work Process</h2>
        <h3 className='text-neutral-400 text-lg md:text-xl lg:text-2xl font-medium mt-6'>A well-defined process helps delivering high-quality results</h3>


      </div>
    </section>
  )
}

export default Process