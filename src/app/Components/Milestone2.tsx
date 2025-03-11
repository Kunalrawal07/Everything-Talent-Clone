'use client';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { useTheme } from '../Theme/ThemeContext';

// Define our milestone data
const milestones = [
  {
    tag: "Everything AI 2.0",
    year: "2024",
    description:
      "Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
    stats: [
      { value: "50K+", label: "Users" },
      { value: "98%", label: "Accuracy" },
      { value: "2x faster", label: "Processing" },
    ],
    image: "/Assets/milestone1.webp",
    color: '#5196fd',
  },
  {
    tag: "ML Integration",
    year: "2023",
    description:
      "Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%. Everything AI also expanded our services to 15+ countries and launched multilingual support.",
    stats: [
      { value: "25K+", label: "Users" },
      { value: "15+", label: "Countries" },
      { value: "8", label: "Languages" },
    ],
    image: "/Assets/milestone2.webp",
    color: '#8f89ff',
  },
  {
    tag: "AI Talent Solutions",
    year: "2022",
    description:
      "Released our first AI-powered talent solution to help companies find the right talent efficiently.",
    stats: [
      { value: "5K+", label: "Early Users" },
      { value: "92%", label: "Satisfaction" },
      { value: "40%", label: "Time Saved" },
    ],
    image: "/Assets/milestone3.webp",
    color: '#13006c',
  },
];

export default function EnhancedMilestone(): React.ReactElement {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <main className={`${isDarkMode ? 'bg-gray-950' : 'bg-gray-100'} transition-colors duration-300`} ref={container}>
      {/* Hero Section */}
      <section className={`${isDarkMode ? 'text-white bg-gray-950' : 'text-gray-900 bg-gray-100'} h-[70vh] w-full grid place-content-center transition-colors duration-300`}>
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
          <div
            className={`text-sm px-4 py-2 rounded-full mb-6 ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"
            }`}
          >
            Our Values & Milestones
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h1>
          <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-base md:text-lg mb-8`}>
            Explore the milestones that have shaped our path to innovation, where every step brings us closer to
            transforming the future.
          </p>
          <button
            className={`${
              isDarkMode ? "bg-white text-gray-900 hover:bg-gray-200" : "bg-gray-900 text-white hover:bg-gray-700"
            } px-6 py-3 rounded-md transition-colors flex items-center`}
          >
            Subscribe to Updates
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </button>
        </div>
      </section>
      {/* Stacking Cards Section */}
      <section className={`${isDarkMode ? 'text-white bg-gray-950' : 'text-gray-900 bg-gray-100'} w-full transition-colors duration-300`}>
        {milestones.map((milestone, i) => {
          const targetScale = 1 - (milestones.length - i) * 0.05;
          return (
            <Card
              key={`m_${i}`}
              i={i}
              tag={milestone.tag}
              year={milestone.year}
              description={milestone.description}
              stats={milestone.stats}
              image={milestone.image}
              color={milestone.color}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              isDarkMode={isDarkMode}
            />
          );
        })}
      </section>
      {/* Footer Section */}
      {/* <footer className={`group ${isDarkMode ? 'bg-gray-950' : 'bg-gray-100'} transition-colors duration-300`}>
        <h1 className="text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent transition-all ease-linear">
          EVERYTHING AI
        </h1>
        <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full transition-colors duration-300`}></div>
      </footer> */}
    </main>
  );
}

interface Stat {
  value: string;
  label: string;
}

interface CardProps {
  i: number;
  tag: string;
  year: string;
  description: string;
  stats: Stat[];
  image: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  isDarkMode: boolean;
}

export const Card: React.FC<CardProps> = ({
  i,
  tag,
  year,
  description,
  stats,
  image,
  color,
  progress,
  range,
  targetScale,
  isDarkMode
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.9)',
          borderColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[500px] md:h-[550px] w-[90%] md:w-[80%] rounded-xl p-6 md:p-8 origin-top border-l-4 backdrop-blur-sm shadow-xl transition-colors duration-300`}
      >
        <div className="flex flex-col md:flex-row h-full gap-6 md:gap-10">
          <div className="w-full md:w-[40%] flex flex-col">
            <div className="mb-2">
              <span className={`text-sm ${color === '#5196fd' ? 'text-purple-500' : color === '#8f89ff' ? 'text-indigo-500' : 'text-blue-500'}`}>
                {tag}
              </span>
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {year}
            </h2>
            <p className={`text-sm md:text-base mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {stats.map((stat, j) => (
                <div key={j} className={`${isDarkMode ? "bg-gray-800" : "bg-gray-200"} p-4 rounded-xl transition-colors duration-300`}>
                  <div className="text-xl md:text-2xl font-bold" style={{ color }}>{stat.value}</div>
                  <div className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-[55%] h-full relative overflow-hidden rounded-lg">
            <motion.div 
              className="w-full h-full absolute top-0 left-0"
              style={{ scale: imageScale }}
            >
              <Image
                src={image}
                alt={`${year} milestone`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 55vw"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};