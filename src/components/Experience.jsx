import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, BookOpen, Clock } from 'lucide-react';
import { experienceContent, educationContent } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#1e293b] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-transparent to-[#0f172a]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">{experienceContent.title}</h2>
          </div>
          <p className="section-subtitle">{experienceContent.subtitle}</p>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#334155] transform md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {experienceContent.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 md:text-right">
                    <div className="glass-card p-6 inline-block hover:border-[#6366f1]/30 transition-colors">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#6366f1]/10 rounded-full text-[#6366f1] text-xs mb-3">
                        <Clock size={12} />
                        {item.duration}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400 mb-3">{item.company}</p>
                      <p className="text-gray-500 text-sm mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2 justify-end">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-[#334155]/50 rounded-full text-gray-300 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-[#6366f1] rounded-full transform -translate-x-1/2 border-4 border-[#1e293b]" />

                  {/* Empty Space for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-[#06b6d4] to-[#6366f1] rounded-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">{educationContent.title}</h2>
          </div>
          <p className="section-subtitle">{educationContent.subtitle}</p>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {educationContent.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 hover:border-[#6366f1]/30 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[#06b6d4]/10 rounded-lg">
                    <BookOpen className="w-6 h-6 text-[#06b6d4]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{item.school}</h3>
                    <p className="text-[#6366f1] font-medium">{item.degree}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {item.duration}
                  </span>
                  {item.gpa && (
                    <span className="px-3 py-1 bg-[#6366f1]/10 rounded-full text-[#6366f1]">
                      GPA: {item.gpa}
                    </span>
                  )}
                </div>

                <div className="border-t border-[#334155] pt-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Relevant Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relevantCourses.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 bg-[#334155]/50 rounded-full text-gray-400 text-xs"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
