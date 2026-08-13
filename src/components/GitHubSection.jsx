import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLinkIcon, Calendar, Loader2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { GITHUB_USERNAME } from '../data/projects';

export default function GitHubSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      if (GITHUB_USERNAME === "YOUR_GITHUB_USERNAME") {
        setLoading(false);
        setError("Please update GITHUB_USERNAME in projects.js");
        return;
      }

      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!userResponse.ok) throw new Error('User not found');
        const userData = await userResponse.json();
        setUserData(userData);

        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        );
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  const getLanguageColor = (language) => {
    const colors = {
      Java: '#b07219',
      JavaScript: '#f1e05a',
      TypeScript: '#3178c6',
      Python: '#3572A5',
      HTML: '#e34c26',
      CSS: '#563d7c',
      Shell: '#89e051',
      Go: '#00ADD8',
      Rust: '#dea584',
      'C#': '#178600',
    };
    return colors[language] || '#8b949e';
  };

  if (loading) {
    return (
      <section id="github" className="py-20 bg-[#1e293b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 text-[#6366f1] animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  if (error && GITHUB_USERNAME === "YOUR_GITHUB_USERNAME") {
    return null;
  }

  return (
    <section id="github" className="py-20 bg-[#1e293b] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-transparent to-[#0f172a]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">GitHub Projects</h2>
          <p className="section-subtitle mx-auto">Check out my latest repositories and open source contributions</p>
        </motion.div>

        {/* User Stats */}
        {userData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 mb-12 flex flex-wrap items-center justify-center gap-8"
          >
            <div className="flex items-center gap-3">
              <img 
                src={userData.avatar_url} 
                alt={userData.login}
                className="w-16 h-16 rounded-full border-2 border-[#6366f1]"
              />
              <div>
                <h3 className="text-white font-semibold">{userData.name || userData.login}</h3>
                <a 
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-[#6366f1] transition-colors flex items-center gap-1"
                >
                  @{userData.login}
                  <ExternalLinkIcon size={12} />
                </a>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{userData.public_repos}</p>
                <p className="text-gray-500 text-sm">Repositories</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{userData.followers}</p>
                <p className="text-gray-500 text-sm">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{userData.following}</p>
                <p className="text-gray-500 text-sm">Following</p>
              </div>
            </div>

            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <GithubIcon size={18} />
              View Profile
            </a>
          </motion.div>
        )}

        {/* Error Message */}
        {error && (
          <div className="text-center py-12 glass-card">
            <p className="text-gray-400">{error}</p>
            <p className="text-gray-500 text-sm mt-2">Please check your GitHub username configuration.</p>
          </div>
        )}

        {/* Repositories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover:border-[#6366f1]/30 transition-all duration-300 group block"
            >
              {/* Repo Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <GithubIcon size={18} className="text-gray-400" />
                  <h3 className="text-white font-semibold group-hover:text-[#6366f1] transition-colors truncate max-w-[200px]">
                    {repo.name}
                  </h3>
                </div>
                <ExternalLinkIcon size={16} className="text-gray-500 group-hover:text-[#6366f1] transition-colors flex-shrink-0" />
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-[40px]">
                {repo.description || 'No description provided'}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: getLanguageColor(repo.language) }}
                    />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-500" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={14} />
                  {repo.forks_count}
                </span>
                <span className="flex items-center gap-1 ml-auto">
                  <Calendar size={12} />
                  {formatDate(repo.updated_at)}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All */}
        {userData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <GithubIcon size={18} />
              View All Repositories
              <ExternalLinkIcon size={14} />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
