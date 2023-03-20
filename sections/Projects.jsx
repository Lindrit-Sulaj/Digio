"use client"
import React from 'react';
import Project from '@/components/Project';

const projectsData = [
  {
    name: "Sparkle",
    description: "A responsive e-commerce website that offers a seamless shopping experience and showcases the beauty and quality of the products.",
    image: "https://ik.imagekit.io/0s9lwb2yr/Digio/tr:w-500/cyber-monday-shopping-sales_OIJG8MceS.jpg?updatedAt=1679167519606"
  },
  {
    name: "Snap!",
    description: "A mobile app for a photography studio that allows users to book appointments, browse portfolios, and communicate with photographers.",
    image: "https://ik.imagekit.io/0s9lwb2yr/Digio/tr:w-500/backpacker-relax-mountain-with-camera-adn-sunset_t8Zl0hYdr.jpg?updatedAt=1679167539306"
  },
  {
    name: "Matcha",
    description: "A social media marketing campaign for a tea shop that aims to increase brand awareness, engage followers, and drive traffic to the online store.",
    image: "https://ik.imagekit.io/0s9lwb2yr/Digio/tr:w-500/young-woman-arranging-her-cake-shop_oYtX4dR2R.jpg?updatedAt=1679167552550"
  },
  {
    name: "GearUp",
    description: "A website for a fitness equipment supplier that provides detailed product information, comparison tools, and customer reviews.",
    image: "https://ik.imagekit.io/0s9lwb2yr/Digio/tr:w-500/3d-render-dumbbells-set-realistic-detailed-close-up-view-isolated-sport-element-fitness-dumbbell-design_oQAH2q9ir.jpg?updatedAt=1679167522083"
  },
  {
    name: "Clever",
    description: "A custom software solution for a consulting firm that streamlines the project management process, tracks performance metrics, and generates reports.",
    image: "https://ik.imagekit.io/0s9lwb2yr/Digio/tr:w-500/close-up-executives-sitting-table_r4w7xt5ju.jpg?updatedAt=1679167544424"
  },
  {
    name: "Refresh",
    description: "A website redesign for a wellness center that incorporates modern design trends, improves user navigation, and integrates online booking and payment features.",
    image: "https://ik.imagekit.io/0s9lwb2yr/Digio/tr:w-500/person-paying-using-nfc-technology_419gjrG7t.jpg?updatedAt=1679167556436"
  }
]

function Projects() {
  return (
    <section className='projects my-16'>
      <div className='container mx-auto'>
        <div className='flex justify-between px-4 md:px-0'>
          <h2 className='text-[27px] md:text-4xl font-bold'>Our Projects</h2>
          <button className='text-blue-500 font-medium text-lg hover:text-blue-600'>
            View all
            <i className="fa-solid fa-arrow-right-long ml-3"></i>
          </button>
        </div>
        <div className='grid grid-cols-1 gap-y-6 md:gap-y-0 md:grid-cols-3 mt-8 rounded-xl overflow-hidden'>
          { projectsData.map(project => (
            <Project 
            key={project.name} 
            title={project.name}
            description={project.description}
            image={project.image} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects