import React from "react";
import { ChevronRight } from "lucide-react";
import homeBg from "../../assets/homeImage.png"; // 👈 your local image

export const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="relative min-h-screen w-full">
   
      <img
        src={homeBg}
        alt="Travel Destination"
        className="w-full h-screen object-cover"
      />

    
      <button
  onClick={() => setCurrentPage("overview")}
  className="absolute bottom-12 left-1/2 transform -translate-x-[90%] 
             bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 
             hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full 
             text-lg shadow-2xl flex items-center space-x-2 animate-bounce"
>
  <span>Start Your Journey</span>
  <ChevronRight size={20} />
</button>
    </div>
  );
};
