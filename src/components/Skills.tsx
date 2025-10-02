import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiRedux, 
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiAmazon,
  SiPostman,
  SiNpm,
  SiYarn
} from "react-icons/si";
import { Code } from "lucide-react";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType | typeof Code;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" }
    ]
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" }
    ]
  },
  {
    title: "Tools & Specializations",
    skills: [
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "VS Code", icon: Code, color: "#007ACC" },
      { name: "npm", icon: SiNpm, color: "#CB3837" },
      { name: "Yarn", icon: SiYarn, color: "#2C8EBB" }
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
                        className="group flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all cursor-default hover:scale-110 animate-slide-up border border-border hover:border-primary/50 hover:shadow-glow"
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