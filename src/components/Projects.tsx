import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Code, Database, Globe } from "lucide-react";

const projects = [
  {
    title: "E-Commerce REST API",
    description: "A comprehensive e-commerce backend built with Spring Boot, featuring user authentication, product management, order processing, and payment integration.",
    tech: ["Spring Boot", "MySQL", "JPA", "JWT", "REST API"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    liveUrl: "https://demo-ecommerce-api.vercel.app",
    codeUrl: "https://github.com/kaushikghosh/ecommerce-api",
    category: "Backend",
    icon: <Database className="w-5 h-5" />
  },
  {
    title: "Task Management App",
    description: "A full-stack productivity application with real-time updates, task categorization, deadline tracking, and collaborative features.",
    tech: ["React.js", "Spring Boot", "WebSocket", "PostgreSQL", "Tailwind"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    liveUrl: "https://taskflow-manager.vercel.app",
    codeUrl: "https://github.com/kaushikghosh/task-manager",
    category: "Full Stack",
    icon: <Code className="w-5 h-5" />
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics using external APIs.",
    tech: ["React.js", "OpenWeather API", "Chart.js", "Geolocation", "CSS3"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    liveUrl: "https://weather-insights.vercel.app",
    codeUrl: "https://github.com/kaushikghosh/weather-dashboard",
    category: "Frontend",
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: "Library Management System",
    description: "A complete library management solution with book inventory, member management, issue/return tracking, and fine calculation.",
    tech: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    liveUrl: "https://library-system-demo.vercel.app",
    codeUrl: "https://github.com/kaushikghosh/library-management",
    category: "Backend",
    icon: <Database className="w-5 h-5" />
  },
  {
    title: "Personal Blog Platform",
    description: "A dynamic blog platform with markdown support, comment system, tag-based filtering, and admin dashboard for content management.",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "Markdown"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    liveUrl: "https://myblog-platform.vercel.app",
    codeUrl: "https://github.com/kaushikghosh/blog-platform",
    category: "Full Stack",
    icon: <Code className="w-5 h-5" />
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio website built with modern React, featuring smooth animations, dark mode, and responsive design.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    liveUrl: "https://kaushikghosh.vercel.app",
    codeUrl: "https://github.com/kaushikghosh/portfolio",
    category: "Frontend",
    icon: <Globe className="w-5 h-5" />
  }
];

const categories = ["All", "Frontend", "Backend", "Full Stack"];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development journey through various technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="project-card group"
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-2xl h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {project.icon}
                  {project.category}
                </div>

                {/* Quick Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-primary hover:bg-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-primary hover:bg-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-center text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Live
                  </motion.a>
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-outline text-center text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/kaushikghosh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}