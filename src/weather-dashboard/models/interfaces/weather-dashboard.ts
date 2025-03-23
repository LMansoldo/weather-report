export interface ICity {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
}

export interface IWeatherData {
  city: ICity;
  temperature: number;
  humidity: number;
  pressure: number;
  description: string;
  icon: string;
  timestamp: number;
}