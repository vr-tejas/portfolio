'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/50">
      <div className="container mx-auto px-12 sm:px-16 lg:px-24 xl:px-32 py-12">
        <div className="text-center space-y-8">
          
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-white/60 text-lg"
          >
            Let's build something amazing together
          </motion.p>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/40 text-sm"
          >
            © {currentYear} V R Tejas. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 