import { Card } from "@/components/ui/card";
import { Code, Zap, Brain, Database, Cloud, Wrench } from "lucide-react";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: any;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: Code, color: "#007396" },
      { name: "Python", icon: Code, color: "#3776AB" },
      { name: "JavaScript", icon: Code, color: "#F7DF1E" },
      { name: "TypeScript", icon: Code, color: "#3178C6" },
      { name: "SQL", icon: Database, color: "#336791" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Spring Boot", icon: Wrench, color: "#6DB33F" },
      { name: "FastAPI", icon: Wrench, color: "#009688" },
      { name: "Node.js", icon: Code, color: "#339933" },
      { name: "Express.js", icon: Code, color: "#000000" },
      { name: "REST APIs", icon: Zap, color: "#FF6B6B" },
      { name: "GraphQL", icon: Zap, color: "#E10098" }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: Code, color: "#61DAFB" },
      { name: "Next.js", icon: Code, color: "#000000" },
      { name: "TypeScript", icon: Code, color: "#3178C6" },
      { name: "Tailwind CSS", icon: Wrench, color: "#06B6D4" },
      { name: "Redux", icon: Code, color: "#764ABC" },
      { name: "HTML5", icon: Code, color: "#E34F26" },
      { name: "CSS3", icon: Code, color: "#1572B6" },
      { name: "Electron.js", icon: Wrench, color: "#47848F" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: Database, color: "#4169E1" },
      { name: "MySQL", icon: Database, color: "#00758F" },
      { name: "MongoDB", icon: Database, color: "#47A248" },
      { name: "Redis", icon: Database, color: "#DC382D" },
      { name: "Flyway", icon: Database, color: "#CC0200" }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: Cloud, color: "#FF9900" },
      { name: "Docker", icon: Cloud, color: "#2496ED" },
      { name: "GitHub Actions", icon: Cloud, color: "#181717" },
      { name: "CI/CD", icon: Zap, color: "#FF6B6B" },
      { name: "Git", icon: Code, color: "#F05032" }
    ]
  },
  {
    title: "Tools & Build Systems",
    skills: [
      { name: "Maven", icon: Wrench, color: "#C71C22" },
      { name: "Gradle", icon: Wrench, color: "#02303A" },
      { name: "Swagger", icon: Wrench, color: "#85EA2D" },
      { name: "Postman", icon: Wrench, color: "#FF6C37" },
      { name: "IntelliJ IDEA", icon: Code, color: "#000000" },
      { name: "VS Code", icon: Code, color: "#007ACC" },
      { name: "npm", icon: Code, color: "#CB3837" },
      { name: "Yarn", icon: Code, color: "#2C8EBB" }
    ]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "GitHub Copilot", icon: Brain, color: "#10A37F" },
      { name: "OpenAI API", icon: Brain, color: "#412991" },
      { name: "LangGraph", icon: Brain, color: "#00D9FF" },
      { name: "FastAPI ML", icon: Brain, color: "#009688" }
    ]
  },
  {
    title: "Security & Best Practices",
    skills: [
      { name: "JWT", icon: Code, color: "#000000" },
      { name: "AES Encryption", icon: Code, color: "#FF6B6B" },
      { name: "Spring Security", icon: Wrench, color: "#6DB33F" },
      { name: "GDPR Compliance", icon: Code, color: "#1E90FF" },
      { name: "Microservices", icon: Wrench, color: "#FF6B6B" },
      { name: "OOP", icon: Code, color: "#007ACC" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 animate-in fade-in duration-1000">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-glow-pulse" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow-lg hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all cursor-default animate-in fade-in"
                        style={{ 
                          animationDelay: `${(index * 100) + (skillIndex * 50)}ms`
                        }}
                      >
                        <Icon 
                          className="w-5 h-5 transition-all group-hover:scale-110" 
                          style={{ color: skill.color }}
                        />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
