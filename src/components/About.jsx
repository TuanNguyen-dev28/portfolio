import { motion } from 'framer-motion';
import { Target, BookOpen, Lightbulb, Heart, User } from 'lucide-react';
import { aboutContent } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0f172a] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366f1]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{aboutContent.title}</h2>
          <p className="section-subtitle mx-auto">{aboutContent.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Profile Card */}
            <div className="glass-card p-8 mb-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#6366f1]/10 rounded-xl">
                  <User className="w-8 h-8 text-[#6366f1]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Who I Am</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {aboutContent.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Career Objective */}
            <div className="glass-card p-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#8b5cf6]/10 rounded-xl">
                  <Target className="w-8 h-8 text-[#8b5cf6]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Career Objective</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {aboutContent.careerObjective}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Interests */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-[#06b6d4]" />
                <h3 className="text-lg font-semibold text-white">What I'm Passionate About</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {aboutContent.interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-[#334155]/50 rounded-full text-gray-300 text-sm border border-[#475569]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-[#6366f1]" />
                <h3 className="text-lg font-semibold text-white">Currently Learning</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {aboutContent.currentlyLearning.map((item, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-[#6366f1]/10 rounded-full text-[#6366f1] text-sm border border-[#6366f1]/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects I Enjoy */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                <h3 className="text-lg font-semibold text-white">Projects I Enjoy Building</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {aboutContent.projectsEnjoy.map((item, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-[#06b6d4]/10 rounded-full text-[#06b6d4] text-sm border border-[#06b6d4]/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
