export const requestLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }
  });
};
