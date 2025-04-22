// pages/dashboard.tsx
'use client';

import React from 'react';
import SearchBox from '../components/SearchBox';
import useWeatherStore from '../hooks/useWeatherStore';

export interface WeatherData {
  current: {
    temp?: number;
    humidity?: number;
    wind_speed?: number;
    weather?: Array<{
      main: string;
      description: string;
    }>;
  };
}

export default function Dashboard() {
  const { weatherData: data, loading, error } = useWeatherStore();

  const renderWeatherData = () => {
    if (loading) {
      return (
        <p
          className="text-sm text-gray-500 animate-pulse"
          aria-live="polite"
        >
          Loading weather data...
        </p>
      );
    }

    if (error) {
      return (
        <div
          className="p-4 bg-red-50 border border-red-200 rounded-md"
          aria-live="assertive"
        >
          <p className="text-sm text-red-600">{error}</p>
        </div>
      );
    }

    if (!data || !data.current) {
      return (
        <p className="text-sm text-gray-500" aria-live="polite">
          Enter a location to see weather information
        </p>
      );
    }

    const { temp = 'N/A', humidity = 'N/A', wind_speed = 'N/A', weather = [] } = data.current;
    const weatherMain = weather[0]?.main || 'N/A';
    const weatherDescription = weather[0]?.description || 'N/A';

    return (
      <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900">
              {temp}°C
            </h2>
            <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
              {weatherMain}
            </span>
          </div>
          <p className="text-gray-600 capitalize">
            {weatherDescription}
          </p>
          <div>
            <p className="text-sm text-gray-500">Humidity</p>
            <p className="text-lg font-semibold">{humidity}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Wind Speed</p>
            <p>{wind_speed} m/s</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Weather Dashboard
        </h1>
        <SearchBox />
        {renderWeatherData()}
      </div>
    </main>
  );
}