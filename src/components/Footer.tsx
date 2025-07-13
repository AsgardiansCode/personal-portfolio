import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background-secondary border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-foreground">Innovator</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Transforming ideas into intelligent solutions that drive business growth through AI innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Mail className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Github className="w-4 h-4" />
              </Button>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={scrollToTop}
              className="gap-2 hover:border-primary/50"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </Button>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AI Innovator. All rights reserved. 
            <span className="mx-2">•</span>
            Ready to transform your business with AI?
          </p>
        </div>
      </div>
    </footer>
  );
};