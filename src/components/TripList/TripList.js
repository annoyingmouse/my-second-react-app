import { useState, useEffect, useCallback } from 'react'
import style from './TripList.module.scss'

export const TripList = () => {
  const [trips, setTrips] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/trips')

  const fetchTrips = useCallback(async () => {
    const response = await fetch(url)
    const json = await response.json()
    setTrips(json)
  }, [url])

  useEffect(() => {
    fetchTrips()
  }, [fetchTrips])

  return (
    <div className={style['trip-list']}>
      <h2>Trip List</h2>
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <div className={style['filters']}>
        <button type="button"
                onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>European trips</button>
        <button type="button"
                onClick={() => setUrl('http://localhost:3000/trips')}>All trips</button>
      </div>
    </div>
  )
}