import { ICity, IWeatherData } from '@interfaces/weather-dashboard';
import { WEATHER_API_ENDPOINTS } from '@enums/weather.enum.ts';
import { Cities } from '@constants/cities-data.const';

export const getApiKey = () => {
  return import.meta.env.VITE_OPENWEATHER_API_KEY;
};

const API_KEY = getApiKey();

if (!API_KEY) {
  console.error('VITE_OPENWEATHER_API_KEY is not defined in the environment variables');
}

export const fetchWeatherData = async (city: ICity): Promise<IWeatherData> => {
  try {
    const url = `${WEATHER_API_ENDPOINTS.BASE_URL}?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${API_KEY}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch weather data: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      city,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      timestamp: Date.now()
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Weather API error: ${error.message}`);
    } else {
      throw new Error('Unexpected error fetching weather data');
    }
  }
};

export const fetchAllCitiesWeather = async (): Promise<IWeatherData[]> => {
  const promises = Cities.map(city => fetchWeatherData(city));
  return await Promise.all(promises);
};