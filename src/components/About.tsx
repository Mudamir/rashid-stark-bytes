import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import headshot from "@/assets/headshot.jpg";
import { Sparkles, Code, Palette, Download, Zap, Cpu, Activity, Target, Hexagon, Shield, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-32 relative overflow-hidden">
      {/* Arc Reactor Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, hsl(195 100% 65% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Floating Energy Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6 jarvis-scan">
            <Activity className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs md:text-sm text-primary font-mono">JARVIS PROFILE ANALYSIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black gradient-text mb-4">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="animate-slide-in-left relative">
            {/* Arc Reactor Core Glow */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
            
            <Card className="relative overflow-hidden border-2 border-primary/30 bg-card/50 backdrop-blur hover-stark touch-feedback group">
              {/* Corner Tech Details */}
              <div className="absolute top-2 left-2 text-[10px] font-mono text-primary/40 z-20">
                ID: RSC-2025
              </div>
              <div className="absolute top-2 right-2 text-[10px] font-mono text-primary/40 z-20">
                STATUS: ACTIVE
              </div>
              
              {/* Arc Reactor glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Circular Arc Reactor rings */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10">
                <div className="w-32 h-32 rounded-full border-2 border-primary animate-ping"></div>
                <div className="absolute w-24 h-24 rounded-full border-2 border-primary/50"></div>
                <div className="absolute w-16 h-16 rounded-full border-2 border-primary/30"></div>
              </div>
              
              <img 
                src={headshot} 
                alt="Rashid S. Comon"
                className="w-full h-auto object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Holographic scan lines */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 animate-scan"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-primary via-transparent to-primary opacity-50"></div>
              
              {/* Power Level Indicator */}
              <div className="absolute bottom-2 left-2 right-2 bg-card/80 backdrop-blur-sm border border-primary/30 rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="flex items-center justify-between text-[10px] font-mono text-primary mb-1">
                  <span>POWER LEVEL</span>
                  <span>100%</span>
                </div>
                <div className="h-1 bg-card rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary animate-pulse" style={{width: '100%'}}></div>
                </div>
              </div>
            </Card>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right space-y-6 md:space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-primary animate-glow-pulse" />
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                  Innovation Through Technology
                </h3>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
            </div>

            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              I aim to apply my expertise in <span className="text-primary font-semibold">UI/UX design</span>, <span className="text-secondary font-semibold">software development</span>, and <span className="text-accent font-semibold">emerging technologies</span> to build human-centered digital experiences and intelligent solutions, contributing as a future <span className="text-foreground font-bold">UI/UX Designer</span> or <span className="text-foreground font-bold">AI Engineer</span>.
            </p>

            <div className="space-y-4 md:space-y-5">
              <div className="relative flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-card/30 rounded-xl border border-primary/20 touch-feedback hover-stark group transition-all duration-300 hover:border-primary/50 hover:bg-card/50 overflow-hidden">
                {/* Repulsor beam effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors relative">
                    <Code className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 relative z-10" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                  </div>
                </div>
                <div className="flex-1 relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-sm md:text-base lg:text-lg text-foreground group-hover:text-primary transition-colors">AI & Machine Learning</h4>
                    <div className="flex items-center gap-1">
                      <Hexagon className="w-3 h-3 text-primary fill-primary/20" />
                      <span className="text-[10px] font-mono text-primary/80">MARK L</span>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-2">
                    Supervised & Ensemble Learning, Deep Learning, NLP, IoT & AI Integration, Generative AI Systems
                  </p>
                  {/* Iron Man Suit Indicators */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-1.5 w-1.5 rounded-full bg-primary group-hover:animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-card/30 rounded-xl border border-secondary/20 touch-feedback hover-stark group transition-all duration-300 hover:border-secondary/50 hover:bg-card/50 overflow-hidden">
                {/* Repulsor beam effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors relative">
                    <Palette className="w-5 h-5 md:w-6 md:h-6 text-secondary flex-shrink-0 relative z-10" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full animate-ping"></div>
                  </div>
                </div>
                <div className="flex-1 relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-sm md:text-base lg:text-lg text-foreground group-hover:text-secondary transition-colors">UI/UX & Graphic Design</h4>
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-secondary fill-secondary/20" />
                      <span className="text-[10px] font-mono text-secondary/80">MARK XLVI</span>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-2">
                    Figma, Framer, Webflow, User Research, Prototyping, Wireframing, Design Systems, Adobe Photoshop
                  </p>
                  {/* Iron Man Suit Indicators */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-1.5 w-1.5 rounded-full bg-secondary group-hover:animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-card/30 rounded-xl border border-accent/20 touch-feedback hover-stark group transition-all duration-300 hover:border-accent/50 hover:bg-card/50 overflow-hidden">
                {/* Repulsor beam effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors relative">
                    <Cpu className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 relative z-10" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-ping"></div>
                  </div>
                </div>
                <div className="flex-1 relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-sm md:text-base lg:text-lg text-foreground group-hover:text-accent transition-colors">Software Engineering</h4>
                    <div className="flex items-center gap-1">
                      <Rocket className="w-3 h-3 text-accent fill-accent/20" />
                      <span className="text-[10px] font-mono text-accent/80">MARK XLII</span>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-2">
                    React, Vue.js, Python, Java, Django, FastAPI, TypeScript, REST APIs, Database Design
                  </p>
                  {/* Iron Man Suit Indicators */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-1.5 w-1.5 rounded-full bg-accent group-hover:animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 md:pt-6 space-y-4">
              <Button 
                asChild
                size="lg"
                className="relative bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold glow-gold hover-stark touch-feedback w-full sm:w-auto h-12 md:h-14 text-base md:text-lg repulsor overflow-hidden group"
              >
                <a href="/Comon_Resume.pdf" download className="flex items-center justify-center gap-2">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
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