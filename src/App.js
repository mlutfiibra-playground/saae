import React, { useState } from 'react';

import Location from 'components/location';
import Weather from 'components/weather';

import './App.scss';

function App() {
  const [currentLocation, setCurrentLocation] = useState('');

  return (
    <div className="app">
      <div className="wrapper">
        <div className="sidebar">&nbsp;</div>
        <div className="abs-center">
          <div class="pulse" />
          <p>Saae OS</p>
        </div>
        <div className="sidebar">
          <Location handleCurrentLocation={setCurrentLocation} />
          <Weather currentLocation={currentLocation} />
        </div>
      </div>
    </div>
  );
}

export default App;
