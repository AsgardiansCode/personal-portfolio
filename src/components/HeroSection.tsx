import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Code, TrendingUp, Rocket } from "lucide-react";
import professionalHeadshot from "@/assets/professional-headshot.jpg";

const roles = [
  "AI Engineer",
  "ML Specialist", 
  "Business Strategist",
  "Innovation Catalyst"
];

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const floatingIcons = [
    { Icon: Brain, delay: "0s", position: "top-20 left-20" },
    { Icon: Code, delay: "1s", position: "top-32 right-32" },
    { Icon: TrendingUp, delay: "2s", position: "bottom-32 left-32" },
    { Icon: Rocket, delay: "0.5s", position: "bottom-20 right-20" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {floatingIcons.map(({ Icon, delay, position }, index) => (
          <Icon
            key={index}
            className={`absolute ${position} w-8 h-8 text-primary animate-float`}
            style={{ animationDelay: delay }}
          />
        ))}
      </div>

      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-accent/20 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                AI Engineer &{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Business Innovator
                </span>
              </h1>
              
              <div className="h-8 text-2xl lg:text-3xl font-semibold text-primary">
                <span
                  className={`inline-block transition-all duration-500 ${
                    isTyping ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {roles[currentRole]}
                </span>
                <span className="animate-blink border-r-2 border-primary ml-1"></span>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Transforming ideas into intelligent solutions that drive business growth. 
                Bridging the gap between cutting-edge AI technology and strategic business innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                className="group"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="glass" 
                size="xl"
                className="group"
              >
                Let's Collaborate
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-elegant">
                <img
                  src={professionalHeadshot}
                  alt="Professional headshot of AI Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};