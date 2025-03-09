"use client";
import React, { useEffect, useRef, useState } from 'react';

// Define TypeScript interfaces for our data structure
interface Stat {
  value: string;
  label: string;
  endValue: number; // Actual end value for numbers
  suffix: string;   // Like "%", "+" or other text that might follow a number
  duration: number; // Animation duration in milliseconds
}

interface Milestone {
  year: string;
  description: string;
  stats: Stat[];
  image: string;
}

// Counter animation hook
const useCounterAnimation = (end: number, duration: number, visible: boolean) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const frameRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (!visible) {
      setCount(0);
      countRef.current = 0;
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      return;
    }
    
    const startTime = Date.now();
    const startValue = 0;
    
    const updateCount = () => {
      const now = Date.now();
      const elapsedTime = now - startTime;
      
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        // Easing function for smoother animation
        const easedProgress = 1 - Math.pow(1 - progress, 4);
        countRef.current = Math.floor(startValue + easedProgress * (end - startValue));
        setCount(countRef.current);
        frameRef.current = requestAnimationFrame(updateCount);
      } else {
        countRef.current = end;
        setCount(end);
        frameRef.current = null;
      }
    };
    
    frameRef.current = requestAnimationFrame(updateCount);
    
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, visible]);
  
  return count;
};

// Component to animate specific stat types
const AnimatedStat: React.FC<{ 
  stat: Stat, 
  visible: boolean 
}> = ({ stat, visible }) => {
  const count = useCounterAnimation(stat.endValue, stat.duration, visible);
  
  // If the stat isn't a number, don't animate
  if (isNaN(stat.endValue)) {
    return (
      <div className="text-2xl md:text-3xl font-bold text-purple-400">
        {stat.value}
      </div>
    );
  }
  
  return (
    <div className="text-2xl md:text-3xl font-bold text-purple-400">
      {count}{stat.suffix}
    </div>
  );
};

const MilestonesTimeline: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<boolean[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // Milestone data with formatted stats for animation
  const milestones: Milestone[] = [
    {
      year: '2024',
      description: 'Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.',
      stats: [
        { 
          value: '50K+', 
          label: 'Users',
          endValue: 50,
          suffix: 'K+',
          duration: 2000
        },
        { 
          value: '98%', 
          label: 'Accuracy',
          endValue: 98,
          suffix: '%',
          duration: 2500
        },
        { 
          value: '2x faster', 
          label: 'Processing',
          endValue: 2,
          suffix: 'x faster',
          duration: 1500
        }
      ],
      image: '/Assets/milestone1.webp'
    },
    {
      year: '2023',
      description: 'Expanded our services to 15+ countries and launched multilingual support for our platform.',
      stats: [
        { 
          value: '25K+', 
          label: 'Users',
          endValue: 25,
          suffix: 'K+',
          duration: 2000
        },
        { 
          value: '15+', 
          label: 'Countries',
          endValue: 15,
          suffix: '+',
          duration: 1800
        },
        { 
          value: '8', 
          label: 'Languages',
          endValue: 8,
          suffix: '',
          duration: 1500
        }
      ],
      image: '/Assets/milestone2.webp'
    },
    {
      year: '2022',
      description: 'Released our first AI-powered talent solution to help companies find the right talent efficiently.',
      stats: [
        { 
          value: '5K+', 
          label: 'Early Users',
          endValue: 5,
          suffix: 'K+',
          duration: 1500
        },
        { 
          value: '92%', 
          label: 'Satisfaction',
          endValue: 92,
          suffix: '%',
          duration: 2000
        },
        { 
          value: '40%', 
          label: 'Time Saved',
          endValue: 40,
          suffix: '%',
          duration: 1800
        }
      ],
      image: '/Assets/milestone3.webp'
    },
   
  ];
  
  // Initialize sectionRefs and visibleSections arrays
  useEffect(() => {
    sectionRefs.current = Array(milestones.length).fill(null);
    setVisibleSections(Array(milestones.length).fill(false));
  }, [milestones.length]);
  
  // Enhanced scroll detection for sequential reveal and animation triggers
  useEffect(() => {
    const handleScroll = (): void => {
      if (!containerRef.current) return;
      
      const scrollPosition = window.scrollY + window.innerHeight * 0.75;
      
      // Check each section
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        
        // If section top is above the trigger point, make it visible
        if (scrollPosition > sectionTop && !visibleSections[index]) {
          setVisibleSections(prev => {
            const newVisibility = [...prev];
            newVisibility[index] = true;
            return newVisibility;
          });
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to check if any sections are visible on load
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);
  
  // Animation variants for different entry styles
  const getAnimationStyle = (index: number, isVisible: boolean): React.CSSProperties => {
    // Alternate between different animation styles based on index
    const animations = [
      // Slide up and fade in
      {
        transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
        opacity: isVisible ? 1 : 0,
      },
      // Slide in from right
      {
        transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
        opacity: isVisible ? 1 : 0,
      },
      // Scale up
      {
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
        opacity: isVisible ? 1 : 0,
      },
      // Slide in from left
      {
        transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
        opacity: isVisible ? 1 : 0,
      }
    ];
    
    return animations[index % animations.length];
  };
  
  return (
    <div 
      className="w-full bg-gray-950 text-white overflow-hidden" 
      ref={containerRef}
    >
      {/* Header Section */}
      <div className="relative py-16 px-4 flex flex-col items-center justify-center text-center max-w-4xl mx-auto z-10">
        <div className="bg-gray-800 text-white text-sm px-4 py-2 rounded-full mb-6">
          Our Values & Milestones
        </div>
        <h2 className="text-5xl font-bold mb-6">
          Our <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-500 bg-clip-text text-transparent">Journey</span>
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Explore the milestones that have shaped our path to innovation, where every
          step brings us closer to transforming the future.
        </p>
        <button className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors">
          Subscribe to Updates
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </button>
      </div>
      
      {/* Timeline with sequential reveal and number counters */}
      <div className="relative py-20 px-4">
        <div className="mx-auto max-w-7xl">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 top-0 z-0"></div>
          
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              ref={(el: HTMLDivElement | null) => {
                sectionRefs.current[index] = el;
              }}
              className="relative mb-24"
              style={{
                ...getAnimationStyle(index, visibleSections[index]),
                transition: 'all 0.8s ease-out'
              }}
            >
              <div 
                className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gray-900 border-4 
                  ${visibleSections[index] ? 'border-purple-500' : 'border-gray-700'} 
                  flex items-center justify-center transition-all duration-500`}
              >
                <span className="text-white font-bold">{milestone.year}</span>
              </div>
              
              <div className={`mx-auto max-w-6xl ${index % 2 === 0 ? 'lg:ml-auto lg:mr-0' : 'lg:mr-auto lg:ml-0'} lg:w-5/6`}>
                <div 
                  className={`bg-gray-900 rounded-2xl overflow-hidden shadow-xl transition-transform duration-700 
                    ${visibleSections[index] ? 'translate-y-0' : index % 2 === 0 ? 'translate-y-20' : '-translate-y-20'}`}
                >
                  <div className="flex flex-col lg:flex-row">
                    {index % 2 === 0 ? (
                      <>
                        <div className="p-8 lg:p-12 lg:w-1/2">
                          <h3 className="text-4xl font-bold mb-6">{milestone.year}</h3>
                          <p className="text-gray-300 mb-8">{milestone.description}</p>
                          
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {milestone.stats.map((stat, i) => (
                              <div 
                                key={i} 
                                className="bg-gray-800 p-6 rounded-xl"
                                style={{
                                  opacity: visibleSections[index] ? 1 : 0,
                                  transform: visibleSections[index] ? 'translateY(0)' : 'translateY(20px)',
                                  transition: `all 0.5s ease-out ${0.3 + i * 0.1}s`
                                }}
                              >
                                <AnimatedStat stat={stat} visible={visibleSections[index]} />
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="lg:w-1/2">
                          <div className="h-full w-full relative bg-gradient-to-br from-blue-600/30 to-purple-600/30">
                            <img
                              src={milestone.image}
                              alt={`Milestone ${milestone.year}`}
                              className="w-full h-full object-cover"
                              style={{
                                opacity: visibleSections[index] ? 1 : 0,
                                transition: 'opacity 1s ease-out 0.2s'
                              }}
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="lg:w-1/2">
                          <div className="h-full w-full relative bg-gradient-to-br from-blue-600/30 to-purple-600/30">
                            <img
                              src={milestone.image}
                              alt={`Milestone ${milestone.year}`}
                              className="w-full h-full object-cover"
                              style={{
                                opacity: visibleSections[index] ? 1 : 0,
                                transition: 'opacity 1s ease-out 0.2s'
                              }}
                            />
                          </div>
                        </div>
                        <div className="p-8 lg:p-12 lg:w-1/2">
                          <h3 className="text-4xl font-bold mb-6">{milestone.year}</h3>
                          <p className="text-gray-300 mb-8">{milestone.description}</p>
                          
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {milestone.stats.map((stat, i) => (
                              <div 
                                key={i} 
                                className="bg-gray-800 p-6 rounded-xl"
                                style={{
                                  opacity: visibleSections[index] ? 1 : 0,
                                  transform: visibleSections[index] ? 'translateY(0)' : 'translateY(20px)',
                                  transition: `all 0.5s ease-out ${0.3 + i * 0.1}s`
                                }}
                              >
                                <AnimatedStat stat={stat} visible={visibleSections[index]} />
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll progress indicator removed */}
    </div>
  );
};

export default MilestonesTimeline;