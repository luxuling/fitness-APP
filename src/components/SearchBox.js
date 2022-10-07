import React, { useState } from 'react'
import ScrollableItem from './ScrollableItem'
import { BsSearch } from "react-icons/bs";
import { GymState } from '../context/fitnessProvider';
import { fetchData, optionsRapid } from '../utils/fetchData';
import { smoothScroll } from '../logic/smoothScroll';

const SearchBox = () => {
  const [search, setSearch] = useState("")
  const {setExercises} = GymState()
  const searchHandler = async (e) => {
    e.preventDefault()
    if (search.length === 0) return
    fetchData("https://exercisedb.p.rapidapi.com/exercises", optionsRapid).then((data) => {
      const filterd = data.data.filter((value) => 
        value.bodyPart == search ||
          value.equipment == search ||
          value.target == search
      )
      smoothScroll("exercises")
      setExercises(filterd)
    })
  }
  return (
    <section id='search' className='h-full py-20 flex flex-col items-start justify-center w-full px-3'>
      <div className='mt-20 mx-auto w-full flex items-center flex-col'>
        <h1 className='text-2xl font-semibold capitalize w-64 text-center'>Awaesom exercises you should know</h1>
        <div className='flex justify-center w-full h-auto mt-10'>
          <form action="" className='flex w-full lg:w-9/12'>
            <input type="text" placeholder='Example: Back,shoulder,chest,etc' className='w-[90%] lg:w-[94%] border-2 border-line py-1 px-3 outline-none rounded-md' onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
            <button className='bg-secondary w-10 flex justify-center items-center ml-auto rounded-md' onClick={(e)=>searchHandler(e)}>
            <BsSearch className="h-5 w-5 text-white"/>
            </button>
          </form>
        </div>
      </div>
      <ScrollableItem/>
    </section>
  )
}

export default SearchBox