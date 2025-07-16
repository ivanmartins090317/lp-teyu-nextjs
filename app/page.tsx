import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import ServicesOverview from "./_components/ServicesOverview";
import HowItWorks from "./_components/HowItWorks";
import Testimonials from "./_components/Testimonials";
import VideoSection from "./_components/VideoSection";
import FinalCTA from "./_components/FinalCTA";
import Footer from "./_components/Footer";
import FloatingWhatsApp from "./_components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesOverview />
      <HowItWorks />
      <VideoSection />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
