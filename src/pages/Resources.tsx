// src/pages/Resources.tsx
import React from "react";

const Resources: React.FC = () => {
  return (
    <div className="resources bg-white text-gray-800 min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Resources for Environmental Protection
      </h1>
      <p className="mb-8 text-lg text-center max-w-2xl">
        Explore our curated list of resources that can help you understand
        environmental issues better and take action towards sustainability.
        Whether you're looking for articles, tools, or guides, you'll find
        valuable information here.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Educational Articles</h2>
      <ul className="list-disc list-inside mb-8 max-w-2xl">
        <li>
          <a
            href="https://www.nrdc.org/stories/what-you-can-do-help-environment"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            What You Can Do to Help the Environment - NRDC
          </a>
        </li>
        <li>
          <a
            href="https://www.wwf.org.uk/updates/10-simple-ways-help-save-planet"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            10 Simple Ways to Help Save the Planet - WWF
          </a>
        </li>
        <li>
          <a
            href="https://www.epa.gov/learn-epa/learn-about-environmental-protection"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn About Environmental Protection - EPA
          </a>
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Tools and Apps</h2>
      <ul className="list-disc list-inside mb-8 max-w-2xl">
        <li>
          <a
            href="https://www.earthranger.com/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Earth Ranger - Wildlife Conservation Tracker
          </a>
        </li>
        <li>
          <a
            href="https://www.carbonfootprint.com/calculator.aspx"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Carbon Footprint Calculator
          </a>
        </li>
        <li>
          <a
            href="https://www.wildlifetrusts.org"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wildlife Trusts - Get Involved with Nature
          </a>
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">
        Tips for Sustainable Living
      </h2>
      <div className="max-w-2xl mb-4">
        <p className="mb-2">
          1. Reduce, Reuse, Recycle: Aim to minimize waste by rethinking how you
          use products.
        </p>
        <p className="mb-2">
          2. Save Water: Shorten your showers, fix leaks, and turn off the tap
          while brushing your teeth.
        </p>
        <p className="mb-2">
          3. Use Energy Efficient Appliances: Switch to LED bulbs and
          energy-efficient appliances.
        </p>
        <p className="mb-2">
          4. Support Local: Purchase locally grown food and products to reduce
          your carbon footprint.
        </p>
        <p className="mb-2">
          5. Educate Others: Share your knowledge about sustainability with
          friends and family.
        </p>
      </div>

      <h2 className="text-3xl font-semibold mb-4">Get Involved</h2>
      <p className="mb-4 text-center max-w-2xl">
        Join us in our efforts to protect the environment! Whether you want to
        volunteer, participate in events, or simply spread awareness, your
        contribution is invaluable.
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

export default Resources;
