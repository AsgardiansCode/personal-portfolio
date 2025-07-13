import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServicesDetailSection } from "@/components/ServicesDetailSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <main className="pt-16">
        <ServicesDetailSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;