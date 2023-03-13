import React from 'react'

function Results() {
  return (
    <section className="results bg-backgroundSecondary py-10">
      <div className='flex flex-wrap lg:flex-nowrap gap-y-10 mx-auto container items-center'>
        <div className='w-full lg:w-1/2'>
          <h2 className='text-white font-bold text-4xl'>Built on proven success</h2>
          <p className='max-w-xl text-custom-lightGray text-[17px] font-medium mt-4'>See the impact of our data-driven solutions on real businesses. Our proven track record shows measurable improvements, driving growth and success for our clients.</p>
          <button className="bg-custom-green px-5 py-3 rounded-md font-medium mt-8">Get in Touch <i className="fa-solid fa-arrow-right-long"></i></button>
        </div>
        <img className='w-full lg:w-[45%]' src="https://ik.imagekit.io/0s9lwb2yr/Digio/Digio_-_Client_Chart_YGD-e4soH.png?updatedAt=1678625754413" alt="" />
      </div>
    </section>
  )
}

export default Results