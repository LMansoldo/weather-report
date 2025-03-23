export const fetchAllCitiesWeather = jest.fn().mockResolvedValue([
  {
    city: { name: 'New York', region: 'NY', country: 'USA' },
    temperature: 20,
    humidity: 65,
    pressure: 1013,
    description: 'clear sky',
    icon: '01d',
    timestamp: Date.now(),
  },
]);
