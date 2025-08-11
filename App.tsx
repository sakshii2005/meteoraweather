import React from 'react';
import { Cloud, Sun, CloudRain, Wind, Thermometer, Droplets } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <Cloud className="w-8 h-8 text-blue-300" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Meteora
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Sun className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Wind className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for a city..."
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 hover:bg-blue-600 rounded-xl transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Current Weather Hero */}
          <div className="mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/80">New York, NY</span>
              </div>
              
              <div className="mb-6">
                <div className="text-7xl font-light mb-2">22°</div>
                <div className="text-xl text-white/80 mb-2">Partly Cloudy</div>
                <div className="text-white/60">Feels like 25°</div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center">
                  <Wind className="w-6 h-6 text-blue-300 mb-2" />
                  <div className="text-sm text-white/60">Wind</div>
                  <div className="font-semibold">12 km/h</div>
                </div>
                <div className="flex flex-col items-center">
                  <Droplets className="w-6 h-6 text-blue-300 mb-2" />
                  <div className="text-sm text-white/60">Humidity</div>
                  <div className="font-semibold">68%</div>
                </div>
                <div className="flex flex-col items-center">
                  <Thermometer className="w-6 h-6 text-blue-300 mb-2" />
                  <div className="text-sm text-white/60">Pressure</div>
                  <div className="font-semibold">1013 hPa</div>
                </div>
                <div className="flex flex-col items-center">
                  <Sun className="w-6 h-6 text-blue-300 mb-2" />
                  <div className="text-sm text-white/60">UV Index</div>
                  <div className="font-semibold">6</div>
                </div>
              </div>
            </div>
          </div>

          {/* Weather Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            {/* Hourly Forecast */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">24-Hour Forecast</h3>
              <div className="space-y-3">
                {[
                  { time: '12 PM', temp: '22°', icon: Sun, desc: 'Sunny' },
                  { time: '1 PM', temp: '24°', icon: Sun, desc: 'Sunny' },
                  { time: '2 PM', temp: '25°', icon: Cloud, desc: 'Cloudy' },
                  { time: '3 PM', temp: '23°', icon: CloudRain, desc: 'Light Rain' },
                ].map((hour, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white/80">{hour.time}</span>
                    <div className="flex items-center space-x-2">
                      <hour.icon className="w-4 h-4 text-blue-300" />
                      <span className="text-sm text-white/60">{hour.desc}</span>
                    </div>
                    <span className="font-semibold">{hour.temp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Air Quality */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">Air Quality</h3>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-green-400 mb-2">42</div>
                <div className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                  Good
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-white/5 rounded-xl">
                  <div className="text-sm text-white/60">PM2.5</div>
                  <div className="font-semibold">12 μg/m³</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-xl">
                  <div className="text-sm text-white/60">PM10</div>
                  <div className="font-semibold">18 μg/m³</div>
                </div>
              </div>
            </div>

            {/* Astronomy */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">Sun & Moon</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-white/5 rounded-xl">
                  <Sun className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <div className="text-sm text-white/60">Sunrise</div>
                  <div className="font-semibold">6:42 AM</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-xl">
                  <Sun className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-sm text-white/60">Sunset</div>
                  <div className="font-semibold">7:28 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* 7-Day Forecast */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-6">7-Day Forecast</h3>
            <div className="space-y-4">
              {[
                { day: 'Today', high: '25°', low: '18°', icon: Sun, desc: 'Sunny', rain: '0%' },
                { day: 'Tomorrow', high: '23°', low: '16°', icon: Cloud, desc: 'Cloudy', rain: '20%' },
                { day: 'Wednesday', high: '21°', low: '14°', icon: CloudRain, desc: 'Light Rain', rain: '80%' },
                { day: 'Thursday', high: '24°', low: '17°', icon: Sun, desc: 'Sunny', rain: '10%' },
                { day: 'Friday', high: '26°', low: '19°', icon: Sun, desc: 'Sunny', rain: '5%' },
                { day: 'Saturday', high: '22°', low: '15°', icon: CloudRain, desc: 'Rain', rain: '90%' },
                { day: 'Sunday', high: '20°', low: '13°', icon: Cloud, desc: 'Overcast', rain: '40%' },
              ].map((day, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                  <div className="flex items-center space-x-4 flex-1">
                    <span className="font-medium w-20">{day.day}</span>
                    <day.icon className="w-6 h-6 text-blue-300" />
                    <span className="text-white/80 flex-1">{day.desc}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-blue-300 text-sm">{day.rain}</span>
                    <div className="flex space-x-2">
                      <span className="font-semibold">{day.high}</span>
                      <span className="text-white/60">{day.low}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;