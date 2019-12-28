import React, { useEffect, useState } from 'react';

import WeatherService from 'services/WeatherService';

export default function Weather({ currentLocation }) {
  const [weatherIcon, setWeatherIcon] = useState('');
  const [weatherDescription, setWeatherDescription] = useState('');

  useEffect(() => {
    async function getCurrentWeather() {
      const { data } = await WeatherService.getWeather(currentLocation);
      console.log(data);
      setWeatherIcon(data.weather[0].icon);
      setWeatherDescription(data.weather[0].description);
    }

    getCurrentWeather();
  }, [currentLocation]);

  return (
    <div>
      <img
        src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt="weather"
      />
      <div>{weatherDescription}</div>
    </div>
  );
}
