import React, { useEffect, useState } from 'react'
import { GymState } from '../context/fitnessProvider'
import { fetchData, optionsRapid } from '../utils/fetchData'
import { FaAngleRight,FaAngleLeft } from "react-icons/fa";
import { getImg } from '../logic/getImg';
import { smoothScroll } from '../logic/smoothScroll';
const ScrollableItem = () => {
  const { bodyParts, setBodyParts,setExercises } = GymState()
    
  const searchHandler = async (e,name) => {
    e.preventDefault()
    if (name.length === 0) return
    fetchData("https://exercisedb.p.rapidapi.com/exercises", optionsRapid).then((data) => {
      const filterd = data.data.filter((value) => 
        value.bodyPart == name ||
          value.equipment == name ||
          value.target == name
        )
      setExercises(filterd)
    })
    smoothScroll("exercises")
  }
  const scrollLeft = () => { 
    const slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft - 200
  }
  const scrollRight = () => { 
    const slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft + 200
  }
  useEffect(() => {
    fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', optionsRapid).then((data) => {
      setBodyParts(data.data)
    })
  },[])
  return (
    <div className=' h-full w-full'>
      <div className='relative flex justify-between lg:justify-center items-center mt-10'>
        <FaAngleLeft className='text-3xl cursor-pointer hover:text-line transition-all ease-in-out duration-200 lg:mr-3' onClick={scrollLeft}/>
        <div id='slider' className='w-10/12 h-36  scroll-smooth overflow-x-auto flex scrollbar-hide'>
          {bodyParts.map((part) => {
            return (
              <div className='border-2 border-line p-2 flex flex-col mr-3 w-32 flex-shrink-0 items-center group hover:scale-95 transition-all ease-in-out duration-300 cursor-pointer' onClick={(e)=>searchHandler(e,part)}>
                <img key={[part]} src={getImg(part)} alt="" className='w-20 h-20 group-hover:scale-110 transition-all ease-in-out duration-300' />
                <p className='capitalize text-secondary mt-auto'>{part}</p>
              </div>
            )
            
          })}
        </div>
        <FaAngleRight className='text-3xl cursor-pointer hover:text-line transition-all ease-in-out duration-200 lg:ml-3' onClick={scrollRight}/>
      </div>
    </div>
  )
}

export default ScrollableItem