import React from 'react';

const City = ({ temperature, name }) => {
  return (
    <li className="city">
      <span className="city__name">{name}</span>
      <span className="city__temperature">{temperature}</span>
    </li>
  );
};

export default City;
