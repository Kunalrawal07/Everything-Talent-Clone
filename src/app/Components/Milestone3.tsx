"use client";
import React, { useEffect, useRef, useState } from 'react';

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

const Milestone4: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    sectionRefs.current = Array(4).fill(null);
  }, []);

  useEffect(() => {
    const handleScroll = (): void => {
      if (!containerRef.current) return;

      const scrollPosition = window.scrollY + window.innerHeight * 0.6;

      sectionRefs.current.forEach((section, index) => {
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const milestones: Milestone[] = [
    {
      year: '2022',
      description: 'Released our first AI-powered talent solution to help companies find the right talent efficiently.',
      stats: [
        { value: '5K+', label: 'Early Users' },
        { value: '92%', label: 'Satisfaction' },
        { value: '40%', label: 'Time Saved' }
      ],
      image: '/Assets/milestone3.webp'
    },
  ];

  return (
    <div className="w-full bg-gray-950 text-white overflow-hidden" ref={containerRef}>
      <div className="">
        {milestones.map((milestone, index) => (
          <div
            key={milestone.year}
            ref={(el: HTMLDivElement | null) => {
              sectionRefs.current[index] = el;
            }}
            className={`relative transition-all duration-700 ease-in-out ${
              index === activeSection ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-12'
            }`}
            style={{
              zIndex: milestones.length - index,
              marginTop: index === 0 ? '0' : '-5rem'
            }}
          >
            <div className="mx-auto px-1 max-w-6xl mb-20 opacity-5000">
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                <div className="flex flex-col lg:flex-row">
                  <div className="p-8 lg:p-12 lg:w-1/2">
                    <h3 className="text-4xl font-bold mb-6">{milestone.year}</h3>
                    <p className="text-gray-300 mb-8">{milestone.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {milestone.stats.map((stat, i) => (
                        <div key={i} className="bg-gray-800 p-6 rounded-xl">
                          <div className="text-2xl md:text-3xl font-bold text-purple-400">{stat.value}</div>
                          <div className="text-gray-400 text-sm">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="h-full w-full relative bg-gradient-to-br from-blue-600/30 to-purple-600/30">
                      <img
                        src={milestone.image}
                        className="w-full h-full object-cover opacity-1000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestone4;