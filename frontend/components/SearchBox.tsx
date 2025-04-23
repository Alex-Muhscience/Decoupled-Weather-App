// components/SearchBox.tsx
import React, { useState } from 'react';
import useWeatherStore from '../hooks/useWeatherStore';
import '../styles/SearchBox.css';

const SearchBox = () => {
  const [city, setCity] = useState('');
  const { fetchWeather, isLoading } = useWeatherStore();

  const handleSearch = async () => {
    if (city) {
      await fetchWeather(city);
    }
  };

  return (
    <div className="search-box">
      <label htmlFor="city-input" className="visually-hidden">
        Enter a city name
      </label>
      <input
        id="city-input"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city name"
        aria-label="Enter a city name"
        className="input"
      />
      <button
        onClick={handleSearch}
        disabled={isLoading}
        aria-busy={isLoading}
        className="button"
      >
        {isLoading ? 'Loading...' : 'Search'}
      </button>
    </div>
  );
};

export default SearchBox;