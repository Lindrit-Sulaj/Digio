"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { merriweather, poppins, sourceSans } from '@/app/layout';
import useMediaQuery from '@/utils/useMediaQuery';

const Navbar = () => {
  const [windowWidth, breakpoint] = useMediaQuery();
  const [navOpened, setNavOpened] = useState(false);

  return (
    <div className=' absolute top-0 h-[75px] w-full bg-white border-solid  border-b-[1px] border-b-neutral-300'>
      <nav className={`${sourceSans.className} h-full container mx-auto flex justify-between items-center px-3 md:px-4 text-[17px]`}>
        {breakpoint !== 'sm' ? (
          <>
            <div className='flex items-center'>
              <h1 className={`text-2xl font-bold mr-6 flex gap-2 items-center ${merriweather.className}`}>
                <i className="fa-solid fa-chart-simple"></i>
                <span>Digio</span>
              </h1>
              <NavLink
                title="Company"
                hoverComponent={
                  <div className='flex gap-8 px-5 py-4 h-auto'>
                    <div className='w-[170px]'>
                      <h3 className={`text-base font-medium text-neutral-800 ${poppins.className}`}>
                        <span>About</span>
                        <i className="fa-solid fa-arrow-right-long ml-3 text-green-600"></i>
                      </h3>
                      <hr className='mt-3 border-green-300' />
                      <ul className='pt-4 pb-2 px-1 flex flex-col gap-y-3 text-neutral-700'>
                        <li><a href="">Who We Are</a></li>
                        <li><a href="">Customer Stories</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Leadership</a></li>
                        <li><a href="">Investors</a></li>
                      </ul>
                    </div>
                    <div className='w-[170px]'>
                      <h3 className={`text-base font-medium text-neutral-800 ${poppins.className}`}>
                        <span>Contact</span>
                        <i className="fa-solid fa-arrow-right-long ml-3 text-green-600"></i>
                      </h3>
                      <hr className='mt-3 border-green-300' />
                      <ul className='pt-4 pb-2 px-1 flex flex-col gap-y-3 text-neutral-700'>
                        <li><a href="">Consulting</a></li>
                        <li><a href="">Training</a></li>
                        <li><a href="">Customer Support</a></li>
                        <li><a href="">Customer Success</a></li>
                      </ul>
                    </div>
                    <div className='w-[170px]'>
                      <h3 className={`text-base font-medium text-neutral-800 ${poppins.className}`}>
                        <span>Partnerships</span>
                        <i className="fa-solid fa-arrow-right-long ml-3 text-green-600"></i>
                      </h3>
                      <hr className='mt-3 border-green-300' />
                      <ul className='pt-4 pb-2 px-1 flex flex-col gap-y-3 text-neutral-700'>
                        <li><a href="">Become a Partner</a></li>
                        <li><a href="">Find a Partner</a></li>
                        <li><a href="">Digio for Startups</a></li>
                      </ul>
                    </div>
                  </div>
                } />
              <NavLink
                title="Services"
                hoverComponent={
                  <div className='flex gap-8 px-5 py-4 h-auto'>
                    <div className='w-[200px]'>
                      <h3 className={`text-base font-medium text-neutral-800 ${poppins.className}`}>
                        <span>Digital Marketing</span>
                        <i className="fa-solid fa-arrow-right-long ml-3 text-green-600"></i>
                      </h3>
                      <hr className='mt-3 border-green-300' />
                      <ul className='pt-4 pb-2 px-1 flex flex-col gap-y-3 text-neutral-700'>
                        <li><a href="">SEO</a></li>
                        <li><a href="">Social Media Management</a></li>
                        <li><a href="">PPC</a></li>
                        <li><a href="">Content Marketing</a></li>
                      </ul>
                    </div>
                    <div className='w-[200px]'>
                      <h3 className={`text-base font-medium text-neutral-800 ${poppins.className}`}>
                        <span>Website</span>
                        <i className="fa-solid fa-arrow-right-long ml-3 text-green-600"></i>
                      </h3>
                      <hr className='mt-3 border-green-300' />
                      <ul className='pt-4 pb-2 px-1 flex flex-col gap-y-3 text-neutral-700'>
                        <li><a href="">Development</a></li>
                        <li><a href="">Design</a></li>
                        <li><a href="">Maintenance</a></li>
                      </ul>
                    </div>
                  </div>} />
              <NavLink
                title="Solutions"
                hoverComponent={
                  <div className='flex gap-8 px-5 py-4 h-auto'>
                    <div className='w-[200px]'>
                      <h3 className={`text-base font-medium text-neutral-800 ${poppins.className}`}>
                        <span>By Industry</span>
                        <i className="fa-solid fa-arrow-right-long ml-3 text-green-600"></i>
                      </h3>
                      <hr className='mt-3 border-green-300' />
                      <ul className='pt-4 pb-2 px-1 flex flex-col gap-y-3 text-neutral-700'>
                        <li><a href="">Healthcare</a></li>
                        <li><a href="">Retail</a></li>
                        <li><a href="">Manufacturing</a></li>
                        <li><a href="">All industries</a></li>
                      </ul>
                    </div>
                    <div className='w-[200px]'>
                      <h3 className={`text-base font-medium text-neutral-800 ${poppins.className}`}>
                        <span>By Use Case</span>
                        <i className="fa-solid fa-arrow-right-long ml-3 text-green-600"></i>
                      </h3>
                      <hr className='mt-3 border-green-300' />
                      <ul className='pt-4 pb-2 px-1 flex flex-col gap-y-3 text-neutral-700'>
                        <li><a href="">Analytics</a></li>
                        <li><a href="">Payments</a></li>
                        <li><a href="">All Use Cases</a></li>
                      </ul>
                    </div>
                  </div>
                } />

              <a href="#" className='px-3 md:px-4 lg:px-5 text-neutral-600'>Pricing</a>
            </div>

            <div className='flex gap-6'>
              <button>Sign in</button>
              <button className={`md:px-4 px-3 md:py-[10px] py-2 border-solid border-[1px] border-neutral-600  bg-green-400 font-medium rounded-md hover:bg-emerald-300 transition-all text-base ${poppins.className}`}>Get Started</button>
            </div>
          </>
        ) : (
          <div className='flex justify-between items-center w-full'>
            <h1 className={`text-2xl font-bold mr-6 flex gap-2 items-center ${merriweather.className}`}>
              <i className="fa-solid fa-chart-simple"></i>
              <span>Digio</span>
            </h1>

            <button className='text-2xl' onClick={() => setNavOpened(!navOpened)}>
              <i className="fa-solid fa-bars"></i>
            </button>

            <AnimatePresence>
              {navOpened && (
                <Mobile />
              )}
            </AnimatePresence>
          </div>
        )}

      </nav>

      <div>{breakpoint}</div>
    </div>
  )
}

const NavLink = ({ hoverComponent, title }) => {
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <div className="navLink relative">
      <motion.a
        onHoverStart={(e) => setIsLinkHovered(true)}
        onHoverEnd={(e) => setIsLinkHovered(false)}
        href="#"
        className='cursor-pointer px-3 md:px-4 lg:px-5 text-neutral-600'>{title}</motion.a>

      {
        (isLinkHovered || isCardHovered) && <motion.div
          onHoverStart={(e) => setIsCardHovered(true)}
          onHoverEnd={(e) => setIsCardHovered(false)} className='absolute bg-white border-solid border-[1px] border-neutral-300 rounded-lg p-3 pt-4 w-auto' layoutId="card">
          {hoverComponent}
        </motion.div>
      }
    </div>
  )
}

const Mobile = () => {
  const [openedLink, setOpenedLink] = useState('')

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      transition={{ type: 'just', duration: .2 }}
      className="bg-slate-800 min-h-[calc(100vh-75px)] h-auto w-[80%] shadow-2xl absolute px-4 py-4 top-[75px] left-0" >
      <div className='my-3'>
        <button className={`text-lg px-2  py-1 flex items-center justify-between ${poppins.className} font-medium w-full text-white`} onClick={() => setOpenedLink((openedLink === "Company" ? "" : "Company"))}>
          <span>Company</span>
          <i className={`fa-solid fa-${openedLink === "Company" ? "chevron-up" : "chevron-down"} text-green-300 ml-2`}></i>
        </button>

        <motion.div
          className='mobile__nav__category overflow-hidden pl-4'
          style={{ height: openedLink === "Company" ? "auto" : "0px" }}>
          <div>
            <h4 className='text-green-300 text-lg mt-3 mb-2'>About</h4>
            <ul className={`pl-6 pr-3 flex flex-col gap-y-2 text-slate-400`}>
              <li className='hover:text-slate-200'><a href="#">Who We Are</a></li>
              <li className='hover:text-slate-200'><a href="#">Customer Stories</a></li>
              <li className='hover:text-slate-200'><a href="#">Blog</a></li>
              <li className='hover:text-slate-200'><a href="#">Careeres</a></li>
              <li className='hover:text-slate-200'><a href="#">Leadership</a></li>
              <li className='hover:text-slate-200'><a href="#">Investors</a></li>
            </ul>
          </div>
          <div>
            <h4 className='text-green-300 text-lg mt-3 mb-2'>Contact</h4>
            <ul className={`pl-6 pr-3 flex flex-col gap-y-2 text-slate-400`}>
              <li className='hover:text-slate-200'><a href="#">Consulting</a></li>
              <li className='hover:text-slate-200'><a href="#">Training</a></li>
              <li className='hover:text-slate-200'><a href="#">Customer Support</a></li>
              <li className='hover:text-slate-200'><a href="#">Customer Success</a></li>
            </ul>
          </div>
          <div>
            <h4 className='text-green-300 text-lg mt-3 mb-2'>Partnerships</h4>
            <ul className={`pl-6 pr-3 flex flex-col gap-y-2 text-slate-400`}>
              <li className='hover:text-slate-200'><a href="#">Become a Partner</a></li>
              <li className='hover:text-slate-200'><a href="#">Find a Partner</a></li>
              <li className='hover:text-slate-200'><a href="#">Digio for Startups</a></li>
            </ul>
          </div>
        </motion.div>
      </div>
      <div className='my-6'>
        <button className={`text-lg px-2 py-1 items-center ${poppins.className} font-medium w-full flex justify-between text-white`} onClick={() => setOpenedLink((openedLink === "Services" ? "" : "Services"))}>
          <span>Services</span>
          <i className={`fa-solid fa-${openedLink === "Services" ? "chevron-up" : "chevron-down"} text-green-300`}></i>
        </button>

        <motion.div
          className='mobile__nav__category overflow-hidden pl-4'
          style={{ height: openedLink === "Services" ? "auto" : "0px" }}>
          <div>
            <h4 className='text-green-300 text-lg mt-3 mb-2'>Digital Marketing</h4>
            <ul className={`pl-6 pr-3 flex flex-col gap-y-2 text-slate-400`}>
              <li className='hover:text-slate-200'><a href="#">SEO</a></li>
              <li className='hover:text-slate-200'><a href="#">Social Media Management</a></li>
              <li className='hover:text-slate-200'><a href="#">PPC</a></li>
              <li className='hover:text-slate-200'><a href="#">Content Marketing</a></li>
            </ul>
          </div>
          <div>
            <h4 className='text-green-300 text-lg mt-3 mb-2'>Website</h4>
            <ul className={`pl-6 pr-3 flex flex-col gap-y-2 text-slate-400`}>
              <li className='hover:text-slate-200'><a href="#">Development</a></li>
              <li className='hover:text-slate-200'><a href="#">Design</a></li>
              <li className='hover:text-slate-200'><a href="#">Maintenance</a></li>
            </ul>
          </div>
        </motion.div>
      </div>
      <div className='my-6'>
        <button className={`text-lg px-2 py-1 items-center ${poppins.className} font-medium w-full flex justify-between text-white`} onClick={() => setOpenedLink((openedLink === "Solutions" ? "" : "Solutions"))}>
          <span>Solutions</span>
          <i className={`fa-solid fa-${openedLink === "Solutions" ? "chevron-up" : "chevron-down"} text-green-300`}></i>
        </button>

        <motion.div
          className='mobile__nav__category overflow-hidden pl-4'
          style={{ height: openedLink === "Solutions" ? "auto" : "0px" }}>
          <div>
            <h4 className='text-green-300 text-lg mt-3 mb-2'>By Industry</h4>
            <ul className={`pl-6 pr-3 flex flex-col gap-y-2 text-slate-400`}>
              <li className='hover:text-slate-200'><a href="#">Healthcare</a></li>
              <li className='hover:text-slate-200'><a href="#">Retail</a></li>
              <li className='hover:text-slate-200'><a href="#">Manufacturing</a></li>
              <li className='hover:text-slate-200'><a href="#">All industries</a></li>
            </ul>
          </div>
          <div>
            <h4 className='text-green-300 text-lg mt-3 mb-2'>By Use Case</h4>
            <ul className={`pl-6 pr-3 flex flex-col gap-y-2 text-slate-400`}>
              <li className='hover:text-slate-200'><a href="#">Analytics</a></li>
              <li className='hover:text-slate-200'><a href="#">Payments</a></li>
              <li className='hover:text-slate-200'><a href="#">All Use Cases</a></li>
            </ul>
          </div>
        </motion.div>
        <button className={`text-lg px-2 py-1 ${poppins.className} font-medium my-6 py-1 text-white`}>
          Company
        </button>

        <div className={`flex justify-end items-center gap-4 my-6 px-6 ${poppins.className}`}>
          <button className='px-4 py-2 text-green-300 underline underline-offset-4'>Sign up</button>
          <button className='bg-green-400 px-6 py-[10px] rounded-md font-medium shadow-lg hover:bg-green-300'>Try Free</button>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar