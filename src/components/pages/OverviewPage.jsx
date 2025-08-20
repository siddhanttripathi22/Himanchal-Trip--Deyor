import React from 'react';
import { MapPin, Calendar, Users, Clock, Award, Heart, Globe } from 'lucide-react';
import { tripDetails } from '../../data/tripData';

export const OverviewPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Trip Overview</h2>
        <p className="text-xl text-gray-600">Your Complete Himachal Adventure Awaits</p>
      </div>

     
      <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-100">
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Dear Majid Khan,</h3>
          <p className="text-gray-600 mb-4 text-lg leading-relaxed">
            Greetings from <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Deyor Adventures</span>.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our sales team has crafted this <span className="font-bold text-purple-600">Quote</span> regarding your upcoming trip. Please go through it and let's know if you would like any changes in any of the provided services. Contact details are provided at the end.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <MapPin className="text-blue-600 mx-auto mb-3" size={32} />
            <p className="text-sm text-gray-500 uppercase tracking-wide">Destination</p>
            <p className="font-bold text-xl text-gray-800">{tripDetails.destination}</p>
          </div>
          
          <div className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <Calendar className="text-green-600 mx-auto mb-3" size={32} />
            <p className="text-sm text-gray-500 uppercase tracking-wide">Start Date</p>
            <p className="font-bold text-xl text-gray-800">{tripDetails.startDate}</p>
          </div>
          
          <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <Users className="text-purple-600 mx-auto mb-3" size={32} />
            <p className="text-sm text-gray-500 uppercase tracking-wide">Travelers</p>
            <p className="font-bold text-xl text-gray-800">{tripDetails.pax}</p>
          </div>
          
          <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <Clock className="text-orange-600 mx-auto mb-3" size={32} />
            <p className="text-sm text-gray-500 uppercase tracking-wide">Duration</p>
            <p className="font-bold text-xl text-gray-800">{tripDetails.duration}</p>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm uppercase tracking-wide">Total Investment</p>
              <p className="text-sm text-blue-200">Including all taxes & GST</p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold">₹{tripDetails.totalCost}</p>
              <p className="text-blue-200 text-sm">Trip ID: {tripDetails.tripId}</p>
            </div>
          </div>
        </div>
      </div>

    
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <Award className="text-yellow-500 mx-auto mb-4" size={48} />
          <h4 className="text-xl font-bold text-gray-800 mb-3">Award Winning</h4>
          <p className="text-gray-600">Featured on Shark Tank India with proven track record</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <Heart className="text-red-500 mx-auto mb-4" size={48} />
          <h4 className="text-xl font-bold text-gray-800 mb-3">Personalized Care</h4>
          <p className="text-gray-600">Tailored experiences crafted just for you</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <Globe className="text-blue-500 mx-auto mb-4" size={48} />
          <h4 className="text-xl font-bold text-gray-800 mb-3">Expert Guidance</h4>
          <p className="text-gray-600">Local expertise for authentic experiences</p>
        </div>
      </div>
    </div>
  </div>
);