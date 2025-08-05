import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ResumeKrish from '../assets/Resume Krish.pdf'
import {
  GraduationCapIcon,
  CodeIcon,
  BrainIcon,
  CloudIcon,
} from "lucide-react";

const stats = [
  { number: "20+", label: "Projects Completed" },
  { number: "5+", label: "Technologies Mastered" },
  { number: "100%", label: "Commitment Level" },
  { number: "24/7", label: "Learning Mode" },
];

const highlights = [
  {
    icon: GraduationCapIcon,
    title: "Education",
    description:
      "B.Tech in Computer Science & Engineering from Lovely Professional University, Phagwara",
  },
  {
    icon: CodeIcon,
    title: "Development",
    description:
      "Full-stack development with modern frameworks and technologies",
  },
  {
    icon: BrainIcon,
    title: "AI & ML",
    description:
      "Passionate about artificial intelligence and machine learning applications",
  },
  {
    icon: CloudIcon,
    title: "Cloud Computing",
    description: "Experience with cloud platforms and scalable architecture",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 relative">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about building innovative solutions that make a
              real-world difference
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-heading font-semibold mb-4 gradient-text">
                  Hi, I'm Krish Kumar
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A passionate Computer Science student from Lovely Professional
                  University, Phagwara, specializing in cutting-edge
                  technologies. I'm deeply committed to building innovative and
                  scalable applications that solve real-world problems through
                  technology.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With a strong analytical mindset and a love for clean,
                  efficient code, I strive to create solutions that make a
                  meaningful impact. Currently pursuing my B.Tech in Computer
                  Science & Engineering while constantly honing my skills in
                  emerging technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm driven by curiosity, innovation, and a desire to build
                  solutions that make a real-world difference. Always eager to
                  learn new technologies and contribute to impactful projects.
                </p>

                <div className="mt-8 flex gap-4">
  <a href={ResumeKrish} download>
    <Button variant="hero" size="lg">
      Download Resume
    </Button>
  </a>

  <Button variant="cyber" size="lg">
    View Projects
  </Button>
</div>
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass p-6 rounded-xl text-center hover-lift"
                  >
                    <div className="text-3xl font-heading font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Specializations */}
              <div className="space-y-4">
                <h4 className="text-xl font-heading font-semibold">
                  Specializations
                </h4>
                <div className="space-y-3">
                  {[
                    "Full-Stack Development",
                    "Artificial Intelligence",
                    "Cloud Computing",
                    "Data Analysis",
                  ].map((spec, index) => (
                    <motion.div
                      key={spec}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3 glass p-4 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{spec}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-xl hover-lift group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-heading font-semibold mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-secondary rounded-full blur-2xl opacity-10 animate-float-delayed"></div>
    </section>
  );
}
