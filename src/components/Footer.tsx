import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Rashid S. Comon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;