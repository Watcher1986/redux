import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { weatherDataSelector } from './weather.selectors';
import City from './City';
import { getWeatherData } from './weather.actions';

const Weather = ({ weatherData, getWeather }) => {
  useEffect(() => getWeather(), []);
  if (!weatherData) {
    return null;
  }

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherData.map(data => (
          <City key={data.id} name={data.name} temperature={data.temperature} />
        ))}
      </ul>
    </main>
  );
};

const mapDispatch = {
  getWeather: getWeatherData,
};

const mapState = state => {
  return {
    weatherData: weatherDataSelector(state),
  };
};

export default connect(mapState, mapDispatch)(Weather);
