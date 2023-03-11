import React from 'react';
import { sourceSans } from '@/app/layout';

function Service({ icon, title, description }) {
  return (
    <div className='border-solid border-[1px] border-slate-600 p-5 md:p-6 lg:p-8 rounded-2xl hover:bg-slate-900 transition-all cursor-pointer'>
      <i className={`${icon} text-green-300 text-2xl lg:text-3xl`}></i>
      <h3 className='text-xl text-white font-semibold mt-4'>{title}</h3>
      <p className={`mt-3 text-custom-gray text-lg ${sourceSans.className}`}>{description}</p>
      <button className='mt-6 text-green-300 text-lg flex items-center gap-1'>Learn more <span className="fa-solid fa-arrow-right-long ml-1"></span></button>
    </div>
  )
}

export default Service