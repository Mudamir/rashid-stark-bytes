import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar, MapPin, Zap } from "lucide-react";

interface ExperienceItem {
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  skills?: string[];
  logo: string;
}

const experiences: ExperienceItem[] = [
  {
    type: "work",
    title: "Student Software Developer",
    organization: "Commission on Higher Education Region XI",
    location: "Davao City, Philippines",
    period: "Mar 2025 - Aug 2025",
    description: [
      "Developed and deployed the CHEDRO XI eNSTP Serial Number Application and Issuance System, a full-scale web solution that streamlined their digital operations",
      "Recognized with a Plaque of Recognition from the CHEDRO XI (2025) for outstanding innovation and impact in higher education digitalization"
    ],
    skills: ["Java", "OOP", "UI/UX Design", "System Design", "Backend Development"],
    logo: "/Experience/ched-logo.jpg"
  },
  {
    type: "work",
    title: "Graphic Designer (Freelance)",
    organization: "Urban doll (Oregon, Northwest US)",
    location: "Remote",
    period: "Jan 2022 - Dec 2023",
    description: [
      "Transformed client ideas into compelling visual designs that boosted brand visibility, enhanced digital presence, and supported successful marketing campaigns across social media and print platforms"
    ],
    skills: ["Figma", "Adobe Photoshop", "Canva", "Brand Strategy", "Social Media Marketing"],
    logo: "/Experience/urbandoll-logo.jpg"
  },
  {
    type: "work",
    title: "Social Media Manager and Creative Director",
    organization: "Line Tech Marketing Agency",
    location: "Davao City, Philippines",
    period: "Jan 2022 - Dec 2023",
    description: [
      "Led digital branding and content strategy by managing social media platforms, creating engaging campaigns, and directing creative visuals that strengthened the company's online presence and customer engagement"
    ],
    skills: ["Social Media Management", "Content Strategy", "Creative Direction", "Digital Marketing", "Campaign Management"],
    logo: "/Experience/linetech-logo.png"
  },
  {
    type: "work",
    title: "Software Developer",
    organization: "Ferrer Deco Rental Real Estate",
    location: "Davao City, Philippines",
    period: "Oct 2021 - Dec 2021",
    description: [
      "Designed and implemented software solutions for rental management, client scheduling, and record-keeping, while developing secure databases and automating workflows to optimize real estate operations"
    ],
    skills: ["Python", "Django", "Database Management", "Automation", "Backend Development"],
    logo: "/Experience/ferrerdeco-logo.png"
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "Mapúa Malayan Colleges Mindanao",
    location: "Davao City, Philippines",
    period: "2021 - Present",
    description: [
      "Senior Computer Science student specializing in AI/ML Engineering, UI/UX Design, and Software Engineering",
      "Active member of DICE organization as Creatives and Marketing Head",
      "Multiple research publications and competition wins in AI/ML and pitching competitions"
    ],
    skills: ["AI/ML", "Software Engineering", "UI/UX Design", "Research"],
    logo: "/Experience/mcm-logo.png"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none"></div>
      
      {/* Arc Reactor Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(195 100% 65% / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(195 100% 65% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm mb-6 jarvis-scan">
            <Zap className="w-4 h-4 text-accent animate-glow-pulse" />
            <span className="text-xs md:text-sm text-accent font-mono">EXPERIENCE TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black gradient-text mb-4 md:mb-6">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Professional journey and academic background
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {experiences.map((item, index) => {
            const isEducation = item.type === "education";
            const Icon = isEducation ? GraduationCap : Briefcase;
            
            return (
              <Card 
                key={index}
                className={`relative p-5 md:p-8 bg-card/50 backdrop-blur border-2 hover-stark transition-all duration-500 touch-feedback group ${
                  isEducation ? 'border-accent/30 hover:border-accent/60' : 'border-primary/30 hover:border-primary/60'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Arc Reactor Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl rounded-full -translate-y-16 translate-x-16 ${
                  isEducation ? 'bg-accent/30' : 'bg-primary/30'
                }`}></div>

                {/* Holographic Scan Line */}
                <div className={`absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity ${
                  isEducation ? 'bg-gradient-to-r from-transparent via-accent to-transparent' : 'bg-gradient-to-r from-transparent via-primary to-transparent'
                }`}></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      {/* Company/Institution Logo */}
                      <div className={`relative rounded-lg flex-shrink-0 overflow-hidden border-2 ${
                        isEducation ? 'border-accent/30' : 'border-primary/30'
                      } w-14 h-14 md:w-16 md:h-16`}>
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity blur-lg ${
                          isEducation ? 'bg-accent/30' : 'bg-primary/30'
                        }`}></div>
                        <img 
                          src={item.logo} 
                          alt={`${item.organization} logo`}
                          className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Category Icon Badge */}
                      <div className={`absolute top-0 right-0 p-2 rounded-lg ${
                        isEducation ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'
                      }`}>
                        <Icon className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`text-lg md:text-xl lg:text-2xl font-bold mb-1 group-hover:transition-colors ${
                          isEducation ? 'text-foreground group-hover:text-accent' : 'text-foreground group-hover:text-primary'
                        }`}>
                          {item.title}
                        </h3>
                        <p className="text-base md:text-lg font-semibold text-muted-foreground mb-2">
                          {item.organization}
                        </p>
                        <div className="flex flex-wrap gap-3 text-xs md:text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{item.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4 ml-0 md:ml-16">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-sm md:text-base text-muted-foreground leading-relaxed flex items-start gap-2">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          isEducation ? 'bg-accent' : 'bg-primary'
                        }`}></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  {item.skills && (
                    <div className="flex flex-wrap gap-1.5 md:gap-2 ml-0 md:ml-16">
                      {item.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="outline"
                          className={`text-xs hover-stark ${
                            isEducation ? 'bg-accent/10 text-accent border-accent/30' : 'bg-primary/10 text-primary border-primary/30'
                          }`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
