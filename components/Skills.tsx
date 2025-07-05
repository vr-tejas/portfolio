'use client';

import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJava
} from 'react-icons/fa';
import { 
  SiJavascript, SiNextdotjs, SiTailwindcss, 
  SiMongodb, SiMysql, SiExpress, SiTensorflow, SiSolidity
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    // Row 1 - Frontend & Core
    { name: 'React', icon: <FaReact className="text-foreground" size={36} /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-foreground" size={36} /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-foreground" size={36} /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-foreground" size={36} /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-foreground" size={36} /> },
    { name: 'Express', icon: <SiExpress className="text-foreground" size={36} /> },
    
    // Row 2 - Backend & Data
    { name: 'Python', icon: <FaPython className="text-foreground" size={36} /> },
    { name: 'Java', icon: <FaJava className="text-foreground" size={36} /> },
    { name: 'Solidity', icon: <SiSolidity className="text-foreground" size={36} /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-foreground" size={36} /> },
    { name: 'MySQL', icon: <SiMysql className="text-foreground" size={36} /> },
    { name: 'TensorFlow', icon: <SiTensorflow className="text-foreground" size={36} /> },
  ];

  const stats = [
    { number: "3+", label: "Years of Learning", description: "Continuous journey in programming" },
    { number: "15+", label: "Projects Built", description: "From web apps to blockchain solutions" },
    { number: "25+", label: "Technologies", description: "Diverse tech stack mastery" },
    { number: "100+", label: "Commits", description: "Code contributions and improvements" },
  ];
  
  return (
    <section id="about" className="relative section-padding bg-background">
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
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-muted text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            I work with modern technologies to build scalable, efficient, and user-friendly applications.
          </p>
        </motion.div>

        {/* Skills Grid - Two Rows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mb-8">
            {skills.slice(0, 6).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 300
                }}
                className="group flex flex-col items-center p-6 rounded-2xl bg-secondary/30 border border-white/10 hover:border-white/30 hover:bg-secondary/50 transition-all duration-300 cursor-default"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center">
            {skills.slice(6, 12).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.3 + index * 0.05,
                  type: "spring",
                  stiffness: 300
                }}
                className="group flex flex-col items-center p-6 rounded-2xl bg-secondary/30 border border-white/10 hover:border-white/30 hover:bg-secondary/50 transition-all duration-300 cursor-default"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-2xl blur-xl"></div>
          
          <div className="relative bg-secondary/20 border border-white/10 rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center space-y-2"
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-foreground font-semibold text-sm sm:text-base">
                    {stat.label}
                  </div>
                  <div className="text-muted text-xs sm:text-sm leading-relaxed">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Skills; 