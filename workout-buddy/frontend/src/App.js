import { useEffect } from 'react'
import { useWorkouts } from './hooks/useWorkouts'
import WorkoutForm from './WorkoutForm'
import WorkoutDetails from './WorkoutDetails'

function App() {
  const { workouts, dispatch } = useWorkouts()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch('http://localhost:5000/api/workouts')
      const data = await res.json()
      dispatch({ type: 'SET_WORKOUTS', payload: data })
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="container">
      <h1>Workout Budyyy</h1>

      <div className="grid">
        <div>
          {workouts && workouts.map(w => (
            <WorkoutDetails key={w._id} workout={w} />
          ))}
        </div>

        <WorkoutForm />
      </div>
    </div>
  )
}

export default App
