// components/Header.jsx
import React from 'react';
import { FiShoppingCart, FiSearch, FiUser } from 'react-icons/fi';

const Header = ({ cart = [] }) => {
  // Calculate total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white text-gray-700 shadow-lg sticky top-0 z-50 transition-all ease-in-out duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/image/meesho.jpg"
            alt="Logo"
            className="h-12 w-auto hover:scale-105 transform transition-transform duration-300"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow max-w-lg mx-4 relative">
          <input
            type="text"
            placeholder="Search for products"
            className="flex-grow px-6 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all ease-in-out duration-300"
          />
          <button className="absolute right-0 top-0 bottom-0 bg-pink-500 text-white px-6 py-3 rounded-r-md hover:bg-pink-600 transition-all ease-in-out duration-300">
            <FiSearch className="text-xl" />
          </button>
        </div>

        {/* Icons */}
        <div className="flex space-x-6 items-center">
          <div className="flex items-center space-x-1 hover:text-pink-500 cursor-pointer transition-all ease-in-out duration-300">
            <FiUser className="text-2xl" />
            <span className="text-sm font-medium">Account</span>
          </div>
          <div className="flex items-center space-x-1 hover:text-pink-500 cursor-pointer transition-all ease-in-out duration-300">
            <FiShoppingCart className="text-2xl" />
            <span className="text-sm font-medium">
              Cart: {totalItems}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
