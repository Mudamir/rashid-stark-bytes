import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Stark Industries Style */}
            <button 
              onClick={() => scrollToSection("#")}
              className="relative group text-xl md:text-2xl font-black gradient-text hover-glow touch-feedback"
            >
              <span className="relative z-10">RSC</span>
              {/* Arc Reactor glow on hover */}
              <div className="absolute inset-0 rounded-lg bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-foreground/80 hover:text-primary font-medium transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Holographic underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-500 group-hover:w-full"></span>
                  {/* Glow effect */}
                  <span className="absolute inset-0 rounded bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </button>
              ))}
              <Button 
                asChild
                size="sm"
                className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-blue hover-stark repulsor overflow-hidden"
              >
                <a href="/Comon_Resume.pdf" download>
                  <span className="relative z-10">Download CV</span>
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-all duration-300 touch-feedback relative group"
            >
              <div className="absolute inset-0 rounded-lg bg-primary/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {isMobileMenuOpen ? <X className="w-7 h-7 relative z-10" /> : <Menu className="w-7 h-7 relative z-10" />}
            </button>
          </div>
        </div>
        
        {/* JARVIS scan line */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-fade-in">
          <div 
            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="relative h-full flex flex-col items-center justify-center gap-6 px-6">
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="relative text-2xl font-semibold text-foreground hover:text-primary active:text-primary transition-all duration-300 touch-feedback group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 rounded-lg bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </button>
            ))}
            <Button 
              asChild
              size="lg"
              className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-blue hover-stark w-full max-w-xs mt-4 touch-feedback h-14 text-lg repulsor overflow-hidden"
            >
              <a href="/Comon_Resume.pdf" download>
                <span className="relative z-10">Download CV</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;