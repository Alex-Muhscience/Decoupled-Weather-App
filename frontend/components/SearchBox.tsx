// components/SearchBox.tsx
import React, { useState } from 'react';

const SearchBox = () => {
  const [city, setCity] = useState('');
  const { fetchWeather } = useWeatherStore();

  const handleSearch = async () => {
    if (city) {
      await fetchWeather(city);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;

interface WeatherData {
  temperature: number;
  humidity: number;
  description: string;
  windSpeed: number;
}

interface WeatherState {
  weatherData: WeatherData | null;
  isLoading: boolean;
  error: string | null;
}

function useWeatherStore() {
  const [state, setState] = useState<WeatherState>({
    weatherData: null,
    isLoading: false,
    error: null
  });

  const fetchWeather = async (city: string) => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch weather data');
      }

      setState(prev => ({
        ...prev,
        weatherData: data,
        isLoading: false
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'An error occurred',
        isLoading: false
      }));
    }
  };

  return {
    ...state,
    fetchWeather
  };
}

