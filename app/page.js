import AboutSection from "../components/AboutIntro";
import BuildPowerSection from "../components/BuildPower";
import CapabilityStrip from "../components/CapabilityStrip";
import EstimateSection from "../components/EstimateSection";
import FinalCta from "../components/FinalCTA";
import Hero from "../components/Hero";
import ProcessSection from "../components/Process";
import ProjectsSection from "../components/FeaturedProjects";
import ServicesSection from "../components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <CapabilityStrip />
      <AboutSection />
      <ServicesSection />
      <EstimateSection />
      <ProjectsSection />
      <BuildPowerSection />
      <ProcessSection />
      <FinalCta />
    </main>
  );
}
