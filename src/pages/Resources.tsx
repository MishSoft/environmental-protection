// src/pages/Resources.tsx
import React from "react";

const Resources: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Resources Section Heading */}
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Environmental Resources
        </h2>

        {/* Resources List */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">
              Reducing Waste
            </h3>
            <p className="text-gray-700">
              Learn how to minimize waste in your daily life by adopting simple
              habits like recycling, composting, and reducing plastic use.
            </p>
            <a
              href="https://www.epa.gov/recycle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800"
            >
              Read more
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">
              Energy Conservation
            </h3>
            <p className="text-gray-700">
              Discover energy-saving tips for your home, from using
              energy-efficient appliances to reducing your carbon footprint.
            </p>
            <a
              href="https://www.energy.gov/energysaver"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800"
            >
              Read more
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">
              Climate Change Action
            </h3>
            <p className="text-gray-700">
              Stay informed about the latest initiatives and actions you can
              take to combat climate change and support environmental
              protection.
            </p>
            <a
              href="https://www.un.org/en/climatechange"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
