import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Palette, Code, Database } from "lucide-react";

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
    <section id="skills" className="py-16 md:py-32 relative overflow-hidden">
      {/* Arc Reactor Core Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 via-transparent to-secondary/40 animate-arc-rotate"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6 jarvis-scan">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse"></div>
            <span className="text-xs md:text-sm text-primary font-mono">CAPABILITY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black gradient-text mb-4 md:mb-6">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
            A comprehensive toolkit spanning AI, design, and development
          </p>
        </div>

        {/* Grid Layout - All Skills Visible */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title}
                className={`relative p-5 md:p-8 bg-card/50 backdrop-blur border-2 hover-stark transition-all duration-500 h-full touch-feedback group ${
                  category.color === 'primary' ? 'border-primary/30 hover:border-primary/60' :
                  category.color === 'secondary' ? 'border-secondary/30 hover:border-secondary/60' :
                  'border-accent/30 hover:border-accent/60'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-full -translate-y-12 translate-x-12 ${
                  category.color === 'primary' ? 'bg-primary/20' :
                  category.color === 'secondary' ? 'bg-secondary/20' :
                  'bg-accent/20'
                }`}></div>
                
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 relative z-10">
                  <div className={`relative p-2 md:p-3 rounded-lg ${
                    category.color === 'primary' ? 'bg-primary/10 text-primary' :
                    category.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                    'bg-accent/10 text-accent'
                  }`}>
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity blur-lg ${
                      category.color === 'primary' ? 'bg-primary/30' :
                      category.color === 'secondary' ? 'bg-secondary/30' :
                      'bg-accent/30'
                    }`}></div>
                    <Icon className="w-6 h-6 md:w-8 md:h-8 relative z-10" />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 md:gap-2 relative z-10">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      className={`text-xs md:text-sm touch-feedback hover-stark ${
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;