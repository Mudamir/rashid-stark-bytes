import { useState } from "react";
import { Briefcase, ExternalLink, FileText, Github } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  category: "AI/ML" | "UI/UX Design" | "Software Development" | "Graphic Design" | "Financial Engineering" | "All" | ("AI/ML" | "UI/UX Design" | "Software Development" | "Graphic Design" | "Financial Engineering")[];
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
    id: "agsouth-finance-erp",
    title: "Finance ERP System",
    company: "AGSouth Enterprise Finance & ERP System",
    period: "March 2026 - September 2026",
    category: ["Software Development", "Financial Engineering"],
    type: "software",
    image: "/projects/Finance-placeholder.png",
    description: "Architected and developed a full-scale corporate finance ERP module to centralize general ledger operations, multi-currency transactions, and branch-level cash flow management.",
    achievements: [
      "Engineered core accounting workflows including accounts payable/receivable, asset depreciation tracking, and automated reconciliation schedules, replacing manual ledger tracking.",
      "Designed dynamic ledger logic and role-based financial audit trails, ensuring data integrity, strict period locks, and real-time financial reporting for branch leadership.",
      "Integrated cross-system financial touchpoints with existing payroll and operational pipelines to provide unified expense visibility and export-ready BIR/statutory documentation."
    ],
    tech: ["General Ledger", "Multi-Currency", "Accounts Payable", "Accounts Receivable", "Audit Trails", "Financial Reporting"],
    color: "secondary",
    links: {}
  },
  {
    id: "agsouth-payroll",
    title: "Agrisouth Pacific Payroll Management System",
    company: "AGSouth Fruits Pacific · Full-Stack Developer",
    period: "Dec 2025 - March 2026",
    category: "Software Development",
    type: "software",
    image: "/projects/agsouth-philippine-payroll-system.png",
    description: "Built an end-to-end payroll management system from scratch that processes semi-monthly payroll for 250+ employees, covering statutory contributions, loans, dynamic deductions, and payroll cutoff controls.",
    achievements: [
      "Processed PHP 1.5M-PHP 2M per cutoff with payroll locking and salary snapshots",
      "Implemented SSS, PhilHealth, Pag-IBIG, withholding tax, loans, and dynamic deduction logic",
      "Delivered attendance input, government contribution reports, cash summary and e-credit exports, and PDF payslips"
    ],
    tech: ["React", "TypeScript", "Payroll Systems", "PDF Generation", "Reporting", "Business Logic"],
    color: "accent",
    links: {}
  },
  {
    id: "agrisouth-analytics",
    title: "Agrisouth Analytics - Shipment Data Tracking & Analytics Platform",
    company: "AGSouth Fruits Pacific · Full-Stack Developer",
    period: "Dec 2025 - March 2026",
    category: "Software Development",
    type: "software",
    image: "/projects/agrisouth-shipment-analytics-platform.png",
    description: "Built an end-to-end shipment data tracking and analytics web app for banana and pineapple exports that ingests, validates, and analyzes operational shipping records across containers, cartons, suppliers, destinations, ETD/ETA, and invoices.",
    achievements: [
      "Designed a structured data model and dashboard filters for year, week, supplier, shipping line, and port",
      "Delivered real-time pack and supplier dashboards plus a configurable P&L view",
      "Generated grouped PDF invoices and company-branded documents for better visibility and auditability"
    ],
    tech: ["React", "TypeScript", "Analytics Dashboards", "Data Validation", "PDF Generation", "P&L Reporting"],
    color: "accent",
    links: {}
  },
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
    image: "/projects/phishing-placeholder.png",
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

const categoriesOf = (project: Project) =>
  Array.isArray(project.category) ? project.category : [project.category];

function ProjectVisual({
  src,
  alt,
  onOpen,
}: {
  src?: string;
  alt: string;
  onOpen: (src: string) => void;
}) {
  const [failed, setFailed] = useState(!src);

  if (!src || failed) {
    return (
      <div className="absolute inset-0 flex items-end bg-muted/50 p-4">
        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Photograph
        </span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onOpen(src)}
      className="absolute inset-0 cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={`View ${alt}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-contain"
        onError={() => setFailed(true)}
      />
    </button>
  );
}

function ProjectLinks({ links }: { links?: Project["links"] }) {
  if (!links) return null;

  const items = [
    links.paper ? { href: links.paper, label: "Paper", icon: FileText } : null,
    links.github ? { href: links.github, label: "Code", icon: Github } : null,
    links.demo ? { href: links.demo, label: "Demo", icon: ExternalLink } : null,
  ].filter(Boolean) as { href: string; label: string; icon: typeof FileText }[];

  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-3 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <item.icon className="h-3.5 w-3.5" />
          {item.label}
        </a>
      ))}
    </div>
  );
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<"All" | "AI/ML" | "UI/UX Design" | "Software Development" | "Graphic Design" | "Financial Engineering">("All");
  const [preview, setPreview] = useState<{ src: string; title: string } | null>(null);

  const filters = ["All", "AI/ML", "UI/UX Design", "Software Development", "Financial Engineering", "Graphic Design"];

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
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as typeof activeFilter)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors md:text-sm ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-card hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {filteredProjects.map((project, index) => {
            const featured = index === 0;
            const categories = categoriesOf(project);
            const indexLabel = String(index + 1).padStart(2, "0");
            const results = project.achievements.slice(0, featured ? 3 : 1);

            return (
              <article
                key={project.id}
                className={`overflow-hidden rounded-lg border border-border bg-background/30 ${
                  featured ? "lg:col-span-2 lg:grid lg:grid-cols-12 lg:items-center" : "flex flex-col"
                }`}
              >
                <div className={`p-3 md:p-4 ${featured ? "lg:col-span-7" : ""}`}>
                  <div className="relative aspect-[7/5] w-full overflow-hidden border border-border bg-muted/30">
                    <ProjectVisual
                      src={project.image}
                      alt={project.title}
                      onOpen={(src) => setPreview({ src, title: project.title })}
                    />
                  </div>
                </div>

                <div
                  className={`flex flex-col border-t border-border px-6 py-6 md:px-7 md:py-6 ${
                    featured ? "lg:col-span-5 lg:border-l lg:border-t-0" : ""
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      <span className="text-foreground/80">{indexLabel}</span>
                      <span className="mx-2 text-border">/</span>
                      {categories.join(" · ")}
                    </p>
                    <p className="shrink-0 text-xs text-muted-foreground">{project.period}</p>
                  </div>

                  <h3
                    className={`mt-5 font-semibold tracking-tight text-foreground ${
                      featured ? "text-2xl leading-snug md:text-[1.7rem]" : "text-lg leading-snug"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70">{project.company}</p>

                  <p className={`mt-4 text-sm leading-6 text-muted-foreground ${featured ? "" : "line-clamp-3"}`}>
                    {project.description}
                  </p>

                  {results.length > 0 && (
                    <ul className="mt-4 space-y-2 border-t border-border pt-4">
                      {results.map((item) => (
                        <li key={item} className="text-sm leading-6 text-foreground/80">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="mt-4 text-xs leading-5 text-muted-foreground">
                    <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/45">
                      Stack
                    </span>
                    {(featured ? project.tech : project.tech.slice(0, 4)).join(" · ")}
                  </p>

                  <div className="mt-5">
                    <ProjectLinks links={project.links} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>

      <Dialog open={preview !== null} onOpenChange={(open) => !open && setPreview(null)}>
        <DialogContent className="w-[min(94vw,1100px)] max-w-none gap-3 border-border bg-background p-3 sm:p-4">
          <DialogTitle className="pr-8 text-base font-semibold tracking-tight">
            {preview?.title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Larger view of the project photograph.
          </DialogDescription>
          {preview && (
            <div className="overflow-hidden border border-border bg-muted/30">
              <img
                src={preview.src}
                alt={preview.title}
                className="max-h-[78vh] w-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
