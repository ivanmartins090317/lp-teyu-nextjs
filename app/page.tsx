import Header from "./_components/shared/Header";
import HeroSection from "./_components/landing/HeroSection";
import ServicesOverview from "./_components/landing/ServicesOverview";
import HowItWorks from "./_components/landing/HowItWorks";
import AboutTeyu from "./_components/landing/AboutTeyu";
import Testimonials from "./_components/landing/Testimonials";
import VideoSection from "./_components/landing/VideoSection";
import FinalCTA from "./_components/landing/FinalCTA";
import Footer from "./_components/shared/Footer";
import FloatingWhatsApp from "./_components/shared/FloatingWhatsApp";
import AboutUs from "./_components/landing/AboutUs";
import BenefitsScrolling from "./_components/landing/BenefitsScrolling";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col">
        <HeroSection />
        <BenefitsScrolling />
        <AboutUs />
        <AboutTeyu />
        <ServicesOverview />
        <HowItWorks />
        <VideoSection />
        <Testimonials />
        <FinalCTA />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
