import React from "react";
import Image from "next/image";

const HowWeThrive = () => {
  return (
    <section className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white py-24 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl max-h-[830px]">
              <Image
                src="/Assets/thrive.webp"
                width={800}
                height={600}
                alt="Woman working at a desk with data visualizations in the background"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-pink-500">How </span>
              <span className="text-blue-400">We </span>
              <span className="text-green-300">Thrive</span>
            </h2>

            <p className="text-gray-700 dark:text-gray-300 text-lg mb-12">
              At Everything Talent, we break the norm. Driven by community, we
              empower individuals to innovate, learn, and push boundaries—
              fostering shared growth and a relentless pursuit of excellence.
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Community-Driven", icon: "👥", desc: "We build strong connections and foster collaboration within our team." },
                { title: "Innovation First", icon: "💡", desc: "We encourage creative thinking and novel approaches to challenges." },
                { title: "Action Oriented", icon: "🚀", desc: "We transform ideas into tangible results through decisive action." },
                { title: "Continuous Growth", icon: "📈", desc: "We embrace learning and development as core principles." },
                { title: "Excellence Pursuit", icon: "🏆", desc: "We strive for exceptional quality in everything we do." },
                { title: "Shared Success", icon: "🤝", desc: "We celebrate achievements and grow together as one team." }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800/80 p-6 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 shadow-lg"
                >
                  <div className="text-purple-500 dark:text-purple-400 text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeThrive;
