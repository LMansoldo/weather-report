import { MainWeatherCard, WeatherDetails, WeatherFooter, WeatherHeader, WeatherIcon, WeatherTemperature } from '@models/components/weather-card';
import { render, screen } from '@testing-library/react';

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


jest.mock('@models/components/weather-card/common/weather-header', () => jest.fn(() => <div data-testid="weather-header" />));
jest.mock('@models/components/weather-card/common/weather-icon', () => jest.fn(() => <div data-testid="weather-icon" />));
jest.mock('@models/components/weather-card/common/weather-temperature', () => jest.fn(() => <div data-testid="weather-temperature" />));
jest.mock('@models/components/weather-card/common/weather-details', () => jest.fn(() => <div data-testid="weather-details" />));
jest.mock('@models/components/weather-card/common/weather-footer', () => jest.fn(() => <div data-testid="weather-footer" />));


jest.mock('@utils/weather-utils', () => ({
  generateSafeId: jest.fn().mockReturnValue('main-city-new-york'),
}));

describe('MainWeatherCard Component', () => {
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

  it('should render all subcomponents with correct props', () => {
    render(<MainWeatherCard weatherData={mockWeatherData} className="custom-class" />);
    
    const article = screen.getByRole('article');
    expect(article).toHaveClass('bg-white', 'rounded-lg', 'shadow-lg', 'custom-class');
    expect(article).toHaveAttribute('aria-labelledby', 'main-city-new-york');
    
    expect(screen.getByTestId('weather-header')).toBeInTheDocument();
    expect(screen.getByTestId('weather-icon')).toBeInTheDocument();
    expect(screen.getByTestId('weather-temperature')).toBeInTheDocument();
    expect(screen.getByTestId('weather-details')).toBeInTheDocument();
    expect(screen.getByTestId('weather-footer')).toBeInTheDocument();
    
    expect(WeatherHeader).toHaveBeenCalledWith({
      cityName: 'New York',
      region: 'NY',
      country: 'USA',
      timestamp: mockWeatherData.timestamp,
      size: 'large',
      showTime: true
    }, {});
    expect(WeatherIcon).toHaveBeenCalledWith({
      icon: '01d',
      description: 'clear sky',
      size: 'large',
      className: 'mb-4 md:mb-0'
    }, {});
    expect(WeatherTemperature).toHaveBeenCalledWith({
      temperature: 20,
      size: 'large',
      className: 'text-center md:text-right'
    }, {});
    expect(WeatherDetails).toHaveBeenCalledWith({
      humidity: 65,
      pressure: 1013,
      layout: 'horizontal',
      showIcons: true
    }, {});
    expect(WeatherFooter).toHaveBeenCalledWith({
      timestamp: mockWeatherData.timestamp,
      showSource: true,
      className: 'mt-6 text-center'
    }, {});
  });
});
