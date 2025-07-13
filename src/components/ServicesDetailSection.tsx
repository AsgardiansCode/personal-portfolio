import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, BarChart3, Users, Lightbulb, ArrowRight, CheckCircle, Zap, Target, TrendingUp } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Brain,
    title: "AI/ML Development",
    description: "Custom machine learning solutions, neural networks, and AI-powered applications tailored to your business needs.",
    detailedDescription: "Transform your business with cutting-edge artificial intelligence and machine learning solutions. From concept to deployment, I create custom AI systems that solve real business problems and deliver measurable results.",
    features: [
      "Deep Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "MLOps Implementation",
      "Model Optimization"
    ],
    benefits: [
      "Automate complex decision-making processes",
      "Predict customer behavior and market trends",
      "Reduce operational costs by up to 45%",
      "Improve accuracy and reduce human error",
      "Scale intelligent solutions across your organization"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "Hugging Face"],
    pricing: "Starting from $15,000",
    timeline: "8-16 weeks",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    icon: BarChart3,
    title: "Business Intelligence Solutions",
    description: "Transform your data into actionable insights with advanced analytics and intelligent dashboards.",
    detailedDescription: "Unlock the power of your data with comprehensive business intelligence solutions that provide real-time insights, predictive analytics, and interactive dashboards for data-driven decision making.",
    features: [
      "Data Analytics",
      "Dashboard Development",
      "KPI Optimization",
      "Performance Metrics",
      "Real-time Reporting",
      "Data Visualization"
    ],
    benefits: [
      "Make informed decisions with real-time data",
      "Identify trends and opportunities faster",
      "Increase revenue by up to 35%",
      "Optimize resource allocation",
      "Monitor performance across all business units"
    ],
    technologies: ["Power BI", "Tableau", "Python", "SQL", "Apache Spark", "MongoDB", "PostgreSQL"],
    pricing: "Starting from $10,000",
    timeline: "6-12 weeks",
    color: "from-green-500 to-blue-500"
  },
  {
    id: 3,
    icon: Users,
    title: "Technical Consulting",
    description: "Strategic guidance on technology adoption, AI implementation, and digital transformation initiatives.",
    detailedDescription: "Navigate your digital transformation journey with expert technical consulting. Get strategic guidance on technology adoption, architecture design, and implementation planning to ensure successful outcomes.",
    features: [
      "Technology Strategy",
      "Implementation Planning",
      "Team Training",
      "Best Practices",
      "Architecture Review",
      "Digital Transformation"
    ],
    benefits: [
      "Accelerate technology adoption",
      "Reduce implementation risks",
      "Optimize technology investments",
      "Build internal capabilities",
      "Achieve faster time-to-market"
    ],
    technologies: ["Cloud Platforms", "Microservices", "DevOps", "API Design", "System Architecture"],
    pricing: "Starting from $5,000",
    timeline: "4-8 weeks",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    icon: Lightbulb,
    title: "Innovation Strategy",
    description: "Identify opportunities for innovation and develop strategies to leverage emerging technologies.",
    detailedDescription: "Stay ahead of the competition with comprehensive innovation strategies. Identify emerging technology opportunities, develop roadmaps, and create competitive advantages through strategic innovation.",
    features: [
      "Innovation Roadmaps",
      "Technology Assessment",
      "Competitive Analysis",
      "Growth Strategy",
      "Market Research",
      "Opportunity Identification"
    ],
    benefits: [
      "Identify new revenue opportunities",
      "Stay ahead of market disruptions",
      "Optimize innovation investments",
      "Build sustainable competitive advantages",
      "Foster innovation culture"
    ],
    technologies: ["Emerging Tech Analysis", "Market Intelligence", "Strategic Planning", "Innovation Frameworks"],
    pricing: "Starting from $8,000",
    timeline: "6-10 weeks",
    color: "from-orange-500 to-red-500"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "Understanding your business needs, challenges, and objectives through comprehensive analysis."
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Developing customized solutions and implementation roadmaps aligned with your goals."
  },
  {
    step: "03",
    title: "Development & Implementation",
    description: "Building and deploying solutions using cutting-edge technologies and best practices."
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description: "Rigorous testing, performance optimization, and fine-tuning for maximum efficiency."
  },
  {
    step: "05",
    title: "Deployment & Training",
    description: "Seamless deployment with comprehensive team training and knowledge transfer."
  },
  {
    step: "06",
    title: "Support & Maintenance",
    description: "Ongoing support, monitoring, and continuous improvement to ensure long-term success."
  }
];

export const ServicesDetailSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI and business solutions designed to accelerate your digital transformation 
            and drive measurable results through innovative technology implementations.
          </p>
        </div>

        {/* Services Detailed Cards */}
        <div className="space-y-12 mb-24">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Section */}
                <div className="p-8 space-y-6">
                  <CardHeader className="p-0">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-lg`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-foreground">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground mt-2">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {service.detailedDescription}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    {/* Key Features */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-foreground">Key Features</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-foreground">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & Timeline */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center p-4 bg-card-glass rounded-lg border border-border/50">
                        <div className="text-primary font-bold text-lg">{service.pricing}</div>
                        <div className="text-xs text-muted-foreground">Investment</div>
                      </div>
                      <div className="text-center p-4 bg-card-glass rounded-lg border border-border/50">
                        <div className="text-accent font-bold text-lg">{service.timeline}</div>
                        <div className="text-xs text-muted-foreground">Timeline</div>
                      </div>
                    </div>
                  </CardContent>
                </div>

                {/* Benefits Section */}
                <div className="bg-background-secondary p-8 space-y-6">
                  <h4 className="text-xl font-semibold text-foreground">Business Benefits</h4>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, i) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-primary font-bold text-xs">{i + 1}</span>
                        </div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-6">
                    <Button variant="hero" className="w-full group">
                      Get Started with {service.title}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <Card 
                key={step.step} 
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-card border-border/50 p-8 max-w-3xl mx-auto">
            <CardContent className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Ready to Transform Your Business with AI?
              </h3>
              <p className="text-muted-foreground">
                Let's discuss how my services can help you achieve your business objectives and drive innovation in your industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};