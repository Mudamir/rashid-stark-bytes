import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import headshot from "@/assets/headshot.jpg";
import { Sparkles, Code, Palette } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-32 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6 jarvis-scan">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse"></div>
            <span className="text-xs md:text-sm text-primary font-mono">PROFILE ANALYSIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black gradient-text">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="animate-slide-in-left">
            <Card className="relative overflow-hidden border-2 border-primary/30 bg-card/50 backdrop-blur hover-stark touch-feedback group">
              {/* Arc Reactor glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src={headshot} 
                alt="Rashid S. Comon"
                className="w-full h-auto object-cover relative z-10"
              />
              {/* Holographic scan line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 animate-scan"></div>
            </Card>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right space-y-5 md:space-y-6">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-primary animate-glow-pulse" />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                Innovation Through Technology
              </h3>
            </div>

            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              I aim to apply my expertise in <span className="text-primary font-semibold">UI/UX design</span>, <span className="text-secondary font-semibold">software development</span>, and <span className="text-accent font-semibold">emerging technologies</span> to build human-centered digital experiences and intelligent solutions, contributing as a future <span className="text-foreground font-semibold">UI/UX Designer</span> or <span className="text-foreground font-semibold">AI Engineer</span>.
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="relative flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-card/30 rounded-lg border border-primary/20 touch-feedback hover-stark group">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Code className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0 relative z-10" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-foreground mb-1">AI & Machine Learning</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Supervised & Ensemble Learning, Deep Learning, NLP, IoT & AI Integration, Generative AI Systems
                  </p>
                </div>
              </div>

              <div className="relative flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-card/30 rounded-lg border border-secondary/20 touch-feedback hover-stark group">
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Palette className="w-5 h-5 md:w-6 md:h-6 text-secondary mt-1 flex-shrink-0 relative z-10" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-foreground mb-1">UI/UX & Graphic Design</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Figma, Framer, Webflow, User Research, Prototyping, Wireframing, Design Systems, Adobe Photoshop
                  </p>
                </div>
              </div>

              <div className="relative flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-card/30 rounded-lg border border-accent/20 touch-feedback hover-stark group">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-accent mt-1 flex-shrink-0 relative z-10" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-foreground mb-1">Software Engineering</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    React, Vue.js, Python, Java, Django, FastAPI, TypeScript, REST APIs, Database Design
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 md:pt-4">
              <Button 
                asChild
                size="lg"
                className="relative bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold glow-gold hover-stark touch-feedback w-full sm:w-auto h-12 md:h-14 text-base md:text-lg repulsor overflow-hidden"
              >
                <a href="/Comon_Resume.pdf" download>
                  <span className="relative z-10">Download Full CV</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;