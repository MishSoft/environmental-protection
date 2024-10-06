// src/pages/Projects.tsx
import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Beach Cleanup Initiative",
      description:
        "Join us for a coastal cleanup event to help remove plastic waste from our beautiful beaches and protect marine life.",
      date: "October 15, 2024",
      location: "Miami Beach, FL",
    },
    {
      title: "Tree Planting Campaign",
      description:
        "Help us plant trees in urban areas to improve air quality, increase biodiversity, and combat climate change.",
      date: "November 5, 2024",
      location: "Central Park, New York, NY",
    },
    {
      title: "Community Recycling Program",
      description:
        "Learn how you can participate in our community recycling initiative to reduce waste and promote sustainability.",
      date: "December 1, 2024",
      location: "San Francisco, CA",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Projects Section Heading */}
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Environmental Projects
        </h2>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="text-gray-600">
                <span className="font-semibold">Date:</span> {project.date}
              </div>
              <div className="text-gray-600">
                <span className="font-semibold">Location:</span>{" "}
                {project.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
