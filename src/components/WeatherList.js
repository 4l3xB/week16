import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherList = ({ weatherData }) => {
  return (
    <div className="weather-list">
      {weatherData.map((data, index) => (
        <WeatherCard key={index} data={data} />
      ))}
    </div>
  );
};

export default WeatherList;