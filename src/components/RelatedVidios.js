import React, { useEffect, useState } from 'react'
import { fetchData } from '../utils/fetchData';

const RelatedVidios = ({detail}) => {
  const [vidios, setVidios] = useState([])
  const currentVidio = vidios.slice(0,4)
  useEffect(() => {
    if (detail !== undefined) {
      const options = {
      method: 'GET',
      params: {q: detail.name},
      headers: {
        'X-RapidAPI-Key': '48770c843cmshdca2289cc48f3c0p1576d3jsn91458f889214',
        'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
      }
    }
      fetchData('https://youtube-search-results.p.rapidapi.com/youtube-search/', options).then((data) => {
        setVidios(data.data.items)
      })
    }
    }, [detail])
  return (
    <section className='w-full lg:h-[600px] px-5 py-10'>
      <div className='flex items-center'>
        <h1 className='font-semibold text-2xl text-secondary'>Related Vidios </h1>
        <span className='h-[3px] w-[100px] bg-secondary inline-block mt-2 ml-5'></span>
      </div>
      <div className='flex justify-center lg:justify-start flex-wrap gap-2 mt-5 w-full'>
        {currentVidio.map((vidio) => {
          return (
          <div className='w-[220px] lg:w-[270px]'>
            <a href={vidio.url} target="blank"><img src={vidio.bestThumbnail.url} alt="" className='w-full lg:w-[250px] hover:scale-95 transition-all duration-200 ease-in-out'/></a>
              <a href={vidio.url} target="blank" className='hover:text-secondary lg:text-sm text-xs'>{vidio.title}</a>
          </div>
          )
        })}
      </div>
    </section>
  )
}

export default RelatedVidios