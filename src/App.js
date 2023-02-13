import './App.scss';
import { useState } from 'react';
import { TripList } from './components/TripList/TripList';

export const App = () => {
  const [showTrips, setShowTrips] = useState(true)
  return (
    <div>
      <button type="button" onClick={() => setShowTrips(!showTrips)}>Toggle trips</button>
      {showTrips && <TripList/>}
    </div>
  );
}
