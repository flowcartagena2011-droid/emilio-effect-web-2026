import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { StylesSection } from "@/components/StylesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ToolsSection } from "@/components/ToolsSection";
import { SpecialtiesSection } from "@/components/SpecialtiesSection";
import { PricingSection } from "@/components/PricingSection";
import { PackagesSection } from "@/components/PackagesSection";
import { AdditionalServicesSection } from "@/components/AdditionalServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StylesSection />
      <ServicesSection />
      <ToolsSection />
      <SpecialtiesSection />
      <PricingSection />
      <PackagesSection />
      <AdditionalServicesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
