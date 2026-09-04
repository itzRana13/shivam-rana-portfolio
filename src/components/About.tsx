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
              I'm a Software Engineer with 3+ years of experience developing enterprise applications using Java, Spring Boot, 
              Python, FastAPI, PostgreSQL, and REST APIs. My expertise spans building scalable backend systems, AI-powered 
              applications, and cloud-native solutions with a strong foundation in full-stack development using the MERN stack.
            </p>
            
            <p className="animate-in fade-in duration-1000" style={{ animationDelay: '400ms' }}>
              Currently working at IndusEuro Consulting Services GmbH, I specialize in developing and optimizing REST APIs and 
              microservices using Java and Spring Boot. I have a proven track record of improving application performance and 
              scalability, reducing API response times by up to 30%, and optimizing deployment pipelines using Docker, AWS, and CI/CD.
            </p>
            
            <p className="animate-in fade-in duration-1000" style={{ animationDelay: '600ms' }}>
              I'm passionate about building secure, high-performance solutions with expertise in AES encryption, JWT authentication, 
              and cloud technologies. I leverage modern development practices including OOP, Data Structures, Agile methodologies, 
              and code reviews. I stay updated with the latest technologies and use AI tools like GitHub Copilot to deliver efficient, 
              innovative solutions that prioritize security, performance, and user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
