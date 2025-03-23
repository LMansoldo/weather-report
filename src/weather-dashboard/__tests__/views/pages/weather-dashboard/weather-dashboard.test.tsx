import { render, screen, fireEvent } from '@testing-library/react';
import WeatherDashboard from '@views/pages/weather-dashboard/weather-dashboard';
import { useWeatherData } from '@viewmodels/hooks/useWeatherData';
import WeatherCard from '@models/components/weather-card/weather-card';
import MainWeatherCard from '@models/components/weather-card/main-weather-card';

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

jest.mock('@models/components/weather-card/weather-card', () => jest.fn(() => <div data-testid="weather-card" />));
jest.mock('@models/components/weather-card/main-weather-card', () => jest.fn(() => <div data-testid="main-weather-card" />));

describe('WeatherDashboard Component', () => {
  const mockWeatherData = [
    {
      city: { name: 'New York', region: 'NY', country: 'USA' },
      temperature: 20,
      humidity: 65,
      pressure: 1013,
      description: 'clear sky',
      icon: '01d',
      timestamp: Date.now(),
    },
    {
      city: { name: 'London', region: 'England', country: 'UK' },
      temperature: 15,
      humidity: 70,
      pressure: 1010,
      description: 'cloudy',
      icon: '03d',
      timestamp: Date.now(),
    }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    (useWeatherData as jest.Mock).mockReturnValue({
      weatherData: [],
      loading: true,
      error: null,
      timeRemaining: '0:30',
      refreshData: jest.fn(),
    });
  });

  it('should show loading state initially', () => {
    render(<WeatherDashboard />);
    expect(screen.getByText('Loading weather data...')).toBeTruthy();
    expect(screen.getByRole('status')).toBeTruthy();
  });

  it('should render weather cards when data is loaded', () => {
    (useWeatherData as jest.Mock).mockReturnValue({
      weatherData: mockWeatherData,
      loading: false,
      error: null,
      timeRemaining: '0:30',
      refreshData: jest.fn(),
    });
    
    render(<WeatherDashboard />);
    

    expect(MainWeatherCard).toHaveBeenCalledWith({ weatherData: mockWeatherData[0] }, {});
    
    expect(WeatherCard).toHaveBeenCalledTimes(1);
    expect(WeatherCard).toHaveBeenCalledWith({ weatherData: mockWeatherData[1] }, {});
    



    expect(screen.getByText('Next update in:')).toBeTruthy();
  });
  it('should show error message when there is an error', () => {
    const mockRefreshData = jest.fn();
    (useWeatherData as jest.Mock).mockReturnValue({
      weatherData: [],
      loading: false,
      error: 'Failed to fetch weather data',
      timeRemaining: '0:30',
      refreshData: mockRefreshData,
    });
    
    render(<WeatherDashboard />);
    
    expect(screen.getByText('Failed to fetch weather data')).toBeTruthy();
    
    const retryButton = screen.getByRole('button', { name: /retry/i });
    expect(retryButton).toBeTruthy();
    
    fireEvent.click(retryButton);
    
    expect(mockRefreshData).toHaveBeenCalledTimes(1);
  });
});
