import React from 'react'
import notFound from '../assets/notFound.avif'
function NotFound404() {
  return (
    <div className='flex-nowrap text-center'>
    <img className='w-[500px] mx-auto my-4' src={notFound} alt="about" />
    <h1 className="text-3xl font-bold">
    Page Not Found 404!
  </h1>
  </div>
  )
}

export default NotFound404