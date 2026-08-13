import { motion } from 'framer-motion';
import { Server, Layout, Database, Wrench, Code, Cpu } from 'lucide-react';
import { skillsContent } from '../data/portfolio';

const iconMap = {
  Server: Server,
  Layout: Layout,
  Database: Database,
  Wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#1e293b] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-transparent to-[#0f172a]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{skillsContent.title}</h2>
          <p className="section-subtitle mx-auto">{skillsContent.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsContent.categories).map(([key, category], categoryIndex) => {
            const Icon = iconMap[category.icon] || Code;
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass-card p-6 hover:border-[#6366f1]/30 transition-colors duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>

                {/* Skills Grid */}
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-200 font-medium group-hover:text-[#6366f1] transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500">{skill.level}</span>
                      </div>
                      <p className="text-gray-500 text-sm">{skill.desc}</p>
                      <div className="mt-2 h-1 bg-[#334155] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                          className="h-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full"
                          style={{
                            width: skill.level === 'Experienced' ? '85%' : 
                                   skill.level === 'Intermediate' ? '65%' : '45%'
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 glass-card p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-6 h-6 text-[#06b6d4]" />
            <h3 className="text-lg font-semibold text-white">Other Technologies</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              'REST API Design',
              'Git Version Control',
              'Agile/Scrum',
              'Problem Solving',
              'Clean Code',
              'Data Structures',
              'Algorithms',
              'Design Patterns',
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#334155]/50 rounded-lg text-gray-300 text-sm border border-[#475569] hover:border-[#06b6d4]/50 hover:text-[#06b6d4] transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
