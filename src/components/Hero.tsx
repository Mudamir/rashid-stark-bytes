import { Button } from "@/components/ui/button";
import { ChevronDown, Zap } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Arc Reactor Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(195 100% 65% / 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(195 100% 65% / 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Arc Reactor Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-30">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 via-primary/20 to-transparent animate-arc-rotate"></div>
          <div className="absolute inset-8 rounded-full bg-gradient-to-r from-primary/30 via-transparent to-primary/30 animate-arc-rotate" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
          <div className="absolute inset-16 rounded-full bg-primary/20 animate-arc-pulse"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: 0.3 + Math.random() * 0.4
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="animate-fade-in-up space-y-6 md:space-y-8">
          {/* JARVIS-style status indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-4 jarvis-scan">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse"></div>
            <span className="text-xs md:text-sm text-primary font-mono">SYSTEM ONLINE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
            <span className="gradient-text glow-text-blue">Rashid S. Comon</span>
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <Zap className="w-6 h-6 text-secondary animate-glow-pulse" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground/90 px-4">
            <span className="text-primary glow-text-blue">AI Engineer</span>{" "}
            <span className="text-foreground/60">×</span>{" "}
            <span className="gradient-gold glow-text-gold">UI/UX Designer</span>{" "}
            <span className="text-foreground/60">×</span>{" "}
            <span className="text-accent glow-text-red">Software Engineer</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Building intelligent systems and human-centered experiences. From <span className="text-primary font-semibold">AI-powered education platforms</span> to{" "}
            <span className="text-secondary font-semibold">award-winning government systems</span>, creating impact through{" "}
            <span className="text-accent font-semibold">innovation and design</span>.
          </p>

          {/* Key Highlights for Recruiters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8 px-4">
            <div className="relative flex flex-col items-center gap-2 p-4 rounded-lg bg-card/30 border border-primary/20 backdrop-blur-sm hover-stark group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              <span className="text-2xl md:text-3xl font-black text-primary relative z-10">5+</span>
              <span className="text-xs md:text-sm text-muted-foreground text-center relative z-10">Years Experience</span>
            </div>
            <div className="relative flex flex-col items-center gap-2 p-4 rounded-lg bg-card/30 border border-secondary/20 backdrop-blur-sm hover-stark group">
              <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              <span className="text-2xl md:text-3xl font-black text-secondary relative z-10">6</span>
              <span className="text-xs md:text-sm text-muted-foreground text-center relative z-10">AI/ML Projects</span>
            </div>
            <div className="relative flex flex-col items-center gap-2 p-4 rounded-lg bg-card/30 border border-accent/20 backdrop-blur-sm hover-stark group">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              <span className="text-2xl md:text-3xl font-black text-accent relative z-10">4+</span>
              <span className="text-xs md:text-sm text-muted-foreground text-center relative z-10">Awards & Recognition</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 md:pt-8 px-4">
            <Button 
              size="lg"
              onClick={scrollToProjects}
              className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg glow-blue hover-glow touch-feedback w-full sm:w-auto repulsor overflow-hidden"
            >
              <span className="relative z-10">Explore My Work</span>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              asChild
              className="relative border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg hover-stark touch-feedback w-full sm:w-auto"
            >
              <a href="/Comon_Resume.pdf" download="Rashid_Comon_Resume.pdf">
                <span className="relative z-10">Download CV</span>
              </a>
            </Button>
          </div>

          {/* Tech stack indicator */}
          <div className="flex flex-wrap justify-center gap-3 pt-8 px-4">
            {['Python', 'React', 'TensorFlow', 'Figma', 'TypeScript', 'Django', 'Vue.js', 'FastAPI'].map((tech, i) => (
              <div 
                key={tech}
                className="relative px-3 py-1 text-xs md:text-sm rounded-full bg-card/50 border border-primary/20 text-muted-foreground backdrop-blur-sm hover-stark group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                <span className="relative z-10">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator with Arc Reactor style */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-glow-pulse"></div>
          <ChevronDown className="relative w-8 h-8 text-primary animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;