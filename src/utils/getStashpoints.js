const checkResponse = response => {
  if (response.status !== 200) {
    console.log('There was an error with the request');
    return;
  }
  return response.json();
};

export const getStashpoints = (lat, long) => {
  const stasherURL = 'https://api-staging.stasher.com/v1/stashpoints';
  return fetch(
    `${stasherURL}?centre_lat=${lat}&centre_lon=${long}&nearby_radius=5`
  )
    .then(checkResponse)
    .then(response => {
      response = response.map(location => ({
        id: location.id,
        name: location.name,
        address: location.address,
        postalCode: location.postal_code,
        photo: location.photos[0],
        hours: location.opening_hours,
        open24Hours: location.open_twentyfour_seven,
        prices: location.pricing_structure
      }));
      return response;
    });
};
