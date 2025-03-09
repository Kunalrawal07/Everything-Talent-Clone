"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '../Theme/ThemeContext';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  const solutionsRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle click outside to close solutions dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={`${isDarkMode ? 'bg-transparent text-white' : 'bg-white text-gray-800'} w-full fixed z-50 transition-colors duration-300`}>
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Left Panel (Logo and Navigation Links) */}
        <div className="flex items-center">
          <div className={`hidden md:flex space-x-4 lg:space-x-8 ${isDarkMode ? 'bg-black/50 border-white/20' : 'bg-white/90 border-gray-200'} p-1 rounded-lg border pr-4 pl-4 pt-2 pb-1 backdrop-blur-sm`}>
            <Image src="/Assets/favicon.webp" alt="Logo" width={30} height={30} className="mr-2" />
            <a href="#" className={`${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'} transition-colors duration-300`}>Home</a>
            <a href="#" className={`${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'} transition-colors duration-300`}>Products</a>
            
            {/* Solutions dropdown with hover effect */}
            <div className="relative group" ref={solutionsRef}>
              <button 
                onMouseEnter={() => setIsSolutionsOpen(true)} 
                className={`${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'} transition-colors duration-300 flex items-center`}
              >
                Solutions
                <svg
                  className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div 
                onMouseLeave={() => setIsSolutionsOpen(false)} 
                className={`absolute mt-2 w-64 lg:w-80 ${isDarkMode ? 'bg-black/70 text-white' : 'bg-white/90 text-gray-800'} backdrop-blur-md rounded-lg shadow-lg p-2 transition-all duration-300 origin-top-right
                          ${isSolutionsOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
              >
                <div className="flex items-center space-x-2 p-2 hover:cursor-pointer rounded-lg transition-all duration-300 hover:bg-gradient-to-r from-purple-600 via-pink-400 to-red-500 hover:text-white">
                  <Image src="/Assets/dropdown.png" alt="Solution" width={40} height={40} className="rounded" />
                  <div>
                    <p className="text-sm font-semibold">Hiring Solution</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Streamline Hiring Process by Matching the right Talent to the right Opportunity</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-2 hover:cursor-pointer rounded-lg transition-all duration-300 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:text-white mt-1">
                  <Image src="/Assets/dropdown2.png" alt="Solution" width={40} height={40} className="rounded" />
                  <div>
                    <p className="text-sm font-semibold">Funded Startup</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Empower Startups With Essential Resources and Funding For Scaling and Success</p>
                  </div>
                </div>
              </div>
            </div>
            
            <a href="#" className={`${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'} transition-colors duration-300`}>Pricing</a>
            <a href="#" className={`${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'} transition-colors duration-300`}>Blog</a>
            <a href="#" className={`${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'} transition-colors duration-300`}>Support</a>
            <a href="#" className={`text-purple-600 font-bold ${isDarkMode ? 'hover:text-purple-400' : 'hover:text-purple-800'} transition-colors duration-300`}>About</a>
          </div>
        </div>

        {/* Right Panel (Buttons) */}
        <div className="hidden md:flex items-center">
          <div className={`flex ${isDarkMode ? 'bg-black/50 border-white/20' : 'bg-white/90 border-gray-200'} p-1 rounded-lg border pr-4 pb-1 backdrop-blur-sm`}>
            <button className="relative px-3 lg:px-4 py-2 rounded-lg overflow-hidden group">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Request a Demo</span> 
              <span className="ml-1 relative z-10 group-hover:text-white">→</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </button>
            
            {/* Theme toggle button */}
            <button 
              // onClick={toggleTheme} 
              className="relative px-3 py-2 rounded-lg overflow-hidden group mx-1"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                {isDarkMode ? (
                  // Moon icon for dark mode
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                ) : (
                  // Sun icon for light mode
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 origin-center"></span>
            </button>
            
            <button className={`relative px-3 lg:px-4 py-2 ${isDarkMode ? 'bg-white text-black' : 'bg-gray-800 text-white'} rounded-lg overflow-hidden group`}>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Login</span> 
              <span className="ml-1 relative z-10 group-hover:text-white">→</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button with Logo for Small Screens */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Add logo to the left */}
          <div className="flex items-center">
            <Image src="/Assets/favicon.webp" alt="Logo" width={30} height={30} />
            <span className="ml-2 text-x2  font-bold">Everything Talent</span>
          </div>
          
          <div className="flex items-center">
            {/* Theme toggle button for mobile */}
            <button 
              // onClick={toggleTheme} 
              className={`mr-3 p-2 rounded-lg ${isDarkMode ? 'bg-black/30' : 'bg-gray-200'} backdrop-blur-sm`}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
            
            {/* Mobile menu toggle */}
            <button 
              onClick={toggleMobileMenu} 
              className={`p-2 rounded-lg ${isDarkMode ? 'bg-black/30' : 'bg-gray-200'} backdrop-blur-sm`} 
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div className={`fixed inset-y-0 right-0 w-full sm:w-80 ${isDarkMode ? 'bg-black/90 text-white' : 'bg-white/95 text-gray-800'} backdrop-blur-md p-4 transform transition-all duration-300 ease-in-out z-50 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <Image src="/Assets/favicon.webp" alt="Logo" width={30} height={30} />
            <span className="ml-2 text-xl font-bold">Everything Talent</span>
          </div>
          <button 
            onClick={closeMobileMenu} 
            className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors duration-300`}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col space-y-4">
          <a href="#" className={`py-2 px-4 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} rounded-lg transition-colors duration-300`}>Home</a>
          <a href="#" className={`py-2 px-4 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} rounded-lg transition-colors duration-300`}>Products</a>
          
          {/* Mobile Solutions dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className={`w-full text-left py-2 px-4 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} rounded-lg transition-colors duration-300 flex justify-between items-center`}
            >
              <span>Solutions</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            <div className={`mt-1 ml-4 transition-all duration-300 overflow-hidden ${isSolutionsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className={`py-2 px-4 ${isDarkMode ? 'hover:bg-gray-800 bg-black/50' : 'hover:bg-gray-200 bg-gray-100'} rounded-lg transition-colors duration-300 mb-2`}>
                <div className="flex items-start space-x-2">
                  <Image src="/Assets/dropdown.png" alt="Solution" width={30} height={30} className="rounded mt-1" />
                  <div>
                    <p className="font-semibold">Hiring Solution</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Streamline Hiring Process by Matching the right Talent to the right Opportunity</p>
                  </div>
                </div>
              </div>
              
              <div className={`py-2 px-4 ${isDarkMode ? 'hover:bg-gray-800 bg-black/50' : 'hover:bg-gray-200 bg-gray-100'} rounded-lg transition-colors duration-300`}>
                <div className="flex items-start space-x-2">
                  <Image src="/Assets/dropdown2.png" alt="Solution" width={30} height={30} className="rounded mt-1" />
                  <div>
                    <p className="font-semibold">Funded Startup</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Empower Startups With Essential Resources and Funding For Scaling and Success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <a href="#" className={`py-2 px-4 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} rounded-lg transition-colors duration-300`}>Pricing</a>
          <a href="#" className={`py-2 px-4 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} rounded-lg transition-colors duration-300`}>Blog</a>
          <a href="#" className={`py-2 px-4 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} rounded-lg transition-colors duration-300`}>Support</a>
          <a href="#" className={`py-2 px-4 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} rounded-lg transition-colors duration-300 text-purple-500 font-bold`}>About</a>
          
          <div className={`pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <button className={`w-full mb-3 py-2 px-4 border ${isDarkMode ? 'border-white/30 hover:bg-white hover:text-black' : 'border-gray-300 hover:bg-gray-800 hover:text-white'} rounded-lg bg-transparent transition-all duration-300 flex items-center justify-center`}>
              Request a Demo <span className="ml-2">→</span>
            </button>
            <button className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg text-white hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
              Login <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;