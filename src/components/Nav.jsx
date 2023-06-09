import React from 'react'
import { Link} from "react-router-dom";
function Nav() {
  return (
    <div className='flex justify-center space-x-5 text-center font-bold'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/check-and-go-anywhere'>NotFoundPage404</Link>
    </div>
  )
}

export default Nav