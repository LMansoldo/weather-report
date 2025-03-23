import { InjectedWeatherCardProps, WithWeatherCardProps } from '@models/components/weather-card/types/weather-components.types';
import { getTemperatureColorClass, getTemperatureDescription } from '@models/helpers/weather.helper';
import React from 'react';

export const withWeatherCard = <P extends InjectedWeatherCardProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithWeatherCard: React.FC<WithWeatherCardProps & Omit<P, keyof InjectedWeatherCardProps>> = (props) => {
    const { weatherData, ...restProps } = props;
    
    return (
      <WrappedComponent
        {...(restProps as unknown as P)}
        city={weatherData.city}
        temperature={weatherData.temperature}
        humidity={weatherData.humidity}
        pressure={weatherData.pressure}
        description={weatherData.description}
        icon={weatherData.icon}
        timestamp={weatherData.timestamp}
        getTemperatureClass={getTemperatureColorClass}
        getTemperatureDescription={getTemperatureDescription}
      />
    );
  };
  
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithWeatherCard.displayName = `withWeatherCard(${displayName})`;
  
  return WithWeatherCard;
};

export default withWeatherCard;
