import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Maulana Abul Kalam Azad University of Technology (MAKAUT)",
    duration: "2022 - 2025",
    location: "West Bengal, India",
    status: "Final Year",
    description: "Comprehensive computer science program covering programming languages, database management, web development, and software engineering principles.",
    highlights: [
      "Core subjects: Programming, DBMS, Software Engineering",
      "Web Development Specialization",
      "Project-based learning approach",
      "Industry-relevant curriculum"
    ],
    gpa: "8.5/10",
    isActive: true
  },
  {
    degree: "Higher Secondary Education (Science)",
    institution: "Local Higher Secondary School",
    duration: "2020 - 2022",
    location: "West Bengal, India",
    status: "Completed",
    description: "Science stream with focus on Mathematics, Physics, and Computer Science, building the foundation for technical education.",
    highlights: [
      "Mathematics & Computer Science",
      "Physics & Chemistry",
      "Strong analytical foundation",
      "Merit-based selection for BCA"
    ],
    gpa: "85%",
    isActive: false
  }
];

const achievements = [
  {
    title: "Dean's List",
    description: "Consistent academic excellence",
    icon: <Award className="w-5 h-5" />
  },
  {
    title: "Project Excellence",
    description: "Best project award in Java programming",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    title: "Technical Leadership",
    description: "Led multiple group projects",
    icon: <Award className="w-5 h-5" />
  }
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey and continuous learning in technology
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="timeline-line" />

            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`timeline-dot ${edu.isActive ? 'animate-pulse-glow' : ''}`} />

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'ml-12' : 'mr-12'}`}>
                  <motion.div
                    className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            edu.isActive 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-card-foreground mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-semibold mb-2">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid md:grid-cols-2 gap-2 mb-4">
                      {edu.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.4, delay: index * 0.3 + idx * 0.1 }}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {highlight}
                        </motion.div>
                      ))}
                    </div>

                    {/* GPA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">Academic Performance</span>
                      <span className="font-bold text-primary">{edu.gpa}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Academic Achievements
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold text-card-foreground mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Future Goals */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Looking Ahead
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              As I approach graduation in 2025, I'm excited to transition from academic learning 
              to industry application. My goal is to contribute to innovative software solutions 
              while continuing to learn and grow as a developer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}