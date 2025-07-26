import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    href: "https://github.com/kaushikghosh",
    color: "hover:text-gray-800 dark:hover:text-gray-200"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn", 
    href: "https://linkedin.com/in/kaushikghosh",
    color: "hover:text-blue-600"
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    label: "Instagram",
    href: "https://instagram.com/trailmapper",
    color: "hover:text-pink-600"
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    href: "mailto:kaushik.dev@example.com",
    color: "hover:text-green-600"
  }
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Kaushik Ghosh
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Final Year BCA Student & Backend-Focused Web Developer. 
                Passionate about creating scalable solutions and turning ideas into reality. 
                Always ready for the next challenge as a Trailmapper in life and code.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color} hover:border-current hover:scale-110`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-card-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 block py-1 hover:translate-x-1 transform transition-transform"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-card-foreground mb-4">Get in Touch</h4>
              <div className="space-y-3 text-muted-foreground">
                <p className="text-sm">
                  📧 kaushik.dev@example.com
                </p>
                <p className="text-sm">
                  📱 +91 98765 43210
                </p>
                <p className="text-sm">
                  📍 West Bengal, India
                </p>
                <p className="text-sm">
                  🎓 Graduating 2025
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-muted-foreground text-sm"
            >
              <span>© {currentYear} Kaushik Ghosh. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>and lots of ☕</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-muted-foreground">
                Built with React.js & Tailwind CSS
              </span>
              
              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Fun Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-6 border-t border-border/50"
        >
          <p className="text-sm text-muted-foreground italic">
            "As a Trailmapper, I don't just follow paths—I create them. 🗺️✨"
          </p>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-primary/5 to-accent/5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </footer>
  );
}