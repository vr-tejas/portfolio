'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

const SocialNavbar = () => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/vr-tejas', 
      icon: FaGithub,
      color: 'hover:text-white'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/vrtejas', 
      icon: FaLinkedin,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Twitter', 
      url: '#', 
      icon: FaXTwitter,
      color: 'hover:text-gray-300'
    },
    { 
      name: 'LeetCode', 
      url: '#', 
      icon: SiLeetcode,
      color: 'hover:text-yellow-400'
    },
    { 
      name: 'Email', 
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=vrtejas2004@gmail.com', 
      icon: FiMail,
      color: 'hover:text-green-400'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40"
    >
      <nav className="relative bg-black/3 backdrop-blur-3xl border border-white/30 rounded-2xl overflow-hidden shadow-2xl shadow-white/5">
        {/* Glass reflection effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-white/5 via-transparent to-white/10 pointer-events-none"></div>
        
        {/* Inner glass border */}
        <div className="absolute inset-[1px] rounded-2xl border border-white/20 pointer-events-none"></div>
        
        <div className="relative px-3 py-4 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-2">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl text-white/70 ${link.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 backdrop-blur-sm`}
                aria-label={link.name}
                whileHover={{ x: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default SocialNavbar; 