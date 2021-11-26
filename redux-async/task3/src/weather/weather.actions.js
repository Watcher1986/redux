const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

export const WEATHER_DATA_RECIEVED = 'WEATHER_DATA_RECIEVED';

export const weatherDataRecived = weatherData => {
  return {
    type: WEATHER_DATA_RECIEVED,
    payload: {
      weatherData,
    },
  };
};

const fetchData = async url => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error();
};

export const getWeatherData = () => {
  return dispatch =>
    fetchData(baseUrl).then(weatherData => {
      dispatch(weatherDataRecived(weatherData));
    });
};
