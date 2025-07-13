import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BlogSection } from "@/components/BlogSection";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <main className="pt-16">
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;