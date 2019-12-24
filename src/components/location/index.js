import React, { useEffect } from 'react';

import LocationService from 'services/LocationService';

export default function Location({ handleCurrentLocation }) {
  useEffect(() => {
    async function getCurrentLocation() {
      try {
        const { data } = await LocationService.getLocation();
        const city = data.city || 'Jakarta';
        handleCurrentLocation(city);
      } catch {
        handleCurrentLocation('Jakarta');
      }
    }

    getCurrentLocation();
  }, []);

  return <div>Location</div>;
}
