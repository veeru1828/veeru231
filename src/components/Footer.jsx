import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 text-gray-700 pt-12 pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Meesho</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            Meesho is India’s favorite one-stop online shop for quality products at wholesale prices. Start your business today!
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Useful Links</h2>
          <ul className="space-y-3 text-sm">
            {['About Us', 'Careers', 'Become a Supplier', 'FAQs'].map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-pink-500 hover:underline transition duration-300 ease-in-out"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Contact Us</h2>
          <ul className="text-sm space-y-2 text-gray-600">
            <li>
              Email: <a href="mailto:support@meesho.com" className="text-pink-600 hover:underline">support@meesho.com</a>
            </li>
            <li>Phone: +91 123 456 7890</li>
            <li>Mon - Sat | 10AM - 6PM</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Follow Us</h2>
          <div className="flex items-center space-x-5">
            <a href="#" className="text-pink-600 hover:text-pink-700 transition-transform transform hover:scale-110">
              <FaFacebookF />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-700 transition-transform transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-700 transition-transform transform hover:scale-110">
              <FaTwitter />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-700 transition-transform transform hover:scale-110">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-12 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} <span className="text-pink-600 font-medium">Meesho</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;