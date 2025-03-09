import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const JoinOurMission = () => {
  return (
    <section className="relative w-full py-12 md:py-20 lg:py-32 bg-black overflow-hidden">
      {/* World map dotted background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/Assets/glob.jpg"
          alt="World Map Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
      </div>

      {/* Connection lines and location dots - visible only on md screens and up */}
      <div className="absolute inset-0 z-10 hidden md:block">
        {/* Connection lines as SVG paths */}
        <svg className="w-full h-full absolute" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <path
            d="M140,100 C300,150 500,300 750,350 C1000,400 1200,300 1300,150"
            stroke="#0ea5e9"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M200,150 C400,200 600,350 900,300 C1200,250 1300,180 1400,100"
            stroke="#0ea5e9"
            strokeWidth="1.5"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M100,120 C250,180 400,250 600,300 C800,350 1000,300 1200,200"
            stroke="#0ea5e9"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
        </svg>

        {/* Location dots with labels - Tailwind doesn't support dynamic positioning well, so using tailwind classes where possible */}
        <div className="absolute top-24 left-16 md:left-32 flex flex-col items-center">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-white text-xs md:text-sm mt-1">Alaska</span>
        </div>
        <div className="absolute top-40 md:top-52 left-32 md:left-64 flex flex-col items-center">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-white text-xs md:text-sm mt-1">Los Angeles</span>
        </div>
        <div className="absolute top-36 md:top-44 right-32 md:right-72 flex flex-col items-center">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-white text-xs md:text-sm mt-1">New York</span>
        </div>
        <div className="absolute top-32 md:top-48 right-24 md:right-48 flex flex-col items-center">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-white text-xs md:text-sm mt-1">Lisbon</span>
        </div>
        <div className="absolute bottom-32 md:bottom-48 right-28 md:right-52 flex flex-col items-center">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-white text-xs md:text-sm mt-1">Nairobi</span>
        </div>
        <div className="absolute top-40 md:top-56 right-20 md:right-36 flex flex-col items-center">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-white text-xs md:text-sm mt-1">Delhi</span>
        </div>
        <div className="absolute top-28 md:top-36 right-8 md:right-12 flex flex-col items-center">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-white text-xs md:text-sm mt-1">Vladivostok</span>
        </div>
        <div className="absolute bottom-24 md:bottom-32 left-1/3 md:left-1/2 flex flex-col items-center">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-white text-xs md:text-sm mt-1">Brazil</span>
        </div>
      </div>

      {/* Central card content */}
      <div className="relative z-20 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-900/80 to-indigo-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-purple-500/30">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-5">
              <span className="text-white">Join Our </span>
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">Mission</span>
            </h2>
            
            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 md:mb-8 px-2">
              Help us reimagine the future of hiring in the tech industry.
            </p>
            
            <Link href="/join-us" legacyBehavior>
              <a className="bg-gray-200 hover:bg-white transition-colors duration-300 text-gray-800 font-medium py-2 px-6 md:py-3 md:px-8 rounded-lg flex items-center text-sm md:text-base">
                Start Here
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurMission;