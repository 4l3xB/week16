import React, { useState } from 'react';

const WeatherList = ({ weatherData, deleteCity, updateCity }) => {
  const [editingCity, setEditingCity] = useState(null);
  const [newCityName, setNewCityName] = useState('');

  const handleEdit = (city) => {
    setEditingCity(city);
    setNewCityName(city);
  };

  const handleUpdate = () => {
    updateCity(editingCity, newCityName);
    setEditingCity(null);
    setNewCityName('');
  };

  return (
    <div>
      {weatherData.map((data) => (
        <div key={data.id}>
          {editingCity === data.name ? (
            <div>
              <input
                type="text"
                value={newCityName}
                onChange={(e) => setNewCityName(e.target.value)}
              />
              <button onClick={handleUpdate}>Update</button>
            </div>
          ) : (
            <div>
              <h3>{data.name}</h3>
              <p>{data.main.temp} °C</p>
              <button onClick={() => deleteCity(data.name)}>Delete</button>
              <button onClick={() => handleEdit(data.name)}>Edit</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WeatherList;
