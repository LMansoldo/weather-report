import React, { useRef, useEffect } from 'react';
import WeatherCard from '@models/components/weather-card/weather-card';
import MainWeatherCard from '@models/components/weather-card/main-weather-card';
import { useWeatherData } from '@viewmodels/hooks/useWeatherData';
import { UPDATE_INTERVAL } from '@enums/weather.enum';
import DashboardLayout, { DashboardSection } from '@views/layouts/dashboard-layout';

const WeatherDashboard: React.FC = () => {
  const { weatherData, loading, error, timeRemaining, refreshData } = useWeatherData({
    updateInterval: UPDATE_INTERVAL.MILLISECONDS,
    timerRefreshRate: UPDATE_INTERVAL.TIMER_REFRESH_RATE
  });
  
  const statusAnnouncementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!loading && weatherData.length > 0) {
      if (statusAnnouncementRef.current) {
        statusAnnouncementRef.current.textContent = `Weather data updated. Showing weather for ${weatherData.length} cities.`;
      }
    }
  }, [weatherData, loading]);
  
  const mainWeatherData = weatherData.length > 0 ? weatherData[0] : null;
  const secondaryWeatherData = weatherData.length > 1 ? weatherData.slice(1) : [];
  
  const renderDashboardContent = () => {
    if (weatherData.length === 0) return null;
    
    return (
      <>
        {mainWeatherData && (
          <DashboardSection title="Featured Location" titleVisible={false}>
            <MainWeatherCard weatherData={mainWeatherData} />
          </DashboardSection>
        )}
        
        {secondaryWeatherData.length > 0 && (
          <DashboardSection title="Other Locations">
            <ul 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center"
              aria-label="Weather information for additional cities"
            >
              {secondaryWeatherData.map((data, index) => (
                <li key={index} className="w-full">
                  <WeatherCard weatherData={data} />
                </li>
              ))}
            </ul>
          </DashboardSection>
        )}
        
        <DashboardSection title="Update Information" titleVisible={false}>
          <div 
            className="text-center w-full text-gray-500 text-sm"
            role="status"
            aria-live="polite"
          >
            <p>Next update in: <time dateTime={`PT${timeRemaining.replace(':', 'M')}S`}>{timeRemaining}</time></p>
          </div>
        </DashboardSection>
      </>
    );
  };
  
  return (
    <DashboardLayout
      title="Weather Report"
      statusAnnouncement={statusAnnouncementRef}
      loading={loading && weatherData.length === 0}
      error={error}
      onRetry={refreshData}
    >
      {renderDashboardContent()}
    </DashboardLayout>
  );
};

export default WeatherDashboard;