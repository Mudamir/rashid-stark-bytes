import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import headshot from "@/assets/headshot.jpg";
import { Sparkles, Code, Palette } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-center mb-12 md:mb-16 gradient-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="animate-slide-in-left">
            <Card className="overflow-hidden border-2 border-primary/20 bg-card/50 backdrop-blur hover-glow touch-feedback">
              <img 
                src={headshot} 
                alt="Rashid S. Comon"
                className="w-full h-auto object-cover"
              />
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
              I'm a Senior Computer Science student at <span className="text-primary font-semibold">Mapúa Malayan Colleges Mindanao</span>, 
              driven by a passion for creating intelligent, human-centered solutions that bridge the gap between technology and user experience.
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-card/30 rounded-lg border border-primary/10 touch-feedback">
                <Code className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-foreground mb-1">AI Engineering</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Building intelligent systems with deep learning, computer vision, and NLP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-card/30 rounded-lg border border-secondary/10 touch-feedback">
                <Palette className="w-5 h-5 md:w-6 md:h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-foreground mb-1">UI/UX Design</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Crafting intuitive, beautiful interfaces that prioritize user experience
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-card/30 rounded-lg border border-accent/10 touch-feedback">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-foreground mb-1">Full-Stack Development</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    End-to-end solutions from frontend to backend with modern frameworks
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 md:pt-4">
              <Button 
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold glow-purple touch-feedback w-full sm:w-auto h-12 md:h-14 text-base md:text-lg"
              >
                <a href="/Comon_Resume.pdf" download>
                  Download Full CV
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