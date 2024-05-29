import React, { useState } from 'react';

const Search = ({ fetchWeatherData }) => {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(city);
    setCity('');
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter city..." value={city} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;