import React from 'react';
import { WEATHER_API_ENDPOINTS } from '@enums/weather.enum';
import { WeatherIconProps } from '@models/components/weather-card/types/weather-components.types';

export const WeatherIcon: React.FC<WeatherIconProps> = ({
  icon,
  description,
  size = 'small',
  className = ''
}) => {
  const iconSize = 
    size === 'large' ? '@4x.png' : 
    size === 'medium' ? '@3x.png' : 
    '@2x.png';
  
  const iconClass = 
    size === 'large' ? 'w-24 h-24' : 
    size === 'medium' ? 'w-16 h-16' : 
    'w-12 h-12';
  
  const textClass = 
    size === 'large' ? 'text-xl' : 
    size === 'medium' ? 'text-lg' : 
    'text-base';
  
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={`${WEATHER_API_ENDPOINTS.ICON_URL}/${icon}${iconSize}`} 
        alt=""
        aria-hidden="true"
        className={iconClass} 
      />
      <p className={`capitalize ml-2 ${textClass}`}>
        <span className="sr-only">Weather condition:</span> {description}
      </p>
    </div>
  );
};

export default WeatherIcon;
