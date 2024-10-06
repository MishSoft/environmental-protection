// src/pages/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <div className="about bg-gradient-to-r from-green-200 to-blue-200 text-gray-800 min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
      <p className="mb-4 text-lg text-center max-w-2xl">
        At <span className="font-bold text-green-600">Eco Guardians</span>, we
        are dedicated to promoting environmental awareness and sustainable
        practices. Our mission is to educate and empower communities to protect
        our planet for future generations.
      </p>
      <h2 className="text-3xl font-semibold mb-2">Our Vision</h2>
      <p className="mb-4 text-center max-w-2xl">
        We envision a world where people coexist harmoniously with nature, where
        every action taken contributes to the health of our planet. Together, we
        strive to inspire change and build a sustainable future.
      </p>

      <h2 className="text-3xl font-semibold mb-2">Our Goals</h2>
      <ul className="list-disc list-inside mb-4 max-w-2xl">
        <li>
          🔍 Educate the public on the importance of environmental conservation.
        </li>
        <li>🌍 Promote sustainable living practices in everyday life.</li>
        <li>💚 Engage communities through hands-on environmental projects.</li>
        <li>♻️ Advocate for policy changes to protect natural resources.</li>
        <li>🌱 Foster partnerships with local organizations and businesses.</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-2">Current Projects</h2>
      <div className="max-w-2xl mb-4">
        <p className="mb-2">
          🌳 **Tree Planting Initiative**: We organize tree planting events
          across the city, aiming to plant over 10,000 trees by the end of the
          year.
        </p>
        <p className="mb-2">
          ♻️ **Recycling Awareness Campaign**: Educating the community about
          proper recycling practices to reduce waste and promote a circular
          economy.
        </p>
        <p className="mb-2">
          💧 **Water Conservation Drive**: Initiatives focused on promoting
          water-saving techniques in households and businesses.
        </p>
      </div>

      <h2 className="text-3xl font-semibold mb-2">Join Us</h2>
      <p className="mb-4 text-center max-w-2xl">
        Together, we can make a significant impact. Whether you want to
        volunteer, participate in events, or simply learn more, your involvement
        is crucial to our mission.
      </p>
      <a
        href="/contact"
        className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Contact Us
      </a>

      <footer className="mt-10 text-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Eco Guardians. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;
