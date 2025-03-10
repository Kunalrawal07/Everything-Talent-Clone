"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useTheme } from "../Theme/ThemeContext"; // Import ThemeContext
import Image from "next/image";

interface Stat {
  value: string;
  label: string;
}

interface Milestone {
  year: string;
  description: string;
  stats: Stat[];
  image: string;
}

const milestones: Milestone[] = [
  {
    year: "2024",
    description:
      "Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
    stats: [
      { value: "50K+", label: "Users" },
      { value: "98%", label: "Accuracy" },
      { value: "2x faster", label: "Processing" },
    ],
    image: "/Assets/milestone1.webp",
  },
  {
    year: "2023",
    description:
      "Expanded our services to 15+ countries and launched multilingual support for our platform.",
    stats: [
      { value: "25K+", label: "Users" },
      { value: "15+", label: "Countries" },
      { value: "8", label: "Languages" },
    ],
    image: "/Assets/milestone2.webp",
  },
  {
    year: "2022",
    description:
      "Released our first AI-powered talent solution to help companies find the right talent efficiently.",
    stats: [
      { value: "5K+", label: "Early Users" },
      { value: "92%", label: "Satisfaction" },
      { value: "40%", label: "Time Saved" },
    ],
    image: "/Assets/milestone3.webp",
  },
];

const EnhancedMilestone: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const { theme } = useTheme(); // Get current theme
  const isDarkMode = theme === 'dark';

  // ✅ Call hooks at the top level
  const transforms = milestones.map((_, index) => {
    const start = index / milestones.length;
    const end = (index + 1) / milestones.length;

    return {
      opacity: useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]),
      y: useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], ['20%', '0%', '0%', '-20%']),
      scale: useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.9, 1, 1, 0.9]),
      zIndex: milestones.length - index,
    };
  });

  return (
    <>
      <div className={`${isDarkMode ? 'bg-gray-950' : 'bg-gray-100'} transition-colors duration-300`}>
        <div className="sticky top-0 py-15 px-4 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className={`text-sm px-4 rounded-full mb-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}`}>
            Our Values & Milestones
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg mb-8`}>
            Explore the milestones that have shaped our path to innovation, where every step brings us closer to transforming the future.
          </p>
          <button className={`${isDarkMode ? 'bg-white text-gray-900 hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-700'} px-6 py-3 rounded-md transition-colors`}>
            Subscribe to Updates
          </button>
        </div>
      </div>

      {/* Milestones Section */}
      <div
        ref={containerRef}
        className={`w-full ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}
        style={{ height: `${milestones.length * 100}vh` }}
      >
        <div className="sticky top-[15vh] h-[60vh] overflow-visible">
          <div className="relative h-full w-full max-w-6xl mx-auto">
            {milestones.map((milestone, index) => {
              const { opacity, y, scale, zIndex } = transforms[index]; // ✅ Use precomputed transforms

              return (
                <motion.div
                  key={milestone.year}
                  className="absolute top-0 left-0 right-0 mx-auto px-4"
                  style={{ opacity, y, scale, zIndex }}
                >
                  <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} rounded-2xl shadow-xl transition-colors duration-300`}>
                    <div className="flex flex-col lg:flex-row">
                      <div className="p-8 lg:p-12 lg:w-1/2">
                        <h3 className="text-4xl font-bold mb-6">{milestone.year}</h3>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-8`}>{milestone.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {milestone.stats.map((stat, i) => (
                            <div key={i} className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} p-6 rounded-xl`}>
                              <div className="text-2xl md:text-3xl font-bold text-purple-400">{stat.value}</div>
                              <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="lg:w-1/2">
                        <div className="h-full w-full relative bg-gradient-to-br from-blue-600/30 to-purple-600/30 hidden lg:block">
                          <Image
                            src={milestone.image || '/placeholder.svg'}
                            height={500}
                            width={800}
                            alt={`Milestone ${milestone.year}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default EnhancedMilestone;