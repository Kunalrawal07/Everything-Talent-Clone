import React from 'react';

const OurValues = () => {
  return (
    <section className="bg-gray-900 text-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-8 md:mb-16">
          <div className="bg-gray-800 rounded-full px-4 sm:px-6 py-2 mb-3 sm:mb-4">
            <span className="text-white text-xs sm:text-sm font-medium">Our Values</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 px-2">
            Our Philosophy in <span className="text-purple-500">A</span><span className="text-blue-400">c</span><span className="text-green-400">t</span><span className="text-yellow-400">i</span><span className="text-orange-400">o</span><span className="text-red-400">n</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl text-center px-2">
            At Everything Talent, Bringing Our Values to Life Through Meaningful Actions
          </p>
        </div>

        {/* Values Grid - Responsive for all devices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
          {/* Row 1 */}
          <div className="sm:col-span-2 md:col-span-4 bg-yellow-400 p-6 md:p-8 rounded-xl h-auto sm:h-64 flex flex-col justify-between">
            <div className="mb-2">
              <span className="text-gray-800 font-medium">01</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              With us, there are no surprises—just straight talk and genuine commitment.
            </h3>
            <div className="mt-auto">
              <span className="text-gray-800 font-medium text-sm">#HONESTY</span>
            </div>
          </div>

          <div className="sm:col-span-2 md:col-span-5 bg-purple-500 p-6 md:p-8 rounded-xl h-auto sm:h-64 flex flex-col justify-between">
            <div className="mb-2">
              <span className="text-white font-medium">03</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              We act with urgency to ensure progress and deliver results efficiently. Every moment matters.
            </h3>
            <div className="mt-auto flex justify-between items-end">
              <span className="text-purple-200 font-medium text-sm">#URGENCY</span>
              <div className="flex -space-x-2 overflow-hidden">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-300 border-2 border-purple-500"></div>
                ))}
              </div>
            </div>
          </div>

          <div className="sm:col-span-2 md:col-span-3 bg-orange-300 p-6 md:p-8 rounded-xl h-auto sm:h-64 flex flex-col justify-between">
            <div className="mb-2 flex justify-between">
              <span className="text-gray-800 font-medium">02</span>
              <div className="text-2xl sm:text-3xl">🧰</div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 mt-4 sm:mt-8">
              Embrace hard work
            </h3>
            <div className="mt-auto">
              <span className="text-gray-800 font-medium">|</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="sm:col-span-2 md:col-span-6 bg-green-300 p-6 md:p-8 rounded-xl h-auto sm:h-64 flex flex-col justify-between">
            <div className="mb-2">
              <span className="text-gray-800 font-medium">05</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              We&apos;re here to help you aim higher, break limits, and achieve what others might think impossible.
            </h3>
            <div className="mt-auto">
              <span className="text-gray-800 font-medium text-sm">#ASPIRATION</span>
            </div>
          </div>

          <div className="sm:col-span-2 md:col-span-6 bg-gray-200 p-6 md:p-8 rounded-xl h-auto sm:h-64 flex flex-col justify-between">
            <div className="w-full text-left mb-2">
              <span className="text-gray-800 font-medium">06</span>
            </div>
            <div className="flex flex-col justify-center items-center flex-grow">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center">
                DO HARD THINGS
              </h3>
            </div>
            <div className="mt-4 w-full text-center">
              <span className="text-gray-700 font-medium text-sm">#RESILIENT</span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="sm:col-span-1 md:col-span-4 bg-green-200 p-6 md:p-8 rounded-xl h-auto sm:h-52 flex flex-col justify-between">
            <div className="mb-2">
              <span className="text-gray-800 font-medium">04</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Grow 1% every day
            </h3>
            <div className="mt-auto">
              <span className="text-gray-800 font-medium text-sm">#GROWTHMINDSET</span>
            </div>
          </div>

          <div className="sm:col-span-1 md:col-span-4 bg-red-300 p-6 md:p-8 rounded-xl h-auto sm:h-52 flex flex-col justify-between">
            <div className="mb-2">
              <span className="text-gray-800 font-medium">07</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              We value fresh ideas, bold solutions, and the freedom to imagine what&apos;s next.
            </h3>
            <div className="mt-auto">
              <span className="text-gray-800 font-medium text-sm">#CREATIVITY</span>
            </div>
          </div>

          <div className="sm:col-span-2 md:col-span-4 bg-blue-200 p-6 md:p-8 rounded-xl h-auto sm:h-52 flex flex-col justify-between">
            <div className="mb-2">
              <span className="text-gray-800 font-medium">08</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Commit to continuous learning and improvement
            </h3>
            <div className="mt-auto">
              <span className="text-gray-800 font-medium text-sm">#LEARNING</span>
            </div>
          </div>

          {/* Row 4 */}
          <div className="sm:col-span-1 md:col-span-6 bg-yellow-400 p-6 md:p-8 rounded-xl h-auto sm:h-52 flex flex-col justify-between">
            <div className="mb-2">
              <span className="text-gray-800 font-medium">10</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Every project, every solution we create is aimed at contributing to something greater.
            </h3>
            <div className="mt-auto">
              <span className="text-gray-800 font-medium text-sm">#CONTRIBUTION</span>
            </div>
          </div>

          <div className="sm:col-span-1 md:col-span-6 bg-red-400 p-6 md:p-8 rounded-xl h-auto sm:h-52 flex flex-col justify-between">
            <div className="mb-2">
              <span className="text-gray-100 font-medium">09</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Build trust through actions, not just words.
            </h3>
            <div className="mt-auto">
              <span className="text-gray-100 font-medium text-sm">#TRUST</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;