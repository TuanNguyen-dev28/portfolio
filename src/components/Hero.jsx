import { motion } from 'framer-motion';
import { GithubIcon, DownloadIcon, FolderOpenIcon, Code2Icon } from './Icons';
import { personalInfo, heroContent } from '../data/portfolio';

export default function Hero() {
  const githubUrl = personalInfo.github !== "[YOUR GITHUB USERNAME]" 
    ? `https://github.com/${personalInfo.github}` 
    : "#";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366f1]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#06b6d4]/5 rounded-full blur-3xl" />
        
        {/* Code Snippets Background */}
        <div className="absolute top-40 right-20 opacity-5 font-mono text-sm hidden lg:block">
          <pre>{`const developer = {
  name: "${personalInfo.name}",
  role: "Backend Developer",
  skills: ["Java", "Spring Boot", "React"],
  experience: 2
};`}</pre>
        </div>
        <div className="absolute bottom-40 left-20 opacity-5 font-mono text-sm hidden lg:block">
          <pre>{`function buildAwesome() {
  while(alive) {
    code();
    learn();
    improve();
  }
}`}</pre>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.p 
              variants={itemVariants}
              className="text-[#6366f1] font-medium mb-4 flex items-center gap-2"
            >
              <span className="w-12 h-[2px] bg-[#6366f1]" />
              {heroContent.greeting}
            </motion.p>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-xl sm:text-2xl font-medium bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent mb-6"
            >
              {personalInfo.title}
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl"
            >
              {heroContent.subtitle}
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary flex items-center gap-2"
              >
                <FolderOpenIcon size={18} />
                {heroContent.cta.viewProjects}
              </a>
              <a 
                href={personalInfo.cv}
                className="btn-secondary flex items-center gap-2"
              >
                <DownloadIcon size={18} />
                {heroContent.cta.downloadCv}
              </a>
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <GithubIcon size={18} />
                {heroContent.cta.github}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-8 mt-12 pt-8 border-t border-[#334155]"
            >
              <div>
                <p className="text-2xl font-bold text-white">2+</p>
                <p className="text-gray-500 text-sm">Years Learning</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">4+</p>
                <p className="text-gray-500 text-sm">Projects Built</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-gray-500 text-sm">Technologies</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Avatar/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full blur-3xl opacity-20 animate-pulse" />
              
              {/* Avatar Circle */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-2 border-[#334155] overflow-hidden group">
                  {personalInfo.avatar && (
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-[center_20%] relative z-10 transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                  {/* Fallback Icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#334155] to-[#1e293b]">
                    <Code2Icon size={80} className="text-[#6366f1]/50" />
                  </div>
                </div>
                
                {/* Decorative Rings */}
                <div className="absolute inset-0 border-2 border-dashed border-[#6366f1]/20 rounded-full animate-spin-slow" />
                <div className="absolute -inset-4 border border-[#8b5cf6]/10 rounded-full" />
                
                {/* Floating Icons */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-8 p-3 bg-[#1e293b] rounded-lg border border-[#334155] shadow-lg"
                >
                  <span className="text-2xl">☕</span>
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-8 left-4 p-3 bg-[#1e293b] rounded-lg border border-[#334155] shadow-lg"
                >
                  <span className="text-2xl">🐍</span>
                </motion.div>
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 -right-4 p-3 bg-[#1e293b] rounded-lg border border-[#334155] shadow-lg"
                >
                  <span className="text-2xl">⚛️</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-sm">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-[#6366f1] rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
