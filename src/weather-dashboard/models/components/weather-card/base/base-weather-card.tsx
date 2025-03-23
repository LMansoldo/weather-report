import React from 'react';
import { BaseWeatherCardProps } from '@models/components/weather-card/types/weather-components.types';
import WeatherHeader from '@models/components/weather-card/common/weather-header';
import WeatherIcon from '@models/components/weather-card/common/weather-icon';
import WeatherTemperature from '@models/components/weather-card/common/weather-temperature';
import WeatherDetails from '@models/components/weather-card/common/weather-details';
import WeatherFooter from '@models/components/weather-card/common/weather-footer';
import { generateSafeId } from '@models/helpers/weather.helper';

const BaseWeatherCard: React.FC<BaseWeatherCardProps> = ({ 
  weatherData, 
  className = '', 
  size = 'small',
  showTimeInHeader = false,
  detailsLayout = 'vertical',
  showIcons = false
}) => {
  const { city, temperature, humidity, pressure, description, icon, timestamp } = weatherData;
  
  const cardSizeClasses = 
    size === 'large' ? 'w-full p-6' : 
    size === 'medium' ? 'w-full p-5' : 
    'w-full p-4';
  
  const titleId = generateSafeId('city', city.name);
  
  return (
    <article 
      className={`bg-white rounded-lg shadow-md ${cardSizeClasses} ${className}`}
      aria-labelledby={titleId}
    >
      <WeatherHeader 
        cityName={city.name}
        region={city.region}
        country={city.country}
        timestamp={showTimeInHeader ? timestamp : undefined}
        size={size}
        showTime={showTimeInHeader}
      />
      
      <WeatherIcon 
        icon={icon}
        description={description}
        size={size}
        className="mb-4"
      />
      
      <WeatherTemperature 
        temperature={temperature}
        size={size}
        className="my-3"
      />
      
      <WeatherDetails 
        humidity={humidity}
        pressure={pressure}
        layout={detailsLayout}
        showIcons={showIcons}
        className="my-3"
      />
  
      
      {!showTimeInHeader && (
        <WeatherFooter 
          timestamp={timestamp}
        />
      )}
    </article>
  );
};

export default BaseWeatherCard;
