import React from 'react';
import logo from './logo.svg';
import './App.css';

import Location from 'components/location';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Location />
      </header>
    </div>
  );
}

export default App;
