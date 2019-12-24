import React, { useState } from 'react';
import logo from './logo.svg';

import Location from 'components/location';
import Weather from 'components/weather';

function App() {
  const [currentLocation, setCurrentLocation] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Location handleCurrentLocation={setCurrentLocation} />
        <Weather currentLocation={currentLocation} />
      </header>
    </div>
  );
}

export default App;
