import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 animate-float-slow"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
      
      {/* Animated orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-slow" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">Shivam Rana</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light animate-slide-up" style={{ animationDelay: '200ms' }}>
              MERN Stack Developer
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '300ms' }}>
            Skilled in React.js, Next.js, Node.js, Express.js, MongoDB, and secure app development with 2+ years of experience
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center pt-4 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:shadow-glow-lg transition-all hover:scale-110 animate-glow-pulse text-primary-foreground font-semibold"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work <ArrowRight className="ml-2 h-5 w-5 animate-float" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-secondary hover:border-accent hover:scale-110 transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center pt-8 animate-slide-up" style={{ animationDelay: '500ms' }}>
            <a 
              href="https://github.com/shivam-rana-itzrana13" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-glow hover:scale-110 animate-float"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/shivam-rana-itzrana13" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all hover:shadow-accent hover:scale-110 animate-float"
              style={{ animationDelay: '100ms' }}
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:shivamrana342@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-glow hover:scale-110 animate-float"
              style={{ animationDelay: '200ms' }}
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;