import React from 'react';
import { playfair, sourceSans } from '@/app/layout';

function Footer() {
  return (
    <footer className='text-white bg-darkBackground py-12 px-8'>
      <div className='flex max-w-screen-xl mx-auto justify-between border-solid flex-wrap gap-8 border-b-[1px] border-y-slate-700 mb-8 pb-4'>
        <h1 className={`text-2xl font-bold mr-6 text-white flex gap-2 items-center ${playfair.className}`}>
          <i className="fa-solid fa-chart-simple"></i>
          <span>Digio</span>
        </h1>
        <p className='text-custom-green font-medium'><i className="fa-solid fa-copyright"></i> {new Date().getFullYear()}</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-8 max-w-screen-xl mx-auto'>

        <div>
          <h5 className='text-xl font-semibold mb-3'>About</h5>
          <ul>
            <li className={`${sourceSans.className} text-neutral-200 my-4`}><a href="#">Who We Are</a></li>
            <li className={`${sourceSans.className} text-neutral-200 my-4`}><a href="#">Blog</a></li>
            <li className={`${sourceSans.className} text-neutral-200 my-4`}><a href="#">Customer Stories</a></li>
            <li className={`${sourceSans.className} text-neutral-200 my-4`}><a href="#">Leadership</a></li>
            <li className={`${sourceSans.className} text-neutral-200 my-4`}><a href="#">Investors</a></li>
          </ul>
        </div>
        <div>
          <h5 className='text-xl font-semibold mb-3'>Support</h5>
          <ul>
            <li className={`${sourceSans.className} text-neutral-200 my-4`}><a href="#">Consulting</a></li>
            <li className={`${sourceSans.className} text-neutral-200 my-4`}><a href="#">Tranining</a></li>
            <li className={`${sourceSans.className} text-neutral-200 my-4`}><a href="#">Customer Support</a></li>
          </ul>
        </div>
        <div>
          <h5 className='text-xl font-semibold mb-3'>Services</h5>
          <ul>
            <li className={`${sourceSans.className} text-neutral-200 my-4`}><a href="#">Development</a></li>
            <li className={`${sourceSans.className} text-neutral-200 my-4`}><a href="#">Maintenance</a></li>
            <li className={`${sourceSans.className} text-neutral-200 my-4`}><a href="#">Design</a></li>
            <li className={`${sourceSans.className} text-neutral-200 my-4`}><a href="#">Digital marketing</a></li>
          </ul>
        </div>
        <div className=''>
          <h5 className='text-xl font-semibold mb-3'>Social</h5>
          <ul>
            <li className={`${sourceSans.className} text-neutral-200 my-4`}>
              <a href="#">
                <i className="fa-brands fa-instagram text-custom-green mr-3"></i>
                Instagram
              </a>
            </li>
            <li className={`${sourceSans.className} text-neutral-200 my-4`}>
              <a href="#">
                <i className="fa-brands fa-facebook text-custom-green mr-3"></i>
                Facebook
              </a>
            </li>
            <li className={`${sourceSans.className} text-neutral-200 my-4`}>
              <a href="#">
                <i className="fa-brands fa-twitter text-custom-green mr-3"></i>
                Twitter
              </a>
            </li>
            <li className={`${sourceSans.className} text-neutral-200 my-4`}>
              <a href="#">
                <i className="fa-brands fa-linkedin text-custom-green mr-3"></i>
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer