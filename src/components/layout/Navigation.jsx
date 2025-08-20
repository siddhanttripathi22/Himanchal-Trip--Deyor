import React from 'react';
import { Mountain, Menu, X } from 'lucide-react';
import { navigationItems } from '../../data/navigationData';

export const Navigation = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-lg shadow-lg">
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-between h-16">
        
        <div 
          onClick={() => setCurrentPage('home')}
          className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
            <Mountain size={24} />
          </div>
          <span className="text-xl font-bold text-gray-800">DEYOR</span>
        </div>

        
        <div className="hidden md:flex space-x-8">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <IconComponent size={18} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>

       
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

    
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center space-x-3 w-full px-4 py-3 text-left rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <IconComponent size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  </nav>
);