"use client";
import React, { useState } from 'react';
import Step from '@/components/Step';
import { motion } from 'framer-motion';
import { playfair } from '@/app/layout';

const processStages = [
  {
    title: "Discovery",
    text: "We begin by getting to know you and your business. We conduct research, interviews, and surveys to understand your goals, audience, and requirements. We also analyze your competition, industry trends, and best practices.",
    image: "https://ik.imagekit.io/0s9lwb2yr/Digio/Taking_notes-pana_Sf4HLogRn.png?updatedAt=1679075325434"
  },
  {
    title: "Design",
    text: "We translate your ideas and needs into a visual and functional design that captures your brand identity and resonates with your audience. We create wireframes, mockups, and prototypes to illustrate the user experience and gather feedback from you. We also ensure that the design is responsive, accessible, and optimized for performance.",
    image: "https://ik.imagekit.io/0s9lwb2yr/Digio/Add_color-pana_UlzqtkYWq.png?updatedAt=1679083166228"
  },
  {
    title: "Development",
    text: "We bring the design to life using the latest technologies and programming languages. We develop the front-end and back-end components of the project and integrate them into a seamless and user-friendly system. We also implement any third-party tools or APIs that are needed to enhance the functionality.",
    image: "https://ik.imagekit.io/0s9lwb2yr/Digio/Designer-bro_jSNUHtv_M.png?updatedAt=1679083699454"
  },
  {
    title: "Maintenance",
    text: "We provide ongoing support and maintenance to ensure that the project continues to perform well and stay up-to-date. We perform updates, backups, and security checks to prevent any downtime or data loss. We also provide analytics and reports to measure the success of the project and suggest improvements.",
    image: "https://ik.imagekit.io/0s9lwb2yr/Digio/Maintenance-pana_D4krKuhfh.png?updatedAt=1679083402540"
  },
]

function Process() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className='process'>
      <section className="py-20 px-8 xl:px-0 overflow-x-hidden rounded-tr-[120px]">
        <div className='container mx-auto'>
          <h2 className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl text-white font-medium tracking-wide`}>Work Process</h2>
          <h3 className='text-neutral-400 text-lg md:text-xl lg:text-2xl font-medium mt-6'>A well-defined process helps delivering high-quality results</h3>
          <div className='process__buttons flex gap-3 justify-between md:justify-start md:gap-4 mt-6 mb-14 lg:mb-0 overflow-x-auto'>
            {processStages.map((stage, index) => (
              <Button
                key={index}
                index={index}
                name={stage.title}
                setCurrentStep={setCurrentStep}
                currentStep={currentStep} />
            ))}
          </div>
          <Step
            title={processStages[currentStep].title}
            text={processStages[currentStep].text}
            img={processStages[currentStep].image} />
        </div>
      </section>
    </div>
  )
}

function Button({ name, currentStep, setCurrentStep, index }) {
  return (
    <button className={`w-auto md:px-6 md:py-3 md:border-solid md:border-2 font-medium rounded-full ${currentStep === index ? "text-custom-green md:text-black md:bg-custom-green underline underline-offset-4 md:no-underline md:border-custom-green" : "bg-transparent md:border-neutral-300 text-white md:hover:border-custom-green"} transition-all`} onClick={() => { setCurrentStep(index) }}>{name}</button>
  )
}

export default Process