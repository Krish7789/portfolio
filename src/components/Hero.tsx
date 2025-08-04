import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'

const roles = [
  'Full-Stack Developer',
  'AI Enthusiast', 
  'Cloud Technology Explorer',
  'Data Analyst',
  'CSE Graduate'
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8"
            >
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground font-mono"
              >
                Hello Geeks... 👋
              </motion.p>

              {/* Main Heading */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-7xl font-heading font-bold leading-tight"
                >
                  I am{' '}
                  <span className="gradient-text">
                    Krish Kumar
                  </span>
                </motion.h1>

                {/* Animated Role */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="h-20 flex items-center"
                >
                  <motion.h2
                    key={currentRole}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl font-heading text-primary font-semibold"
                  >
                    {roles[currentRole]}
                  </motion.h2>
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-lg"
              >
                Building innovative and scalable applications that solve real-world problems through technology. 
                Passionate about creating solutions that make a meaningful impact.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  variant="hero"
                  size="xl"
                  className="group"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                  <ArrowDownIcon className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </Button>
                
                <Button
                  variant="cyber"
                  size="xl"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Connect
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex space-x-4 pt-4"
              >
                {[
                  { icon: GithubIcon, href: '#', label: 'GitHub' },
                  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
                  { icon: MailIcon, href: '#', label: 'Email' }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-3 rounded-lg glass hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - 3D Avatar/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="relative flex justify-center"
             
            >
              {/* Floating Elements */}
              <div className="relative">
                {/* Main Avatar Container */}
                <motion.div
                  className="relative w-80 h-80 lg:w-96 lg:h-96"
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0] 
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: 'easeInOut' 
                  }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse-glow"></div>
                  
                  {/* Avatar Background */}
                  <div className="relative w-full h-full rounded-full bg-gradient-primary p-1">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-8xl font-bold gradient-text">
                      <img src=''></img>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Tech Icons */}
                {[
                  { name: 'React', position: 'top-4 right-4', delay: 0 },
                  { name: 'AI', position: 'bottom-8 left-4', delay: 0.2 },
                  { name: 'Cloud', position: 'top-1/2 -right-8', delay: 0.4 },
                  { name: 'Data', position: 'bottom-4 -left-8', delay: 0.6 }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className={`absolute ${tech.position} glass p-3 rounded-lg`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 1 + tech.delay, 
                      duration: 0.5,
                      type: 'spring' 
                    }}
                  >
                    <span className="text-sm font-mono text-primary font-semibold">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm text-muted-foreground font-mono">Scroll Down</span>
          <ArrowDownIcon className="h-5 w-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}