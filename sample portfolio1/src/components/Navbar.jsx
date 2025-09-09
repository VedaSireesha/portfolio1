import { Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const navItems = [
  { id: 'home', label: <span className="font-semibold text-base text-black">Home</span> },
  { id: 'about', label: <span className="font-semibold text-base text-black">About</span> },
  { id: 'education', label: <span className="font-semibold text-base text-base text-black">Education</span> },
  { id: 'experience', label: <span className="font-semibold text-base text-black">Experience</span> },
  { id: 'skills', label: <span className="font-semibold text-base text-black">Skills</span> },
  { id: 'projects', label: <span className="font-semibold text-base text-black">Projects</span> },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 border-b border-gray-200 dark:border-gray-300 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-pink-300/20' : 'bg-pink-300'
      }`}
      style={{
        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)',
        fontFamily: "'Poppins', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif"
      }}
    >
      <div className="flex items-center justify-between w-full py-8 px-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <a href="/">
            <span className="hover:text-[#6C63FF] transition duration-300 font-bold text-lg text-black">
              Vedasireesha Panguluru
            </span>
          </a>
        </div>
        <div className="ml-auto">
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-[#6C63FF] transition duration-300 text-black"
                  style={{ fontFamily: "'Poppins', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif" }}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden flex flex-col justify-end">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileDrawerOpen && (
        <div
          className="fixed top-0 left-0 right-0 z-50 w-full py-6 px-8 flex flex-col items-center lg:hidden backdrop-blur-md bg-pink-300/20"
          style={{
            boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)',
            fontFamily: "'Poppins', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif"
          }}
        >
          <div className="w-full flex justify-end mb-4">
            <button onClick={toggleNavbar} aria-label="Close menu">
              <X size={32} className="text-black" />
            </button>
          </div>
          <ul className="w-full flex flex-col items-center">
            {navItems.map((item, index) => (
              <li key={index} className="py-2 w-full text-center">
                <a
                  href={`#${item.id}`}
                  className="hover:text-[#6C63FF] transition duration-300 block w-full text-black"
                  style={{ fontFamily: "'Poppins', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif" }}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <hr className="border-t border-gray-200 dark:border-gray-300 opacity-50 mx-0" />
    </nav>
  );
};

export default Navbar;
