const checkResponse = response => {
  if (response.status !== 200) {
    console.log('There was an error with the request');
    return;
  }
  return response.json();
};

export const getStashpoints = city => {
  const stasherURL = 'https://api-staging.stasher.com/v1/stashpoints';
  return fetch(`${stasherURL}?city=${city}`).then(checkResponse);
};
