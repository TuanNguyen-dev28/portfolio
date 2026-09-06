import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, AlertCircle, Layers, ArrowDown } from 'lucide-react';
import { GithubIcon, ExternalLinkIcon } from '../components/Icons';
import { featuredProjects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = featuredProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <div className="text-center">
          <AlertCircle size={64} className="text-[#6366f1] mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Project Not Found</h1>
          <p className="text-gray-400 mb-6">The project you're looking for doesn't exist.</p>
          <Link to="/#projects" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0f172a]"
    >
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-[#1e293b] to-[#0f172a]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#6366f1]/20 via-transparent to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-6 left-6">
          <Link 
            to="/#projects" 
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors bg-[#1e293b]/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#334155]"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              {project.category && (
                <span className="px-3 py-1 bg-[#6366f1]/20 text-[#818cf8] text-xs font-semibold rounded-full border border-[#6366f1]/30">
                  {project.category}
                </span>
              )}
              {project.projectType && (
                <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                  project.projectType === 'Team Project'
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                }`}>
                  {project.projectType}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{project.name}</h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl">{project.shortDesc}</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <GithubIcon size={18} />
            View on GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <ExternalLinkIcon size={18} />
              Live Demo
            </a>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <div className="glass-card p-6">
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
            </motion.section>

            {/* Problem */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
              <div className="glass-card p-6">
                <p className="text-gray-300 leading-relaxed">{project.problem}</p>
              </div>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="glass-card p-4 flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#6366f1] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* My Contribution */}
            {project.myContribution && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">My Contribution</h2>
                <div className="glass-card p-6">
                  <p className="text-gray-300 leading-relaxed">{project.myContribution}</p>
                </div>
              </motion.section>
            )}

            {/* Challenges */}
            {project.challenges && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">Technical Challenges</h2>
                <div className="glass-card p-6">
                  <p className="text-gray-300 leading-relaxed">{project.challenges}</p>
                </div>
              </motion.section>
            )}

            {/* Architecture */}
            {project.architecture && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">Architecture</h2>
                <div className="glass-card p-6">
                  <div className="flex flex-col items-center gap-2 font-mono text-sm">
                    {project.architecture.split(' → ').map((layer, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <span className="px-4 py-2 bg-[#334155] text-[#6366f1] rounded-lg border border-[#6366f1]/20">
                          {layer}
                        </span>
                        {index < project.architecture.split(' → ').length - 1 && (
                          <ArrowDown size={20} className="text-gray-500" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Layers size={20} className="text-[#6366f1]" />
                <h3 className="text-lg font-semibold text-white">Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-[#6366f1]/10 text-[#6366f1] rounded-full text-sm border border-[#6366f1]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Project Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Domain</span>
                  <span className="text-gray-300 font-medium">{project.category || "Software Engineering"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Classification</span>
                  <span className="text-gray-300 font-medium">{project.projectType || "Project"}</span>
                </div>
                {project.collaborators && project.collaborators.length > 0 && (
                  <div className="pt-2 border-t border-[#334155]/60">
                    <span className="text-gray-500 block mb-2">Collaborators:</span>
                    <div className="space-y-1.5">
                      {project.collaborators.map((c, i) => (
                        <a
                          key={i}
                          href={c.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between text-xs p-2 rounded bg-[#334155]/40 text-amber-300 hover:bg-[#334155] transition-colors"
                        >
                          <span className="font-semibold">@{c.name}</span>
                          <span className="text-gray-400">{c.role}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex justify-between items-center pt-2 border-t border-[#334155]/60">
                  <span className="text-gray-500">Status</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Completed & Open Source
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-card p-6 space-y-3"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-[#334155]/50 rounded-lg text-gray-300 hover:text-white hover:bg-[#334155] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon size={18} />
                  GitHub Repository
                </span>
                <ExternalLinkIcon size={16} />
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#334155]/50 rounded-lg text-gray-300 hover:text-white hover:bg-[#334155] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <ExternalLinkIcon size={18} />
                    Live Demo
                  </span>
                  <ExternalLinkIcon size={16} />
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
