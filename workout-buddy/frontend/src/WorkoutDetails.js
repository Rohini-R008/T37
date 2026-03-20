import { useWorkouts } from './hooks/useWorkouts'
import { formatDistanceToNow } from 'date-fns'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkouts()

  const handleDelete = async () => {
    const res = await fetch(
      'http://localhost:5000/api/workouts/' + workout._id,
      { method: 'DELETE' }
    )

    const json = await res.json()

    if (res.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json })
    }
  }

  return (
    <div className="card">
      <h3>{workout.title}</h3>
      <p>Load: {workout.load} kg</p>
      <p>Reps: {workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span onClick={handleDelete} style={{ cursor: 'pointer' }}>🗑️</span>
    </div>
  )
}

export default WorkoutDetails