import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import defendiaImg from "@/assets/projects/defendia.jpg";
import zoomVideoImg from "@/assets/projects/zoom-video.jpg";
import chatRealtimeImg from "@/assets/projects/chat-app.jpg";
import groceryStoreImg from "@/assets/projects/ecommerce.jpg";
import zutubeImg from "@/assets/projects/zutube.jpg";
import blogPlatformImg from "@/assets/projects/blog-platform.jpg";
import taskManagerImg from "@/assets/projects/task-manager.jpg";
import chatAppImg from "@/assets/projects/chat-realtime.jpg";

const projects = [
  {
    title: "Defendia Password Manager",
    description: "Secure vault for credentials, passkeys, and credit cards with biometric login, masquerade emails, cross-platform sync, and real-time data breach monitoring ensuring GDPR compliance.",
    tech: ["MERN", "Electron", "Chrome Extension", "AES Encryption", "Biometric Auth"],
    github: "https://github.com/itzRana13",
    demo: "https://defendia.com/",
    image: defendiaImg
  },
  {
    title: "Yoom - Video Calling App",
    description: "Modern video calling application with real-time video calls, meeting scheduling, user authentication, personal meeting rooms, and responsive design for all devices.",
    tech: ["Next.js 14", "React 18", "TypeScript", "Clerk Auth", "Stream.io Video SDK", "Tailwind CSS", "Radix UI"],
    github: "https://github.com/itzRana13/zoom",
    demo: "https://zoom-p1x6ah70e-itzrana13s-projects.vercel.app",
    image: zoomVideoImg
  },
  {
    title: "Baat Cheet - Real-time Chat",
    description: "Real-time chat application with instant messaging, online status indicators, and seamless communication powered by Socket.io and MongoDB.",
    tech: ["React.js", "Node.js", "Socket.io", "MongoDB", "Express.js"],
    github: "https://github.com/itzRana13",
    demo: "https://chatapp-1-xdy1.onrender.com/",
    image: chatRealtimeImg
  },
  {
    title: "Grocery Store Website",
    description: "E-commerce platform with authentication, shopping cart, CRUD operations, and Redux state management for seamless user experience.",
    tech: ["React.js", "Django", "SQL", "Redux"],
    github: "https://github.com/itzRana13/Grocery-shop-project",
    demo: "https://grocery-shop-project.vercel.app/",
    image: groceryStoreImg
  },
  {
    title: "ZuTube - Video Streaming Platform",
    description: "YouTube-like video streaming platform with video playback, search functionality, trending videos, and modern responsive UI.",
    tech: ["React.js", "YouTube API", "Tailwind CSS", "Video Streaming"],
    github: "https://github.com/itzRana13",
    demo: "https://zutube.netlify.app/",
    image: zutubeImg
  },

  {
    title: "Task Manager Pro",
    description: "Advanced task management application with drag-and-drop functionality, team collaboration, deadline tracking, and project analytics.",
    tech: ["React.js", "TypeScript", "DnD Kit", "Chart.js", "Local Storage"],
    github: "https://github.com/itzRana13/task-manager",
    demo: "https://task-manager-pro.vercel.app/",
    image: taskManagerImg
  },

  {
    title: "Fuel Price Visualization",
    description: "Interactive data visualization application for tracking and analyzing fuel prices with modern UI and real-time data updates.",
    tech: ["TypeScript", "Data Visualization", "React", "Chart.js", "API Integration"],
    github: "https://github.com/itzRana13/fuel-price-visualization",
    demo: "https://fuel-price-visualization.vercel.app",
    image: taskManagerImg
  },
  {
    title: "iFlex Web Application",
    description: "Modern web application with responsive design, user authentication, and interactive features built with JavaScript and modern web technologies.",
    tech: ["JavaScript", "HTML5", "CSS3", "Responsive Design", "Web APIs"],
    github: "https://github.com/itzRana13/iflex",
    demo: "https://iflex.vercel.app",
    image: defendiaImg
  },
  {
    title: "Compass Real Estate",
    description: "Real estate business website where users can find and explore the best villas, flats, and apartments. Features property listings, search functionality, and modern UI for property discovery.",
    tech: ["HTML5", "CSS3", "JavaScript", "Real Estate", "Property Listings"],
    github: "https://github.com/itzRana13/compass",
    demo: "https://compass-psi.vercel.app",
    image: chatRealtimeImg
  },
  {
    title: "Flickr Photo Search",
    description: "Photo search application using Flickr API with advanced search functionality, image galleries, and modern responsive interface.",
    tech: ["JavaScript", "Flickr API", "HTML5", "CSS3", "Responsive Design"],
    github: "https://github.com/itzRana13/flickr-photo-search",
    demo: "https://flickr-photo-search.vercel.app",
    image: zutubeImg
  },
  {
    title: "Interactive Map Application",
    description: "Interactive mapping application with location services, custom markers, and real-time data visualization for location-based services.",
    tech: ["JavaScript", "Map APIs", "HTML5", "CSS3", "Geolocation"],
    github: "https://github.com/itzRana13/map-app",
    demo: "https://map-app-brown-one.vercel.app",
    image: blogPlatformImg
  },
  {
    title: "Kanban Board Manager",
    description: "Project management tool with drag-and-drop functionality, task organization, and team collaboration features built with TypeScript.",
    tech: ["TypeScript", "React", "Drag & Drop", "Local Storage", "Task Management"],
    github: "https://github.com/itzRana13/kanban-",
    demo: "https://kanban-board-demo.vercel.app",
    image: taskManagerImg
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website showcasing projects and skills with smooth animations, dark/light theme, and optimized performance.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Vite", "Responsive Design"],
    github: "https://github.com/itzRana13/shivam-rana-portfolio",
    demo: "https://shivam-rana-portfolio-itzrana13s-projects.vercel.app/",
    image: chatAppImg
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const initialProjectsCount = 4;
  const displayedProjects = showAll ? projects : projects.slice(0, initialProjectsCount);

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
            {displayedProjects.map((project, index) => (
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

          {projects.length > initialProjectsCount && (
            <div className="text-center">
              <Button
                onClick={() => setShowAll(!showAll)}
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary transition-all hover:scale-105 hover:shadow-glow-lg px-8 py-3"
              >
                {showAll ? "Show Less" : "View More "}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;