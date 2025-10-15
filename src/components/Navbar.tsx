import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Navigation links (use id for internal scrolling)
  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Events", path: "events" },
    { name: "Faculties", path: "faculty" },
    { name: "Contact", path: "contact" },
    { name: "FAQs", path: "faqs" },
  ];

  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
    

        {/* Desktop Links */}
        <div className="navbar-links-desktop">
          {navLinks.map((link) => (
            <button
              key={link.name}
              className={`navbar-link ${
                location.hash === `#${link.path}` ? "active-link" : ""
              }`}
              onClick={() => handleScroll(link.path)}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Hamburger Button */}
        <div className="navbar-mobile-button">
          <button className="mobile-button" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          {navLinks.map((link) => (
            <button
              key={link.name}
              className="mobile-link"
              onClick={() => handleScroll(link.path)}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}

      {/* CSS in same file */}
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          z-index: 1000;
          border-bottom: 2px solid #ff7b00;
          transition: background 0.3s;
        }
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 60px;
        }
        .navbar-logo {
          color: #ffcc00;
          font-weight: bold;
          font-size: 1.5rem;
          text-shadow: 0 0 8px #ff7b00;
        }
        .navbar-links-desktop {
          display: none;
        }
        .navbar-link {
          background: none;
          border: none;
          color: #ddd;
          font-size: 1rem;
          margin-left: 1rem;
          padding: 0.5rem 0.75rem;
          border-radius: 0.375rem;
          cursor: pointer;
          font-weight: 500;
          transition: color 0.2s, transform 0.2s;
        }
        .navbar-link:hover {
          color: #fff;
          transform: translateY(-2px);
        }
        .active-link {
          color: #ff7b00;
          border-bottom: 2px solid #ff7b00;
        }

        .navbar-mobile-button {
          display: flex;
        }
        .mobile-button {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        .navbar-mobile-menu {
          position: absolute;
          top: 60px;
          left: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.95);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1rem;
          z-index: 999;
        }
        .mobile-link {
          color: #d1d5db;
          text-decoration: none;
          padding: 0.75rem 1rem;
          font-weight: 500;
          border-radius: 0.375rem;
          background: transparent;
          border: none;
          text-align: left;
        }
        .mobile-link:hover {
          color: #ffb84d;
          background-color: rgba(255, 123, 0, 0.1);
        }

        @media (min-width: 768px) {
          .navbar-links-desktop {
            display: flex;
            align-items: center;
          }
          .navbar-mobile-button {
            display: none;
          }
          .navbar-mobile-menu {
            display: none;
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
