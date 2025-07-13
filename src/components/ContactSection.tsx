import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Calendar, Clock, MessageSquare } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@aiinnovator.com",
    description: "Best for detailed project discussions",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    description: "Available Mon-Fri, 9 AM - 6 PM EST",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "/in/ai-innovator",
    description: "Connect for professional networking",
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    value: "calendly.com/ai-innovator",
    description: "Book a consultation call",
    color: "from-purple-500 to-pink-500"
  }
];

export const ContactSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Innovate Together?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how AI can transform your business. I'm here to help you navigate 
            the future of technology and unlock new opportunities for growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Get In Touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="group bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${method.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <method.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground text-sm">{method.title}</h4>
                          <p className="text-primary text-sm font-medium">{method.value}</p>
                          <p className="text-xs text-muted-foreground">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Availability Info */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Response Time:</span>
                  <span className="text-foreground font-medium">Within 24 hours</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Consultation:</span>
                  <span className="text-foreground font-medium">Free 30min</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Time Zone:</span>
                  <span className="text-foreground font-medium">EST (UTC-5)</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Start a Conversation
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Tell me about your project, challenges, or ideas. I'll get back to you with insights 
                  and potential solutions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name *</label>
                    <Input 
                      placeholder="Your full name"
                      className="bg-background-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email *</label>
                    <Input 
                      type="email"
                      placeholder="your.email@company.com"
                      className="bg-background-secondary border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Company/Organization</label>
                  <Input 
                    placeholder="Your company name"
                    className="bg-background-secondary border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Type</label>
                  <select className="w-full px-3 py-2 bg-background-secondary border border-border rounded-md focus:border-primary focus:outline-none text-foreground">
                    <option value="">Select project type</option>
                    <option value="ai-ml">AI/ML Development</option>
                    <option value="business-intelligence">Business Intelligence</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="innovation">Innovation Strategy</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea 
                    placeholder="Tell me about your project, goals, timeline, and any specific challenges you're facing..."
                    rows={6}
                    className="bg-background-secondary border-border focus:border-primary resize-none"
                  />
                </div>

                <div className="flex gap-4">
                  <Button 
                    variant="cta" 
                    size="lg" 
                    className="flex-1 group"
                  >
                    Send Message
                    <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="px-8"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule Call
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to receive communications about your inquiry. 
                  I respect your privacy and will never share your information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};