import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyLarvaSection from "@/components/WhyLarvaSection";
import SocialProofSection from "@/components/SocialProofSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Star Field Background */}
      <StarField />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <WhyLarvaSection />
        <SocialProofSection />
        <TokenomicsSection />
        <CommunitySection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
