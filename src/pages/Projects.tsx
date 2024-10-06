// src/pages/Projects.tsx
import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="projects bg-gray-50 text-gray-900 min-h-screen py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Our Environmental Projects
      </h1>
      <p className="text-lg text-center mb-12 max-w-3xl">
        We take pride in leading various environmental projects aimed at
        conserving ecosystems, reducing carbon footprints, and promoting
        sustainable practices globally. Explore some of our key projects below
        and learn how we’re making a difference.
      </p>

      <section className="completed-projects mb-16">
        <h2 className="text-3xl font-semibold mb-4">Completed Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-card bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2">
              Reforestation in the Amazon
            </h3>
            <p className="mb-4">
              A large-scale reforestation project that planted over 1 million
              trees in the Amazon rainforest, restoring lost habitats and
              contributing to carbon sequestration.
            </p>
            <a
              href="https://www.amazonreforestation.org"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>

          <div className="project-card bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2">
              Ocean Cleanup Initiative
            </h3>
            <p className="mb-4">
              A project aimed at reducing plastic pollution in the Pacific
              Ocean, removing over 100 tons of plastic waste through innovative
              cleanup technologies.
            </p>
            <a
              href="https://theoceancleanup.com/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>

          <div className="project-card bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2">
              Solar Power in Rural Communities
            </h3>
            <p className="mb-4">
              We installed solar panels in remote rural communities to provide
              clean energy and reduce reliance on fossil fuels, benefiting over
              5,000 households.
            </p>
            <a
              href="https://www.solar-energy.org"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </section>

      <section className="ongoing-projects mb-16">
        <h2 className="text-3xl font-semibold mb-4">Ongoing Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-card bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2">Coral Reef Restoration</h3>
            <p className="mb-4">
              We are currently working on restoring coral reefs in the
              Caribbean, planting coral fragments and monitoring their growth to
              support marine biodiversity.
            </p>
            <a
              href="https://www.coralrestoration.org"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>

          <div className="project-card bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2">Urban Green Spaces</h3>
            <p className="mb-4">
              This project focuses on developing and maintaining urban green
              spaces to improve air quality and provide recreational areas for
              city dwellers.
            </p>
            <a
              href="https://urbangreenspace.com"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>

          <div className="project-card bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2">
              Wildlife Conservation in Africa
            </h3>
            <p className="mb-4">
              We are protecting endangered species in Africa by working with
              local communities to reduce poaching and promote wildlife tourism.
            </p>
            <a
              href="https://www.wildlifeconservation.org"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="future-initiatives mb-16">
        <h2 className="text-3xl font-semibold mb-4">Future Initiatives</h2>
        <p className="text-lg text-center mb-8 max-w-2xl">
          We’re constantly planning new initiatives to address the world's
          pressing environmental issues. Stay tuned for updates on our future
          projects aimed at combating climate change and promoting
          sustainability worldwide.
        </p>
      </section>

      <footer className="mt-12 text-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Eco Guardians. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Projects;
