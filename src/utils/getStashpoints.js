const checkResponse = response => {
  if (response.status !== 200) {
    console.log('There was an error with the request');
    return;
  }
  return response.json();
};

export const getStashpoints = city => {
  const stasherURL = 'https://api-staging.stasher.com/v1/stashpoints';
  return fetch(`${stasherURL}?city=${city}`)
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
