import React, { useEffect } from 'react';

import WeatherService from 'services/WeatherService';

export default function Weather({ currentLocation }) {
  useEffect(() => {
    async function getCurrentWeather() {
      const { data } = await WeatherService.getWeather(currentLocation);
      console.log(data);
    }

    getCurrentWeather();
  }, [currentLocation]);

  return <div>Weather</div>;
}
