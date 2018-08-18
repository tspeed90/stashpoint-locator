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
    `${stasherURL}?centre_lat=${lat}&centre_lon=${long}&nearby_radius=3&sort=by_distance`
  )
    .then(checkResponse)
    .then(response => {
      response = response.map(location => ({
        id: location.id,
        name: location.name,
        address: location.address,
        postalCode: location.postal_code,
        photo: location.photos[0],
        open24Hours: location.open_twentyfour_seven,
        firstDayPrice: location.pricing_structure.first_day_cost / 100,
        additionalDayPrice: location.pricing_structure.extra_day_cost / 100,
        currency: location.pricing_structure.ccy
      }));
      return response;
    });
};
