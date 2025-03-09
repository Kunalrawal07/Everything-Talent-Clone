// components/about/Standards.tsx
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface StandardContentProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
}

const standardsData: Record<string, StandardContentProps> = {
  ambition: {
    title: "Connecting Talent and Opportunity",
    description: "Hiring doesn't have to be a painful guessing game. We're bridging the gap between recruiters and software engineers through our platform, where talent and opportunity finally meet, creating the perfect match.",
    features: [
      "Connect skilled developers with ideal roles",
      "Streamline tech recruitment process",
      "Create optimal candidate-company matches"
    ],
    imageSrc: "/Assets/vision1.jpg"
  },
  satisfaction: {
    title: "Ensuring Client Satisfaction",
    description: "We believe the recruitment process should be enjoyable and productive for all parties. Our platform is designed to ensure high satisfaction by matching the right candidates with the right companies.",
    features: [
      "Tailored recruitment solutions",
      "Transparent communication",
      "Post-placement support"
    ],
    imageSrc: "/Assets/vision2.avif"
  },
  integrity: {
    title: "Acting with Integrity",
    description: "Trust is at the core of what we do. We operate with complete transparency and honesty, ensuring that both clients and candidates receive accurate information and fair treatment throughout the process.",
    features: [
      "Transparent recruitment practices",
      "Honest candidate assessments",
      "Ethical business standards"
    ],
    imageSrc: "/Assets/vision3.webp"
  },
  vigilance: {
    title: "Maintaining Vigilance",
    description: "The tech landscape is always evolving, and so are we. We stay vigilant about industry trends, new technologies, and changing recruitment needs to provide the most relevant services.",
    features: [
      "Continuous market monitoring",
      "Proactive talent acquisition",
      "Regular platform updates"
    ],
    imageSrc: "/Assets/vision4.jpg"
  }
};

const StandardsComponent: React.FC = () => {
  const [activeStandard, setActiveStandard] = useState<string>("ambition");

  const handleStandardChange = (standard: string) => {
    setActiveStandard(standard);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black text-white overflow-hidden">
      {/* Background grid lines */}
      <div className="absolute inset-0 bg-[#0A0A15]" 
           style={{
             backgroundImage: 'linear-gradient(rgba(100, 100, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 100, 255, 0.05) 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             backgroundPosition: 'center center',
           }}>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Standards Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="bg-[#1A1A2E] text-white px-4 py-2 rounded-md shadow-lg">
            Our Standards
          </div>
        </div>
        
        {/* Main Title */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            The Fuel for <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-400">Our Vision</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Driven by vision, we provide comprehensive solutions to meet all your hiring needs.
          </p>
        </div>
        
        {/* Standard Tabs - Desktop */}
        <div className="hidden sm:flex justify-center mb-8 md:mb-12">
          <div className="bg-[#0F1019] rounded-full p-1 flex flex-wrap justify-center">
            {Object.keys(standardsData).map((standard) => (
              <button
                key={standard}
                onClick={() => handleStandardChange(standard)}
                className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base hover:cursor-pointer ${
                  activeStandard === standard 
                    ? "bg-white text-black" 
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {standard.charAt(0).toUpperCase() + standard.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Standard Tabs - Mobile */}
        <div className="sm:hidden overflow-x-auto flex justify-start mb-6 pb-2">
          <div className="bg-[#0F1019] rounded-full p-1 flex space-x-1 min-w-min">
            {Object.keys(standardsData).map((standard) => (
              <button
                key={standard}
                onClick={() => handleStandardChange(standard)}
                className={`px-3 py-1.5 rounded-full transition-all duration-300 text-xs whitespace-nowrap ${
                  activeStandard === standard 
                    ? "bg-white text-black" 
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {standard.charAt(0).toUpperCase() + standard.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Content Card */}
        <div className="bg-[#0A0A15] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-gray-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStandard}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row gap-6 md:gap-8"
            >
              {/* Text Content */}
              <div className="lg:w-1/2">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-6">
                  {standardsData[activeStandard].title}
                </h3>
                <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-8">
                  {standardsData[activeStandard].description}
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {standardsData[activeStandard].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="text-purple-500 mt-1 flex-shrink-0">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" fill="currentColor" />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Image */}
              <div className="lg:w-1/2 mt-6 lg:mt-0">
                <div className="relative w-full rounded-lg sm:rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[400px]">
                  <Image
                    src={standardsData[activeStandard].imageSrc}
                    alt={standardsData[activeStandard].title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default StandardsComponent;