import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="gradient-text glow-text-blue">Rashid S. Comon</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground/90">
            Engineering Intelligence.{" "}
            <span className="text-primary glow-text-blue">Designing Experiences.</span>{" "}
            <span className="text-secondary glow-text-purple">Building the Future.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Senior Computer Science student at Mapúa Malayan Colleges Mindanao, specializing in{" "}
            <span className="text-primary font-semibold">AI Engineering</span>,{" "}
            <span className="text-secondary font-semibold">UI/UX Design</span>, and{" "}
            <span className="text-accent font-semibold">Software Engineering</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-blue hover-glow"
            >
              Explore My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg hover-glow"
            >
              <a href="/Comon_Resume.pdf" download>Download CV</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="w-8 h-8 text-primary animate-glow-pulse" />
      </div>
    </section>
  );
};

export default Hero;