// components/about/Hero.tsx
"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useTheme } from '../Theme/ThemeContext';
const Hero: React.FC = () => {
  const dotsRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Animation for background elements
  useEffect(() => {
    // Floating animation for dots
    const dotsElement = dotsRef.current;
    let dotsAnimationFrame: number;
    
    const animateDots = () => {
      if (!dotsElement) return;
      
      const time = Date.now() / 3000;
      dotsElement.style.transform = `translateY(${Math.sin(time) * 10}px) translateX(${Math.cos(time) * 10}px)`;
      
      dotsAnimationFrame = requestAnimationFrame(animateDots);
    };
    
    animateDots();
    
    // Rotating animation for circle
    const circleElement = circleRef.current;
    let circleAnimationFrame: number;
    
    const animateCircle = () => {
      if (!circleElement) return;
      
      const time = Date.now() / 5000;
      circleElement.style.transform = `rotate(${time * 20}deg)`;
      
      circleAnimationFrame = requestAnimationFrame(animateCircle);
    };
    
    animateCircle();
    
    return () => {
      if (dotsAnimationFrame) cancelAnimationFrame(dotsAnimationFrame);
      if (circleAnimationFrame) cancelAnimationFrame(circleAnimationFrame);
    };
  }, []);

  return (
    <section className={`relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-800'} overflow-hidden transition-colors duration-300`}>
      {/* Animated background elements */}
      <div ref={dotsRef} className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-64 h-64"
             style={{
               backgroundImage: 'radial-gradient(circle, #4299e1 1.5px, transparent 1.5px)',
               backgroundSize: '20px 20px'
             }}>
        </div>
        <div className="absolute bottom-20 right-20 w-72 h-72"
             style={{
               backgroundImage: 'radial-gradient(circle, #805ad5 1.5px, transparent 1.5px)',
               backgroundSize: '18px 18px'
             }}>
        </div>
      </div>
      
      {/* Animated circle */}
      <div ref={circleRef} className="absolute -top-32 -right-32 w-96 h-96 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 rounded-full border-4 border-purple-500"></div>
        <div className="absolute inset-8 rounded-full border-4 border-blue-500"></div>
        <div className="absolute inset-16 rounded-full border-4 border-pink-500"></div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="font-bold inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 text-purple-300 border border-purple-500/30">
              About Us
            </p>
            
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              <span className="text-white">Shaping the Next Generation of HR </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                Tech Recruitment.
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
              At Everything Talent, we help you launch your recruitment into a new dimension.
            </p>
            
            <Button 
              className="w-48 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium shadow-lg shadow-blue-300/30 dark:shadow-blue-900/30 transition-all duration-300 px-8 py-3"
            >
              Start Trial Now
            </Button>
          </div>
          
          {/* Right content - Image with effects */}
          <div className="w-full lg:w-1/2 relative">
            {/* Animated glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-xl opacity-70 animate-pulse"></div>
            
            {/* Gradient border container */}
            <div className="relative z-10 p-[3px] rounded-lg bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-xl">
              {/* Image container */}
              <div className="relative h-80 md:h-126 w-full overflow-hidden rounded-lg bg-black">
                <Image
                  src="/Assets/storybehind.webp"
                  alt="Team working together"
                  fill
                  className="object-cover w-full h-full"
                />
                
                {/* Inner shadow overlay for depth */}
                <div className="absolute inset-0 shadow-inner bg-gradient-to-tl from-transparent to-blue-500/20 pointer-events-none"></div>
                
                {/* Subtle blue glow effect on hover */}
                <div className="absolute inset-0 bg-blue-400/0 hover:bg-blue-400/10 transition-all duration-300 pointer-events-none"></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-30 z-0" 
                style={{
                  backgroundImage: 'radial-gradient(circle, #4299e1 1px, transparent 1px)',
                  backgroundSize: '8px 8px'
                }}>
            </div>
            
            {/* Floating gradient orbs */}
            <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-xl animate-float-slow"></div>
            <div className="absolute -bottom-8 right-10 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-xl animate-float-medium"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;