import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeatherData } from './weather.actions';
import { weatherDataSelector } from './weather.selectors';

const Weather = ({ weatherData }) => {
  //useEffect(() => getWeather(), []);
  
 
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
  }


const mapState = state => {
  return {
    weatherData: weatherDataSelector(state),
  };
};

// const mapDispatch = {
//   getWeather: getWeatherData,
// };

export default connect(mapState)(Weather);
