import { WorkoutContext } from '../context/WorkoutContext'
import { useContext } from 'react'

export const useWorkouts = () => {
  return useContext(WorkoutContext)
}