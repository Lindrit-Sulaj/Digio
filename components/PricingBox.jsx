import React from 'react'

function PricingBox({ name, price, description, features, top }) {
  return (
    <div className={`border-solid border-[1px] rounded-2xl py-8 px-6 flex flex-col ${top ? "border-blue-500 bg-blue-500 text-white" : "border-neutral-200"}`}>
      <h4 className={`text-xl mb-2 ${!top && "text-slate-700"}`}>{ name }</h4>
      <p className='text-3xl font-medium'>{ price }</p>
      <p className={`my-4 ${top ? "" : "text-slate-500"}`}>{ description }</p>
      <div>
        { features.map(feature => (
          <p key={feature} className="my-4">
            <i className="fa-solid fa-check mr-2 text-custom-green"></i>
            
            <span className={`${top ? "" : "text-neutral-600"}`}>{ feature }</span>
          </p>
        ))}
      </div>
      <button className={`w-full py-3 border-solid mt-auto border-[1px] rounded-lg transition-all ${top ? "border-white hover:bg-white hover:text-blue-500" : "border-blue-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 text-blue-500"}`}>Choose Plan</button>
    </div>
  )
}

export default PricingBox