import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ecommerceImg from "@/assets/projects/ecommerce.jpg";
import chatAppImg from "@/assets/projects/chat-app.jpg";
import taskManagerImg from "@/assets/projects/task-manager.jpg";
import blogPlatformImg from "@/assets/projects/blog-platform.jpg";

const projects = [
  {
    title: "Defendia Password Manager",
    description: "Secure vault for credentials, passkeys, and credit cards with biometric login, masquerade emails, cross-platform sync, and real-time data breach monitoring ensuring GDPR compliance.",
    tech: ["MERN", "Electron", "Chrome Extension", "AES Encryption", "Biometric Auth"],
    github: "https://github.com/shivam-rana",
    demo: "#",
    image: ecommerceImg
  },
  {
    title: "Grocery Store Website",
    description: "E-commerce platform with authentication, shopping cart, CRUD operations, and Redux state management for seamless user experience.",
    tech: ["React.js", "Django", "SQL", "Redux"],
    github: "https://github.com/shivam-rana",
    demo: "#",
    image: chatAppImg
  },
  {
    title: "Bike-Buddy Platform",
    description: "Real-time bike rental platform with secure payment gateway integration, responsive UI, and seamless booking experience.",
    tech: ["React.js", "Django", "JavaScript", "Payment Gateway"],
    github: "https://github.com/shivam-rana",
    demo: "#",
    image: taskManagerImg
  },
  {
    title: "Full Stack Web Applications",
    description: "Built multiple responsive web applications with modern frameworks, secure authentication, and optimized performance.",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
    github: "https://github.com/shivam-rana",
    demo: "#",
    image: blogPlatformImg
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 animate-in fade-in duration-1000">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-glow-pulse" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow-lg group overflow-hidden animate-slide-up hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent opacity-60" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-border hover:bg-secondary transition-all hover:scale-105"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-primary hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-glow"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;