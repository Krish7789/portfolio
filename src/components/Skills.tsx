import React from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
      { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-800' },
      { name: 'JavaScript', level: 80, color: 'from-gray-600 to-white' },
      { name: 'Tailwind CSS', level: 95, color: 'from-teal-400 to-blue-500' },
      { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' }
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85, color: 'from-green-500 to-green-700' },
      { name: 'Python', level: 70, color: 'from-yellow-400 to-yellow-600' },
      { name: 'Express.js', level: 60, color: 'from-gray-600 to-white' },
      { name: 'REST APIs', level: 90, color: 'from-purple-500 to-purple-700' },
      { name: 'GraphQL', level: 60, color: 'from-pink-500 to-rose-500' }
    ]
  },
  {
    title: 'Database & Cloud',
    skills: [
      { name: 'MongoDB', level: 60, color: 'from-green-600 to-green-800' },
      { name: 'MySQL', level: 80, color: 'from-blue-700 to-indigo-700' },
      { name: 'AWS', level: 75, color: 'from-orange-400 to-orange-600' },
      { name: 'Firebase', level: 85, color: 'from-yellow-500 to-orange-500' }
    ]
  },
  {
    title: 'AI & Data Science',
    skills: [
      { name: 'Machine Learning', level: 80, color: 'from-purple-600 to-purple-800' },
      { name: 'Data Analysis', level: 85, color: 'from-indigo-500 to-purple-600' },
      { name: 'Pandas', level: 80, color: 'from-blue-400 to-blue-600' },
      { name: 'Jupyter', level: 85, color: 'from-orange-400 to-orange-600' }
    ]
  }
]

const tools = [
  'VS Code', 'Git', 'GitHub', 'Figma', 'Postman', 
  'Slack', 'Notion', 'Terminal', 'Chrome DevTools', 'Vercel'
]

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass p-8 rounded-2xl hover-lift"
              >
                <h3 className="text-2xl font-heading font-semibold mb-6 gradient-text">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.1 
                      }}
                    >
                      {/* Skill Name and Level */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3,
                            ease: 'easeOut'
                          }}
                        />
                        
                        {/* Glow Effect */}
                        <motion.div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full blur-sm opacity-50`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3,
                            ease: 'easeOut'
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-heading font-semibold mb-6 text-center gradient-text">
              Tools & Technologies
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.05,
                    type: 'spring',
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-muted to-muted/50 rounded-full border border-border hover:border-primary/50 transition-all duration-300 cursor-default"
                >
                  <span className="text-sm font-medium text-foreground">
                    {tool}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Level Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
              <h4 className="text-xl font-heading font-semibold mb-4">
                Experience Level
              </h4>
              <p className="text-muted-foreground mb-6">
                Continuously learning and growing with hands-on project experience
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                {[
                  { level: 'Beginner', range: '60-70%', color: 'from-yellow-400 to-orange-500' },
                  { level: 'Intermediate', range: '70-85%', color: 'from-blue-500 to-purple-500' },
                  { level: 'Advanced', range: '85-95%', color: 'from-green-500 to-emerald-500' }
                ].map((level, index) => (
                  <div key={level.level} className="text-center">
                    <div className={`w-4 h-4 bg-gradient-to-r ${level.color} rounded-full mx-auto mb-2`}></div>
                    <div className="text-sm font-medium">{level.level}</div>
                    <div className="text-xs text-muted-foreground">{level.range}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-32 left-10 w-40 h-40 bg-gradient-secondary rounded-full blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-32 right-10 w-32 h-32 bg-gradient-primary rounded-full blur-2xl opacity-10 animate-float-delayed"></div>
    </section>
  )
}