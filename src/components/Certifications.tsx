import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Database, TrendingUp, Share2, Award, Shield, Brain, Network, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Certification {
  id: string;
  title: string;
  provider: string;
  category: "Data Science" | "Programming" | "Social Media" | "Cybersecurity" | "AI/ML" | "Networks" | "Microsoft Excel" | "All";
  icon: typeof GraduationCap;
  color: "primary" | "secondary" | "accent";
  verifyUrl?: string;
}

const certifications: Certification[] = [
  // Data Science
  {
    id: "1",
    title: "IBM: What is Data Science?",
    provider: "IBM",
    category: "Data Science",
    icon: Database,
    color: "primary",
    verifyUrl: "https://coursera.org/verify/OS4RPIDJGPYI"
  },
  {
    id: "2",
    title: "Google: Analyze Data to Answer Question",
    provider: "Google",
    category: "Data Science",
    icon: Database,
    color: "primary",
    verifyUrl: "https://coursera.org/verify/T7FTQ58WP3Y4"
  },
  {
    id: "3",
    title: "Google: Ask Questions to Make Data-Driven Decisions",
    provider: "Google",
    category: "Data Science",
    icon: Database,
    color: "primary"
  },
  {
    id: "4",
    title: "Google: Data Analytics Capstone: Complete a Case Study",
    provider: "Google",
    category: "Data Science",
    icon: Database,
    color: "primary"
  },
  {
    id: "5",
    title: "Google: Prepare Data for Exploration",
    provider: "Google",
    category: "Data Science",
    icon: Database,
    color: "primary",
    verifyUrl: "https://coursera.org/verify/DBDTKNB99MX6"
  },
  {
    id: "6",
    title: "Google: Process Data from Dirty to Clean",
    provider: "Google",
    category: "Data Science",
    icon: Database,
    color: "primary",
    verifyUrl: "https://coursera.org/verify/QYPHLL9DF9WZ"
  },
  {
    id: "7",
    title: "Google: Share Data Through the Art of Visualization",
    provider: "Google",
    category: "Data Science",
    icon: Database,
    color: "primary",
    verifyUrl: "https://coursera.org/verify/U49G8RGFT46T"
  },
  {
    id: "8",
    title: "Google: Foundations: Data, Data, Everywhere",
    provider: "Google",
    category: "Data Science",
    icon: Database,
    color: "primary",
    verifyUrl: "https://coursera.org/verify/CPHVBDCPENLS"
  },
  {
    id: "9",
    title: "Google: Advanced Data Analytics for Machine Learning",
    provider: "Google",
    category: "Data Science",
    icon: Database,
    color: "primary",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/EVX4RDYF3CL4"
  },
  {
    id: "10",
    title: "Google: Data Analytics Professional Certificate",
    provider: "Google",
    category: "Data Science",
    icon: Award,
    color: "primary",
    verifyUrl: "https://www.credly.com/earner/earned/badge/017bfb80-2a57-423b-8725-3bbb6f1a58d6"
  },
  
  // Object-Oriented Programming
  {
    id: "11",
    title: "Ohio Hocking University: Custom Projects with Raspberry Pi",
    provider: "Ohio Hocking University",
    category: "Programming",
    icon: Code,
    color: "accent",
    verifyUrl: "https://coursera.org/verify/XQRBCZA7UVDS"
  },
  {
    id: "12",
    title: "LinkedIn: Programming Foundations",
    provider: "LinkedIn",
    category: "Programming",
    icon: Code,
    color: "accent",
    verifyUrl: "https://www.linkedin.com/learning/certificates/308734a1952ad228db7c9e0b999a6ab34b6797e612d0b8e91e1de63b996ab3fb"
  },
  {
    id: "13",
    title: "LinkedIn: SQL Essential Training",
    provider: "LinkedIn",
    category: "Programming",
    icon: Code,
    color: "accent",
    verifyUrl: "https://www.linkedin.com/learning/certificates/c4e3a9ab4b2373bf3210b756931c006961df7283c2198e4fbfe5ef4ea088107a"
  },
  {
    id: "14",
    title: "Michigan State University: Programming for Everybody",
    provider: "Michigan State University",
    category: "Programming",
    icon: Code,
    color: "accent",
    verifyUrl: "https://coursera.org/verify/PK8QW7F6CCCG"
  },
  
  // Social Media Management
  {
    id: "15",
    title: "Meta: Advertising with Meta",
    provider: "Meta",
    category: "Social Media",
    icon: Share2,
    color: "secondary",
    verifyUrl: "https://coursera.org/verify/9C2GFWC46KDW"
  },
  {
    id: "16",
    title: "Meta: Fundamentals of Social Media Advertising",
    provider: "Meta",
    category: "Social Media",
    icon: Share2,
    color: "secondary",
    verifyUrl: "https://coursera.org/share/90f52102ed904934d76fbf0f7468f8dd"
  },
  {
    id: "17",
    title: "Meta: Measure and Optimize Social Media Marketing Campaigns",
    provider: "Meta",
    category: "Social Media",
    icon: Share2,
    color: "secondary",
    verifyUrl: "https://coursera.org/verify/GVZARZLHF6ZQ"
  },
  {
    id: "18",
    title: "Meta: Advertising Campaign Setup for Marketing",
    provider: "Meta",
    category: "Social Media",
    icon: Share2,
    color: "secondary",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/EHQY6ZGVMTXD"
  },
  {
    id: "19",
    title: "Meta: Introduction to Social Media Management",
    provider: "Meta",
    category: "Social Media",
    icon: Share2,
    color: "secondary",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/LZSEJLU27Y5D"
  },
  
  // Cybersecurity
  {
    id: "20",
    title: "Google: Identify Threats and Vulnerabilities",
    provider: "Google",
    category: "Cybersecurity",
    icon: Shield,
    color: "accent"
  },
  {
    id: "21",
    title: "Google: Automate Cybersecurity Tasks with Python",
    provider: "Google",
    category: "Cybersecurity",
    icon: Shield,
    color: "accent",
    verifyUrl: "https://coursera.org/verify/7GMG44Y52H9N"
  },
  {
    id: "22",
    title: "Google: Connect and Protect Networks and Network Security",
    provider: "Google",
    category: "Cybersecurity",
    icon: Shield,
    color: "accent",
    verifyUrl: "https://coursera.org/verify/T9KM5TW6P2P8"
  },
  {
    id: "23",
    title: "Google: Foundation of Cybersecurity",
    provider: "Google",
    category: "Cybersecurity",
    icon: Shield,
    color: "accent",
    verifyUrl: "https://coursera.org/verify/2GQJAUQ52BP3"
  },
  {
    id: "24",
    title: "Google: Assets, Threats, and Vulnerabilities",
    provider: "Google",
    category: "Cybersecurity",
    icon: Shield,
    color: "accent",
    verifyUrl: "https://coursera.org/verify/CNTHGVDLZV5G"
  },
  {
    id: "25",
    title: "IBM: Introduction to Cybersecurity Tools & Cyber Attacks",
    provider: "IBM",
    category: "Cybersecurity",
    icon: Shield,
    color: "accent",
    verifyUrl: "https://coursera.org/verify/FGZQWN255NLA"
  },
  {
    id: "26",
    title: "Introduction to Cybersecurity Tools & Cyber Attacks",
    provider: "IBM",
    category: "Cybersecurity",
    icon: Shield,
    color: "accent",
    verifyUrl: "https://www.credly.com/earner/earned/badge/b66ea8cb-cade-47ad-ae1b-b721dbd7838c"
  },
  {
    id: "27",
    title: "LinkedIn: Cybersecurity Foundations",
    provider: "LinkedIn",
    category: "Cybersecurity",
    icon: Shield,
    color: "accent",
    verifyUrl: "https://www.linkedin.com/learning/certificates/180557e54a6e6e1f47efcef60634063aa1ab9f6ff2f9488034e716115a2a0b3c"
  },
  {
    id: "28",
    title: "LinkedIn: Information Management: Information Security",
    provider: "LinkedIn",
    category: "Cybersecurity",
    icon: Shield,
    color: "accent",
    verifyUrl: "https://www.linkedin.com/learning/certificates/af5a53bdcba9626e48c35fe55f2760b3dc017b48a86a6885f71348acb9b09542"
  },
  {
    id: "29",
    title: "Google: Play It Safe: Manage Security Risks",
    provider: "Google",
    category: "Cybersecurity",
    icon: Shield,
    color: "accent",
    verifyUrl: "https://coursera.org/verify/4KYCKRLSVLCW"
  },
  {
    id: "30",
    title: "Google: Put It to Work: Prepare for Cybersecurity Jobs",
    provider: "Google",
    category: "Cybersecurity",
    icon: Shield,
    color: "accent",
    verifyUrl: "https://coursera.org/verify/5BDRF2T3YTXA"
  },
  {
    id: "31",
    title: "LinkedIn: Social Media Marketing Strategy: TikTok and Instagram Reels",
    provider: "LinkedIn",
    category: "Social Media",
    icon: Share2,
    color: "secondary",
    verifyUrl: "https://www.linkedin.com/learning/certificates/0a9fdd222458d5970906cc52a9177869dbd7d15b889a73fb814d2664712bb1dd"
  },
  {
    id: "32",
    title: "Google: Tools of the Trade: Linux and SQL",
    provider: "Google",
    category: "Cybersecurity",
    icon: Shield,
    color: "accent",
    verifyUrl: "https://coursera.org/verify/MRH9ZQLTR79N"
  },
  {
    id: "33",
    title: "Google: Sound the Alarm: Detection and Response",
    provider: "Google",
    category: "Cybersecurity",
    icon: Shield,
    color: "accent",
    verifyUrl: "https://coursera.org/verify/TD9EZDMMHKWV"
  },
  
  // Microsoft Excel
  {
    id: "34",
    title: "Microsoft Office Specialist: Excel Certification",
    provider: "Microsoft",
    category: "Microsoft Excel",
    icon: Database,
    color: "primary",
    verifyUrl: "https://www.certiport.com/portal/pages/credentialverification.aspx"
  },
  {
    id: "35",
    title: "LinkedIn: Excel for Corporate Finance Professionals",
    provider: "LinkedIn",
    category: "Microsoft Excel",
    icon: Database,
    color: "primary",
    verifyUrl: "https://www.linkedin.com/learning/certificates/314933543ce22828b54b4c5558979aa9140a7cd0b6134530e515ea549137679c"
  },
  
  // Artificial Intelligence
  {
    id: "36",
    title: "LinkedIn: Machine Learning Algorithms and Complexity",
    provider: "LinkedIn",
    category: "AI/ML",
    icon: Brain,
    color: "primary",
    verifyUrl: "https://coursera.org/verify/EF6ZV879BHE2"
  },
  {
    id: "37",
    title: "LinkedIn: Working with NLP",
    provider: "LinkedIn",
    category: "AI/ML",
    icon: Brain,
    color: "primary",
    verifyUrl: "https://www.linkedin.com/learning/certificates/04d106d978cabd940a4d4d0d47b10619daf45b39feada1d8dd9fb46e7e1592c7"
  },
  {
    id: "38",
    title: "LinkedIn: AI Text Summarization with Hugging Face",
    provider: "LinkedIn",
    category: "AI/ML",
    icon: Brain,
    color: "primary"
  },
  {
    id: "39",
    title: "LinkedIn: AI in Business Essential Training",
    provider: "LinkedIn",
    category: "AI/ML",
    icon: Brain,
    color: "primary"
  },
  {
    id: "40",
    title: "LinkedIn: Applied AI: Building NLP Apps with Langchain and Transformers",
    provider: "LinkedIn",
    category: "AI/ML",
    icon: Brain,
    color: "primary",
    verifyUrl: "https://www.linkedin.com/learning/certificates/a621c7920921ad383557270b83d9b6c1926c5bb96187e789a503e390e9bc7f98"
  },
  {
    id: "41",
    title: "LinkedIn: Develop Your Skills with Langchain",
    provider: "LinkedIn",
    category: "AI/ML",
    icon: Brain,
    color: "primary",
    verifyUrl: "https://www.linkedin.com/learning/certificates/a621c7920921ad383557270b83d9b6c1926c5bb96187e789a503e390e9bc7f98"
  },
  {
    id: "42",
    title: "LinkedIn: GPT-4 Foundations: Building AI-Powered Apps",
    provider: "LinkedIn",
    category: "AI/ML",
    icon: Brain,
    color: "primary",
    verifyUrl: "https://www.linkedin.com/learning/certificates/2d0dcbab939d128b454d3564e4262c6b8b82a79b599cd2f9cf3de53035099e70"
  },
  {
    id: "43",
    title: "LinkedIn: Generative AI: Introduction to Large Language Models",
    provider: "LinkedIn",
    category: "AI/ML",
    icon: Brain,
    color: "primary",
    verifyUrl: "https://www.linkedin.com/learning/certificates/8131cd88f1e1c9a9576f43af03c71524aa49387aee71362bc106e1c4361be7c9"
  },
  {
    id: "44",
    title: "LinkedIn: Generative AI: Working with Large Language Models",
    provider: "LinkedIn",
    category: "AI/ML",
    icon: Brain,
    color: "primary",
    verifyUrl: "https://www.linkedin.com/learning/certificates/dd41c1b9f9b2472519dbdf74aba3af2dbdafdaedfa5fd529573172c2e1197da8"
  },
  {
    id: "45",
    title: "LinkedIn: Introduction to Generative AI",
    provider: "LinkedIn",
    category: "AI/ML",
    icon: Brain,
    color: "primary"
  },
  {
    id: "46",
    title: "LinkedIn: Introduction to Generative AI with GPT",
    provider: "LinkedIn",
    category: "AI/ML",
    icon: Brain,
    color: "primary",
    verifyUrl: "https://www.linkedin.com/learning/certificates/b5ee75f7ef15f1942b5c78fb1374dd9c62376afc366e855522d557c9313d0258"
  },
  {
    id: "47",
    title: "LinkedIn: Building Large Language Models",
    provider: "LinkedIn",
    category: "AI/ML",
    icon: Brain,
    color: "primary"
  },
  {
    id: "48",
    title: "LinkedIn: Engineering for Generative AI (2023)",
    provider: "LinkedIn",
    category: "AI/ML",
    icon: Brain,
    color: "primary",
    verifyUrl: "https://www.linkedin.com/learning/certificates/fd297910d9a8e6b09c57dce58338f7c1bc3199ba45ea90e1fa17d23e9aaa61c9"
  },
  {
    id: "49",
    title: "LinkedIn: Building Large Language Models for Text Classification for NLP using BERT",
    provider: "LinkedIn",
    category: "AI/ML",
    icon: Brain,
    color: "primary",
    verifyUrl: "https://www.linkedin.com/learning/certificates/09c38c2f8edeb85a1b92a841923d9a0cce0896192aed95f1c497cf5a99b13200"
  },
  
  // Networks
  {
    id: "50",
    title: "LinkedIn: Introduction to Networks",
    provider: "LinkedIn",
    category: "Networks",
    icon: Network,
    color: "accent",
    verifyUrl: "https://www.linkedin.com/learning/certificates/e4291ffd094a901235b59fd779db478fb4d3b535df1b84123570463504253285"
  },
  {
    id: "51",
    title: "LinkedIn: Introduction to Network Routing",
    provider: "LinkedIn",
    category: "Networks",
    icon: Network,
    color: "accent",
    verifyUrl: "https://www.linkedin.com/learning/certificates/e4291ffd094a901235b59fd779db478fb4d3b535df1b84123570463504253285"
  },
  {
    id: "52",
    title: "LinkedIn: Introduction to Foundation-Level Area Networks (LANs) (2015)",
    provider: "LinkedIn",
    category: "Networks",
    icon: Network,
    color: "accent",
    verifyUrl: "https://www.linkedin.com/learning/certificates/4ef591b40d98b7a2804fd67cc218e90f02125643b636d6b89ea735f644ced57e"
  }
];

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState<"All" | "Data Science" | "Programming" | "Social Media" | "Cybersecurity" | "AI/ML" | "Networks" | "Microsoft Excel">("All");

  const filters = ["All", "Data Science", "AI/ML", "Cybersecurity", "Programming", "Networks", "Social Media", "Microsoft Excel"];

  const filteredCerts = activeFilter === "All" 
    ? certifications 
    : certifications.filter(cert => cert.category === activeFilter);

  const getCategoryCount = (category: string) => {
    if (category === "All") return certifications.length;
    return certifications.filter(cert => cert.category === category).length;
  };

  return (
    <section id="certifications" className="py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Arc Reactor Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(195 100% 65% / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(195 100% 65% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Energy Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm mb-6">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-xs md:text-sm text-primary font-medium">Professional Certifications</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
            Continuous Learning,
            <span className="block text-primary mt-2">Proven Expertise</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
            Certified by industry leaders including Google, LinkedIn, Meta, IBM, and Microsoft
          </p>
        </div>

        {/* Filter Pills - Clean Design */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter as typeof activeFilter)}
              className={`
                relative px-5 md:px-7 py-2.5 md:py-3.5 rounded-full font-medium text-sm md:text-base
                transition-all duration-300 touch-feedback
                ${activeFilter === filter 
                  ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/30 scale-105' 
                  : 'bg-card/30 text-muted-foreground hover:bg-card/50 hover:text-foreground border border-border/50 hover:border-primary/30'
                }
              `}
            >
              <span className="relative z-10">{filter}</span>
              {activeFilter === filter && (
                <div className="absolute inset-0 bg-primary/10 blur-lg rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Certifications Grid - Modern Card Design */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 px-4">
          {filteredCerts.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card
                key={cert.id}
                className="relative group overflow-hidden bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.03}s`
                }}
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative p-5 md:p-6">
                  {/* Icon Badge */}
                  <div className="mb-4 inline-flex">
                    <div className={`
                      p-3 rounded-xl transition-all duration-300
                      ${cert.color === 'primary' ? 'bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110' : ''}
                      ${cert.color === 'secondary' ? 'bg-secondary/10 text-secondary group-hover:bg-secondary/20 group-hover:scale-110' : ''}
                      ${cert.color === 'accent' ? 'bg-accent/10 text-accent group-hover:bg-accent/20 group-hover:scale-110' : ''}
                    `}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  {/* Provider */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-px flex-1 bg-border/50"></div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {cert.provider}
                    </p>
                    <div className="h-px flex-1 bg-border/50"></div>
                  </div>

                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`
                      inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                      ${cert.color === 'primary' ? 'bg-primary/10 text-primary' : ''}
                      ${cert.color === 'secondary' ? 'bg-secondary/10 text-secondary' : ''}
                      ${cert.color === 'accent' ? 'bg-accent/10 text-accent' : ''}
                    `}>
                      {cert.category}
                    </span>
                    
                    {/* Verified Badge */}
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium
                        transition-all duration-200 hover:gap-3
                        ${cert.color === 'primary' ? 'bg-primary/10 text-primary hover:bg-primary/20' : ''}
                        ${cert.color === 'secondary' ? 'bg-secondary/10 text-secondary hover:bg-secondary/20' : ''}
                        ${cert.color === 'accent' ? 'bg-accent/10 text-accent hover:bg-accent/20' : ''}
                      `}
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Bottom Accent Line */}
                <div className={`
                  absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                `}></div>
              </Card>
            );
          })}
        </div>

        {/* Trusted By Section */}
        <div className="mt-16 md:mt-20 text-center px-4">
          <p className="text-sm text-muted-foreground mb-6">Certified by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-4xl mx-auto">
            <div className="text-2xl md:text-3xl font-bold text-primary/60 hover:text-primary transition-colors">Google</div>
            <div className="text-2xl md:text-3xl font-bold text-primary/60 hover:text-primary transition-colors">LinkedIn</div>
            <div className="text-2xl md:text-3xl font-bold text-secondary/60 hover:text-secondary transition-colors">Meta</div>
            <div className="text-2xl md:text-3xl font-bold text-primary/60 hover:text-primary transition-colors">IBM</div>
            <div className="text-2xl md:text-3xl font-bold text-primary/60 hover:text-primary transition-colors">Microsoft</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
