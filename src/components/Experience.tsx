import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "IndusEuro Consulting Services GmbH",
    period: "Feb 2026 - Present",
    description: "Developing and optimizing REST APIs and backend microservices using Java and Spring Boot with focus on improving application performance and scalability.",
    achievements: [
      "Developed and optimized 15+ REST APIs and backend microservices using Java and Spring Boot",
      "Improved application performance and scalability through advanced optimization techniques",
      "Collaborated with cross-functional Agile team of 6+ engineers for sprint planning, code reviews, and debugging",
      "Enhanced SQL queries and database models, reducing average API response time by approximately 30%",
      "Automated deployments using Docker, GitHub Actions, and AWS"
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "Spring Security", "Docker", "AWS", "GitHub Actions"]
  },
  {
    title: "Full Stack Developer",
    company: "Kriyative Technologies",
    period: "May 2024 - Feb 2026",
    description: "Developed full-stack web and desktop applications using modern frameworks with focus on performance optimization and cloud-native solutions.",
    achievements: [
      "Developed 7+ production-ready web and desktop applications using React, Next.js, Node.js, Electron.js, and TypeScript",
      "Streamlined Webpack configuration, reducing production bundle size by approximately 25%",
      "Built responsive React.js interfaces and integrated REST APIs with JWT authentication",
      "Managed Git workflows, pull requests, and production deployments"
    ],
    tech: ["React.js", "Next.js", "Node.js", "Electron.js", "TypeScript", "Webpack", "JWT"]
  },
  {
    title: "Frontend Developer",
    company: "Iflex Technology Pvt. Ltd., Noida",
    period: "Dec 2023 - Apr 2024",
    description: "Designed responsive React.js applications and integrated REST APIs with JWT authentication for secure user experience.",
    achievements: [
      "Designed responsive React.js applications and integrated REST APIs with JWT authentication",
      "Applied AI-assisted debugging and automated testing for improved code quality"
    ],
    tech: ["React.js", "Redux", "Tailwind CSS", "REST APIs", "JWT", "HTML5", "CSS3"]
  },
  {
    title: "Frontend Developer",
    company: "Exaltation Technologies Pvt. Ltd.",
    period: "Jun 2023 - Oct 2023",
    description: "Built mobile-first user interfaces and optimized deployment workflows using modern DevOps practices.",
    achievements: [
      "Built responsive React.js interfaces and improved application performance across client modules",
      "Managed Git workflows, pull requests, and production deployments",
      "Implemented AI-powered features and automated testing for enhanced code quality"
    ],
    tech: ["React.js", "JavaScript", "Git", "CI/CD", "HTML5", "CSS3"]
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
