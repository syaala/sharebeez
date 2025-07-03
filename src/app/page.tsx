import HeroSection from '@/components/sections/HeroSection';
import WhoWeAreSection from '@/components/sections/WhoWeAreSection';
import CommunitySuccessSection from '@/components/sections/CommunitySuccessSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import WhoItsForSection from '@/components/sections/WhoItsForSection';
import KeyFeaturesSection from '@/components/sections/KeyFeaturesSection';
import AIFeaturesSection from '@/components/sections/AIFeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import PartnershipSection from '@/components/sections/PartnershipSection';
import FAQSection from '@/components/sections/FAQSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <KeyFeaturesSection />
      <AIFeaturesSection />
      <CommunitySuccessSection />
      <WhyChooseSection />
      <WhoItsForSection />
      <PartnershipSection />
      <HowItWorksSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
