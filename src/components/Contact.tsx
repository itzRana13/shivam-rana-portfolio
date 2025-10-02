import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12 animate-in fade-in duration-1000">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg">
              I'm always open to discussing new projects, opportunities, or collaborations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:scale-105 animate-in fade-in">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto transition-transform hover:scale-110 hover:bg-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">shivamrana342@gmail.com</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:scale-105 animate-in fade-in" style={{ animationDelay: '150ms' }}>
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto transition-transform hover:scale-110 hover:bg-primary/20">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-muted-foreground">+91 7015783282</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:scale-105 animate-in fade-in" style={{ animationDelay: '300ms' }}>
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto transition-transform hover:scale-110 hover:bg-primary/20">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-muted-foreground">Dehradun, India</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center pt-8 animate-in fade-in duration-1000" style={{ animationDelay: '450ms' }}>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-glow transition-all hover:scale-105"
              asChild
            >
              <a href="mailto:shivamrana342@gmail.com">
                Send Me a Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;