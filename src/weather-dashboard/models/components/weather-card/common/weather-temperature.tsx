import { WeatherTemperatureProps } from '@models/components/weather-card/types/weather-components.types';
import { getTemperatureColorClass, getTemperatureDescription } from '@models/helpers/weather.helper';
import React from 'react';

export const WeatherTemperature: React.FC<WeatherTemperatureProps> = ({
  temperature,
  size = 'small',
  className = ''
}) => {
  const tempClass = 
    size === 'large' ? 'text-6xl' : 
    size === 'medium' ? 'text-5xl' : 
    'text-3xl';
  
  return (
    <div aria-live="polite" className={className}>
      <p className={`${tempClass} font-bold ${getTemperatureColorClass(temperature)}`}>
        <span className="sr-only">{getTemperatureDescription(temperature)}:</span>
        {temperature.toFixed(1)}
        <span aria-hidden="true">°C</span>
        <span className="sr-only"> degrees Celsius</span>
      </p>
    </div>
  );
};

export default WeatherTemperature;
