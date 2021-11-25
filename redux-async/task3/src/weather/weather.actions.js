import getWeatherInfo from './weather.gateway';

export const WEATHER_DATA_RECIEVED = 'WEATHER_DATA_RECIEVED';

export const weatherDataRecived = weatherData => {
  return {
    type: WEATHER_DATA_RECIEVED,
    payload: {
      weatherData,
    },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    getWeatherInfo().then(weatherData => {
      dispatch(weatherDataRecived(weatherData));
    });
  };
};
