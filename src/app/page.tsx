import ContactSection from "@/app/components/sections/ContactSection";
import HeroSection from "@/app/components/sections/HeroSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import ServicesSection from "@/app/components/sections/ServicesSection";
import SkillsSection from "@/app/components/sections/SkillsSection";
import TechMarquee from "@/app/components/sections/TechMarquee";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <StructuredData />
      <HeroSection />
      <TechMarquee />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
