import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, TrendingUp, Zap, Target, Calendar, Users, Award, Eye } from "lucide-react";
import aiDashboard from "@/assets/ai-dashboard-mockup.jpg";
import businessAnalytics from "@/assets/business-analytics.jpg";
import aiInnovation from "@/assets/ai-innovation-abstract.jpg";

const projects = [
  {
    id: 1,
    title: "AI-Powered Business Intelligence Platform",
    description: "Enterprise-grade BI platform with machine learning insights, real-time analytics, and predictive modeling capabilities.",
    detailedDescription: "A comprehensive business intelligence platform that leverages artificial intelligence to provide real-time insights, predictive analytics, and automated reporting. The system processes millions of data points daily and provides actionable insights to drive business decisions.",
    image: aiDashboard,
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    metrics: {
      efficiency: "+40%",
      processing: "-60%",
      accuracy: "96%"
    },
    features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Automated Reporting", "Data Visualization"],
    challenges: [
      "Processing large volumes of real-time data efficiently",
      "Implementing accurate predictive models for business forecasting",
      "Creating intuitive dashboards for non-technical users",
      "Ensuring 99.9% uptime for critical business operations"
    ],
    solutions: [
      "Implemented distributed processing using Apache Kafka and Spark",
      "Developed ensemble ML models with 96% accuracy in predictions",
      "Created responsive React-based dashboard with real-time updates",
      "Built robust infrastructure with auto-scaling and failover mechanisms"
    ],
    results: [
      "40% improvement in decision-making speed",
      "60% reduction in data processing time",
      "96% accuracy in predictive analytics",
      "$2.5M annual cost savings through optimization"
    ],
    duration: "16 weeks",
    teamSize: "5 members",
    industry: "Enterprise Technology",
    client: "Fortune 500 Company",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Smart Customer Analytics Solution",
    description: "Advanced customer behavior analysis using ML algorithms to optimize marketing strategies and improve conversion rates.",
    detailedDescription: "An intelligent customer analytics platform that uses machine learning to analyze customer behavior patterns, predict purchasing decisions, and optimize marketing campaigns for maximum ROI.",
    image: businessAnalytics,
    category: "Business Solutions",
    technologies: ["Python", "Scikit-learn", "FastAPI", "MongoDB", "Docker", "Redis", "Tableau"],
    metrics: {
      conversion: "+35%",
      retention: "+28%",
      roi: "240%"
    },
    features: ["Behavior Prediction", "Customer Segmentation", "A/B Testing", "ROI Tracking", "Campaign Optimization", "Churn Prevention"],
    challenges: [
      "Analyzing complex customer journey data across multiple touchpoints",
      "Predicting customer behavior with high accuracy",
      "Integrating with existing marketing automation tools",
      "Providing real-time recommendations for marketing teams"
    ],
    solutions: [
      "Built comprehensive data pipeline to unify customer touchpoint data",
      "Implemented ensemble ML models for behavior prediction",
      "Developed RESTful APIs for seamless integration",
      "Created real-time recommendation engine with sub-second response times"
    ],
    results: [
      "35% increase in conversion rates",
      "28% improvement in customer retention",
      "240% ROI on marketing campaigns",
      "85% reduction in customer acquisition costs"
    ],
    duration: "12 weeks",
    teamSize: "4 members",
    industry: "E-commerce",
    client: "Online Retail Platform",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Automated Process Optimization Engine",
    description: "AI-driven automation system that identifies bottlenecks and optimizes business processes for maximum efficiency.",
    detailedDescription: "A sophisticated process optimization platform that uses AI to analyze workflow patterns, identify inefficiencies, and automatically implement improvements across enterprise business processes.",
    image: aiInnovation,
    category: "Innovation",
    technologies: ["Python", "Apache Kafka", "Redis", "Vue.js", "GCP", "TensorFlow", "Elasticsearch"],
    metrics: {
      automation: "+85%",
      cost: "-45%",
      speed: "+120%"
    },
    features: ["Process Mining", "Workflow Automation", "Performance Monitoring", "Predictive Maintenance", "Resource Optimization", "Compliance Tracking"],
    challenges: [
      "Mapping complex enterprise processes with multiple dependencies",
      "Implementing automation without disrupting existing operations",
      "Ensuring compliance with industry regulations",
      "Scaling the solution across different business units"
    ],
    solutions: [
      "Developed process discovery algorithms to map existing workflows",
      "Implemented gradual automation rollout with extensive testing",
      "Built compliance monitoring with real-time audit trails",
      "Created modular architecture for easy deployment across units"
    ],
    results: [
      "85% automation of routine processes",
      "45% reduction in operational costs",
      "120% increase in process execution speed",
      "99.5% compliance rate with industry standards"
    ],
    duration: "20 weeks",
    teamSize: "6 members",
    industry: "Manufacturing",
    client: "Global Manufacturing Corp",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Intelligent Fraud Detection System",
    description: "Real-time fraud detection using advanced machine learning algorithms to protect financial transactions.",
    detailedDescription: "A sophisticated fraud detection system that processes thousands of transactions per second, using advanced ML algorithms to identify fraudulent patterns and prevent financial losses in real-time.",
    image: aiDashboard,
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "Apache Kafka", "Cassandra", "React", "AWS Lambda"],
    metrics: {
      accuracy: "99.2%",
      falsePositive: "-75%",
      processing: "< 50ms"
    },
    features: ["Real-time Processing", "Anomaly Detection", "Risk Scoring", "Alert Management", "Compliance Reporting", "Adaptive Learning"],
    challenges: [
      "Processing high-volume transactions with sub-second latency",
      "Minimizing false positives while maintaining high accuracy",
      "Adapting to evolving fraud patterns in real-time",
      "Meeting strict financial industry compliance requirements"
    ],
    solutions: [
      "Implemented streaming ML pipeline with Apache Kafka",
      "Developed ensemble models with advanced feature engineering",
      "Built adaptive learning system that updates models continuously",
      "Created comprehensive audit trails and compliance reporting"
    ],
    results: [
      "99.2% fraud detection accuracy",
      "75% reduction in false positives",
      "Sub-50ms transaction processing time",
      "$15M prevented in fraudulent transactions annually"
    ],
    duration: "14 weeks",
    teamSize: "5 members",
    industry: "Financial Services",
    client: "Major Financial Institution",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 5,
    title: "Predictive Healthcare Analytics Platform",
    description: "AI-powered healthcare analytics for predicting patient outcomes and optimizing treatment protocols.",
    detailedDescription: "A comprehensive healthcare analytics platform that uses machine learning to predict patient health risks, optimize treatment protocols, and improve clinical outcomes through data-driven insights.",
    image: businessAnalytics,
    category: "Healthcare",
    technologies: ["Python", "PyTorch", "FHIR", "PostgreSQL", "React", "Docker", "Kubernetes"],
    metrics: {
      prediction: "94%",
      outcomes: "+32%",
      costs: "-28%"
    },
    features: ["Risk Prediction", "Treatment Optimization", "Clinical Decision Support", "Population Health", "Outcome Tracking", "HIPAA Compliance"],
    challenges: [
      "Ensuring HIPAA compliance while enabling data analytics",
      "Integrating with diverse healthcare systems and EMRs",
      "Developing accurate prediction models for complex health conditions",
      "Creating user-friendly interfaces for healthcare professionals"
    ],
    solutions: [
      "Implemented privacy-preserving ML techniques and secure data handling",
      "Built FHIR-compliant APIs for seamless EMR integration",
      "Developed specialized ML models for different medical specialties",
      "Created intuitive dashboards designed for clinical workflows"
    ],
    results: [
      "94% accuracy in health risk predictions",
      "32% improvement in patient outcomes",
      "28% reduction in healthcare costs",
      "Deployed across 15 healthcare facilities"
    ],
    duration: "18 weeks",
    teamSize: "7 members",
    industry: "Healthcare",
    client: "Regional Healthcare Network",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 6,
    title: "Supply Chain Optimization Platform",
    description: "AI-driven supply chain management system for inventory optimization and demand forecasting.",
    detailedDescription: "An intelligent supply chain management platform that uses AI to optimize inventory levels, predict demand patterns, and streamline logistics operations for maximum efficiency and cost reduction.",
    image: aiInnovation,
    category: "Business Solutions",
    technologies: ["Python", "TensorFlow", "Apache Spark", "MySQL", "Angular", "AWS", "Docker"],
    metrics: {
      inventory: "-35%",
      accuracy: "92%",
      fulfillment: "+45%"
    },
    features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Supplier Management", "Risk Assessment", "Performance Analytics"],
    challenges: [
      "Handling complex multi-tier supply chain networks",
      "Predicting demand across seasonal and market variations",
      "Optimizing inventory while minimizing stockouts",
      "Integrating with legacy ERP and warehouse systems"
    ],
    solutions: [
      "Developed graph-based algorithms for supply chain modeling",
      "Implemented advanced time series forecasting with external factors",
      "Built multi-objective optimization for inventory and service levels",
      "Created flexible APIs for legacy system integration"
    ],
    results: [
      "35% reduction in inventory carrying costs",
      "92% accuracy in demand forecasting",
      "45% improvement in order fulfillment rates",
      "20% reduction in overall supply chain costs"
    ],
    duration: "16 weeks",
    teamSize: "6 members",
    industry: "Retail & Distribution",
    client: "Global Retail Chain",
    demoLink: "#",
    githubLink: "#"
  }
];

const categories = ["All", "AI/ML", "Business Solutions", "Innovation", "Healthcare"];

export const ProjectsDetailSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const ProjectModal = ({ project }: { project: typeof projects[0] }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full">
          <Eye className="w-4 h-4" />
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription>
            {project.detailedDescription}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <Badge className="absolute top-4 left-4 bg-primary/90">
              {project.category}
            </Badge>
          </div>

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-card-glass rounded-lg">
              <Calendar className="w-5 h-5 mx-auto mb-2 text-primary" />
              <div className="font-semibold text-sm">{project.duration}</div>
              <div className="text-xs text-muted-foreground">Duration</div>
            </div>
            <div className="text-center p-4 bg-card-glass rounded-lg">
              <Users className="w-5 h-5 mx-auto mb-2 text-primary" />
              <div className="font-semibold text-sm">{project.teamSize}</div>
              <div className="text-xs text-muted-foreground">Team Size</div>
            </div>
            <div className="text-center p-4 bg-card-glass rounded-lg">
              <Award className="w-5 h-5 mx-auto mb-2 text-primary" />
              <div className="font-semibold text-sm">{project.industry}</div>
              <div className="text-xs text-muted-foreground">Industry</div>
            </div>
            <div className="text-center p-4 bg-card-glass rounded-lg">
              <Target className="w-5 h-5 mx-auto mb-2 text-primary" />
              <div className="font-semibold text-sm">{project.client}</div>
              <div className="text-xs text-muted-foreground">Client</div>
            </div>
          </div>

          {/* Key Metrics */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Key Results</h3>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="text-center p-4 bg-gradient-card rounded-lg border border-border/50">
                  <div className="text-xl font-bold text-primary">{value}</div>
                  <div className="text-xs text-muted-foreground capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Challenges</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Business Results */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Impact</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.results.map((result, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-card-glass rounded-lg">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button variant="hero" className="flex-1">
              <ExternalLink className="w-4 h-4" />
              View Live Demo
            </Button>
            <Button variant="outline" className="flex-1">
              <Github className="w-4 h-4" />
              View Source Code
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Project <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore detailed case studies showcasing innovative AI solutions that have delivered 
            measurable business results across various industries.
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elegant overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-48">
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

                {/* Industry Badge */}
                <Badge 
                  variant="outline" 
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
                >
                  {project.industry}
                </Badge>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <CardHeader className="p-0">
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-0 space-y-4">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center p-2 bg-card-glass rounded border border-border/50">
                      <div className="flex items-center justify-center gap-1 text-accent font-bold text-sm">
                        <TrendingUp className="w-3 h-3" />
                        {Object.values(project.metrics)[0]}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {Object.keys(project.metrics)[0]}
                      </div>
                    </div>
                    <div className="text-center p-2 bg-card-glass rounded border border-border/50">
                      <div className="flex items-center justify-center gap-1 text-primary font-bold text-sm">
                        <Zap className="w-3 h-3" />
                        {Object.values(project.metrics)[1]}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {Object.keys(project.metrics)[1]}
                      </div>
                    </div>
                    <div className="text-center p-2 bg-card-glass rounded border border-border/50">
                      <div className="flex items-center justify-center gap-1 text-accent font-bold text-sm">
                        <Target className="w-3 h-3" />
                        {Object.values(project.metrics)[2]}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {Object.keys(project.metrics)[2]}
                      </div>
                    </div>
                  </div>

                  {/* Technologies Preview */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <ProjectModal project={project} />
                    <Button variant="ghost" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-border/50 p-8 max-w-2xl mx-auto">
            <CardContent className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-muted-foreground">
                Let's discuss how we can create innovative solutions that drive real business results for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};