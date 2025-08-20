import React from 'react';

export const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute animate-bounce opacity-20"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${15 + Math.random() * 10}s`
        }}
      >
        <div className={`w-2 h-2 bg-white rounded-full ${Math.random() > 0.5 ? 'animate-pulse' : ''}`}></div>
      </div>
    ))}
  </div>
);