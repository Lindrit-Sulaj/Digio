import React from 'react';
import { sourceSans, poppins } from '@/app/layout';

function StartToday() {
  return (
    <section className="startToday my-10">
      <div className='container mx-auto flex flex-wrap items-stretch lg:flex-nowrap gap-12'>
        <div className="mx-auto w-full lg:w-[62%] start-today rounded-3xl overflow-hidden px-12 flex flex-col justify-center items-start py-16">
          <p className={`border-solid border-l-[1px] border-l-custom-green px-3 uppercase ${sourceSans.className} uppercase text-white tracking-widest`}>
            Start Here
          </p>
          <h1 className={`text-2xl lg:text-3xl font-bold text-white mt-6 max-w-2xl`}>Innovation starts with collaboration. Let's partner up.</h1>
          <p className='text-custom-lightGray lg:text-lg font-medium mt-6'>In a fast-paced world, let Digio be your steady partner for success.</p>
          <button className='mt-6 px-6 rounded-lg py-[13px] bg-custom-green font-medium border-solid border-[1px] border-neutral-600'>Get Started</button>
        </div>
        <div className='w-full lg:w-[38%] border-solid px-10 py-12 border-[1px] border-neutral-300 rounded-3xl m-2 md:m-0'>
          <p className={`border-solid border-l-[1px] border-l-custom-green px-3 uppercase ${sourceSans.className} uppercase tracking-widest mb-6`}>
            Start Here
          </p>

          <ul>
            <li className='flex items-center border-solid border-b-[1px] border-b-neutral-200 py-3 mt-4'>
              <span className="w-2 h-2 block rounded-full bg-blue-500 mr-3"></span>
              <span>Consulting</span>
              <i className="fa-solid fa-chevron-right ml-3 text-green-500"></i>
            </li>
            <li className='flex items-center border-solid border-b-[1px] border-b-neutral-200 py-3 mt-4'>
              <span className="w-2 h-2 block rounded-full bg-blue-500 mr-3"></span>
              <span>Blog</span>
              <i className="fa-solid fa-chevron-right ml-3 text-green-500"></i>
            </li>
            <li className='flex items-center border-solid border-b-[1px] border-b-neutral-200 py-3 mt-4'>
              <span className="w-2 h-2 block rounded-full bg-blue-500 mr-3"></span>
              <span>Careers</span>
              <i className="fa-solid fa-chevron-right ml-3 text-green-500"></i>
            </li>
            <li className='flex items-center border-solid border-b-[1px] border-b-neutral-200 py-3 mt-4'>
              <span className="w-2 h-2 block rounded-full bg-blue-500 mr-3"></span>
              <span>Leadership</span>
              <i className="fa-solid fa-chevron-right ml-3 text-green-500"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default StartToday