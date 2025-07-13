import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, TrendingUp, Users } from "lucide-react";

const timeline = [
  {
    year: "2019",
    title: "Started AI Journey",
    description: "Began specializing in machine learning and data science"
  },
  {
    year: "2021",
    title: "Senior AI Engineer",
    description: "Led development of enterprise ML solutions"
  },
  {
    year: "2022",
    title: "Business Focus",
    description: "Expanded into business strategy and innovation consulting"
  },
  {
    year: "2024",
    title: "AI Business Leader",
    description: "Bridging AI technology with strategic business outcomes"
  }
];

const skills = [
  "Machine Learning", "Deep Learning", "Python", "TensorFlow", "PyTorch",
  "Business Strategy", "Data Analytics", "Cloud Architecture", "API Development",
  "Leadership", "Product Management", "Agile Methodologies"
];

const achievements = [
  {
    icon: Award,
    metric: "5+",
    label: "Industry Certifications",
    description: "AWS, Google Cloud, Microsoft Azure"
  },
  {
    icon: TrendingUp,
    metric: "$2M+",
    label: "Value Generated",
    description: "For clients through AI solutions"
  },
  {
    icon: Users,
    metric: "20+",
    label: "Team Members",
    description: "Led and mentored successfully"
  }
];

export const AboutSection = () => {
  return (
    <section className="py-24 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From coding algorithms to crafting business strategies, I help organizations harness 
            the power of AI to drive innovation and sustainable growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Professional Story */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">My Evolution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Started as a passionate developer, I discovered the transformative potential of AI and machine learning. 
                Today, I bridge the gap between cutting-edge technology and strategic business outcomes, helping 
                organizations navigate their digital transformation journey.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My unique combination of technical expertise and business acumen allows me to translate complex 
                AI concepts into practical solutions that drive measurable results. I believe that the future 
                belongs to those who can seamlessly blend technology with human-centered business strategies.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <achievement.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-primary">{achievement.metric}</span>
                          <span className="text-sm font-semibold text-foreground">{achievement.label}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline & Skills */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Professional Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Professional Timeline</h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-16 bg-border mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-xs">{item.year}</Badge>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Touch */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">Beyond Work</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  When I'm not building AI solutions, you'll find me exploring the latest tech trends, 
                  mentoring aspiring developers, or experimenting with new business models. 
                  I believe in continuous learning and staying ahead of the innovation curve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};