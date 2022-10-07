import React from 'react'
import Exerices from '../components/Exerices'
import HeroBanner from '../components/HeroBanner'
import SearchBox from '../components/SearchBox'

const Home = () => {
  return (
    <>
      <HeroBanner />
      <SearchBox />
      <Exerices/>
    </>
  )
}

export default Home