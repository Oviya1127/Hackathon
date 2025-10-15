import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'About', path: '/#about' },
    { name: 'Events', path: '/#events' },
    { name: 'Faculties', path: '/#faculty' },
    { name: 'Sponsors', path: '/#sponsors' },
    { name: 'Contact', path: '/#contact' },
    { name: 'FAQs', path: '/#faqs' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-md z-50 border-b border-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) =>
              link.path.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === link.path
                      ? 'text-purple-400 border-b-2 border-purple-500'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-95 backdrop-blur-md z-40 px-4 py-4 space-y-3">
          {navLinks.map((link) =>
            link.path.startsWith('/#') ? (
              <a
                key={link.name}
                href={link.path}
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-purple-400 bg-gray-900'
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
