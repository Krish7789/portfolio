import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon } from "lucide-react";
import smartLearn from "../assets/smartLearn.jpg";
import honey from '../assets/honey.png'
import shop from '../assets/shop.png'
import dashboard from '../assets/dashboard.png'

const projects = [
  {
    id: 1,
    title: "SmartLearnHub",
    description:
      "SmartLearn Hub is an AI-driven tech-learning platform that offers personalized roadmaps, mock interviews, and resume optimization",
    image: smartLearn,
    tags: ["React", "Python", "AI/ML"],
    github: "https://github.com/Krish7789/Smart-Learn-Hub",
    live: "https://college--buddy34.streamlit.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Organic Honey",
    description:
      "A sleek and responsive product website for selling organic honey. Built with React and Tailwind CSS, focused on clean UI and smooth user experience.",
    image: honey,
    tags: ['React','JavaScript','TypeScript','Tailwind CSS', 'Vite', 'Vercel'],
    github: "https://github.com/Krish7789/honeySite",
    live: "https://krish-honey-site.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "KrishShop is a sleek and responsive frontend for an e-commerce platform, built using React, Tailwind CSS, and Redux Toolkit",
    image: shop,
    tags: ["React","JavaScript", "TailwindCSS", "Redux Toolkit"],
    github: "https://github.com/Krish7789/myshopapp",
    live: "https://krishshopapp.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "Data Visualization Tool",
    description:
      "The Coffee Chain Dashboard is a dynamic data visualization tool that showcases sales performance of various coffee and tea products.",
    image: dashboard,
    tags: ["MatPlot", "PowerBI", "Tableau"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Top Courses Website",
    description:
      "Secure mobile banking application with biometric authentication and transaction tracking.",
    image: "/placeholder.svg",
    tags: ["React", "HTML","CSS3","JavaScript"],
    github: "https://github.com/Krish7789/courseswebsite",
    live: "https://krishcourseswebsite.vercel.app/",
    featured: false,
  },
  {
    id: 6,
    title: "Machine Learning Model",
    description:
      "Predictive model for market analysis using advanced machine learning algorithms.",
    image: "/placeholder.svg",
    tags: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    github: "#",
    live: "#",
    featured: false,
  },
];

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions and scalable applications
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="glass p-6 rounded-2xl hover-lift h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-xl mb-6 h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button
                        size="lg"
                        variant="glass"
                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform"
                        asChild
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLinkIcon className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        size="lg"
                        variant="glass"
                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GithubIcon className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-muted rounded-full border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4 pt-2">
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon className="h-5 w-5" />
                      </a>
                      <a
                        href={project.live}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLinkIcon className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-heading font-semibold mb-8 text-center">
              Other Projects
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass p-6 rounded-xl hover-lift group"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <div className="flex space-x-2">
                        <a
                          href={project.github}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GithubIcon className="h-4 w-4" />
                        </a>
                        <a
                          href={project.live}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLinkIcon className="h-4 w-4" />
                        </a>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-muted rounded-md border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Want to see more?
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub for more projects and contributions to the
                open-source community.
              </p>
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="https://github.com/Krish7789" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="h-5 w-5 mr-2" />
                  View All Projects
                  <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-secondary rounded-full blur-2xl opacity-10 animate-float-delayed"></div>
    </section>
  );
}
