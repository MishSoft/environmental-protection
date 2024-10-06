import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              EnviroProtect
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="hover:bg-green-700 px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:bg-green-700 px-3 py-2 rounded-md text-lg font-medium"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="hover:bg-green-700 px-3 py-2 rounded-md text-lg font-medium"
            >
              Projects
            </Link>
            <Link
              to="/resources"
              className="hover:bg-green-700 px-3 py-2 rounded-md text-lg font-medium"
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="hover:bg-green-700 px-3 py-2 rounded-md text-lg font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-green-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="hover:bg-green-700 text-white block px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:bg-green-700 text-white block px-3 py-2 rounded-md text-lg font-medium"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="hover:bg-green-700 text-white block px-3 py-2 rounded-md text-lg font-medium"
            >
              Projects
            </Link>
            <Link
              to="/resources"
              className="hover:bg-green-700 text-white block px-3 py-2 rounded-md text-lg font-medium"
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="hover:bg-green-700 text-white block px-3 py-2 rounded-md text-lg font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
