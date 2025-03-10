"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../Theme/ThemeContext";

const JoinOurMission = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <section
      className={`relative w-full py-12 md:py-20 lg:py-32 overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      {/* World map background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/Assets/glob.jpg"
          alt="World Map Background"
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-300 ${
            isDarkMode ? "opacity-70" : "opacity-90"
          }`}
        />
      </div>

      {/* Connection lines & location dots */}
      <div className="absolute inset-0 z-10 hidden md:block">
        <svg
          className="w-full h-full absolute"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <path
            d="M140,100 C300,150 500,300 750,350 C1000,400 1200,300 1300,150"
            stroke={isDarkMode ? "#0ea5e9" : "#3b82f6"}
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M200,150 C400,200 600,350 900,300 C1200,250 1300,180 1400,100"
            stroke={isDarkMode ? "#0ea5e9" : "#3b82f6"}
            strokeWidth="1.5"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M100,120 C250,180 400,250 600,300 C800,350 1000,300 1200,200"
            stroke={isDarkMode ? "#0ea5e9" : "#3b82f6"}
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
        </svg>

        {/* Location dots */}
        <div className="absolute top-24 left-16 md:left-32 flex flex-col items-center">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <span className={`text-xs md:text-sm mt-1 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Alaska
          </span>
        </div>
        <div className="absolute top-40 md:top-52 left-32 md:left-64 flex flex-col items-center">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <span className={`text-xs md:text-sm mt-1 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Los Angeles
          </span>
        </div>
        <div className="absolute top-36 md:top-44 right-32 md:right-72 flex flex-col items-center">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <span className={`text-xs md:text-sm mt-1 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            New York
          </span>
        </div>
      </div>

      {/* Central Card Content */}
      <div className="relative z-20 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
        <div
          className={`backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border transition-all duration-300 ${
            isDarkMode
              ? "bg-gradient-to-r from-purple-900/80 to-indigo-900/80 border-purple-500/30"
              : "bg-gradient-to-r from-blue-100 to-gray-200 border-gray-400/50"
          }`}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-5">
              <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                Join Our{" "}
              </span>
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
                Mission
              </span>
            </h2>

            <p
              className={`text-base sm:text-lg md:text-xl mb-6 md:mb-8 px-2 transition-all duration-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Help us reimagine the future of hiring in the tech industry.
            </p>

            <Link href="/join-us" legacyBehavior>
              <a
                className={`py-2 px-6 md:py-3 md:px-8 rounded-lg flex items-center text-sm md:text-base font-medium transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-200 hover:bg-white text-gray-800"
                    : "bg-gray-800 hover:bg-black text-white"
                }`}
              >
                Start Here
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
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
