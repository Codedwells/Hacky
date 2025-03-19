import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ['About', 'Prizes', 'Judges', 'Sponsors', 'Register'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass-card' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Code className="w-8 h-8 text-neon-blue" />
          <span className="text-2xl font-display font-bold text-white text-glow tracking-wider">
             HACK<span className="text-neon-pink">ATHON</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className={`relative text-sm font-medium font-mono uppercase tracking-wide transition-all duration-300
                ${item === 'Register' ? 'text-neon-green text-glow-green font-bold' : 'text-gray-200 hover:text-white'}
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5
                after:bottom-0 after:left-0 after:bg-neon-blue after:origin-bottom-right
                after:transition-transform after:duration-300 hover:after:scale-x-100
                hover:after:origin-bottom-left`}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden glass-card border-t border-white/10 py-4 px-6"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className={`text-base font-medium py-2 font-mono uppercase ${
                  item === 'Register' ? 'text-neon-green text-glow-green font-bold' : 'text-gray-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
