"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../Theme/ThemeContext";

interface StandardContentProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
}

const standardsData: Record<string, StandardContentProps> = {
  ambition: {
    title: "Connecting Talent and Opportunity",
    description:
      "Hiring doesn't have to be a painful guessing game. We're bridging the gap between recruiters and software engineers through our platform, where talent and opportunity finally meet, creating the perfect match.",
    features: [
      "Connect skilled developers with ideal roles",
      "Streamline tech recruitment process",
      "Create optimal candidate-company matches",
    ],
    imageSrc: "/Assets/vision1.jpg",
  },
  satisfaction: {
    title: "Ensuring Client Satisfaction",
    description:
      "We believe the recruitment process should be enjoyable and productive for all parties. Our platform is designed to ensure high satisfaction by matching the right candidates with the right companies.",
    features: [
      "Tailored recruitment solutions",
      "Transparent communication",
      "Post-placement support",
    ],
    imageSrc: "/Assets/vision2.avif",
  },
  integrity: {
    title: "Acting with Integrity",
    description:
      "Trust is at the core of what we do. We operate with complete transparency and honesty, ensuring that both clients and candidates receive accurate information and fair treatment throughout the process.",
    features: [
      "Transparent recruitment practices",
      "Honest candidate assessments",
      "Ethical business standards",
    ],
    imageSrc: "/Assets/vision3.webp",
  },
  vigilance: {
    title: "Maintaining Vigilance",
    description:
      "The tech landscape is always evolving, and so are we. We stay vigilant about industry trends, new technologies, and changing recruitment needs to provide the most relevant services.",
    features: [
      "Continuous market monitoring",
      "Proactive talent acquisition",
      "Regular platform updates",
    ],
    imageSrc: "/Assets/vision4.jpg",
  },
};

const StandardsComponent: React.FC = () => {
  const [activeStandard, setActiveStandard] = useState<string>("ambition");
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const handleStandardChange = (standard: string) => {
    setActiveStandard(standard);
  };

  return (
    <section
      className={`relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } overflow-hidden transition-colors duration-300`}
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex justify-center mb-6 sm:mb-8">
          <div
            className={`px-4 py-2 rounded-md shadow-lg ${
              isDarkMode ? "bg-[#1A1A2E] text-white" : "bg-gray-200 text-black"
            }`}
          >
            Our Standards
          </div>
        </div>
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            The Fuel for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-400">
              Our Vision
            </span>
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Driven by vision, we provide comprehensive solutions to meet all
            your hiring needs.
          </p>
        </div>
        <div className="hidden sm:flex justify-center mb-8 md:mb-12">
          <div
            className={`rounded-full p-1 flex flex-wrap justify-center ${
              isDarkMode ? "bg-[#0F1019]" : "bg-gray-100"
            }`}
          >
            {Object.keys(standardsData).map((standard) => (
              <button
                key={standard}
                onClick={() => handleStandardChange(standard)}
                className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base hover:cursor-pointer ${
                  activeStandard === standard
                    ? isDarkMode
                      ? "bg-white text-black"
                      : "bg-black text-white"
                    : isDarkMode
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {standard.charAt(0).toUpperCase() + standard.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div
          className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border ${
            isDarkMode
              ? "bg-[#0A0A15] border-gray-800"
              : "bg-gray-100 border-gray-300"
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStandard}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row gap-6 md:gap-8"
            >
              <div className="lg:w-1/2">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-6">
                  {standardsData[activeStandard].title}
                </h3>
                <p
                  className={`text-base sm:text-lg mb-4 sm:mb-6 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {standardsData[activeStandard].description}
                </p>
                {/* Features List */}
                <ul className="list-disc pl-5 space-y-2">
                  {standardsData[activeStandard].features.map(
                    (feature, index) => (
                      <li
                        key={index}
                        className={`text-base sm:text-lg ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="lg:w-1/2 mt-6 lg:mt-0">
                <div className="relative w-full rounded-lg sm:rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[400px]">
                  <Image
                    src={standardsData[activeStandard].imageSrc}
                    alt={standardsData[activeStandard].title}
                    fill
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
