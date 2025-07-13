import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, Users, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI/ML Development",
    description: "Custom machine learning solutions, neural networks, and AI-powered applications tailored to your business needs.",
    features: ["Deep Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: BarChart3,
    title: "Business Intelligence Solutions",
    description: "Transform your data into actionable insights with advanced analytics and intelligent dashboards.",
    features: ["Data Analytics", "Dashboard Development", "KPI Optimization", "Performance Metrics"],
    color: "from-green-500 to-blue-500"
  },
  {
    icon: Users,
    title: "Technical Consulting",
    description: "Strategic guidance on technology adoption, AI implementation, and digital transformation initiatives.",
    features: ["Technology Strategy", "Implementation Planning", "Team Training", "Best Practices"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation Strategy",
    description: "Identify opportunities for innovation and develop strategies to leverage emerging technologies.",
    features: ["Innovation Roadmaps", "Technology Assessment", "Competitive Analysis", "Growth Strategy"],
    color: "from-orange-500 to-red-500"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Services & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI and business solutions designed to accelerate your digital transformation 
            and drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-elegant"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full group/btn hover:bg-primary/10 hover:text-primary"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};