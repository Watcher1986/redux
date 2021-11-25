import React from 'react';
import { connect } from 'react-redux';
import { weatherDataSelector } from './weather.selectors';

const Weather = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherData.map(data => (
          <li className="city" key={data.id}>
            <span className="city__name">{data.name}</span>
            <span className="city__temperature">{data.temperature}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapState = state => {
  return {
    weatherData: weatherDataSelector(state),
  };
};

export default connect(mapState)(Weather);
