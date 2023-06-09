import React from 'react'
import contact from '../assets/contact.avif'
function Contact() {
  return (
    <div className='flex-nowrap text-center'>
    <img className='w-[500px] mx-auto my-4' src={contact} alt="about" />
    <h1 className="text-3xl font-bold">
    Hello From Contact Page!
  </h1>
  </div>
  )
}

export default Contact