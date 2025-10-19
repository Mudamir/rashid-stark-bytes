import { Card } from "@/components/ui/card";
import { Trophy, Award, Users, Image as ImageIcon, Zap } from "lucide-react";

interface Achievement {
  icon: typeof Trophy;
  title: string;
  description: string;
  year: string;
  imagePlaceholder: string;
}

const achievements: Achievement[] = [
  {
    icon: Trophy,
    title: "MCITS Region XI IT Pitching Competition 2025",
    description: "1st Place - The Innovators | Mapúa Malayan Colleges Mindanao",
    year: "2025",
    imagePlaceholder: "/achievements/mcits-first-place.jpg"
  },
  {
    icon: Award,
    title: "CCIS MMCM Innovation Pitching Competition",
    description: "1st Place - The Innovators | 2023 CCIS MMCM",
    year: "2023",
    imagePlaceholder: "/achievements/ccis-first-place.jpg"
  },
  {
    icon: Award,
    title: "DICT Davao City Pitching Competition 2024",
    description: "1st Place - Mapúa Malayan Colleges Mindanao",
    year: "2024",
    imagePlaceholder: "/achievements/dict-first-place.jpg"
  },
  {
    icon: Award,
    title: "DICT Regional Startup Pitching Competition 2024",
    description: "1st Runner-Up - Mapúa Malayan Colleges Mindanao",
    year: "2024",
    imagePlaceholder: "/achievements/dict-regional.jpg"
  },
  {
    icon: Award,
    title: "DICT Davao City Pitching Competition 2024",
    description: "3rd Place - Mapúa Malayan Colleges Mindanao",
    year: "2024",
    imagePlaceholder: "/achievements/dict-third-place.jpg"
  },
  {
    icon: Users,
    title: "DICE - Creatives and Marketing Head",
    description: "Davao Innovative Computer Enthusiasts | August 2025 - Present",
    year: "2025",
    imagePlaceholder: "/achievements/dice-head.png"
  },
  {
    icon: Users,
    title: "BLOCKCHAIN PORTFOLIO USING CANVA 2ND PROGRAM DIRECTOR",
    description: "October 15, 2024 (Davao City Philippines) | Mapúa Malayan Colleges Mindanao",
    year: "2024",
    imagePlaceholder: "/achievements/blockchain-director.jpg"
  },
  {
    icon: Users,
    title: "DEVELOPING E-PORTFOLIO USING CANVA TOPIC SPEAKER",
    description: "October 24, 2024 (Mapúa Malayan Colleges Mindanao)",
    year: "2024",
    imagePlaceholder: "/achievements/canva-speaker.jpg"
  },
  {
    icon: Users,
    title: "GEEKS ON A BEACH 7TH ROOM MANAGER",
    description: "November 15-16, 2024 (Cebu City Philippines)",
    year: "2024",
    imagePlaceholder: "/achievements/geeks-manager.jpg"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 md:py-32 bg-card/20 relative overflow-hidden">
      {/* Arc Reactor Energy Field */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(195 100% 65% / 0.3), transparent 50%)`,
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary/40 rounded-full animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          {/* JARVIS Status Indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 backdrop-blur-sm mb-6 jarvis-scan">
            <Trophy className="w-4 h-4 text-secondary animate-glow-pulse" />
            <span className="text-xs md:text-sm text-secondary font-mono">ACHIEVEMENT LOG</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black gradient-gold mb-4 md:mb-6">
            Achievements & Recognition
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Awards, leadership roles, and notable accomplishments
          </p>
        </div>

        {/* Modern Square Grid Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={achievement.title}
                className="relative p-0 bg-card/50 backdrop-blur border-2 border-secondary/30 hover:border-secondary/60 hover-stark transition-all duration-500 touch-feedback group overflow-hidden aspect-square flex flex-col"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Arc Reactor Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-16 translate-x-16 z-0"></div>

                {/* Square Achievement Image */}
                <div className="relative w-full h-3/5 bg-gradient-to-br from-secondary/20 via-card to-accent/20 overflow-hidden">
                  {/* Actual Image */}
                  <img 
                    src={achievement.imagePlaceholder} 
                    alt={achievement.title}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  
                  {/* Fallback Icon Placeholder (hidden by default) */}
                  <div className="absolute inset-0 hidden flex items-center justify-center bg-gradient-to-br from-secondary/20 via-card to-accent/20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-secondary/30 blur-2xl rounded-full animate-arc-pulse"></div>
                      <ImageIcon className="w-12 h-12 md:w-16 md:h-16 text-secondary/60 relative z-10" />
                    </div>
                  </div>

                  {/* Dark gradient overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  {/* Holographic Grid Overlay */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity" style={{
                    backgroundImage: `linear-gradient(hsl(45 100% 55% / 0.5) 1px, transparent 1px),
                                     linear-gradient(90deg, hsl(45 100% 55% / 0.5) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}></div>

                  {/* Scan Line Effect */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 animate-scan z-10"></div>

                  {/* Year Badge - Top Right */}
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-secondary/40 z-10">
                    <span className="text-xs font-bold text-secondary font-mono">{achievement.year}</span>
                  </div>

                  {/* Icon Badge - Top Left */}
                  <div className="absolute top-2 left-2 p-2 rounded-lg bg-background/90 backdrop-blur-sm border border-secondary/40 z-10">
                    <Icon className="w-4 h-4 text-secondary" />
                  </div>
                </div>

                {/* Content - Bottom Section */}
                <div className="relative flex-1 p-4 flex flex-col justify-between z-10">
                  <div className="space-y-1.5">
                    <h3 className="text-sm md:text-base font-bold text-foreground group-hover:text-secondary transition-colors line-clamp-2">
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Holographic Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
