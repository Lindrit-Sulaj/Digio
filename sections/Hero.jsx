import { poppins, playfair, sourceSans } from "@/app/layout"

export default function Hero() {
  return (
    <section className="hero py-8">
      <div className="flex flex-col items-center lg:flex-row h-full container mx-auto justify-between">
        <div className="w-1/2">
          <h3 className={`mb-3 text-custom-green font-medium ${sourceSans.className} uppercase tracking-wider`}>
            Digio
          </h3>
          <h1 className={`text-6xl mb-8 ${playfair.className}`}>Maximize Your Online Potential</h1>
          <p className={`${poppins.className} text-lg text-neutral-500 max-w-xl`}>We are a leading web development and digital marketing company that helps businesses grow their online presence, by improving their website or digital marketing.</p>

          <div className="mt-8 flex gap-6">
            <button className={`px-8 py-3 bg-custom-green border-solid border-black border-[1px] rounded-md ${poppins.className} font-medium`}>Start Free</button>
            <button className="text-green-500">Docs <i className="fa-solid fa-arrow-right-long ml-2"></i></button>
          </div>

          <div className={`inline-flex border-solid border-y-[1px] border-y-neutral-200 gap-6 py-6 mt-8 `}>
            <div className="w-1/2 max-w-[200px]">
              <p className="text-2xl text-green-600">300+</p>
              <p className={`mt-1 text-neutral-600 ${sourceSans.className}`}>Customers</p>
            </div>
            <div className="w-1/2 max-w-[200px]">
              <p className="text-2xl text-green-600">12+</p>
              <p className={`mt-1 text-neutral-600 ${sourceSans.className}`}>Locations accross the world</p>
            </div>
            <div className="w-1/2 max-w-[200px]">
              <p className="text-2xl text-green-600">#1</p>
              <p className={`mt-1 text-neutral-600 ${sourceSans.className}`}>Leading company in the region</p>
            </div>
            <div className="w-1/2 max-w-[200px]">
              <p className="text-2xl text-green-600">100+</p>
              <p className={`mt-1 text-neutral-600 ${sourceSans.className}`}>Awards</p>
            </div>
          </div>
        </div>
        <img className="w-[40%]" src="https://ik.imagekit.io/0s9lwb2yr/Digio/Programmer-amico_izMID81LV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678389155461" alt="" />
      </div>
    </section>
  )
}