import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { MatchingSection } from "@/components/MatchingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <MatchingSection />
      <Footer />
    </div>
  );
};

export default Index;
