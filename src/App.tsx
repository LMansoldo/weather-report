import WeatherDashboard from '@views/pages/weather-dashboard/weather-dashboard';

function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <header>
        <h1 className="sr-only">Weather Report</h1>
      </header>
      <main id="main-content" role="main">
        <WeatherDashboard />
      </main>
      <footer className="text-center p-4 text-gray-600">
        <p>© {new Date().getFullYear()} Weather Report</p>
      </footer>
    </div>
  );
}

export default App;