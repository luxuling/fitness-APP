import React from 'react'
import BannerLogo from "../assets/images/Banner.png"

const HeroBanner = () => {
  return (
    <section className='w-full h-full px-3 lg:px-20 relative'>
      <div className="h-[450px] flex flex-col justify-center items-center md:items-start text-text">
        <div className="h-[250px] flex flex-col justify-start items-start gap-1 relative mt-10">
          <h3 className="text-secondary font-semibold text-xl">Fitness Club</h3>
          <h1 className="text-3xl font-bold mb-3 md:text-4xl">Hard, Hard and Repeat</h1>
          <p>Checkout the most Effective exercises</p>
          <a className="mt-10 bg-secondary rounded-md py-2 px-2 hover:opacity-90 transition-all ease-in-out duration-200 text-white shadow-md shadow-slate-500" href='#search'>Explore Exercises</a>
          <h1 className='text-7xl font-semibold absolute -bottom-12 -z-10 opacity-30'>EXERCISES</h1>
        </div>
      </div>
      <img src={BannerLogo} alt="" className="invisible md:visible absolute -top-[110px] right-0 rounded-bl-3xl w-[300px] lg:w-[360px] shadow-sm shadow-current"/>
    </section>
  )
}

export default HeroBanner