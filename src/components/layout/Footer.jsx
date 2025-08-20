import React from "react";
import { Mountain, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const Footer = () => (
  <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
   
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
      <svg
        className="relative block w-full h-10 text-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 100"
      >
        <path
          fill="currentColor"
          d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,74.7C672,53,768,43,864,69.3C960,96,1056,160,1152,176C1248,192,1344,160,1392,144L1440,128V0H0Z"
        ></path>
      </svg>
    </div>

    <div className="container mx-auto px-6 py-16 relative z-10">
      <div className="grid md:grid-cols-4 gap-10">
        
        <div className="md:col-span-2">
          <div className="flex items-center space-x-3 mb-5">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl shadow-lg">
              <Mountain size={28} />
            </div>
            <span className="text-2xl font-bold">DEYOR Adventures</span>
          </div>
          <p className="text-gray-300 mb-5 leading-relaxed">
            Creating unforgettable travel experiences across the Himalayas. 
            Featured on <span className="font-semibold text-white">Shark Tank India</span> 
            for our innovative approach to adventure tourism.
          </p>
          <span className="bg-red-600 px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            🚀 SHARK TANK FEATURED
          </span>
        </div>

   
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            {["About Us", "Our Tours", "Reviews", "Blog"].map((link) => (
              <li
                key={link}
                className="hover:text-white cursor-pointer transition-colors"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

      
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <div className="space-y-2 text-gray-300">
            <p>📞 +91 98765 43210</p>
            <p>✉️ travel@deyor.com</p>
            <p>📍 Mumbai, Maharashtra</p>
          </div>
        </div>
      </div>


      <div className="flex justify-center space-x-6 mt-10">
        {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
          <div
            key={i}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer"
          >
            <Icon size={20} />
          </div>
        ))}
      </div>

   
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-gray-400">
          © 2025 Deyor Adventures. All rights reserved. | Crafted with ❤️ in India
        </p>
      </div>
    </div>
  </footer>
);
