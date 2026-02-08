import {
  HeroSection,
  AboutSection,
  ServicesSection,
  ContactSection,
} from "../../components/sections";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        description="Advancing quantum computing research and innovation for a better tomorrow"
      />
      <AboutSection
        content={[
          "We are at the forefront of quantum computing research and innovation, dedicated to pushing the boundaries of what's possible in the quantum realm.",
          "Our mission is to advance the field of quantum science and make cutting-edge quantum technologies accessible to researchers, businesses, and enthusiasts worldwide.",
          "Through our comprehensive programs, state-of-the-art facilities, and expert team, we're shaping the future of quantum computing.",
        ]}
      />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
