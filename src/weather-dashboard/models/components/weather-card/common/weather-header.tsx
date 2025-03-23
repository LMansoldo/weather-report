import { WeatherHeaderProps } from '@models/components/weather-card/types/weather-components.types';
import { generateSafeId } from '@models/helpers/weather.helper';
import React from 'react';

export const WeatherHeader: React.FC<WeatherHeaderProps> = ({
  cityName,
  region,
  country,
  timestamp,
  size = 'small',
  showTime = false,
  className = ''
}) => {
  const titleId = generateSafeId('city', cityName);
  const formattedTime = timestamp ? new Date(timestamp).toLocaleTimeString() : '';
  const formattedDate = timestamp ? new Date(timestamp).toLocaleDateString() : '';
  
  const titleSizeClass = 
    size === 'large' ? 'text-3xl' : 
    size === 'medium' ? 'text-2xl' : 
    'text-xl';
  
  return (
    <header className={`mb-4 ${className}`}>
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div>
          <h3 
            id={titleId} 
            className={`${titleSizeClass} font-bold mb-1`}
          >
            {cityName}
          </h3>
          <p className="text-gray-600 text-sm mb-2">
            <span className="sr-only">Region:</span> {region}, 
            <span className="sr-only">Country:</span> {country}
          </p>
        </div>
        
        {showTime && timestamp && (
          <div className="text-left md:text-right mt-2 md:mt-0">
            <p className="text-sm text-gray-500">
              Last updated: 
              <time dateTime={new Date(timestamp).toISOString()}>
                {formattedTime}
              </time>
            </p>
            <p className="text-sm text-gray-500">
              <time dateTime={new Date(timestamp).toISOString()}>
                {formattedDate}
              </time>
            </p>
          </div>
        )}
      </div>
    </header>
  );
};

export default WeatherHeader;
