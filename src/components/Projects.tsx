import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  id: string;
  title: string;
  category: "AI/ML" | "UI/UX" | "Software Engineering";
  description: string;
  tech: string[];
  color: "primary" | "secondary" | "accent";
}

const projects: Project[] = [
  {
    id: "1",
    title: "Gender Classification of Handwritten Text",
    category: "AI/ML",
    description: "Research project using ResNet-50 and ResNet-101 architectures for automated gender classification based on handwritten samples. Achieved enhanced accuracy for forensic science and biometric authentication applications.",
    tech: ["Python", "TensorFlow", "ResNet", "CNN", "Deep Learning"],
    color: "primary"
  },
  {
    id: "2",
    title: "Phishing Email Detection with Ensemble Models",
    category: "AI/ML",
    description: "Developed an ensemble machine learning framework leveraging NLP and TF-IDF for phishing detection. Demonstrated how ensemble methods improve robustness and trust in automated cybersecurity threat detection.",
    tech: ["Python", "Scikit-Learn", "NLP", "TF-IDF", "Ensemble Methods"],
    color: "primary"
  },
  {
    id: "3",
    title: "Marketing Booking Website & Management System",
    category: "UI/UX",
    description: "Designed and developed a comprehensive booking platform with centralized management system. Created intuitive user flows and modern interface with payment integration.",
    tech: ["Figma", "React", "Tailwind CSS", "Django", "PayMongo"],
    color: "secondary"
  },
  {
    id: "4",
    title: "e-NAIS System for CHED RO XI",
    category: "Software Engineering",
    description: "Built a functional event registration and serial number issuance system for CHED Regional Office XI. Implemented secure workflows and user-friendly interfaces for efficient government operations.",
    tech: ["Java", "OOP", "Backend Development", "System Design"],
    color: "accent"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-card/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-6 gradient-text">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Showcasing expertise across three core domains: AI/ML Engineering, UI/UX Design, and Software Engineering
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/2">
                <Card 
                  className={`p-8 bg-card/50 backdrop-blur border-2 hover-glow transition-all duration-500 h-full ${
                    project.color === 'primary' ? 'border-primary/20 hover:border-primary/50' :
                    project.color === 'secondary' ? 'border-secondary/20 hover:border-secondary/50' :
                    'border-accent/20 hover:border-accent/50'
                  }`}
                >
                  <div className="space-y-4">
                    <div>
                      <Badge 
                        className={`mb-3 ${
                          project.color === 'primary' ? 'bg-primary/20 text-primary border-primary/30' :
                          project.color === 'secondary' ? 'bg-secondary/20 text-secondary border-secondary/30' :
                          'bg-accent/20 text-accent border-accent/30'
                        }`}
                      >
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline"
                          className="text-xs bg-background/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;