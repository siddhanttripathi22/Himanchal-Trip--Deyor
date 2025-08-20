import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export const ContactPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-xl text-gray-600">We're Here to Help Plan Your Perfect Trip</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
       
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center bg-blue-50 rounded-xl p-4">
                <Phone className="text-blue-600 mr-4" size={24} />
                <div>
                  <p className="font-bold text-gray-800">Phone</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center bg-green-50 rounded-xl p-4">
                <Mail className="text-green-600 mr-4" size={24} />
                <div>
                  <p className="font-bold text-gray-800">Email</p>
                  <p className="text-gray-600">travel@deyor.com</p>
                </div>
              </div>

              <div className="flex items-center bg-purple-50 rounded-xl p-4">
                <MapPin className="text-purple-600 mr-4" size={24} />
                <div>
                  <p className="font-bold text-gray-800">Office</p>
                  <p className="text-gray-600">Mumbai, Maharashtra</p>
                </div>
              </div>

              <div className="flex items-center bg-orange-50 rounded-xl p-4">
                <Globe className="text-orange-600 mr-4" size={24} />
                <div>
                  <p className="font-bold text-gray-800">Website</p>
                  <p className="text-gray-600">www.deyor.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-2">Ready to Book?</h4>
              <p className="text-blue-200 mb-4">Contact us now to confirm your Himachal adventure!</p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                Book Now
              </button>
            </div>
          </div>

        
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Quick Inquiry</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your travel preferences..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);