import { BaseWeatherCard, WeatherCard } from '@models/components/weather-card';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('@services/weather.service', () => ({
  fetchAllCitiesWeather: jest.fn().mockResolvedValue([
    {
      city: { name: 'New York', region: 'NY', country: 'USA' },
      temperature: 20,
      humidity: 65,
      pressure: 1013,
      description: 'clear sky',
      icon: '01d',
      timestamp: Date.now(),
    },
  ]),
}));

jest.mock('@viewmodels/hooks/useWeatherData', () => ({
  useWeatherData: jest.fn().mockReturnValue({
    weatherData: [
      {
        city: { name: 'New York', region: 'NY', country: 'USA' },
        temperature: 20,
        humidity: 65,
        pressure: 1013,
        description: 'clear sky',
        icon: '01d',
        timestamp: Date.now(),
      },
    ],
    loading: false,
    error: null,
    timeRemaining: '0:59',
    refreshData: jest.fn(),
  }),
}));

jest.mock('@models/components/weather-card/base/base-weather-card', () => {
  return jest.fn(() => <div data-testid="base-weather-card" />);
});

describe('WeatherCard Component', () => {
  const mockWeatherData = {
    city: { name: 'New York', region: 'NY', country: 'USA', lat: 40.7128, lon: -74.0060, },
    temperature: 20,
    humidity: 65,
    pressure: 1013,
    description: 'clear sky',
    icon: '01d',
    timestamp: Date.now(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render BaseWeatherCard with correct props', () => {
    render(<WeatherCard weatherData={mockWeatherData} className="custom-class" />);
    
    expect(BaseWeatherCard).toHaveBeenCalledWith({
      weatherData: mockWeatherData,
      className: 'custom-class',
      size: 'small',
      showExtendedInfo: false,
      showTimeInHeader: false,
      detailsLayout: 'vertical',
      showIcons: false
    }, {});
    
    expect(screen.getByTestId('base-weather-card')).toBeTruthy();
  });
});