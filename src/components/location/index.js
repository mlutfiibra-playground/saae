import React, { useEffect } from 'react';

import LocationService from 'services/LocationService';

export default function Weather() {
  useEffect(() => {
    async function getCurrentLocation() {
      const { data } = await LocationService.getLocation();
      console.log(data);
    }

    getCurrentLocation();
  }, []);

  return <div>Location</div>;
}
