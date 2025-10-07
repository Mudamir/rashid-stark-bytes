import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Palette, Code, Database } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface SkillCategory {
  title: string;
  icon: typeof Brain;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["Python", "TensorFlow", "ResNet", "Scikit-Learn", "NLP", "Deep Learning", "CNN", "Ensemble Models"],
    color: "primary"
  },
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["React", "Vue.js", "Tailwind CSS", "Bootstrap", "Ant Design", "TypeScript", "JavaScript"],
    color: "secondary"
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    skills: ["Figma", "Framer", "Webflow", "User Research", "Prototyping", "Wireframing", "Design Systems"],
    color: "accent"
  },
  {
    title: "Backend & Tools",
    icon: Database,
    skills: ["Django", "FastAPI", "Java", "Node.js", "Git", "Postman", "REST APIs", "Database Design"],
    color: "primary"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-center mb-4 md:mb-6 gradient-text">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground text-sm md:text-base lg:text-lg mb-12 md:mb-16 max-w-2xl mx-auto px-4">
          A comprehensive toolkit spanning AI, design, and development
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <CarouselItem key={category.title} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <Card 
                    className={`p-5 md:p-8 bg-card/50 backdrop-blur border-2 hover-glow active:shadow-lg transition-all duration-500 h-full touch-feedback ${
                      category.color === 'primary' ? 'border-primary/20 hover:border-primary/50 active:border-primary/60' :
                      category.color === 'secondary' ? 'border-secondary/20 hover:border-secondary/50 active:border-secondary/60' :
                      'border-accent/20 hover:border-accent/50 active:border-accent/60'
                    }`}
                  >
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className={`p-2 md:p-3 rounded-lg ${
                        category.color === 'primary' ? 'bg-primary/10 text-primary' :
                        category.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                        'bg-accent/10 text-accent'
                      }`}>
                        <Icon className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {category.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          className={`text-xs md:text-sm touch-feedback ${
                            category.color === 'primary' ? 'bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 active:bg-primary/40' :
                            category.color === 'secondary' ? 'bg-secondary/20 text-secondary border-secondary/30 hover:bg-secondary/30 active:bg-secondary/40' :
                            'bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 active:bg-accent/40'
                          } transition-colors`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;