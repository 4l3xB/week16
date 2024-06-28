import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import WeatherList from './components/WeatherList';
import Loading from './components/Loading';
import Error from './components/Error';

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [cities, setCities] = useState([]);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4da0f4ab56bb688d2f527d0bed760460&units=metric`);
      setWeatherData((prevData) => [...prevData, response.data]);
      setLoading(false);
      setError('');
    } catch (error) {
      setError('Could not fetch weather data. Please try again later.');
      setLoading(false);
    }
  };

  const addCity = (city) => {
    if (!cities.includes(city)) {
      setCities((prevCities) => [...prevCities, city]);
      fetchWeatherData(city);
    } else {
      setError('City already exists in the list.');
    }
  };

  const updateCity = (oldCity, newCity) => {
    setCities((prevCities) =>
      prevCities.map((city) => (city === oldCity ? newCity : city))
    );
    fetchWeatherData(newCity);
    setWeatherData((prevData) => prevData.filter((data) => data.name !== oldCity));
  };

  const deleteCity = (city) => {
    setCities((prevCities) => prevCities.filter((c) => c !== city));
    setWeatherData((prevData) => prevData.filter((data) => data.name !== city));
  };

  return (
    <div className="App">
      <Header />
      <Search addCity={addCity} />
      {loading ? (
        <Loading />
      ) : error ? (
        <Error message={error} />
      ) : (
        <WeatherList weatherData={weatherData} deleteCity={deleteCity} updateCity={updateCity} />
      )}
      <Footer />
    </div>
  );
}

export default App;
