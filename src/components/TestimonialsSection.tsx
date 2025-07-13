import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechForward Solutions",
    image: "/placeholder.svg",
    rating: 5,
    testimonial: "Working with this AI innovator transformed our data analytics capabilities. The custom ML models delivered a 40% increase in predictive accuracy, directly impacting our bottom line. The technical expertise and business acumen combination is exceptional.",
    project: "AI-Powered Analytics Platform"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "VP of Operations",
    company: "Global Manufacturing Corp",
    image: "/placeholder.svg",
    rating: 5,
    testimonial: "The process optimization solution revolutionized our manufacturing efficiency. We achieved 85% automation in quality control and reduced operational costs by 45%. The ROI was evident within the first quarter of implementation.",
    project: "Automated Quality Control System"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Head of Digital Strategy",
    company: "RetailNext Inc",
    image: "/placeholder.svg",
    rating: 5,
    testimonial: "The customer analytics solution provided insights we never thought possible. Our conversion rates improved by 35% and customer retention by 28%. The AI-driven recommendations system is now central to our business strategy.",
    project: "Customer Intelligence Platform"
  },
  {
    id: 4,
    name: "David Park",
    role: "Founder & CEO",
    company: "StartupVision",
    image: "/placeholder.svg",
    rating: 5,
    testimonial: "As a startup, we needed someone who could translate our vision into reality while ensuring scalability. The technical guidance and hands-on development approach helped us secure Series A funding. Outstanding technical leadership.",
    project: "MVP Development & AI Integration"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Chief Data Officer",
    company: "FinanceFlow Solutions",
    image: "/placeholder.svg",
    rating: 5,
    testimonial: "The fraud detection system implementation exceeded all expectations. We achieved 96% accuracy in fraud identification while reducing false positives by 60%. The solution processes thousands of transactions in real-time flawlessly.",
    project: "Real-time Fraud Detection System"
  },
  {
    id: 6,
    name: "Robert Kumar",
    role: "Director of Innovation",
    company: "HealthTech Dynamics",
    image: "/placeholder.svg",
    rating: 5,
    testimonial: "The predictive healthcare analytics platform has transformed patient care delivery. We can now predict health risks 3 months in advance with 94% accuracy, enabling proactive interventions and improving patient outcomes significantly.",
    project: "Predictive Healthcare Analytics"
  }
];

const stats = [
  { label: "Client Satisfaction", value: "100%" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Average ROI Increase", value: "240%" },
  { label: "Countries Served", value: "15+" }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Client <span className="bg-gradient-primary bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from industry leaders who have transformed their businesses with AI-powered solutions 
            and achieved measurable results.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center p-6 bg-gradient-card rounded-xl border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="group bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-elegant relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  "{testimonial.testimonial}"
                </p>

                {/* Project */}
                <div className="text-xs text-primary font-medium">
                  Project: {testimonial.project}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card p-8 rounded-2xl border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join these industry leaders and discover how AI can drive measurable results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-block">
                <button className="px-6 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                  Start Your AI Journey
                </button>
              </a>
              <a href="/projects" className="inline-block">
                <button className="px-6 py-3 border border-border hover:bg-background-secondary rounded-lg font-semibold transition-colors">
                  View Case Studies
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};