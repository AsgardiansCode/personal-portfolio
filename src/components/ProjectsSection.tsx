import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, TrendingUp, Zap, Target } from "lucide-react";
import aiDashboard from "@/assets/ai-dashboard-mockup.jpg";
import businessAnalytics from "@/assets/business-analytics.jpg";
import aiInnovation from "@/assets/ai-innovation-abstract.jpg";

const projects = [
  {
    id: 1,
    title: "AI-Powered Business Intelligence Platform",
    description: "Enterprise-grade BI platform with machine learning insights, real-time analytics, and predictive modeling capabilities.",
    image: aiDashboard,
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
    metrics: {
      efficiency: "+40%",
      processing: "-60%",
      accuracy: "96%"
    },
    features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Smart Customer Analytics Solution",
    description: "Advanced customer behavior analysis using ML algorithms to optimize marketing strategies and improve conversion rates.",
    image: businessAnalytics,
    category: "Business Solutions",
    technologies: ["Python", "Scikit-learn", "FastAPI", "MongoDB", "Docker"],
    metrics: {
      conversion: "+35%",
      retention: "+28%",
      roi: "240%"
    },
    features: ["Behavior Prediction", "Segmentation", "A/B Testing", "ROI Tracking"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Automated Process Optimization Engine",
    description: "AI-driven automation system that identifies bottlenecks and optimizes business processes for maximum efficiency.",
    image: aiInnovation,
    category: "Innovation",
    technologies: ["Python", "Apache Kafka", "Redis", "Vue.js", "GCP"],
    metrics: {
      automation: "+85%",
      cost: "-45%",
      speed: "+120%"
    },
    features: ["Process Mining", "Workflow Automation", "Performance Monitoring", "Predictive Maintenance"],
    demoLink: "#",
    githubLink: "#"
  }
];

const categories = ["All", "AI/ML", "Business Solutions", "Innovation"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Showcasing innovative solutions that demonstrate the power of AI in solving real business challenges 
            and driving measurable outcomes.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "hero" : "ghost"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elegant overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 bg-primary/90 text-primary-foreground"
                  >
                    {project.category}
                  </Badge>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-6">
                  <CardHeader className="p-0">
                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-card-glass rounded-lg border border-border/50">
                        <div className="flex items-center justify-center gap-1 text-accent font-bold text-lg">
                          <TrendingUp className="w-4 h-4" />
                          {project.metrics.efficiency || project.metrics.conversion || project.metrics.automation}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {project.metrics.efficiency ? "Efficiency" : project.metrics.conversion ? "Conversion" : "Automation"}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-card-glass rounded-lg border border-border/50">
                        <div className="flex items-center justify-center gap-1 text-primary font-bold text-lg">
                          <Zap className="w-4 h-4" />
                          {project.metrics.processing || project.metrics.retention || project.metrics.cost}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {project.metrics.processing ? "Processing" : project.metrics.retention ? "Retention" : "Cost Reduction"}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-card-glass rounded-lg border border-border/50">
                        <div className="flex items-center justify-center gap-1 text-accent font-bold text-lg">
                          <Target className="w-4 h-4" />
                          {project.metrics.accuracy || project.metrics.roi || project.metrics.speed}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {project.metrics.accuracy ? "Accuracy" : project.metrics.roi ? "ROI" : "Speed Increase"}
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button variant="hero" size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="w-4 h-4" />
                        View Code
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};