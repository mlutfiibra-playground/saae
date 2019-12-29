import React, { useEffect, useState } from 'react';

import LocationService from 'services/LocationService';

export default function Location({ handleCurrentLocation }) {
  const [location, setLocation] = useState('');

  useEffect(() => {
    async function getCurrentLocation() {
      try {
        const { data } = await LocationService.getLocation();
        const city = data.city || 'Jakarta';
        handleCurrentLocation(city);
        setLocation(city);
      } catch {
        handleCurrentLocation('Jakarta');
      }
    }

    getCurrentLocation();
  }, []);

  return <div>{location}</div>;
}
