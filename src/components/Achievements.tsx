import { Card } from "@/components/ui/card";
import { Trophy, Award, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Achievement {
  icon: typeof Trophy;
  title: string;
  description: string;
  year: string;
}

const achievements: Achievement[] = [
  {
    icon: Trophy,
    title: "CHED RO XI e-NAIS System Recognition",
    description: "Recognized for developing a comprehensive event registration and serial number issuance system for CHED Regional Office XI",
    year: "2025"
  },
  {
    icon: Award,
    title: "1st Place - DICT Pitching Competition",
    description: "Won first place in the Department of Information and Communications Technology pitching competition",
    year: "2024"
  },
  {
    icon: Award,
    title: "1st Place - CCIS Pitching Competition",
    description: "Secured first place in the College of Computer and Information Sciences pitching competition",
    year: "2024"
  },
  {
    icon: Users,
    title: "Creatives and Marketing Head - DICE",
    description: "Led creative direction and marketing strategies as the head of Creatives and Marketing for DICE organization",
    year: "2023-2024"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 md:py-32 bg-card/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-6 gradient-text">
          Achievements & Recognition
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Awards, leadership roles, and notable accomplishments
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <CarouselItem key={achievement.title} className="md:basis-1/2 lg:basis-1/2">
                  <Card 
                    className="p-8 bg-card/50 backdrop-blur border-2 border-primary/20 hover:border-primary/50 hover-glow transition-all duration-500 h-full"
                  >
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="p-4 rounded-lg bg-primary/10 text-primary">
                          <Icon className="w-8 h-8" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xl font-bold text-foreground">
                            {achievement.title}
                          </h3>
                          <span className="text-sm font-semibold text-primary whitespace-nowrap">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
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

export default Achievements;