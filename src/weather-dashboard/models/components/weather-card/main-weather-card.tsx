import React from 'react';
import WeatherHeader from '@models/components/weather-card/common/weather-header';
import WeatherIcon from '@models/components/weather-card/common/weather-icon';
import WeatherTemperature from '@models/components/weather-card/common/weather-temperature';
import WeatherDetails from '@models/components/weather-card/common/weather-details';
import WeatherFooter from '@models/components/weather-card/common/weather-footer';
import { MainWeatherCardProps } from '@models/components/weather-card/types/weather-components.types';
import { generateSafeId } from '@models/helpers/weather.helper';

const MainWeatherCard: React.FC<MainWeatherCardProps> = ({ weatherData, className = '' }) => {
  const { city, temperature, humidity, pressure, description, icon, timestamp } = weatherData;
  const titleId = generateSafeId('main-city', city.name);
  
  return (
    <article 
      className={`bg-white rounded-lg shadow-lg p-6 w-full mx-auto relative ${className}`}
      aria-labelledby={titleId}
    >

      <WeatherHeader 
        cityName={city.name}
        region={city.region}
        country={city.country}
        timestamp={timestamp}
        size="large"
        showTime={true}
      />
      
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <WeatherIcon 
          icon={icon}
          description={description}
          size="large"
          className="mb-4 md:mb-0"
        />
        
        <WeatherTemperature 
          temperature={temperature}
          size="large"
          className="text-center md:text-right"
        />
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-3">Weather Details</h3>
        <WeatherDetails 
          humidity={humidity}
          pressure={pressure}
          layout="horizontal"
          showIcons={true}
        />
      </div>
      
      <WeatherFooter 
        timestamp={timestamp}
        showSource={true}
        className="mt-6 text-center"
      />
    </article>
  );
};

export default MainWeatherCard;
