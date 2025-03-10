"use client";


import React from 'react'

function Milestone2() {
  return (
    <div className='bg-slate-950'>
        <div className="sticky top-0 py-16 px-4 flex flex-col items-center justify-center text-center max-w-4xl mx-auto z-50 bg-slate-950">
        <div className="bg-gray-800 text-white text-sm px-4 py-2 rounded-full mb-6">Our Values & Milestones</div>
        <h2 className="text-5xl font-bold mb-6">
          Our{" "}
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-500 bg-clip-text text-transparent">
            Journey
          </span>
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Explore the milestones that have shaped our path to innovation, where every step brings us closer to
          transforming the future.
        </p>
        <button className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors">
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
          >
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </button>
      </div>
     
    </div>
  )
}

export default Milestone2

  