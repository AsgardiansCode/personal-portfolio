import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business Intelligence: Trends to Watch in 2024",
    excerpt: "Exploring how artificial intelligence is reshaping business intelligence and what innovative trends we can expect in the coming year.",
    content: "As we navigate through 2024, artificial intelligence continues to revolutionize how businesses approach data analysis and decision-making...",
    author: "AI Innovator",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI Trends",
    tags: ["AI", "Business Intelligence", "Machine Learning", "Data Analytics"],
    featured: true
  },
  {
    id: 2,
    title: "Building Scalable ML Pipelines: Best Practices from Real Projects",
    excerpt: "Learn practical strategies for creating robust machine learning pipelines that can handle enterprise-scale data processing.",
    content: "Creating scalable machine learning pipelines is crucial for successful AI implementation in enterprise environments...",
    author: "AI Innovator",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Technical Guide",
    tags: ["MLOps", "Pipeline Architecture", "Scalability", "Best Practices"]
  },
  {
    id: 3,
    title: "ROI of AI Implementation: Measuring Success in Digital Transformation",
    excerpt: "Understanding how to quantify the return on investment when implementing AI solutions in your business processes.",
    content: "Measuring the ROI of AI initiatives is often challenging but essential for justifying continued investment...",
    author: "AI Innovator",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Business Strategy",
    tags: ["ROI", "Digital Transformation", "Business Value", "AI Strategy"]
  },
  {
    id: 4,
    title: "From Data to Insights: Advanced Analytics Techniques That Drive Results",
    excerpt: "Discover advanced analytical techniques that transform raw data into actionable business insights and competitive advantages.",
    content: "In today's data-driven world, the ability to extract meaningful insights from complex datasets is what separates...",
    author: "AI Innovator",
    date: "2023-12-28",
    readTime: "10 min read",
    category: "Data Science",
    tags: ["Data Analytics", "Business Insights", "Advanced Analytics", "Data Science"]
  },
  {
    id: 5,
    title: "Ethical AI Development: Building Responsible Machine Learning Systems",
    excerpt: "Exploring the importance of ethical considerations in AI development and how to build responsible ML systems.",
    content: "As AI systems become more prevalent in business operations, the importance of ethical development practices...",
    author: "AI Innovator",
    date: "2023-12-20",
    readTime: "9 min read",
    category: "Ethics & AI",
    tags: ["AI Ethics", "Responsible AI", "Machine Learning", "Technology Ethics"]
  },
  {
    id: 6,
    title: "Automating Business Processes with Intelligent Workflows",
    excerpt: "How to leverage AI and automation to streamline business processes and improve operational efficiency.",
    content: "Process automation powered by artificial intelligence is transforming how organizations operate...",
    author: "AI Innovator",
    date: "2023-12-15",
    readTime: "7 min read",
    category: "Automation",
    tags: ["Process Automation", "Workflow Optimization", "AI", "Efficiency"]
  }
];

const categories = ["All", "AI Trends", "Technical Guide", "Business Strategy", "Data Science", "Ethics & AI", "Automation"];

export const BlogSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            AI Innovation <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, trends, and practical guides on artificial intelligence, machine learning, 
            and business innovation from the frontlines of technology.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              size="sm"
              className="transition-all duration-300 hover:bg-primary/10 hover:text-primary"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <Card key={post.id} className="mb-12 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-0">
              <div className="lg:col-span-1 bg-gradient-primary p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <Badge variant="secondary" className="mb-4 bg-white/20 text-white">
                    Featured Post
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">Latest Insights</h3>
                  <p className="text-white/80">Stay ahead with cutting-edge AI trends</p>
                </div>
              </div>
              <div className="lg:col-span-2 p-8">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-foreground hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base mt-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="hero" className="group">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <Card 
              key={post.id} 
              className="group bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-elegant cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline">{post.category}</Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
};