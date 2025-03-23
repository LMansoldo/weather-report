import React from 'react';
import { WeatherFooterProps } from '@models/components/weather-card/types/weather-components.types';

export const WeatherFooter: React.FC<WeatherFooterProps> = ({
  timestamp,
  showSource = false,
  className = ''
}) => {
  const formattedTime = new Date(timestamp).toLocaleTimeString();
  const formattedDate = new Date(timestamp).toLocaleDateString();
  
  return (
    <footer className={`mt-4 text-xs text-gray-500 ${className}`}>
      {!showSource ? (
        <p>
          Last updated: 
          <time dateTime={new Date(timestamp).toISOString()}>
            {formattedTime} on {formattedDate}
          </time>
        </p>
      ) : (
        <p>
          Weather data provided by OpenWeather
        </p>
      )}
    </footer>
  );
};

export default WeatherFooter;
