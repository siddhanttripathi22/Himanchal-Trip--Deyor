import React from 'react';
import { Home, Users, Utensils } from 'lucide-react';
import { accommodations } from '../../data/tripData';
import { StarRating } from '../ui/StarRating';

export const AccommodationsPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Accommodations</h2>
        <p className="text-xl text-gray-600">Handpicked Hotels & Homestays</p>
      </div>

      <div className="grid gap-8">
        {accommodations.map((hotel, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300">
            <div className="md:flex">
             
              <div className="md:w-1/3">
                <div className="h-64 md:h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="relative z-10 text-center text-white">
                    <Home size={48} className="mx-auto mb-2" />
                    <p className="font-bold text-lg">{hotel.name}</p>
                    <p className="text-sm opacity-80">{hotel.location}</p>
                  </div>
                </div>
              </div>

              
              <div className="md:w-2/3 p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{hotel.name}</h3>
                    <p className="text-lg text-gray-600 mb-2">{hotel.location}</p>
                    {hotel.rating && <StarRating rating={hotel.rating} />}
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      {hotel.night ? `Night ${hotel.night}` : hotel.nights}
                    </p>
                    <p className="text-sm text-blue-600 font-medium">{hotel.checkIn}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <Home className="text-blue-600 mb-2" size={24} />
                    <p className="text-sm text-gray-500 mb-1">Rooms</p>
                    <p className="font-bold text-gray-800">{hotel.rooms}</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-4">
                    <Users className="text-green-600 mb-2" size={24} />
                    <p className="text-sm text-gray-500 mb-1">Occupancy</p>
                    <p className="font-bold text-gray-800">{hotel.roomsPax}</p>
                  </div>
                  
                  <div className="bg-orange-50 rounded-xl p-4">
                    <Utensils className="text-orange-600 mb-2" size={24} />
                    <p className="text-sm text-gray-500 mb-1">Meals</p>
                    <p className="font-bold text-gray-800">{hotel.mealPlan}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);