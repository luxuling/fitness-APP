import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { GymState } from '../context/fitnessProvider'

const RelatedExercises = ({detail}) => {
  const { exercises } = GymState()
  const [related,setRelated] = useState([])
  useEffect(() => {
    if (detail !== undefined) {
     const filtered = exercises.filter((ex)=>ex.target == detail.target)
      setRelated(filtered.slice(0, 4))
    }
    console.log(related)
  }, [detail])
  
  return (
    <section className='w-full'>
      <div className='flex items-center px-5'>
        <h1 className='font-semibold text-2xl text-line'>Related Exercises</h1>
        <span className='h-[3px] w-[100px] bg-line inline-block mt-2 ml-5'></span>
      </div>
      <div className='flex flex-wrap justify-center gap-3 w-full px-3 py-10'>
        {related.map((value) => {
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
    </section>
  )
}

export default RelatedExercises