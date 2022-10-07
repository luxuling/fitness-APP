import React from 'react'
import { Link } from 'react-router-dom'

import Logo from "../assets/images/Logo.png"
const Navbar = () => {
  return (
    <div className='flex w-full py-5 px-3 items-center text-text'>
      <Link to={"/"} className="mr-8">
        <img src={Logo} alt="" />
      </Link>
      <div>
        <Link to={"/"} className="mr-3 underline underline-offset-2 decoration-secondary decoration-2 font-medium">Home</Link>
        <a href="#exercises" className='hover:text-secondary font-normal'>Exercises</a>
      </div>
    </div>
  )
}

export default Navbar