import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Junior Developer",
    company: "Koders, Dehradun",
    period: "May 2024 - Present",
    description: "Building full-stack web and desktop applications using modern technologies with focus on security and performance.",
    achievements: [
      "Built full-stack web and desktop apps using React.js, Next.js, Node.js, Express.js, Django, Electron.js",
      "Developed Defendia Password Manager with AES-encrypted vault, biometric login, masquerade emails, and cross-platform sync",
      "Implemented real-time data breach monitoring and secure API integrations",
      "Collaborated with teams ensuring GDPR compliance and high security standards"
    ],
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "Django", "Electron.js", "AES Encryption"]
  },
  {
    title: "Frontend Developer",
    company: "Iflex Technology Pvt. Ltd., Noida",
    period: "Dec 2023 - Apr 2024",
    description: "Developed responsive React.js applications with focus on state management and secure API integrations.",
    achievements: [
      "Developed responsive React.js apps with Redux and Tailwind CSS",
      "Integrated secure REST APIs and authentication systems",
      "Applied AI-assisted debugging and automated testing"
    ],
    tech: ["React.js", "Redux", "Tailwind CSS", "REST APIs", "JWT"]
  },
  {
    title: "Frontend Developer",
    company: "Exaltation Technologies Pvt. Ltd.",
    period: "Jun 2023 - Oct 2023",
    description: "Built mobile-first user interfaces and optimized deployment workflows using modern DevOps practices.",
    achievements: [
      "Built mobile-first UIs with responsive design principles",
      "Integrated dynamic APIs for real-time data updates",
      "Optimized deployments using Git and CI/CD practices"
    ],
    tech: ["React.js", "JavaScript", "Git", "CI/CD"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12 animate-in fade-in duration-1000">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Work <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary md:transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-slide-up ${
                    index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:transform md:-translate-x-1/2 animate-glow-pulse ${
                    index % 2 === 0 ? 'md:translate-x-1/2' : 'md:-translate-x-1/2'
                  }`} />

                  <Card className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  } p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:scale-105 group`}>
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="space-y-1">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Briefcase className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="flex items-center gap-1 bg-secondary/50">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">▹</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
