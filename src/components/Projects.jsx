import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GithubIcon, ExternalLinkIcon, ArrowRightIcon, FolderIcon } from './Icons';
import { projectsContent } from '../data/portfolio';
import { featuredProjects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0f172a] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b] via-[#6366f1]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{projectsContent.title}</h2>
          <p className="section-subtitle mx-auto">{projectsContent.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card overflow-hidden hover:border-[#6366f1]/30 transition-all duration-300"
            >
              {/* Project Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-[#334155] to-[#1e293b] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FolderIcon size={64} className="text-[#6366f1]/20 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#6366f1] transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.shortDesc}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#334155]/50 rounded-full text-gray-300 text-xs border border-[#475569]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-[#334155]/50 rounded-full text-gray-400 text-xs border border-[#475569]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <Link
                    to={`/projects/${project.id}`}
                    className="flex items-center gap-2 text-[#6366f1] hover:text-[#6366f1]/80 transition-colors text-sm font-medium"
                  >
                    View Details
                <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    <GithubIcon size={16} />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                    >
                      <ExternalLinkIcon size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <GithubIcon size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
