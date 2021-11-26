import React from 'react';
import { connect } from 'react-redux';
import { weatherDataSelector } from './weather.selectors';
import City from './City';

const Weather = ({ weatherData }) => {
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

const mapState = state => {
  return {
    weatherData: weatherDataSelector(state),
  };
};

export default connect(mapState)(Weather);
