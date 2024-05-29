import React from 'react';

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp}&deg;C</p>
      <p>Weather: {data.weather[0].main}</p>
      <p>Description: {data.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;