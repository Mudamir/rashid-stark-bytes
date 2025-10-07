import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="animate-fade-in-up space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
            <span className="gradient-text glow-text-blue">Rashid S. Comon</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground/90 px-4">
            Engineering Intelligence.{" "}
            <span className="text-primary glow-text-blue">Designing Experiences.</span>{" "}
            <span className="text-secondary glow-text-purple">Building the Future.</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Senior Computer Science student at Mapúa Malayan Colleges Mindanao, specializing in{" "}
            <span className="text-primary font-semibold">AI Engineering</span>,{" "}
            <span className="text-secondary font-semibold">UI/UX Design</span>, and{" "}
            <span className="text-accent font-semibold">Software Engineering</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 md:pt-8 px-4">
            <Button 
              size="lg"
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg glow-blue hover-glow touch-feedback w-full sm:w-auto"
            >
              Explore My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg hover-glow touch-feedback w-full sm:w-auto"
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