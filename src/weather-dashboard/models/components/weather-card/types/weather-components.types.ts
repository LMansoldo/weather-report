import { IWeatherData } from '@interfaces/weather-dashboard';

export interface BaseWeatherCardProps {
  weatherData: IWeatherData;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  showExtendedInfo?: boolean;
  showTimeInHeader?: boolean;
  detailsLayout?: 'horizontal' | 'vertical' | 'grid';
  showIcons?: boolean;
}

export interface WeatherHeaderProps {
  cityName: string;
  region: string;
  country: string;
  timestamp?: number;
  size?: 'small' | 'medium' | 'large';
  showTime?: boolean;
  className?: string;
}

export interface WeatherIconProps {
  icon: string;
  description: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export interface WeatherTemperatureProps {
  temperature: number;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export interface WeatherDetailsProps {
  humidity: number;
  pressure: number;
  layout?: 'horizontal' | 'vertical' | 'grid';
  showIcons?: boolean;
  className?: string;
}

export interface HumidityLabelProps {
  humidity: number;
  className?: string;
}

export interface WeatherFooterProps {
  timestamp: number;
  showSource?: boolean;
  className?: string;
}

export interface WeatherCardProps {
  weatherData: IWeatherData;
  className?: string;
}

export interface MainWeatherCardProps {
  weatherData: IWeatherData;
  className?: string;
}

export interface WithWeatherCardProps {
  weatherData: IWeatherData;
  className?: string;
}

export interface InjectedWeatherCardProps {
  city: { name: string; region: string; country: string };
  temperature: number;
  humidity: number;
  pressure: number;
  description: string;
  icon: string;
  timestamp: number;
  getTemperatureClass: (temp: number) => string;
  getTemperatureDescription: (temp: number) => string;
}
