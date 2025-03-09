// components/about/StoryBehind.tsx
import React from 'react';
import Image from 'next/image';

const StoryBehind: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-black text-white relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[#05051A] opacity-80"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text and features section */}
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold mb-6">
              The <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-teal-300">Story</span> Behind Us
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-lg">
              It all started with one question: What if hiring didn&apos;t have to feel like gambling on a hunch?
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* AI-Powered Card */}
              <div className="bg-[#0A0A1A] p-6 rounded-xl border border-gray-800 hover:border-transparent hover:shadow-xl transition-all duration-300 group relative">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-blue-400 to-teal-300 opacity-0 group-hover:opacity-100 blur-sm -z-10 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-blue-400 to-teal-300 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="text-purple-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.293-9.707l3.536-3.536 1.414 1.414-4.95 4.95-3.536-3.536 1.414-1.414 2.122 2.122z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-2">AI-Powered</h3>
                <p className="text-gray-400">Advanced AI/ML algorithms for precise matching</p>
              </div>
              
              {/* Human-Centric Card */}
              <div className="bg-[#0A0A1A] p-6 rounded-xl border border-gray-800 hover:border-transparent hover:shadow-xl transition-all duration-300 group relative">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-blue-400 to-teal-300 opacity-0 group-hover:opacity-100 blur-sm -z-10 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-blue-400 to-teal-300 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="text-blue-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6h2v2h-2v-2zm0-8h2v6h-2V6z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-2">Human-Centric</h3>
                <p className="text-gray-400">Built by recruiters, for recruiters</p>
              </div>
              
              {/* Skill Assessment Card */}
              <div className="bg-[#0A0A1A] p-6 rounded-xl border border-gray-800 hover:border-transparent hover:shadow-xl transition-all duration-300 group relative">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-blue-400 to-teal-300 opacity-0 group-hover:opacity-100 blur-sm -z-10 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-blue-400 to-teal-300 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="text-indigo-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-2">Skill Assessment</h3>
                <p className="text-gray-400">Comprehensive skill evaluation system</p>
              </div>
              
              {/* Future-Ready Card */}
              <div className="bg-[#0A0A1A] p-6 rounded-xl border border-gray-800 hover:border-transparent hover:shadow-xl transition-all duration-300 group relative">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-blue-400 to-teal-300 opacity-0 group-hover:opacity-100 blur-sm -z-10 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-blue-400 to-teal-300 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="text-teal-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-2">Future-Ready</h3>
                <p className="text-gray-400">Constantly evolving with industry needs</p>
              </div>
            </div>
          </div>
          
          {/* Image section */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30">
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-400/20 to-teal-300/20 opacity-50 z-10 pointer-events-none"></div>
              
              {/* Image */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/Assets/storybehind.webp"
                  alt="Team collaborating on recruitment solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryBehind;