"use client"
import React, { useState } from 'react';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { poppins, playfair } from '@/app/layout';

const About = () => {
  const [selectedTab, setSelectedTab] = useState('Our Work Process')

  return (
    <section className="about py-10 lg:py-0 xl:py-10">
      <div className='container mx-auto py-10 px-4'>
        <h2 className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl text-white font-medium tracking-wide`}>Innovative Solutions for Your Online Presence</h2>
        <h3 className='text-neutral-400 text-lg md:text-xl lg:text-2xl font-medium mt-6'>We deliver high quality, responsive and fast websites.</h3>

        <div className='flex flex-wrap justify-center lg:justify-between mt-10 md:mt-[70px] lg:mt-10 items-center lg:flex-nowrap'>
          <div className='flex flex-col w-full lg:w-1/2 gap-10'>
            <LayoutGroup>
              <Tab
                title="Who We Are"
                description="Digio is a digital marketing agency founded in 2018 to help businesses grow their online presence. Our team of experts offers customized solutions to improve search engine optimization (SEO), social media, email marketing, and pay-per-click advertising. We prioritize transparency, open communication, and keeping clients informed of progress."
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab} />
              <Tab
                title="Our Work Process"
                description="Our work process is centered on clear communication, collaboration, and a commitment to quality. We start with a thorough discovery phase to understand clients' needs, then develop a custom strategy. We implement, test, and refine until we achieve the desired results. We always prioritize transparency and accountability."
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab} />
              <Tab
                title="Technologies"
                description="At our company, we leverage cutting-edge technologies like React, Next, Firebase, Python, Django, and MongoDB to deliver innovative solutions to our clients. Our team of experts stays up-to-date on the latest advancements in the field to ensure that we always offer the best and most effective tools for our clients."
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab} />
            </LayoutGroup>
          </div>
          <img className='w-[80%] h-auto lg:w-[40%]' src="https://ik.imagekit.io/0s9lwb2yr/Digio/2965738-removebg_IJKrAku5M.png?updatedAt=1678558641713" alt="" />
        </div>
      </div>
    </section>
  )
}

const Tab = ({ title, description, selectedTab, setSelectedTab }) => {
  const isSelected = title === selectedTab;
  const select = () => setSelectedTab(title);
  const deselect = () => setSelectedTab("");

  return (
    <div
      className={`border-solid border-l-[3px] ${isSelected ? 'border-l-blue-500' : 'border-l-neutral-500'} px-8 py-4`}>
      <h3
        className={`text-lg md:text-[22px] text-white font-bold cursor-pointer ${isSelected && "mb-4"}`}
        onClick={() => isSelected ? deselect() : select()}>{title}</h3>

      <AnimatePresence>
        {isSelected && (
          <motion.p 
          initial={{ height: 0 }} 
          animate={{ height: "auto"}} 
          exit={{ height: 0 }} className={`text-neutral-400 overflow-hidden font-medium leading-8 md:text-[17px] max-w-2xl`}>
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default About