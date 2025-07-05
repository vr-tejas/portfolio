'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', path: '#home' },
    { name: 'Projects', path: '#projects' },
    { name: 'Skills', path: '#about' },
  ];

  const handleLogoClick = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 3000);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div className="mx-4 mt-4 w-full max-w-2xl">
        <nav className={`relative transition-all duration-300 ease-out rounded-2xl overflow-hidden ${
          scrolled
            ? 'bg-black/5 backdrop-blur-3xl border border-white/40 shadow-2xl shadow-white/10'
            : 'bg-black/3 backdrop-blur-3xl border border-white/30'
        }`}>
          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-white/5 via-transparent to-white/10 pointer-events-none"></div>
          
          {/* Inner glass border */}
          <div className="absolute inset-[1px] rounded-2xl border border-white/20 pointer-events-none"></div>
          
          <div className="relative px-6 lg:px-8 backdrop-blur-sm">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-1 flex justify-start">
                <div className="relative">
                  <button 
                    onClick={handleLogoClick}
                    className="logo-button flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300 p-2"
                    onFocus={(e) => e.target.blur()}
                  >
                    <span className="text-xl font-bold text-white/95 tracking-wide drop-shadow-lg" style={{ fontFamily: 'Noto Sans Kannada, system-ui, -apple-system, sans-serif' }}>
                      ಕಾರ್ಜುನ
                    </span>
                  </button>
                  
                  {/* Cute Popup Message */}
                  <AnimatePresence>
                    {showTooltip && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999]"
                      >
                        <div className="relative bg-gradient-to-r from-yellow-400/95 to-amber-500/95 backdrop-blur-md rounded-full px-6 py-3 shadow-xl shadow-yellow-500/30 border-2 border-yellow-300/50">
                          <p className="text-black text-sm font-semibold whitespace-nowrap">
                            just my pseudonym
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center flex-1 justify-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 font-sans drop-shadow-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden md:flex items-center flex-1 justify-end">
                <Link
                  href="#contact"
                  className="relative px-4 py-2 text-sm font-medium text-black bg-white/90 backdrop-blur-md rounded-lg hover:bg-white/95 transition-all duration-200 shadow-lg shadow-white/20 font-sans overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent pointer-events-none"></div>
                  <span className="relative">Contact</span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-white/90 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 backdrop-blur-sm"
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden relative bg-black/5 backdrop-blur-3xl border-t border-white/30 rounded-b-2xl overflow-hidden"
              >
                {/* Mobile menu glass effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
                
                <div className="relative px-6 py-6 backdrop-blur-sm">
                  <div className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className="text-base font-medium text-white/90 hover:text-white transition-colors duration-200 font-sans drop-shadow-sm hover:bg-white/5 rounded-lg px-3 py-2"
                      >
                        {item.name}
                      </Link>
                    ))}
                    
                    <div className="pt-4 border-t border-white/20">
                      <Link
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-white/90 backdrop-blur-md rounded-lg hover:bg-white/95 transition-all duration-200 shadow-lg shadow-white/20 font-sans overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent pointer-events-none"></div>
                        <span className="relative">Contact</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 