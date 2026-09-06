import { GithubIcon, LinkedinIcon } from './Icons';
import { Mail, Heart, Code2 } from 'lucide-react';
import { footerContent, personalInfo } from '../data/portfolio';

export default function Footer() {
  const githubUrl = personalInfo.github !== "[YOUR GITHUB USERNAME]"
    ? `https://github.com/${personalInfo.github}`
    : "#";

  const linkedinUrl = personalInfo.linkedin !== "[YOUR LINKEDIN USERNAME]"
    ? `https://linkedin.com/in/${personalInfo.linkedin}`
    : "#";

  const emailUrl = personalInfo.email !== "[YOUR EMAIL]"
    ? `mailto:${personalInfo.email}`
    : "#";

  return (
    <footer className="bg-[#0f172a] border-t border-[#1e293b] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex items-center gap-2 mb-2">
              <span className="text-xl font-bold bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">&lt;</span>
              <span className="text-xl font-bold text-white">Dev</span>
              <span className="text-xl font-bold bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">/&gt;</span>
            </a>
            <p className="text-gray-500 text-sm">
              {footerContent.copyright}
            </p>
            <p className="text-gray-600 text-xs flex items-center gap-1 mt-1">
              {footerContent.tagline} <Heart size={12} className="text-red-500" />
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1e293b] rounded-lg text-gray-400 hover:text-white hover:bg-[#334155] transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1e293b] rounded-lg text-gray-400 hover:text-white hover:bg-[#334155] transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={emailUrl}
              className="p-3 bg-[#1e293b] rounded-lg text-gray-400 hover:text-white hover:bg-[#334155] transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Built with */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Built with</span>
            <Code2 size={16} className="text-[#6366f1]" />
            <span>&</span>
            <Heart size={14} className="text-red-500" />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-[#1e293b] text-center">
          <p className="text-gray-600 text-xs">
            Designed & Developed with passion | React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
