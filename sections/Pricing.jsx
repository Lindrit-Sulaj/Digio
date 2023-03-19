"use client"
import React, { useState, useMemo } from 'react';
import PricingBox from '@/components/PricingBox';
import { playfair } from '@/app/layout';

const pricingData = [
  {
    "name": "Starter",
    "price": "$999",
    "description": "Ideal for small businesses looking to establish their online presence.",
    "features": [
      "5-page website design",
      "Responsive design",
      "Basic SEO optimization",
      "Google Analytics integration",
      "1 round of revisions",
      "2-week turnaround time"
    ]
  },
  {
    "name": "Professional",
    "price": "$2,499",
    "description": "Perfect for growing businesses that need a more robust online presence.",
    "features": [
      "10-page website design",
      "Responsive design",
      "Advanced SEO optimization",
      "Google Analytics integration",
      "2 rounds of revisions",
      "4-week turnaround time",
      "Social media integration",
      "Contact form integration"
    ]
  },
  {
    "name": "Enterprise",
    "price": "$4,999",
    "description": "Tailored to large businesses with complex requirements and high traffic.",
    "features": [
      "Custom website design",
      "Responsive design",
      "Advanced SEO optimization",
      "Google Analytics integration",
      "Unlimited revisions",
      "6-week turnaround time",
      "E-commerce integration",
      "Content management system",
      "Custom API development"
    ]
  },
  {
    "name": "Custom",
    "price": "$500-$10k",
    "description": "Tailored for unique business needs",
    "features": [
      "Custom website design and development",
      "Custom SEO optimization",
      "Advanced features and functionalities",
      "Flexible pricing and timeline",
      "Unlimited revision rounds"
    ]
  }
]

function Pricing() {
  const [selectedBox, setSelectedBox] = useState("Starter");

  const box = useMemo(() => {
    for (let object of pricingData) {
      if (object.name === selectedBox) {
        return object;
      }
    }
  }, [selectedBox]);

  return (
    <section className="pricing">
      <div className='container mx-auto py-10 px-6 md:0'>
        <div className=''>
          <h2 className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide`}>Simple, transparent pricing</h2>
          <p className='text-lg md:text-xl lg:text-2xl font-medium mt-3 md:mt-6 text-blue-500'>Choose the package that fits you</p>
        </div>
        <div className='hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-6'>
          {pricingData.map(elem => (
            <PricingBox
              key={elem.name}
              name={elem.name}
              price={elem.price}
              features={elem.features}
              description={elem.description}
              top={elem.name === "Professional"} />
          ))}
        </div>
        <div className='md:hidden pricing__buttons flex overflow-x-auto gap-3 mt-6'>
          { pricingData.map((elem, index) => (
            <button onClick={() => setSelectedBox(elem.name)} className={`flex flex-col border-solid border-[1px] border-neutral-200 rounded-lg px-3 py-1 ${elem.name === selectedBox ? "bg-blue-500 border-blue-500 text-white" : ""}`}>
              <span className={`text-[16px] text-neutral-700 ${elem.name === selectedBox && "text-white"}`}>{elem.name}</span>
              <span className={`text-sm text-neutral-700 ${elem.name === selectedBox && "text-white opacity-75"}`}>{elem.price}</span>
            </button>
          ))}
        </div>
        <div className='md:hidden mt-4'>
          <PricingBox
            name={box.name}
            price={box.price}
            features={box.features}
            description={box.description}
            top={box.name === "Professional"}
          />
        </div>
      </div>
    </section>
  )
}

export default Pricing