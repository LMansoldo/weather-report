import { useState, useEffect, useCallback, useRef } from 'react';
import { IWeatherData } from '@interfaces/weather-dashboard';
import { UPDATE_INTERVAL } from '@enums/weather.enum';
import {
  fetchWeatherData,
  calculateNextUpdateTime,
  formatRemainingTime,
  shouldUpdateData,
  setupUpdateTimeout,
  clearExistingTimeout
} from '@models/helpers/weather.helper';

interface WeatherDataOptions {
  updateInterval?: number; 
  timerRefreshRate?: number; 
}

export const useWeatherData = (options?: WeatherDataOptions) => {
  const updateInterval = options?.updateInterval || UPDATE_INTERVAL.MILLISECONDS;
  const timerRefreshRate = options?.timerRefreshRate || UPDATE_INTERVAL.TIMER_REFRESH_RATE;
  
  const [weatherData, setWeatherData] = useState<IWeatherData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<string>("0:00");

  const nextUpdateRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);


  const fetchData = useCallback(async () => {
    setLoading(true);
    
    const { data, error: fetchError } = await fetchWeatherData();
    
    if (fetchError) {
      setError(fetchError);
    } else {
      setWeatherData(data);
      setError(null);

      const nextUpdate = calculateNextUpdateTime(updateInterval);
      nextUpdateRef.current = nextUpdate;
      
      clearExistingTimeout(timeoutRef.current);
      timeoutRef.current = setupUpdateTimeout(fetchData, updateInterval);
    }
    
    setLoading(false);
  }, [updateInterval]);


  const updateRemainingTime = useCallback(() => {
    setTimeRemaining(formatRemainingTime(nextUpdateRef.current));

    if (shouldUpdateData(nextUpdateRef.current, weatherData.length > 0)) {
      fetchData();
    }
  }, [fetchData, weatherData.length]);


  useEffect(() => {
    fetchData();
    
    const timerIntervalId = setInterval(updateRemainingTime, timerRefreshRate);
    
    return () => {
      clearInterval(timerIntervalId);
      clearExistingTimeout(timeoutRef.current);
    };
  }, [fetchData, updateRemainingTime, timerRefreshRate]);


  const refreshDataManually = useCallback(() => {
    nextUpdateRef.current = 0;
    fetchData();
  }, [fetchData]);

  return {
    weatherData,
    loading,
    error,
    timeRemaining,
    refreshData: refreshDataManually
  };
};