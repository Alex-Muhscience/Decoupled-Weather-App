// stores/useWeatherStore.ts
import { create } from 'zustand';

export interface Weather {
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

interface WeatherStore {
  data: Weather | null;
  loading: boolean;
  error: string | null;
  fetchWeather: (city: string) => Promise<void>;
}

const useWeatherStore = create<WeatherStore>((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchWeather: async (city) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/weather?city=${city}`);
      const data = await response.json();
      set({ data, loading: false });
    } catch (error) {
      set({ data: null, loading: false, error: 'Failed to fetch weather' });
      console.error('Failed to fetch weather:', error);
    }
  },
}));

export default useWeatherStore;