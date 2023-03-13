"use client"
import React from 'react'
import Service from '@/components/Service'

export default function Services() {
  return (
    <section className="services bg-darkBackground px-4 lg:px-0 py-8 pb-24">
      <div className='container mx-auto grid gap-6 place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <Service
          icon="fa-solid fa-code"
          title="Web Development"
          description="We create visually stunning and user-friendly websites optimized for speed and performance."
        />
        <Service
          icon="fa-solid fa-arrow-up-right-dots"
          title="Digital Marketing"
          description="We drive targeted traffic and leads through various online channels to help you achieve your business goals."
        />
        <Service
          icon="fa-solid fa-mobile"
          title="App Development"
          description="We create custom mobile apps with intuitive user experiences and features to increase engagement."
        />

      </div>
    </section>
  )
}