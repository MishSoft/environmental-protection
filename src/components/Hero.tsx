// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Protect Our Planet, Protect Our Future
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-700 mb-6">
          Learn how to take meaningful steps to protect the environment and
          preserve the Earth for future generations.
        </p>

        {/* Call to Action Button */}
        <a
          href="#resources"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
