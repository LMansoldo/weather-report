import { WeatherDetailsProps } from '@models/components/weather-card/types/weather-components.types';
import React from 'react';

export const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  humidity,
  pressure,
  layout = 'horizontal',
  showIcons = false,
  className = ''
}) => {
  const containerClass = 
    layout === 'horizontal' ? 'flex flex-row justify-between' : 
    layout === 'grid' ? 'grid grid-cols-2 gap-4' : 
    'flex flex-col';
  
  return (
    <dl className={`${containerClass} ${className}`}>
      <div className="flex items-center my-1">
        {showIcons && (
          <svg className="w-5 h-5 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14a7 7 0 01-7 7m0 0a7 7 0 01-7-7m14 0a7 7 0 00-7-7m-7 7a7 7 0 017-7" />
          </svg>
        )}
        <dt className="mr-1">Humidity:</dt>
        <dd>{humidity}%</dd>
      </div>
      <div className="flex items-center my-1">
        {showIcons && (
          <svg className="w-5 h-5 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )}
        <dt className="mr-1">Pressure:</dt>
        <dd>{pressure} hPa</dd>
      </div>
    </dl>
  );
};

export default WeatherDetails;
