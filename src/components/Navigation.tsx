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
    { name: "Achievements", href: "#achievements" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection("#")}
              className="text-xl md:text-2xl font-black gradient-text hover-glow touch-feedback"
            >
              RSC
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <Button 
                asChild
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-blue"
              >
                <a href="/Comon_Resume.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors touch-feedback"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-fade-in">
          <div 
            className="absolute inset-0 bg-background/95 backdrop-blur-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="relative h-full flex flex-col items-center justify-center gap-6 px-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-2xl font-semibold text-foreground hover:text-primary active:text-primary transition-colors touch-feedback"
              >
                {link.name}
              </button>
            ))}
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-blue w-full max-w-xs mt-4 touch-feedback h-14 text-lg"
            >
              <a href="/Comon_Resume.pdf" download>
                Download CV
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;