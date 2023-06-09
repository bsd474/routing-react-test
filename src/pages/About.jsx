import React from 'react'
import about from '../assets/about.avif'
function About() {
  return (
  <div className='flex-nowrap text-center'>
    <img className='w-[500px] mx-auto my-4' src={about} alt="about" />
    <h1 className="text-3xl font-bold">
    Hello From About Page!
  </h1>
  </div>
  )
}

export default About