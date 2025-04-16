import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-gray-800 text-white py-20 sm:py-24 md:py-32 lg:py-40">
      {/* Background Image */}
      <div className="absolute inset-0">
        
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-6">
          Start Your Business with Meesho
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-black mb-8">
          Discover amazing products at wholesale prices. Build your business with ease.
        </p>

        <a
          href="#signup"
          className="inline-block bg-pink-600 text-black font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-pink-700 transition-colors duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
