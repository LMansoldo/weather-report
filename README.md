# Weather Report

A weather dashboard application that displays weather information for multiple cities.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1 - Clone the repository:

```bash
git clone https://github.com/LMansoldo/weather-report.git
cd weather-report
```

2 - Install dependencies:

```bash
npm install
```

3 - Create a `.env` file in the root directory with the following content:

```bash
VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
```

Note: You need to obtain an API key from [OpenWeather](https://openweathermap.org/api) to use this application."

### Available Scripts

#### Development Server

Start the development server:

```bash
npm run dev
```

This will start the application in development mode. Open http://localhost:5173 to view it in your browser.

#### Build

Build the application for production:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

#### Preview

Preview the production build locally:

```bash
npm run preview
```

This serves the production build from the `dist` folder.

#### Testing

Run the test suite:

```bash
npm test
```
