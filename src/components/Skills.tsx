import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, Database, Server, Globe, 
  Wrench, Coffee, GitBranch, Smartphone 
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Java", "C", "Python", "SQL", "JavaScript"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Frontend Development",
    icon: <Globe className="w-6 h-6" />,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    skills: ["Spring Boot", "Maven", "Hibernate", "JPA", "REST API"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Database & Tools",
    icon: <Database className="w-6 h-6" />,
    skills: ["MySQL", "Git", "GitHub", "Postman", "VS Code", "STS"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Other Technologies",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Axios", "JSON", "Shell Scripting", "Linux Basics"],
    color: "from-indigo-500 to-blue-500"
  }
];

export function Skills() {
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
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="skill-tag"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Proficiency Levels
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: "Java & Spring Boot", level: 85, color: "bg-gradient-to-r from-orange-500 to-red-600" },
              { skill: "React.js & Frontend", level: 80, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
              { skill: "Database Design", level: 75, color: "bg-gradient-to-r from-green-500 to-emerald-600" },
              { skill: "REST API Development", level: 90, color: "bg-gradient-to-r from-purple-500 to-pink-600" }
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-card p-4 rounded-lg border border-border"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-card-foreground">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full ${item.color}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}