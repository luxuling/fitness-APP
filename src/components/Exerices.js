import React, { useEffect, useState } from 'react'
import { GymState } from '../context/fitnessProvider'
import ReactPaginate from 'react-paginate';
import { FaAngleRight,FaAngleLeft } from "react-icons/fa";
import { fetchData, optionsRapid } from '../utils/fetchData';
import { Link } from 'react-router-dom';

const Exerices = () => {
  const { exercises,setExercises } = GymState()
  const [currentPage, setCurrentPage] = useState(1)
  const [exercisePerPage] = useState(9)

  const indexLastExercise = currentPage * exercisePerPage
  const indexFirstExercise = indexLastExercise - exercisePerPage
  const currentExercise = exercises.slice(indexFirstExercise, indexLastExercise)


  const fetchExercises = async () => {
    fetchData("https://exercisedb.p.rapidapi.com/exercises", optionsRapid).then((data) => {
      setExercises(data.data)
    })
  }
    useEffect(() => {
      fetchExercises()
    }, [])
    
  const paginate = (e) => {
    setCurrentPage(e.selected + 1)
  }
  return (
    <sectionv id="exercises" className='w-full h-full px-3'>
      <div className='py-10 px-5'>
        <h1 className='font-semibold text-xl text-secondary underline'>Exercises</h1>
      </div>
      <div className='w-full flex flex-wrap gap-2 justify-center'>
      {currentExercise.map((value) => {
        return (
          <Link to={`/ecercise/${value.id}`} key={value.id} className="w-[48%] h-[210px] shadow-md shadow-slate-600 flex flex-col items-center rounded-md relative">
            <div className='absolute flex w-full justify-between items-center left-0 top-0 p-2'>
            <span className='p-2 bg-line rounded-xl capitalize text-xs text-white'>{value.bodyPart}</span>
            <span className='p-2 bg-secondary rounded-xl capitalize text-xs text-white'>{value.target}</span>
            </div>
            
            <img src={value.gifUrl} alt="" className='w-[170px] h-[170px]' />
            <span className='text-xs text-secondary uppercase text-center px-3 mt-auto py-1'>{value.name}</span>
            </Link>
        ) 
      })}
      </div>
      <div className='w-full h-20 flex justify-center items-center'>
        <ReactPaginate
          previousLabel={<FaAngleLeft/>}
          nextLabel={<FaAngleRight/>}
          pageCount={Math.ceil(exercises.length / 9)}
          activeClassName={"bg-line px-2 rounded-md"}
          className="flex items-center gap-2 text-secondary"
          onPageChange={(e)=>paginate(e)}
          />
      </div>
    </sectionv>
  )
}

export default Exerices