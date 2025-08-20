import React from 'react';
import { CheckCircle, XCircle, CreditCard } from 'lucide-react';
import { tripDetails, inclusions, exclusions } from '../../data/tripData';

export const PricingPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Pricing Details</h2>
        <p className="text-xl text-gray-600">Transparent & Comprehensive</p>
      </div>

      <div className="max-w-4xl mx-auto">
       
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Complete Package Price</h3>
            <div className="text-6xl font-black mb-2">₹{tripDetails.totalCost}</div>
            <p className="text-purple-200">For {tripDetails.pax} • {tripDetails.duration}</p>
            <p className="text-sm text-purple-200 mt-2">Trip ID: {tripDetails.tripId}</p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={28} />
                  What's Included
                </h4>
                <div className="space-y-4">
                  {inclusions.map((item, index) => (
                    <div key={index} className="flex items-center bg-green-50 rounded-lg p-3">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <XCircle className="text-red-500 mr-3" size={28} />
                  Not Included
                </h4>
                <div className="space-y-4">
                  {exclusions.map((item, index) => (
                    <div key={index} className="flex items-center bg-red-50 rounded-lg p-3">
                      <XCircle className="text-red-500 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <CreditCard className="text-blue-600 mr-3" />
                Payment Information
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 mb-2">✓ GST Included (5%)</p>
                  <p className="text-gray-600 mb-2">✓ No Hidden Charges</p>
                  <p className="text-gray-600">✓ Flexible Payment Options</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Per Person Cost</p>
                  <p className="text-2xl font-bold text-purple-600">₹26,278</p>
                  <p className="text-xs text-gray-500">(approximately)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
