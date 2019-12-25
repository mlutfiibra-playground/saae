import React, { useState } from 'react';

import Location from 'components/location';
import Weather from 'components/weather';

import './style.scss';

function App() {
  const [currentLocation, setCurrentLocation] = useState('');

  return (
    <div className="App">
      <div className="container">
        <p>Saae OS</p>
        <Location handleCurrentLocation={setCurrentLocation} />
        <Weather currentLocation={currentLocation} />
      </div>
    </div>
  );
}

export default App;
