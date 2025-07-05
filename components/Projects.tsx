'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { 
  SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiCss3, 
  SiPython, SiTensorflow, SiMysql, SiSolidity, SiEthereum, 
  SiUnity, SiGithubactions, SiNodedotjs, SiExpress, SiMongodb, 
  SiChartdotjs, SiScikitlearn
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

const Projects = () => {

  // Tech icon mapping with consistent white color
  const techIcons: { [key: string]: JSX.Element } = {
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
  };

  const projects = [
    {
      name: 'TradePulse',
      title: 'Stock Market Trading Platform',
      description: 'Full-stack trading platform with real-time data visualization, portfolio tracking, and interactive charts with technical indicators.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
      github: 'https://github.com/VRTejas/Stock-Market-Trading-Platform',
      demo: 'https://tradingview.com',
      gradient: 'from-purple-500/20 to-blue-500/20',
      iconBg: 'bg-purple-500/20',
      icon: <SiReact size={24} className="text-purple-300" />,
    },
    {
      name: 'NeuroDetect',
      title: 'Parkinson\'s Disease Classification System',
      description: 'ML-based detection system achieving 93% accuracy for early-stage Parkinson\'s disease detection using voice measurements.',
      tags: ['Python', 'Machine Learning', 'scikit-learn'],
      github: 'https://github.com/VRTejas/Parkinsons-Disease-Detection',
      demo: 'https://www.kaggle.com/datasets/vikasukani/parkinsons-disease-data-set',
      gradient: 'from-green-500/20 to-teal-500/20',
      iconBg: 'bg-green-500/20',
      icon: <SiPython size={24} className="text-green-300" />,
    },
    {
      name: 'VoteChain',
      title: 'Blockchain Voting System',
      description: 'Decentralized voting system with secure smart contracts, voter authentication, and real-time vote tracking.',
      tags: ['Solidity', 'Ethereum', 'React', 'Truffle'],
      github: 'https://github.com/VRTejas/Blockchain-Voting-System',
      demo: 'https://ethereum.org/en/dapps/',
      gradient: 'from-orange-500/20 to-red-500/20',
      iconBg: 'bg-orange-500/20',
      icon: <SiEthereum size={24} className="text-orange-300" />,
    },    
    {
      name: 'ForecastPro',
      title: 'Time Series Forecasting System',
      description: 'Advanced forecasting system using ensemble methods and macroeconomic indicators with outlier detection and predictive analytics.',
      tags: ['Python', 'Machine Learning', 'Data Science'],
      github: 'https://github.com/VRTejas/Time-Series-Forecasting',
      demo: 'https://plotly.com/python/time-series/',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconBg: 'bg-blue-500/20',
      icon: <SiPython size={24} className="text-blue-300" />,
    },
    {
      name: 'ReportMaster',
      title: 'Smart Report Management System',
      description: 'Automated school report card system with PDF generation, Excel import, and responsive UI built with modern React patterns.',
      tags: ['Next.js', 'React', 'JavaScript'],
      github: 'https://github.com/VRTejas/School-Report-Management',
      demo: 'https://nextjs.org/showcase',
      gradient: 'from-indigo-500/20 to-purple-500/20',
      iconBg: 'bg-indigo-500/20',
      icon: <SiNextdotjs size={24} className="text-indigo-300" />,
    },
    {
      name: 'MuscleMatrix',
      title: 'Fitness Management System',
      description: 'Comprehensive workout tracking platform with MySQL integration for routine management and progress monitoring.',
      tags: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      github: 'https://github.com/VRTejas/Fitness-Management-System',
      demo: 'https://www.myfitnesspal.com',
      gradient: 'from-yellow-500/20 to-amber-500/20',
      iconBg: 'bg-yellow-500/20',
      icon: <SiMysql size={24} className="text-yellow-300" />,
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
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
                      aria-label="View code"
                    >
                      <FiGithub size={16} />
                    </a>
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
            <FiGithub />
            <span>Visit My GitHub</span>
            <FiExternalLink size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 