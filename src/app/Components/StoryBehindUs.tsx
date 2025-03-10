// components/about/StoryBehind.tsx
"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "../Theme/ThemeContext";

const StoryBehind: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <section
      className={`py-20 px-6 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Background gradient effect */}
      <div
        className={`absolute inset-0 ${
          isDarkMode ? "bg-[#05051A] opacity-80" : "bg-gray-200 opacity-50"
        }`}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text and features section */}
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold mb-6">
              The{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-teal-300">
                Story
              </span>{" "}
              Behind Us
            </h2>

            <p
              className={`text-xl ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } mb-12 max-w-lg`}
            >
              It all started with one question: What if hiring didn&apos;t have
              to feel like gambling on a hunch?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "AI-Powered",
                  description: "Advanced AI/ML algorithms for precise matching",
                  iconColor: "text-purple-500",
                },
                {
                  title: "Human-Centric",
                  description: "Built by recruiters, for recruiters",
                  iconColor: "text-blue-400",
                },
                {
                  title: "Skill Assessment",
                  description: "Comprehensive skill evaluation system",
                  iconColor: "text-indigo-400",
                },
                {
                  title: "Future-Ready",
                  description: "Constantly evolving with industry needs",
                  iconColor: "text-teal-400",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border transition-all duration-300 group relative ${
                    isDarkMode
                      ? "bg-[#0A0A1A] border-gray-800 hover:border-gray-600"
                      : "bg-gray-100 border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-blue-400 to-teal-300 opacity-0 group-hover:opacity-100 blur-sm -z-10 transition-opacity duration-300"></div>

                  {/* Icon */}
                  <div className={`${item.iconColor} mb-4`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.293-9.707l3.536-3.536 1.414 1.414-4.95 4.95-3.536-3.536 1.414-1.414 2.122 2.122z" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image section */}
          <div className="lg:w-1/2">
            <div
              className={`relative rounded-2xl overflow-hidden border-2 ${
                isDarkMode
                  ? "border-purple-500/30"
                  : "border-purple-500/50 shadow-lg"
              }`}
            >
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
