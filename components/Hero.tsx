'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiUser, FiExternalLink } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-secondary/30 to-secondary/50"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/6 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-12 sm:px-16 lg:px-24 xl:px-32 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-muted text-lg font-medium"
                >
                  Hello there, I&apos;m
                </motion.p>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight flex items-center gap-4"
                >
                  <span className="gradient-text">V R Tejas</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-blue-400 font-mono text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
                  >
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      &lt;/&gt;
                    </motion.span>
                  </motion.span>
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground/90 leading-relaxed">
                  Computer Science Student & Developer
                </h2>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-lg blur-sm"></div>
                  <div className="relative bg-secondary/50 p-6 rounded-lg border border-white/10">
                    <p className="text-foreground/90 font-medium text-lg italic leading-relaxed">
                      &ldquo;Building tomorrow&apos;s digital experiences with code, creativity, and innovation&rdquo;
                    </p>
                    <p className="text-muted text-sm mt-3">
                      Passionate about creating impactful solutions ✨
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-muted text-lg leading-relaxed max-w-2xl"
                style={{ 
                  fontFamily: 'var(--font-fira-code), var(--font-jetbrains-mono), "SF Mono", "Monaco", "Consolas", monospace',
                  fontWeight: '400',
                  letterSpacing: '0.2px',
                  lineHeight: '1.8',
                  fontSize: '1.05rem',
                  color: '#e5e5e5',
                  textShadow: '0 0 8px rgba(255,255,255,0.1)'
                }}
              >
                I&apos;m a passionate developer specializing in modern web technologies, blockchain solutions, and AI/ML applications. 
                Currently pursuing my degree at RV Institute of Technology and Management while building innovative projects 
                that solve real-world problems. <span className="text-primary" style={{ fontFamily: 'var(--font-fira-code), var(--font-jetbrains-mono), monospace', fontSize: '1.05rem' }}>Diving deep into Generative AI</span> and exploring its potential in creating intelligent solutions.
              </motion.p>
            </motion.div>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/6 to-transparent rounded-full blur-xl scale-105"></div>
                
                {/* Main Container */}
                <div className="relative w-full h-full">
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20"></div>
                  
                  <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-secondary via-card to-secondary">
                    {imageError ? (
                      <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                        <FiUser size={48} className="text-muted mb-4" />
                        <p className="text-sm text-muted">
                          Add your photo at<br />
                          <code className="text-xs bg-secondary px-2 py-1 rounded mt-2 inline-block">
                            /public/profile.jpg
                          </code>
                        </p>
                      </div>
                    ) : (
                      <Image
                        src="/profile.jpg"
                        alt="V R Tejas - Full Stack Developer"
                        fill
                        className="object-cover"
                        priority
                        onError={() => setImageError(true)}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex justify-center mt-8"
              >
                <a
                  href="https://drive.google.com/file/d/1egZqsrF7IfyHX-sZKr2gjctMUsF4q2ax/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white/90 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                >
                  <span className="font-medium">View Resume</span>
                  <FiExternalLink size={16} className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 