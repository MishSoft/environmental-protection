// src/pages/Contact.tsx
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="contact-page bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-center text-lg mb-12">
          We're here to help and answer any questions you might have about
          environmental protection or our projects. Feel free to get in touch
          with us through the form below or any of the other methods listed.
        </p>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
          <form className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6">
            <div className="col-span-1">
              <label className="block text-lg font-medium mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-lg font-medium mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="col-span-2">
              <label
                className="block text-lg font-medium mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Message subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="col-span-2">
              <label
                className="block text-lg font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Write your message..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="bg-green-600 text-white py-3 px-8 rounded-lg font-semibold shadow hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="contact-info bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Our Office</h3>
            <p className="mb-4">
              123 Green Street, Environmental City, EC 1010
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              className="w-full h-48 rounded-lg"
              loading="lazy"
            ></iframe>
          </div>

          <div className="contact-info bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Email Us</h3>
            <p className="mb-4">For any inquiries, you can email us at:</p>
            <a
              href="mailto:info@environment.org"
              className="text-blue-500 hover:underline"
            >
              info@environment.org
            </a>
          </div>

          <div className="contact-info bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Call Us</h3>
            <p className="mb-4">
              We're available Monday to Friday from 9am to 6pm.
            </p>
            <a href="tel:+1234567890" className="text-blue-500 hover:underline">
              +1 (234) 567-890
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="social-media text-center mt-12">
          <h2 className="text-3xl font-semibold mb-6">Connect With Us</h2>
          <p className="text-lg mb-8">
            Follow us on social media to stay updated on the latest
            environmental news, tips, and project updates.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              <svg
                className="w-8 h-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="..." />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              <svg
                className="w-8 h-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="..." />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500"
            >
              <svg
                className="w-8 h-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="..." />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Eco Guardians. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
