import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText, Eye } from "lucide-react";

export function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    // In a real application, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/resume-kaushik-ghosh.pdf'; // This would be your actual resume file
    link.download = 'Kaushik_Ghosh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    // In a real application, this would open the resume in a new tab
    window.open('/resume-kaushik-ghosh.pdf', '_blank');
  };

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download my resume to learn more about my experience and skills
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Resume Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Resume Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground">
                      Kaushik Ghosh
                    </h3>
                    <p className="text-muted-foreground">Backend Developer & BCA Student</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Experience Level</span>
                    <span className="font-medium text-card-foreground">3+ Years Learning</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Specialization</span>
                    <span className="font-medium text-card-foreground">Backend Development</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Primary Tech</span>
                    <span className="font-medium text-card-foreground">Java, Spring Boot, React</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Projects</span>
                    <span className="font-medium text-card-foreground">15+ Personal Projects</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-muted-foreground">Last Updated</span>
                    <span className="font-medium text-card-foreground">January 2025</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    onClick={handleDownload}
                    className="btn-primary flex items-center justify-center gap-2 flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </motion.button>
                  
                  <motion.button
                    onClick={handlePreview}
                    className="btn-outline flex items-center justify-center gap-2 flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Eye className="w-4 h-4" />
                    Preview Online
                  </motion.button>
                </div>
              </div>

              {/* Resume Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  {/* Resume Document Mockup */}
                  <div className="p-6 h-80 overflow-hidden">
                    <div className="text-center border-b border-gray-200 pb-4 mb-4">
                      <h4 className="text-lg font-bold text-gray-800">KAUSHIK GHOSH</h4>
                      <p className="text-sm text-gray-600">Backend Developer | BCA Student</p>
                      <p className="text-xs text-gray-500">kaushik.dev@example.com | +91 98765 43210</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-semibold text-gray-800 mb-2">EDUCATION</h5>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p>Bachelor of Computer Applications (BCA)</p>
                          <p>MAKAUT • 2022-2025 • 8.5/10 CGPA</p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-gray-800 mb-2">TECHNICAL SKILLS</h5>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p>Languages: Java, Python, JavaScript, SQL</p>
                          <p>Frameworks: Spring Boot, React.js, Hibernate</p>
                          <p>Tools: Git, Postman, VS Code, MySQL</p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-gray-800 mb-2">PROJECTS</h5>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p>• E-Commerce REST API (Spring Boot)</p>
                          <p>• Task Management App (React + Java)</p>
                          <p>• Library Management System</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full opacity-20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full opacity-30"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Resume Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">Education</h4>
              <p className="text-sm text-muted-foreground">Strong academic foundation in computer science</p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">Projects</h4>
              <p className="text-sm text-muted-foreground">15+ personal projects showcasing diverse skills</p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">Skills</h4>
              <p className="text-sm text-muted-foreground">Full-stack development with backend focus</p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold gradient-text mb-4">
              Ready to discuss opportunities?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm actively seeking internship and entry-level positions where I can contribute 
              my skills and continue learning. Let's connect and explore how we can work together!
            </p>
            <motion.button
              onClick={handleDownload}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get My Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}