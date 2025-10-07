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
    <section id="achievements" className="py-16 md:py-32 bg-card/20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-center mb-4 md:mb-6 gradient-text">
          Achievements & Recognition
        </h2>
        <p className="text-center text-muted-foreground text-sm md:text-base lg:text-lg mb-12 md:mb-16 max-w-2xl mx-auto px-4">
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
                <CarouselItem key={achievement.title} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <Card 
                    className="p-5 md:p-8 bg-card/50 backdrop-blur border-2 border-primary/20 hover:border-primary/50 active:border-primary/60 hover-glow active:shadow-lg transition-all duration-500 h-full touch-feedback"
                  >
                    <div className="flex gap-4 md:gap-6">
                      <div className="flex-shrink-0">
                        <div className="p-3 md:p-4 rounded-lg bg-primary/10 text-primary">
                          <Icon className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                      </div>
                      <div className="space-y-1 md:space-y-2 flex-1">
                        <div className="flex items-start justify-between gap-2 md:gap-4">
                          <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground">
                            {achievement.title}
                          </h3>
                          <span className="text-xs md:text-sm font-semibold text-primary whitespace-nowrap">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
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