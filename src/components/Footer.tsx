import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Rashid S. Comon. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> and cutting-edge technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;