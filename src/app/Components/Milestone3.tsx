// "use client";
// import React, { useEffect, useRef, useState } from 'react';

// // Define TypeScript interfaces for our data structure
// interface Stat {
//   value: string;
//   label: string;
// }

// interface Milestone {
//   year: string;
//   description: string;
//   stats: Stat[];
//   image: string;
// }

// const Milestone3: React.FC = () => {
//   const [activeSection, setActiveSection] = useState<number>(0);
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const containerRef = useRef<HTMLDivElement | null>(null);
  
//   // Initialize sectionRefs array
//   useEffect(() => {
//     sectionRefs.current = Array(4).fill(null);
//   }, []);
  
//   useEffect(() => {
//     const handleScroll = (): void => {
//       if (!containerRef.current) return;
      
//       const scrollPosition = window.scrollY + window.innerHeight * 0.6;
      
//       sectionRefs.current.forEach((section, index) => {
//         if (section && scrollPosition >= section.offsetTop) {
//           setActiveSection(index);
//         }
//       });
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     setTimeout(handleScroll, 100);
    
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
//   const milestones: Milestone[] = [
//     // {
//     //   year: '2024',
//     //   description: 'Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.',
//     //   stats: [
//     //     { value: '50K+', label: 'Users' },
//     //     { value: '98%', label: 'Accuracy' },
//     //     { value: '2x faster', label: 'Processing' }
//     //   ],
//     //   image: '/Assets/milestone1.webp'
//     // },
//     // {
//     //   year: '2023',
//     //   description: 'Expanded our services to 15+ countries and launched multilingual support for our platform.',
//     //   stats: [
//     //     { value: '25K+', label: 'Users' },
//     //     { value: '15+', label: 'Countries' },
//     //     { value: '8', label: 'Languages' }
//     //   ],
//     //   image: '/Assets/milestone2.webp'
//     // },
//     {
//       year: '2022',
//       description: 'Released our first AI-powered talent solution to help companies find the right talent efficiently.',
//       stats: [
//         { value: '5K+', label: 'Early Users' },
//         { value: '92%', label: 'Satisfaction' },
//         { value: '40%', label: 'Time Saved' }
//       ],
//       image: '/Assets/milestone3.webp'
//     },
//     // {
//     //   year: '2021',
//     //   description: 'Everything Talent AI was founded with a mission to transform how companies discover and retain talent.',
//     //   stats: [
//     //     { value: '12', label: 'Team Members' },
//     //     { value: '3', label: 'Patents Filed' },
//     //     { value: '$2.5M', label: 'Seed Funding' }
//     //   ],
//     //   image: '/api/placeholder/600/400'
//     // }
//   ];
  
//   return (
//     <div className="w-full bg-gray-950 text-white overflow-hidden" ref={containerRef}>
//       {/* Header Section */}
//       {/* <div className="relative py-16 px-4 flex flex-col items-center justify-center text-center max-w-4xl mx-auto z-10">
//         <div className="bg-gray-800 text-white text-sm px-4 py-2 rounded-full mb-6">
//           Our Values & Milestones
//         </div>
//         <h2 className="text-5xl font-bold mb-6">
//           Our <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-500 bg-clip-text text-transparent">Journey</span>
//         </h2>
//         <p className="text-lg text-gray-300 mb-8">
//           Explore the milestones that have shaped our path to innovation, where every
//           step brings us closer to transforming the future.
//         </p>
//         <button className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors">
//           Subscribe to Updates
//           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <rect x="2" y="4" width="20" height="16" rx="2"></rect>
//             <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
//           </svg>
//         </button>
//       </div> */}
      
//       {/* Timeline Sections */}
//       <div className="">
//         {milestones.map((milestone, index) => (
//           <div
//             key={milestone.year}
//             ref={(el: HTMLDivElement | null) => {
//               sectionRefs.current[index] = el;
//             }}
//             className={`relative transition-all duration-700 ease-in-out ${
//               index === activeSection ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-12'
//             }`}
//             style={{
//               zIndex: milestones.length - index,
//               marginTop: index === 0 ? '0' : '-5rem'
//             }}
//           >
//             <div className="mx-auto px-1 max-w-6xl mb-20 opacity-5000">
//               <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
//                 <div className="flex flex-col lg:flex-row">
//                   <div className="p-8 lg:p-12 lg:w-1/2">
//                     {/* <div className="text-purple-400 mb-2 text-sm">{milestone.title}</div> */}
//                     <h3 className="text-4xl font-bold mb-6">{milestone.year}</h3>
//                     <p className="text-gray-300 mb-8">{milestone.description}</p>
                    
//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                       {milestone.stats.map((stat, i) => (
//                         <div key={i} className="bg-gray-800 p-6 rounded-xl">
//                           <div className="text-2xl md:text-3xl font-bold text-purple-400">{stat.value}</div>
//                           <div className="text-gray-400 text-sm">{stat.label}</div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="lg:w-1/2">
//                     <div className="h-full w-full  relative bg-gradient-to-br from-blue-600/30 to-purple-600/30">
//                       <img
//                         src={milestone.image}
//                         // alt={milestone.title}
//                         className="w-full h-full object-cover opacity-1000"
//                       />
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         {/* <h3 className="text-5xl lg:text-6xl font-bold text-white text-center px-4"> */}
//                           {/* {index === 0 ? "Everything AI 2.0" : milestone.title} */}
//                         {/* </h3> */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Milestone3;