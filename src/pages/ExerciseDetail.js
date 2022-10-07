import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getImg } from '../logic/getImg'
import { fetchData, optionsRapid } from '../utils/fetchData'

import equipment from "../assets/icons/equipment.png"
import target from "../assets/icons/target.png"
import RelatedVidios from '../components/RelatedVidios'
import RelatedExercises from '../components/RelatedExercises'
const ExerciseDetail = () => {
  const [detail, setDetail] = useState()
  const url = useParams()
  
  useEffect(() => {
    fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${url.id}`, optionsRapid).then((data) => {
      setDetail(data.data)
    })
  }, [])
  return (
    <section className='text-text'>
      <div className='w-full flex justify-center items-center'>
        <div className='w-1/2  flex justify-center'>
          {detail === undefined ? "" : (
              <img src={detail.gifUrl} alt="" className='w-[200px] h-[200px] lg:w-[500px] lg:h-[500px]' /> 
          )}
        </div>
        <div className='w-1/2 flex flex-col gap-2'>
          {detail === undefined ? "" : (
            <>
              <h1 className='text-xl lg:text-3xl font-medium uppercase'>{detail.name}</h1>
              <p className='text-sm lg:text-base lg:w-[400px] capitalize'>this exercise works a part of the body from <span className='underline decoration-2 decoration-secondary'>{detail.bodyPart}</span> and targets specifically to the muscle <span className='underline decoration-2 decoration-secondary'>{detail.target}</span> and this can increase the size of the muscle</p>
              <div className='mt-5 flex flex-col gap-2'>
                <div className='flex gap-2 items-center font-medium text-sm lg:text-base lg:font-semibold capitalize'>
                  <img src={getImg(detail.bodyPart)} alt="" className='w-8 lg:w-10 lg:h-10 bg-line rounded-full' />
                  <p>{detail.bodyPart}</p>
                </div>
                <div className='flex gap-2 items-center font-medium text-sm lg:text-base lg:font-semibold capitalize'>
                  <img src={equipment} alt="" className='w-8 lg:w-10 lg:h-10 bg-line rounded-full' />
                  <p>{detail.equipment}</p>
                </div>
                <div className='flex gap-2 items-center font-medium text-sm lg:text-base lg:font-semibold capitalize'>
                  <img src={target} alt="" className='w-8 lg:w-10 lg:h-10 bg-line rounded-full' />
                  <p>{detail.target}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <RelatedVidios detail={detail} />
      <RelatedExercises detail={detail} />
    </section>
  )
}

export default ExerciseDetail