// stores/useWeatherStore.ts
import { create } from 'zustand';

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

export interface WeatherStore {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
  fetchWeather: (city: string) => Promise<void>;
}

const useWeatherStore = create<WeatherStore>((set) => ({
  weatherData: null,
  loading: false,
  error: null,
  fetchWeather: async (city: string) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/weather?city=${encodeURIComponent(city)}`);
      if (!response.ok) throw new Error('Failed to fetch weather data');
      const data = await response.json();
      set({ weatherData: data, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
}));

export default useWeatherStore;