export enum TEMPERATURE_THRESHOLDS {
  COLD = 5,
  WARM = 25
}

export enum TEMPERATURE_COLORS {
  COLD = 'text-blue-500',
  MODERATE = 'text-orange-500',
  HOT = 'text-red-500'
}

export enum UPDATE_INTERVAL {
  MINUTES = 1,
  MILLISECONDS = 1 * 60 * 1000,
  TIMER_REFRESH_RATE = 100
}

export enum WEATHER_API_ENDPOINTS {
  BASE_URL = 'https://api.openweathermap.org/data/2.5/weather',
  ICON_URL = 'http://openweathermap.org/img/wn'
}
