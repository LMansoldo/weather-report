import React from 'react';
import BaseWeatherCard from '@models/components/weather-card/base/base-weather-card';
import { WeatherCardProps } from '@models/components/weather-card/types/weather-components.types';

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData, className = '' }) => {
  return (
    <BaseWeatherCard 
      weatherData={weatherData}
      className={className}
      size="small"
      showExtendedInfo={false}
      showTimeInHeader={false}
      detailsLayout="vertical"
      showIcons={false}
    />
  );
};

export default WeatherCard;