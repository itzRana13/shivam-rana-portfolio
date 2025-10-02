const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12 animate-in fade-in duration-1000">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="animate-in fade-in duration-1000" style={{ animationDelay: '200ms' }}>
              I'm a skilled MERN Stack Developer with expertise in React.js, Next.js, Node.js, Express.js, MongoDB, SQL, 
              Electron.js, and Chrome Extensions. My journey in web development has been driven by a passion for 
              creating secure, high-performance solutions that make a real impact.
            </p>
            
            <p className="animate-in fade-in duration-1000" style={{ animationDelay: '400ms' }}>
              I specialize in secure application development with experience in AES encryption, biometric authentication, 
              and GDPR compliance. Currently working as a Junior Developer at Koders, Dehradun, where I build full-stack 
              web and desktop applications using modern technologies.
            </p>
            
            <p className="animate-in fade-in duration-1000" style={{ animationDelay: '600ms' }}>
              I leverage AI tools like GitHub Copilot, OpenAI, and Cursor to deliver efficient solutions. I'm committed 
              to continuous learning, staying updated with the latest web development trends, and building applications 
              that prioritize both security and user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;