// src/pages/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* About Us Section Heading */}
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          About Us
        </h2>

        {/* About Us Content */}
        <div className="text-lg text-gray-700 space-y-6">
          <p>
            At <strong>EnviroProtect</strong>, our mission is to provide
            valuable information and resources to help individuals and
            communities take meaningful actions to protect the environment. We
            believe that everyone can play a role in creating a sustainable
            future for generations to come.
          </p>
          <p>
            From reducing waste and conserving energy to promoting environmental
            education, we strive to make it easier for everyone to contribute to
            a cleaner, greener planet.
          </p>

          {/* Key Statistics or Environmental Facts */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Did You Know?
            </h3>
            <ul className="list-disc pl-6 text-gray-800">
              <li>
                Every year, an estimated <strong>8 million tons</strong> of
                plastic waste enters the oceans.
              </li>
              <li>
                Deforestation accounts for nearly <strong>20%</strong> of all
                greenhouse gas emissions.
              </li>
              <li>
                More than <strong>1 million species</strong> are at risk of
                extinction due to climate change.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
