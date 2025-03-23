import { IWeatherData } from '@models/interfaces/weather-dashboard';
import { fetchAllCitiesWeather } from '@services/weather.service';
import { TEMPERATURE_THRESHOLDS, TEMPERATURE_COLORS } from '@enums/weather.enum';

export const fetchWeatherData = async (): Promise<{
  data: IWeatherData[];
  error: string | null;
}> => {
  try {
    const data = await fetchAllCitiesWeather();
    return { data, error: null };
  } catch (err) {
    console.error('Error fetching weather data:', err);
    return { 
      data: [], 
      error: 'Failed to fetch weather data. Please try again later.' 
    };
  }
};

export const calculateNextUpdateTime = (updateInterval: number): number => {
  return Date.now() + updateInterval;
};

export const formatRemainingTime = (nextUpdateTime: number): string => {
  const remaining = Math.max(0, nextUpdateTime - Date.now());
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export const shouldUpdateData = (
  nextUpdateTime: number, 
  hasData: boolean
): boolean => {
  const remaining = nextUpdateTime - Date.now();
  return remaining <= 0 && hasData;
};

export const setupUpdateTimeout = (
  callback: () => void, 
  updateInterval: number
): NodeJS.Timeout => {
  return setTimeout(callback, updateInterval);
};

export const clearExistingTimeout = (timeoutRef: NodeJS.Timeout | null): void => {
  if (timeoutRef) {
    clearTimeout(timeoutRef);
  }
};

export const getTemperatureColorClass = (temp: number): string => {
  if (temp <= TEMPERATURE_THRESHOLDS.COLD) return TEMPERATURE_COLORS.COLD;
  if (temp <= TEMPERATURE_THRESHOLDS.WARM) return TEMPERATURE_COLORS.MODERATE;
  return TEMPERATURE_COLORS.HOT;
};

export const getTemperatureDescription = (temp: number): string => {
  if (temp <= TEMPERATURE_THRESHOLDS.COLD) return "cold temperature";
  if (temp <= TEMPERATURE_THRESHOLDS.WARM) return "moderate temperature";
  return "hot temperature";
};

export const formatTime = (timestamp: number): string => {
  return new Date(timestamp).toLocaleTimeString();
};

export const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleDateString();
};

export const generateSafeId = (prefix: string, name: string): string => {
  return `${prefix}-${name.toLowerCase().replace(/\s+/g, '-')}`;
};
