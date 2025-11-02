import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, Zap, Video } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if EmailJS is configured
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log('EmailJS Config:', { serviceId, templateId, publicKey: publicKey ? 'Present' : 'Missing' });

    if (!serviceId || !templateId || !publicKey) {
      // Fallback to mailto if EmailJS not configured
      const mailtoLink = `mailto:rashidcomon09@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Opening Email Client",
        description: "Your default email app will open with the message pre-filled.",
      });
      
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      return;
    }

    // Send email using EmailJS
    try {
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        to_email: 'rashidcomon09@gmail.com'
      };

      // Send notification to yourself
      await emailjs.send(
        serviceId,
        templateId, // Main template - notification to you
        templateParams,
        publicKey
      );

      // Send auto-reply to sender (if you have a second template)
      const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
      if (autoReplyTemplateId) {
        await emailjs.send(
          serviceId,
          autoReplyTemplateId, // Auto-reply template
          templateParams,
          publicKey
        );
      }

      toast({
        title: "Message Sent! ✓",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error('Email send failed:', error);
      console.error('Full error object:', JSON.stringify(error, null, 2));
      console.error('Error details:', {
        status: error?.status,
        text: error?.text,
        message: error?.message,
        name: error?.name
      });
      
      let errorMessage = 'Unknown error';
      
      if (error?.status === 412) {
        errorMessage = 'Gmail authentication failed. Please check EmailJS Gmail service setup.';
      } else if (error?.text) {
        errorMessage = error.text;
      } else if (error?.message) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Oops! Something went wrong",
        description: `${errorMessage} - Try emailing rashidcomon09@gmail.com directly.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      href: "https://www.linkedin.com/in/rashidcomon",
      color: "secondary"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/mudamir",
      color: "accent"
    },
    {
      name: "TikTok",
      icon: Video,
      href: "https://www.tiktok.com/@rashidcomon",
      color: "secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Arc Reactor Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, hsl(195 100% 65% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Floating Energy Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6 jarvis-scan">
            <Zap className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs md:text-sm text-primary font-mono">COMMUNICATION PROTOCOL</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-3 md:mb-4 gradient-text">
            Let's Connect
          </h2>
          <p className="text-center text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Two Column Layout: Form Left, Social Cards Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
            
            {/* Contact Form - Left Side */}
            <Card className="relative p-6 md:p-8 bg-card/50 backdrop-blur border-2 border-primary/20 hover-glow animate-slide-in-up order-2 lg:order-1 overflow-hidden group">
              {/* Arc Reactor Core Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
              
              {/* Holographic Scan Lines */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Tech Corner Details */}
              <div className="absolute top-2 left-2 text-[10px] font-mono text-primary/40 z-20">
                MSG-PROTOCOL
              </div>
              <div className="absolute top-2 right-2 text-[10px] font-mono text-primary/40 z-20 flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                SECURE
              </div>
              
              {/* Power Level Indicator */}
              <div className="absolute bottom-2 right-2 text-[9px] font-mono text-primary/30 z-20">
                PWR: 100%
              </div>
              
              <div className="text-center mb-6 relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Send Me a Message</h3>
                <p className="text-muted-foreground text-sm font-mono">JARVIS will forward your message</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-border focus:border-primary h-11 text-sm md:text-base touch-feedback"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background/50 border-border focus:border-primary h-11 text-sm md:text-base touch-feedback"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-background/50 border-border focus:border-primary resize-none text-sm md:text-base touch-feedback"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold touch-feedback h-11 md:h-12 text-sm md:text-base repulsor overflow-hidden group relative"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                </Button>
              </form>
            </Card>

            {/* Social Links - Right Side */}
            <div className="space-y-5 animate-slide-in-up order-1 lg:order-2 flex flex-col">
              {/* JARVIS Header */}
              <div className="mb-2">
                <p className="text-xs font-mono text-primary/60 mb-1"> AVAILABLE COMMUNICATION CHANNELS</p>
                <div className="h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent"></div>
              </div>
              
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card className={`relative p-5 md:p-6 bg-card/50 backdrop-blur border-2 hover-stark active:shadow-lg transition-all duration-300 touch-feedback group overflow-hidden min-h-[88px] ${
                      link.color === 'primary' ? 'border-primary/20 hover:border-primary/50 active:border-primary/60' :
                      link.color === 'secondary' ? 'border-secondary/20 hover:border-secondary/50 active:border-secondary/60' :
                      'border-accent/20 hover:border-accent/50 active:border-accent/60'
                    }`}>
                      {/* Repulsor glow effect */}
                      <div className={`absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl rounded-full ${
                        link.color === 'primary' ? 'bg-primary/30' :
                        link.color === 'secondary' ? 'bg-secondary/30' :
                        'bg-accent/30'
                      }`}></div>
                      
                      {/* Holographic Scan Line */}
                      <div className={`absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity ${
                        link.color === 'primary' ? 'bg-gradient-to-r from-transparent via-primary to-transparent' :
                        link.color === 'secondary' ? 'bg-gradient-to-r from-transparent via-secondary to-transparent' :
                        'bg-gradient-to-r from-transparent via-accent to-transparent'
                      }`}></div>
                      
                      {/* Connection Line */}
                      <div className="absolute left-0 top-1/2 w-1 h-0 group-hover:h-full transition-all duration-500 -translate-y-1/2 bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
                      
                      <div className="flex items-center gap-4 relative z-10">
                        <div className={`relative p-3 md:p-4 rounded-xl transition-all duration-300 ${
                          link.color === 'primary' ? 'bg-primary/10 text-primary group-hover:bg-primary/20' :
                          link.color === 'secondary' ? 'bg-secondary/10 text-secondary group-hover:bg-secondary/20' :
                          'bg-accent/10 text-accent group-hover:bg-accent/20'
                        }`}>
                          <Icon className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
                          {/* Status Indicator */}
                          <div className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full ${
                            link.color === 'primary' ? 'bg-primary' :
                            link.color === 'secondary' ? 'bg-secondary' :
                            'bg-accent'
                          }`}>
                            <div className={`absolute inset-0 rounded-full animate-ping ${
                              link.color === 'primary' ? 'bg-primary' :
                              link.color === 'secondary' ? 'bg-secondary' :
                              'bg-accent'
                            }`}></div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className={`font-bold text-sm md:text-base text-foreground transition-colors ${
                              link.color === 'primary' ? 'group-hover:text-primary' :
                              link.color === 'secondary' ? 'group-hover:text-secondary' :
                              'group-hover:text-accent'
                            }`}>{link.name}</h4>
                            <span className="text-[9px] font-mono text-primary/40 uppercase">ACTIVE</span>
                          </div>
                          <p className="text-xs text-muted-foreground break-all">
                            {link.name === 'Email' ? 'rashidcomon09@gmail.com' :
                             link.name === 'LinkedIn' ? 'Connect with me' :
                             link.name === 'GitHub' ? 'View my projects' :
                             'Follow my content'}
                          </p>
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
    </section>
  );
};

export default Contact;