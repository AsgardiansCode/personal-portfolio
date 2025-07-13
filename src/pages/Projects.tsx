import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectsDetailSection } from "@/components/ProjectsDetailSection";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <main className="pt-16">
        <ProjectsDetailSection />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;