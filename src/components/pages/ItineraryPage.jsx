import React from 'react';
import { ChevronLeft, ChevronRight, Navigation, Clock, Mountain, Star } from 'lucide-react';
import { dailyItinerary } from '../../data/tripData';


const itineraryImages = {
  1: "/images/shimla.jpg",
  2: "/images/sangla.jpeg",
  3: "/images/sangla-kalpa.webp",
  4: "/images/kalpa-kaza.jpg",
  5: "/images/kaza-local.jpg",
  6: "/images/kaza-chandrataal.jpg",
  7: "/images/chandrataal-manali.jpg",
  8: "/images/manali-chandigarh.jpg",
};

export const ItineraryPage = ({ activeDay, setActiveDay }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
    <div className="container mx-auto px-6">
   
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Daily Itinerary</h2>
        <p className="text-xl text-gray-600">Your 8-Day Himalayan Adventure</p>
      </div>

      
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {dailyItinerary.map((day) => (
          <button
            key={day.day}
            onClick={() => setActiveDay(day.day)}
            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
              activeDay === day.day
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white text-black-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            Day {day.day}
          </button>
        ))}
      </div>

      
      {dailyItinerary.map((day) => (
        activeDay === day.day && (
          <div key={day.day} className="bg-white rounded-3xl shadow-2xl overflow-hidden">
           
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-black p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white bg-opacity-20 backdrop-blur-lg px-4 py-2 rounded-full">
                  <span className="font-bold text-lg">Day {day.day}</span>
                </div>
                <div className="text-right">
                 
                  <p className="text-xl font-bold text-white">{day.date}</p>
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{day.title}</h3>
              
             
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4">
                  <Navigation className="mb-1" size={24} />
                  <p className="text-sm text-grey-200">Distance</p>
                  <p className="font-extrabold text-lg">{day.distance}</p>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4">
                  <Clock className="mb-1" size={24} />
                  <p className="text-sm text-grey-200">Duration</p>
                  <p className="font-extrabold text-lg">{day.duration}</p>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4 col-span-2 md:col-span-1">
                  <Mountain className="mb-1" size={24} />
                  <p className="text-sm text-grey-200">Type</p>
                  <p className="font-extrabold text-lg">Adventure</p>
                </div>
              </div>
            </div>

           
            <div className="p-8">
              
              <div className="w-full h-80 rounded-2xl mb-8 shadow-xl overflow-hidden relative">
                <img
                  src={itineraryImages[day.day]}
                  alt={day.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h4 className="text-2xl font-bold text-white">{day.title}</h4>
                </div>
              </div>

            
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">{day.description}</p>
              </div>

          
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Star className="mr-2 text-yellow-500" />
                  Day Highlights
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {day.highlights.map((highlight, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                      <p className="font-medium text-gray-800">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      ))}

   
      <div className="flex justify-between mt-8">
        <button
          onClick={() => activeDay > 1 && setActiveDay(activeDay - 1)}
          disabled={activeDay === 1}
          className={`flex items-center px-6 py-3 rounded-xl font-bold transition-all ${
            activeDay === 1 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:shadow-lg transform hover:scale-105'
          }`}
        >
          <ChevronLeft size={20} className="mr-2" />
          Previous Day
        </button>
        
        <button
          onClick={() => activeDay < 8 && setActiveDay(activeDay + 1)}
          disabled={activeDay === 8}
          className={`flex items-center px-6 py-3 rounded-xl font-bold transition-all ${
            activeDay === 8 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
          }`}
        >
          Next Day
          <ChevronRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
  </div>
);
