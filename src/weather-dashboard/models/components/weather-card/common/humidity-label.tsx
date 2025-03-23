import React from 'react';
import { HumidityLabelProps } from '@models/components/weather-card/types/weather-components.types';

export const HumidityLabel: React.FC<HumidityLabelProps> = ({ 
  humidity, 
  className = '' 
}) => (
  <div className={`absolute top-4 right-4 bg-black bg-opacity-30 text-white px-3 py-1 rounded-full flex items-center ${className}`}>
    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14a7 7 0 01-7 7m0 0a7 7 0 01-7-7m14 0a7 7 0 00-7-7m-7 7a7 7 0 017-7" />
    </svg>
    <span>{humidity}%</span>
    <span className="sr-only">Humidity</span>
  </div>
);

export default HumidityLabel;
