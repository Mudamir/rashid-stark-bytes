import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Palette as PaletteIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:rashidcomon09@gmail.com",
      color: "primary"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rashid-comon",
      color: "secondary"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/rashidcomon",
      color: "accent"
    },
    {
      name: "Portfolio",
      icon: PaletteIcon,
      href: "#",
      color: "primary"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-6 gradient-text">
          Let's Connect
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-card/50 backdrop-blur border-2 border-primary/20 hover-glow animate-slide-in-left">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Name
                  </label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-blue"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Social Links */}
            <div className="animate-slide-in-right space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a 
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Card className={`p-6 bg-card/50 backdrop-blur border-2 hover-glow transition-all duration-300 ${
                          link.color === 'primary' ? 'border-primary/20 hover:border-primary/50' :
                          link.color === 'secondary' ? 'border-secondary/20 hover:border-secondary/50' :
                          'border-accent/20 hover:border-accent/50'
                        }`}>
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-lg ${
                              link.color === 'primary' ? 'bg-primary/10 text-primary' :
                              link.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                              'bg-accent/10 text-accent'
                            }`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{link.name}</h4>
                            </div>
                          </div>
                        </Card>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;