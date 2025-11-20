import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText, Zap, Briefcase, Filter } from "lucide-react";

interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  category: "AI/ML" | "UI/UX Design" | "Software Development" | "Graphic Design" | "All" | ("AI/ML" | "UI/UX Design" | "Software Development" | "Graphic Design")[];
  type: "software" | "research" | "design";
  description: string;
  achievements: string[];
  tech: string[];
  color: "primary" | "secondary" | "accent";
  image?: string;
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
  };
}

const projects: Project[] = [
  {
    id: "1",
    title: "MathemaThink: Dyscalculia Screening Tool",
    company: "UI/UX Designer | Computer Scientist | Researcher",
    period: "Aug 2024 - Oct 2025",
    category: "AI/ML",
    type: "research",
    image: "/projects/mathemathink-placeholder.png",
    description: "A web-based rule-based screening tool for early detection of dyscalculia among Filipino schoolchildren. Using six math cognition tasks and DSM-5-based criteria, it classified students as 'at-risk' or 'not at-risk'. Tested on 424 students (Grades 2-4) from Davao and Digos City, the tool found a 7.5% overall risk rate. Validated by psychometricians, the tool proved performance and identified Grade 2 as a key stage for intervention.",
    achievements: [
      "Developed accessible, culturally relevant dyscalculia screening aligned with SDG 4",
      "Achieved 7.5% overall risk rate with validated performance",
      "Identified Grade 2 as key intervention stage for math ability support"
    ],
    tech: ["Rule-Based Classification", "DSM-5 Criteria", "UI/UX Design", "Educational Technology", "Research"],
    color: "primary",
    links: {
      demo: "https://drive.google.com/file/d/1CdDB0taSQ2LPYMuTb3QdCBYZApUChd2h/view",
      paper: "https://drive.google.com/file/d/1CdDB0taSQ2LPYMuTb3QdCBYZApUChd2h/view"
    }
  },
  {
    id: "2",
    title: "Gender Classification Using ResNet CNN",
    company: "Software Developer | ML Engineer",
    period: "March 2025 - Sept 2024",
    category: "AI/ML",
    type: "research",
    image: "/projects/resnet-placeholder.png",
    description: "Led a research project integrating deep learning architectures (ResNet-50 and ResNet-101) for automated gender classification based on handwritten samples, achieving enhanced accuracy and scalability. The study contributes to advancements in forensic science and biometric authentication, demonstrating the potential of CNN models for handwriting analysis reliability and efficiency.",
    achievements: [
      "Integrated ResNet-50 and ResNet-101 for enhanced accuracy in gender classification",
      "Advanced forensic science and biometric authentication applications",
      "Demonstrated CNN model reliability and efficiency for handwriting analysis"
    ],
    tech: ["Python", "TensorFlow", "ResNet-50", "ResNet-101", "CNN", "Deep Learning"],
    color: "primary",
    links: {
      paper: "https://drive.google.com/file/d/1cGo9dwMThwxsS9XEw8yUB_sBEpuIYrwp/view?usp=sharing"
    }
  },
  {
    id: "3",
    title: "Ensemble ML for Phishing Email Detection",
    company: "AI Engineer | ML Engineer",
    period: "Jan 2022 - Nov 2023",
    category: "AI/ML",
    type: "research",
    image: "/projects/research-placeholder.png",
    description: "Developed an ensemble machine learning framework leveraging NLP and TF-IDF for phishing detection, providing high accuracy and interpretability. This work advances understanding of AI's role in cybersecurity by demonstrating how ensemble methods and explainability improve robustness and trust in automated threat detection systems.",
    achievements: [
      "Developed ensemble ML framework with high accuracy for phishing detection",
      "Advanced AI role in cybersecurity through ensemble methods",
      "Improved robustness and trust in automated threat detection systems"
    ],
    tech: ["Python", "Scikit-Learn", "NLP", "TF-IDF", "Ensemble Methods", "Machine Learning"],
    color: "primary",
    links: {
      github: "https://github.com/Mudamir/InfoAssurance/tree/main/phishing-detector",
      paper: "https://drive.google.com/file/d/10P3qe0RhYPMjbr3xr6J_p7XDurNDC9qc/view"
    }
  },
  {
    id: "4",
    title: "eNSTP Serial Number System for CHED",
    company: "UI/UX Designer | Software Developer",
    period: "Feb 2025 - Aug 2025",
    category: ["Software Development", "UI/UX Design"],
    type: "software",
    image: "/projects/enstp-placeholder.png",
    description: "As a software developer, I created a functional and user-friendly event registration system for a regional CHED-based organization using Java and object-oriented design. This project strengthened my skills in planning, design, and debugging while delivering a solution that met the client's needs.",
    achievements: [
      "Created functional event registration system for CHED Regional Office XI",
      "Strengthened skills in planning, design, and debugging",
      "Delivered user-friendly solution meeting client's organizational needs"
    ],
    tech: ["Java", "OOP", "UI/UX Design", "System Design", "Backend Development"],
    color: "accent",
    links: {
      github: "https://www.facebook.com/chedroxi/posts/pfbid02YvKWQoxYzxF8pF5ZMn2PmhAWcXkL13aYL5L9K5GkhmUmKuUDyiXzUK82skAqbtx5l?rdid=RKMDmBxxPb6QheEq#"
    }
  },
  {
    id: "5",
    title: "Real Estate Management System",
    company: "Ferrer Deco Rental Real Estate",
    period: "Oct 2021 - Dec 2021",
    category: "Software Development",
    type: "software",
    image: "/projects/realestate-placeholder.png",
    description: "Designed and implemented comprehensive software solutions for rental management and client operations.",
    achievements: [
      "Developed secure databases for property management",
      "Automated workflows to optimize real estate operations",
      "Created client scheduling and record-keeping systems"
    ],
    tech: ["Python", "Django", "Database Design", "REST APIs", "Automation"],
    color: "accent",
    links: {
      github: "https://github.com/Mudamir/IM_EXAM_M3_FINAL"
    }
  },
  {
    id: "6",
    title: "Marketing Booking Platform",
    company: "Kawaii Beach Resort in Samal",
    period: "Jan 2022 - Dec 2023",
    category: "UI/UX Design",
    type: "design",
    image: "/projects/kawaii-placeholder.png",
    description: "Designed and developed a comprehensive booking website with centralized management system and payment integration.",
    achievements: [
      "Created intuitive user flows and modern interface",
      "Integrated PayMongo payment gateway",
      "Developed centralized management dashboard"
    ],
    tech: ["Figma", "React", "Tailwind CSS", "Django", "PayMongo", "UI/UX Design"],
    color: "accent",
    links: {
      demo: "https://www.figma.com/proto/l1gICqRr1TOVxADAT2ifN9/Kawaii?node-id=1961-7388&t=nl2jRAb8FxLnWdRC-1&scaling=min-zoom&content-scaling=fixed&page-id=143%3A3334&starting-point-node-id=1957%3A6843",
    }
  },
  {
    id: "7",
    title: "Brand Identity & Social Media Strategy",
    company: "Urban doll (Oregon, Northwest US)",
    period: "Jan 2022 - Dec 2023",
    category: "Graphic Design",
    type: "design",
    image: "/projects/urbandoll-placeholder.png",
    description: "Led digital branding and content strategy, managing social media platforms and creating engaging campaigns.",
    achievements: [
      "Strengthened company's online presence",
      "Directed creative visuals for marketing campaigns",
      "Increased customer engagement across platforms"
    ],
    tech: ["Figma", "Adobe Photoshop", "Canva", "Social Media Marketing", "Brand Strategy"],
    color: "secondary",
    links: {
    }
  },
  {
    id: "8",
    title: "MOOnitor: Beef Freshness Detection (KNN)",
    company: "Machine Learning Research",
    period: "March 2025 - Sept 2024",
    category: "AI/ML",
    type: "research",
    image: "/projects/moonitor-placeholder.png",
    description: "Research showing that integrating IoT sensors with machine learning provides a reliable, low-cost method for beef freshness detection, achieving up to 99.91% accuracy. This contributes to science by advancing applied AI and IoT in food safety, with potential impact on public health, industry transparency, and future smart agriculture research.",
    achievements: [
      "Achieved 99.91% accuracy in beef freshness detection",
      "Integrated IoT sensors with machine learning for real-time monitoring",
      "Advanced applied AI and IoT in food safety with impact on public health"
    ],
    tech: ["Machine Learning", "IoT", "KNN Algorithm", "Chromatic Analysis", "VOC Sensors", "Python"],
    color: "primary",
    links: {
      paper: "https://drive.google.com/file/d/1plCgcjdsaP8dkoQAzC77PDgJ7Bp3f7sB/view"
    }
  },
  {
    id: "9",
    title: "ML Beef Freshness: Comparative Sensor Analysis",
    company: "Machine Learning Research",
    period: "March 2025 - Sept 2024",
    category: "AI/ML",
    type: "research",
    image: "/projects/research-placeholder.png",
    description: "The study evaluated independent vs. combined sensor data using six ML models for beef freshness detection. Independent data with soft voting, using ANN and SVM, achieved the highest accuracy (99.84%), while combined data slightly reduced performance. The result enhances IoT-based food safety, improving AI efficiency and food safety.",
    achievements: [
      "Achieved 99.84% accuracy using independent sensor data with soft voting",
      "Compared six ML models (ANN, SVM) for optimal beef freshness detection",
      "Enhanced IoT-based food safety through improved AI efficiency"
    ],
    tech: ["Machine Learning", "ANN", "SVM", "MQ2 Sensors", "MQ135 Sensors", "TCS3200 Sensors", "IoT", "Python"],
    color: "primary",
    links: {
      paper: "https://drive.google.com/file/d/1el2sv5YkBU8_JyxcHl7bQf8TGONexSK6/view"
    }
  },
  {
    id: "10",
    title: "BPI Investment Fund Prediction (ML)",
    company: "Data Scientist Research",
    period: "March 2025 - Sept 2024",
    category: "AI/ML",
    type: "research",
    image: "/projects/research-placeholder.png",
    description: "Our research used ML regression models (Decision Tree, Random Forest, Gradient Boosting) to predict BPI fund NAVPU from 10+ years of financial data. The Decision Tree model performed best, achieving low error rates and a perfect R² of 1.0. This study advances data science in finance by showing how interpretable ML models can improve investment decisions, risk management, and predictive analytics.",
    achievements: [
      "Achieved perfect R² of 1.0 using Decision Tree model for NAVPU prediction",
      "Analyzed 10+ years of BPI financial data for investment fund modeling",
      "Advanced data science in finance with interpretable ML models"
    ],
    tech: ["Machine Learning", "Decision Tree", "Random Forest", "Gradient Boosting", "Data Science", "Financial Analytics", "Python"],
    color: "primary",
    links: {
      paper: "https://drive.google.com/file/d/1NvH8__EGph2QjmXHj7uy_DEh82SumOYf/view"
    }
  },
  {
    id: "11",
    title: "Freelance Graphic Design",
    company: "Various Clients",
    period: "Mar 2025 - Aug 2025",
    category: "Graphic Design",
    type: "design",
    image: "/projects/freelance-placeholder.png",
    description: "Transformed client ideas into compelling visual designs for digital and print platforms.",
    achievements: [
      "Boosted brand visibility for multiple clients",
      "Enhanced digital presence across social media",
      "Supported successful marketing campaigns"
    ],
    tech: ["Figma", "Adobe Photoshop", "Canva", "Kittle", "Graphic Design"],
    color: "secondary",
    links: {
    }
  },
  {
    id: "12",
    title: "Pawnquest",
    company: "Pitching Competition",
    period: "Mar 2025 - Aug 2025",
    category: "UI/UX Design",
    type: "design",
    image: "/projects/pawnquest-placeholder.png",
    description: "Transformed  ideas into compelling visual designs for a mobile application.",
    achievements: [
      "Boosted brand visibility for multiple clients",
      "Enhanced digital presence across social media",
      "Supported successful marketing campaigns"
    ],
    tech: ["Figma", "React", "Tailwind CSS", "Django", "PayMongo", "UI/UX Design"],
    color: "secondary",
    links: {
    }
  }
];

const Projects = () => {
      const [activeFilter, setActiveFilter] = useState<"All" | "AI/ML" | "UI/UX Design" | "Software Development" | "Graphic Design">("All");

  const filters = ["All", "AI/ML", "UI/UX Design", "Software Development", "Graphic Design"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => {
        const categories = Array.isArray(p.category) ? p.category : [p.category];
        return categories.includes(activeFilter as any);
      });

  return (
    <section id="projects" className="py-16 md:py-32 bg-card/20 relative overflow-hidden">
      {/* Arc Reactor Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(195 100% 65% / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(195 100% 65% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating energy particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6 jarvis-scan">
            <Briefcase className="w-4 h-4 text-primary animate-glow-pulse" />
            <span className="text-xs md:text-sm text-primary font-mono">EXPERIENCE & PROJECTS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black gradient-text mb-4 md:mb-6">
            Work & Research
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4 mb-8">
            Real-world impact across AI/ML research, software engineering, and design
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`relative px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-primary text-primary-foreground glow-blue'
                    : 'bg-card/50 text-muted-foreground hover:text-foreground border border-border hover-stark'
                }`}
              >
                <span className="relative z-10">{filter}</span>
                {activeFilter === filter && (
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Uniform Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group relative overflow-hidden rounded-xl bg-background/60 backdrop-blur-xl border-2 transition-all duration-300 hover:-translate-y-1 flex flex-col animate-fade-in-up ${
                project.color === 'primary' 
                  ? 'border-primary/30 hover:border-primary/50' 
                  : project.color === 'secondary' 
                  ? 'border-secondary/30 hover:border-secondary/50'
                  : 'border-accent/30 hover:border-accent/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              {/* Project Image / Research Visual */}
              <div className={`relative h-48 overflow-hidden ${
                project.color === 'primary' ? 'bg-gradient-to-br from-primary/10 to-background' :
                project.color === 'secondary' ? 'bg-gradient-to-br from-secondary/10 to-background' :
                'bg-gradient-to-br from-accent/10 to-background'
              }`}>
                {project.image ? (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* Darker overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-background/30"></div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <FileText className={`w-16 h-16 ${
                      project.color === 'primary' ? 'text-primary' :
                      project.color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    } opacity-30`} />
                    <span className="text-xs font-mono tracking-wider text-muted-foreground">RESEARCH PAPER</span>
                  </div>
                )}
                
                {/* Category badges - moved to bottom for better visibility */}
                <div className="absolute bottom-3 left-3 right-3 flex gap-2 flex-wrap">
                  {Array.isArray(project.category) ? (
                    project.category.map((cat, idx) => (
                      <Badge 
                        key={idx}
                        className={`text-[10px] font-medium backdrop-blur-md shadow-lg ${
                          project.color === 'primary' ? 'bg-primary/90 text-primary-foreground border-primary' :
                          project.color === 'secondary' ? 'bg-secondary/90 text-secondary-foreground border-secondary' :
                          'bg-accent/90 text-accent-foreground border-accent'
                        }`}
                      >
                        {cat}
                      </Badge>
                    ))
                  ) : (
                    <Badge 
                      className={`text-[10px] font-medium backdrop-blur-md shadow-lg ${
                        project.color === 'primary' ? 'bg-primary/90 text-primary-foreground border-primary' :
                        project.color === 'secondary' ? 'bg-secondary/90 text-secondary-foreground border-secondary' :
                        'bg-accent/90 text-accent-foreground border-accent'
                      }`}
                    >
                      {project.category}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="p-5 md:p-6 space-y-4 relative z-10 flex flex-col flex-1">
                {/* Header */}
                <div className="flex-1 space-y-3">
                  {/* Period */}
                  <span className="text-xs text-muted-foreground">{project.period}</span>
                  
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Company */}
                  <p className={`text-sm font-medium ${
                    project.color === 'primary' ? 'text-primary' :
                    project.color === 'secondary' ? 'text-secondary' :
                    'text-accent'
                  }`}>{project.company}</p>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="text-xs border-border/50 hover:border-border transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="outline" className="text-xs border-border/50">
                      +{project.tech.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                {project.links && Object.keys(project.links).length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.links.github && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className={`relative flex-1 min-w-[100px] text-xs transition-all duration-300 ${
                          project.color === 'primary' 
                            ? 'border-primary/40 text-primary hover:bg-primary/10 hover:border-primary' 
                            : project.color === 'secondary'
                            ? 'border-secondary/40 text-secondary hover:bg-secondary/10 hover:border-secondary'
                            : 'border-accent/40 text-accent hover:bg-accent/10 hover:border-accent'
                        }`}
                      >
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className={`relative flex-1 min-w-[100px] text-xs transition-all duration-300 ${
                          project.color === 'primary' 
                            ? 'border-primary/40 text-primary hover:bg-primary/10 hover:border-primary' 
                            : project.color === 'secondary'
                            ? 'border-secondary/40 text-secondary hover:bg-secondary/10 hover:border-secondary'
                            : 'border-accent/40 text-accent hover:bg-accent/10 hover:border-accent'
                        }`}
                      >
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Demo</span>
                        </a>
                      </Button>
                    )}
                    {project.links.paper && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className={`relative flex-1 min-w-[100px] text-xs transition-all duration-300 ${
                          project.color === 'primary' 
                            ? 'border-primary/40 text-primary hover:bg-primary/10 hover:border-primary' 
                            : project.color === 'secondary'
                            ? 'border-secondary/40 text-secondary hover:bg-secondary/10 hover:border-secondary'
                            : 'border-accent/40 text-accent hover:bg-accent/10 hover:border-accent'
                        }`}
                      >
                        <a href={project.links.paper} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          <FileText className="w-3.5 h-3.5" />
                          <span>Paper</span>
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
