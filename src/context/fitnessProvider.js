import React, {  createContext, useContext, useState } from 'react'

const GymContext = createContext()

const FitnessProvider = ({ children }) => {
  const [bodyParts, setBodyParts] = useState([])
  const [exercises, setExercises] = useState([])


  return (
    <GymContext.Provider value={{bodyParts, setBodyParts,exercises, setExercises}}>
      {children}
    </GymContext.Provider>
  )
}

export const GymState = () => {
 return useContext(GymContext)
}
export default FitnessProvider