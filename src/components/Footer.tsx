import React from 'react'
import { motion } from 'framer-motion'
import { HeartIcon, ArrowUpIcon } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            {/* Branding */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="text-2xl font-heading font-bold gradient-text">
                Krish Kumar
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Full-Stack Developer & AI Enthusiast building innovative solutions 
                for the future.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="font-heading font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <button
                    key={link.name}
                    onClick={() => document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="font-heading font-semibold">Get in Touch</h4>
              <div className="space-y-2">
                <a
                  href="mailto:krish.kumar@example.com"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  krish.kumar@example.com
                </a>
                <a
                  href="tel:+919999999999"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  +91 99999 99999
                </a>
                <span className="block text-muted-foreground">
                  Phagwara, Punjab, India
                </span>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 my-8"></div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© {currentYear} Krish Kumar. Made with</span>
              <HeartIcon className="h-4 w-4 text-primary animate-pulse" />
              <span>and lots of code.</span>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <span>Back to top</span>
              <ArrowUpIcon className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Tech Stack Credits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 pt-8 border-t border-border/30 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript, Tailwind CSS, Framer Motion & Three.js
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      <div className="absolute top-0 right-20 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-5"></div>
    </footer>
  )
}