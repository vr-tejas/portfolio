'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiExternalLink, FiCode } from 'react-icons/fi';
import { 
  SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiCss3, 
  SiPython, SiTensorflow, SiMysql, SiSolidity, SiEthereum, 
  SiUnity, SiGithubactions, SiNodedotjs, SiExpress, SiMongodb, 
  SiChartdotjs, SiScikitlearn, SiJava
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

const Projects = () => {

  // Tech icon mapping with consistent white color
  const techIcons: { [key: string]: React.ReactElement } = {
    'React': <SiReact className="text-foreground" size={16} />,
    'Next.js': <SiNextdotjs className="text-foreground" size={16} />,
    'JavaScript': <SiJavascript className="text-foreground" size={16} />,
    'HTML': <SiHtml5 className="text-foreground" size={16} />,
    'CSS': <SiCss3 className="text-foreground" size={16} />,
    'Python': <SiPython className="text-foreground" size={16} />,
    'TensorFlow': <SiTensorflow className="text-foreground" size={16} />,
    'MySQL': <SiMysql className="text-foreground" size={16} />,
    'Solidity': <SiSolidity className="text-foreground" size={16} />,
    'Ethereum': <SiEthereum className="text-foreground" size={16} />,
    'Unity3D': <SiUnity className="text-foreground" size={16} />,
    'C#': <TbBrandCSharp className="text-foreground" size={16} />,
    'Truffle': <FiCode className="text-foreground" size={16} />,
    'Node.js': <SiNodedotjs className="text-foreground" size={16} />,
    'Express': <SiExpress className="text-foreground" size={16} />,
    'MongoDB': <SiMongodb className="text-foreground" size={16} />,
    'Chart.js': <SiChartdotjs className="text-foreground" size={16} />,
    'scikit-learn': <SiScikitlearn className="text-foreground" size={16} />,
    'GitHub Actions': <SiGithubactions className="text-foreground" size={16} />,
    'CI/CD': <SiGithubactions className="text-foreground" size={16} />,
    'AR': <SiUnity className="text-foreground" size={16} />,
    'VR': <SiUnity className="text-foreground" size={16} />,
    'Machine Learning': <SiPython className="text-foreground" size={16} />,
    'Neural Networks': <SiTensorflow className="text-foreground" size={16} />,
    'Data Science': <SiPython className="text-foreground" size={16} />,
    'Ganache': <SiEthereum className="text-foreground" size={16} />,
    'Java': <SiJava className="text-foreground" size={16} />,
    'P2P': <FiCode className="text-foreground" size={16} />,
    'Networking': <FiCode className="text-foreground" size={16} />,
    'AI': <SiPython className="text-foreground" size={16} />,
    'Blockchain': <SiEthereum className="text-foreground" size={16} />,
    'Web Development': <SiJavascript className="text-foreground" size={16} />,
    'Jupyter Notebook': <SiPython className="text-foreground" size={16} />,
  };

  const projects = [
    {
      name: 'TradePulse',
      title: 'Stock Trading Platform',
      description: 'Full-stack trading platform with real-time data visualization, portfolio tracking, and interactive charts with technical indicators.',
      tags: ['JavaScript', 'React', 'Node.js', 'Chart.js'],
      demo: 'https://github.com/vr-tejas/stock-trading-platform',
      gradient: 'from-purple-500/20 to-blue-500/20',
      iconBg: 'bg-purple-500/20',
      icon: <SiReact size={24} className="text-purple-300" />,
    },
    {
      name: 'NeuroDetect',
      title: 'Parkinson\'s Disease Prediction',
      description: 'Machine learning model for early detection of Parkinson\'s disease using voice measurements and advanced ML algorithms.',
      tags: ['Python', 'Machine Learning', 'Jupyter Notebook'],
      demo: 'https://github.com/vr-tejas/Parkinsons-Disease-prediction',
      gradient: 'from-green-500/20 to-teal-500/20',
      iconBg: 'bg-green-500/20',
      icon: <SiPython size={24} className="text-green-300" />,
    },
    {
      name: 'FileShare P2P',
      title: 'P2P File Sharing System',
      description: 'Decentralized peer-to-peer file sharing system built with Java, enabling secure and efficient file transfers between users.',
      tags: ['Java', 'P2P', 'Networking'],
      demo: 'https://github.com/vr-tejas/P2P-File-Sharing-System',
      gradient: 'from-orange-500/20 to-red-500/20',
      iconBg: 'bg-orange-500/20',
      icon: <SiJava size={24} className="text-orange-300" />,
    },
    {
      name: 'ReportMaster',
      title: 'Online Result Management Platform',
      description: 'Comprehensive platform for managing academic results with automated report generation and student performance analytics.',
      tags: ['JavaScript', 'Node.js', 'Web Development'],
      demo: 'https://github.com/vr-tejas/Online-Result-Management-Platform',
      gradient: 'from-indigo-500/20 to-purple-500/20',
      iconBg: 'bg-indigo-500/20',
      icon: <SiJavascript size={24} className="text-indigo-300" />,
    },
    {
      name: 'QuizBot AI',
      title: 'AI-Powered MCQ Generator',
      description: 'Intelligent multiple-choice question generator using AI to create educational content and assessments automatically.',
      tags: ['Python', 'AI', 'Machine Learning'],
      demo: 'https://github.com/vr-tejas/AI-powered-MCQ-generator',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      iconBg: 'bg-cyan-500/20',
      icon: <SiPython size={24} className="text-cyan-300" />,
    },
    {
      name: 'VoteChain',
      title: 'Blockchain Voting System',
      description: 'Decentralized voting system built on blockchain technology ensuring transparency, security, and immutable voting records.',
      tags: ['JavaScript', 'Blockchain', 'Solidity'],
      demo: 'https://github.com/vr-tejas/Blockchain-Voting-System',
      gradient: 'from-yellow-500/20 to-amber-500/20',
      iconBg: 'bg-yellow-500/20',
      icon: <SiEthereum size={24} className="text-yellow-300" />,
    },
    {
      name: 'ForecastEngine',
      title: 'ML Forecast Engine',
      description: 'Advanced machine learning forecasting engine for time series prediction with multiple algorithms and data visualization.',
      tags: ['Python', 'Machine Learning', 'Data Science'],
      demo: 'https://github.com/vr-tejas/ml-forecast-engine',
      gradient: 'from-emerald-500/20 to-green-500/20',
      iconBg: 'bg-emerald-500/20',
      icon: <SiPython size={24} className="text-emerald-300" />,
    }
  ];



  return (
    <section id="projects" className="relative section-padding bg-gradient-to-b from-black via-secondary/20 to-black">
      <div className="container mx-auto px-12 sm:px-16 lg:px-24 xl:px-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-muted text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical skills and problem-solving approach through real-world applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Project Header */}
              <div className="relative p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${project.iconBg} backdrop-blur-sm`}>
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
                      aria-label="View live demo"
                    >
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-primary group-hover:text-white transition-colors mb-1">
                    {project.name}
                  </h3>
                  <h4 className="text-sm font-medium text-foreground/80 group-hover:text-white/90 transition-colors">
                    {project.title}
                  </h4>
                </div>
                
                <p className="text-white/70 text-sm leading-relaxed line-clamp-3 group-hover:text-white/80 transition-colors">
                  {project.description}
                </p>
              </div>



              {/* Tech Stack */}
              <div className="relative px-6 pb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/80 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    >
                      {techIcons[tag]}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>




            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted text-lg mb-6">
            Want to see more of my work?
          </p>
          <Link
            href="https://github.com/VRTejas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-black bg-primary rounded-full hover:bg-primary-light transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
          >
            <span>Visit My GitHub</span>
            <FiExternalLink size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 