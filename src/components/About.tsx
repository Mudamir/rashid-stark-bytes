import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import headshot from "@/assets/headshot.jpg";
import { Sparkles, Code, Palette } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-16 gradient-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="animate-slide-in-left">
            <Card className="overflow-hidden border-2 border-primary/20 bg-card/50 backdrop-blur hover-glow">
              <img 
                src={headshot} 
                alt="Rashid S. Comon"
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary animate-glow-pulse" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Innovation Through Technology
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Senior Computer Science student at <span className="text-primary font-semibold">Mapúa Malayan Colleges Mindanao</span>, 
              driven by a passion for creating intelligent, human-centered solutions that bridge the gap between technology and user experience.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-card/30 rounded-lg border border-primary/10">
                <Code className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">AI Engineering</h4>
                  <p className="text-sm text-muted-foreground">
                    Building intelligent systems with deep learning, computer vision, and NLP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card/30 rounded-lg border border-secondary/10">
                <Palette className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">UI/UX Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Crafting intuitive, beautiful interfaces that prioritize user experience
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card/30 rounded-lg border border-accent/10">
                <Sparkles className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Full-Stack Development</h4>
                  <p className="text-sm text-muted-foreground">
                    End-to-end solutions from frontend to backend with modern frameworks
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold glow-purple"
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