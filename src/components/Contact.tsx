import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GithubIcon, TwitterIcon } from 'lucide-react'

const contactInfo = [
  {
    icon: MailIcon,
    label: 'Email',
    value: 'krish.kumar@example.com',
    href: 'mailto:krish.kumar@example.com'
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '+91 99999 99999',
    href: 'tel:+919999999999'
  },
  {
    icon: MapPinIcon,
    label: 'Location',
    value: 'Phagwara, Punjab, India',
    href: '#'
  }
]

const socialLinks = [
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: '#',
    color: 'hover:text-blue-500'
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: '#',
    color: 'hover:text-gray-400'
  },
  {
    icon: TwitterIcon,
    label: 'Twitter',
    href: '#',
    color: 'hover:text-blue-400'
  },
  {
    icon: MailIcon,
    label: 'Email',
    href: 'mailto:krish.kumar@example.com',
    color: 'hover:text-primary'
  }
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 relative">
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
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate? Let's build something amazing together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-heading font-semibold mb-6 gradient-text">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="glass border-glass-border focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="glass border-glass-border focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="glass border-glass-border focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      className="glass border-glass-border focus:border-primary resize-none"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full group"
                  >
                    Send Message
                    <MailIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-heading font-semibold mb-6 gradient-text">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {item.label}
                        </div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-xl font-heading font-semibold mb-6">
                  Follow Me
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`flex items-center space-x-3 p-4 rounded-lg glass-light hover:bg-white/10 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass p-8 rounded-2xl text-center"
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success/20 text-success rounded-full text-sm font-medium mb-4">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span>Available for new opportunities</span>
                </div>
                
                <p className="text-muted-foreground">
                  I'm currently open to full-time positions, freelance projects, 
                  and exciting collaborations. Let's create something amazing together!
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Ready to start a project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you have a specific idea or just want to explore possibilities, 
                I'm here to help bring your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="hero"
                  size="lg"
                  asChild
                >
                  <a href="mailto:krish.kumar@example.com">
                    Start a Conversation
                  </a>
                </Button>
                <Button
                  variant="cyber"
                  size="lg"
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Back to Top
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-secondary rounded-full blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-primary rounded-full blur-2xl opacity-10 animate-float-delayed"></div>
    </section>
  )
}