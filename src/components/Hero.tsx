// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="hero  text-white h-screen flex flex-col items-center justify-center relative">
      <img
        src="/src/assets/bg-image.jpeg"
        alt="Nature"
        className="absolute top-0 left-0 w-full h-full object-cover "
      />
      <div className="relative z-10 text-center p-4">
        <h1 className="text-4xl mb-4 font-bold">
          Welcome to Environmental Protection
        </h1>
        <p className="mb-8 text-lg">
          Join us in making a difference. Together, we can protect our planet
          for future generations.
        </p>
        <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300">
          Scroll to About
        </button>

        {/* New Content */}
        <div className="mt-8">
          <h2 className="text-2xl mb-4">Why It Matters</h2>
          <p className="mb-2">
            🌍 Every year, millions of trees are cut down, harming wildlife and
            the planet.
          </p>
          <p className="mb-2">
            💧 Water pollution affects aquatic life and our health.
          </p>
          <p className="mb-2">
            🌱 Climate change is leading to severe weather patterns and habitat
            loss.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl mb-2">Take Action</h2>
          <ul className="list-disc list-inside">
            <li>
              <a href="/resources" className="text-blue-200 hover:underline">
                Explore Resources
              </a>
            </li>
            <li>
              <a href="/projects" className="text-blue-200 hover:underline">
                Join Our Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="text-blue-200 hover:underline">
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
