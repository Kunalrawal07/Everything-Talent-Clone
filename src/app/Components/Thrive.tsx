import React from 'react';
import Image from 'next/image';

const HowWeThrive = () => {
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl max-h-[830px]">
              <img 
                src="/Assets/thrive.webp" 
                alt="Woman working at a desk with data visualizations in the background" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-pink-500">How </span>
              <span className="text-blue-400">We </span>
              <span className="text-green-300">Thrive</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-12">
              At Everything Talent, we break the norm. Driven by community, we 
              empower individuals to innovate, learn, and push boundaries—
              fostering shared growth and a relentless pursuit of excellence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-gray-800/80 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-lg">
                <div className="text-purple-500 text-2xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Community-Driven</h3>
                <p className="text-gray-400">
                  We build strong connections and foster collaboration within our team.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-gray-800/80 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-lg">
                <div className="text-purple-500 text-2xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation First</h3>
                <p className="text-gray-400">
                  We encourage creative thinking and novel approaches to challenges.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-gray-800/80 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-lg">
                <div className="text-purple-500 text-2xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13"></path>
                    <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Action Oriented</h3>
                <p className="text-gray-400">
                  We transform ideas into tangible results through decisive action.
                </p>
              </div>
              
              {/* Card 4 */}
              <div className="bg-gray-800/80 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-lg">
                <div className="text-purple-500 text-2xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Continuous Growth</h3>
                <p className="text-gray-400">
                  We embrace learning and development as core principles.
                </p>
              </div>
              
              {/* Card 5 */}
              <div className="bg-gray-800/80 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-lg">
                <div className="text-purple-500 text-2xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z"></path>
                    <path d="M18 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z"></path>
                    <path d="M6 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z"></path>
                    <path d="M12 8v13"></path>
                    <path d="M18 17v-5h-6"></path>
                    <path d="M6 17v-5h6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence Pursuit</h3>
                <p className="text-gray-400">
                  We strive for exceptional quality in everything we do.
                </p>
              </div>
              
              {/* Card 6 */}
              <div className="bg-gray-800/80 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-lg">
                <div className="text-purple-500 text-2xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Shared Success</h3>
                <p className="text-gray-400">
                  We celebrate achievements and grow together as one team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeThrive;