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
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-6 gradient-text">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
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
                <CarouselItem key={category.title} className="md:basis-1/2 lg:basis-1/2">
                  <Card 
                    className={`p-8 bg-card/50 backdrop-blur border-2 hover-glow transition-all duration-500 h-full ${
                      category.color === 'primary' ? 'border-primary/20 hover:border-primary/50' :
                      category.color === 'secondary' ? 'border-secondary/20 hover:border-secondary/50' :
                      'border-accent/20 hover:border-accent/50'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-lg ${
                        category.color === 'primary' ? 'bg-primary/10 text-primary' :
                        category.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                        'bg-accent/10 text-accent'
                      }`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          className={`text-sm ${
                            category.color === 'primary' ? 'bg-primary/20 text-primary border-primary/30 hover:bg-primary/30' :
                            category.color === 'secondary' ? 'bg-secondary/20 text-secondary border-secondary/30 hover:bg-secondary/30' :
                            'bg-accent/20 text-accent border-accent/30 hover:bg-accent/30'
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