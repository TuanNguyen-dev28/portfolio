import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, User, Brain, Network, Globe } from 'lucide-react';
import { GithubIcon, ExternalLinkIcon, ArrowRightIcon, FolderIcon } from './Icons';
import { projectsContent } from '../data/portfolio';
import { featuredProjects, GITHUB_USERNAME } from '../data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'Tất Cả Dự Án', count: featuredProjects.length },
    { id: 'AI & Machine Learning', label: 'AI & Machine Learning', count: featuredProjects.filter(p => p.category === 'AI & Machine Learning').length },
    { id: 'Microservices & Blockchain', label: 'Microservices & Blockchain', count: featuredProjects.filter(p => p.category === 'Microservices & Blockchain').length },
    { id: 'Full-Stack & Systems', label: 'Full-Stack & Hệ Thống', count: featuredProjects.filter(p => p.category === 'Full-Stack & Systems').length },
  ];

  const filteredProjects = activeCategory === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === activeCategory);

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'AI & Machine Learning':
        return <Brain size={14} className="text-emerald-400" />;
      case 'Microservices & Blockchain':
        return <Network size={14} className="text-purple-400" />;
      default:
        return <Globe size={14} className="text-sky-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#0f172a] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b] via-[#6366f1]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="section-title">{projectsContent.title}</h2>
          <p className="section-subtitle mx-auto">{projectsContent.subtitle}</p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 border ${
                activeCategory === cat.id
                  ? 'bg-[#6366f1] text-white border-[#6366f1] shadow-lg shadow-[#6366f1]/25'
                  : 'bg-[#1e293b]/80 text-gray-400 border-[#334155] hover:border-gray-500 hover:text-white'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-[#334155] text-gray-400'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group glass-card overflow-hidden hover:border-[#6366f1]/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Info Banner */}
                <div>
                  <div className="relative h-44 bg-gradient-to-br from-[#1e293b] via-[#334155]/60 to-[#0f172a] overflow-hidden p-6 flex flex-col justify-between">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                      <FolderIcon size={96} className="text-[#6366f1] group-hover:scale-110 transition-transform duration-500" />
                    </div>

                    <div className="flex items-center justify-between relative z-10 gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#0f172a]/80 backdrop-blur-md border border-[#334155] text-gray-300">
                        {getCategoryIcon(project.category)}
                        {project.category}
                      </span>

                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${
                        project.projectType === 'Team Project'
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                          : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
                      }`}>
                        {project.projectType === 'Team Project' ? <Users size={13} /> : <User size={13} />}
                        {project.projectType}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#6366f1] transition-colors">
                        {project.name}
                      </h3>
                      {project.collaborators && project.collaborators.length > 0 && (
                        <p className="text-xs text-amber-300/80 mt-1 flex items-center gap-1">
                          <span>Team:</span>
                          {project.collaborators.map((c, i) => (
                            <span key={i} className="underline decoration-amber-500/40">
                              @{c.name}
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <p className="text-gray-300 text-sm mb-5 leading-relaxed line-clamp-3">
                      {project.shortDesc}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-[#334155]/60 rounded-md text-gray-300 text-xs border border-[#475569]/60 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2.5 py-1 bg-[#334155]/40 rounded-md text-gray-400 text-xs border border-[#475569]/40 font-mono">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 pt-0 mt-auto flex items-center justify-between border-t border-[#334155]/50 pt-4">
                  <Link
                    to={`/projects/${project.id}`}
                    className="flex items-center gap-1.5 text-[#6366f1] hover:text-[#818cf8] transition-colors text-sm font-semibold"
                  >
                    Chi tiết dự án
                    <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm font-medium bg-[#1e293b] px-3 py-1.5 rounded-lg border border-[#334155]"
                    >
                      <GithubIcon size={16} />
                      Source Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm font-medium bg-[#1e293b] px-3 py-1.5 rounded-lg border border-[#334155]"
                      >
                        <ExternalLinkIcon size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 text-base px-6 py-3"
          >
            <GithubIcon size={20} />
            Xem Tất Cả Kho Lưu Trữ Trên GitHub (@{GITHUB_USERNAME})
            <ExternalLinkIcon size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
