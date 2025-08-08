import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import ServicesOverview from "./_components/ServicesOverview";
import HowItWorks from "./_components/HowItWorks";
import AboutTeyu from "./_components/AboutTeyu";
import Testimonials from "./_components/Testimonials";
import VideoSection from "./_components/VideoSection";
import FinalCTA from "./_components/FinalCTA";
import Footer from "./_components/Footer";
import FloatingWhatsApp from "./_components/FloatingWhatsApp";
import AboutUs from "./_components/AboutUs";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col">
        <HeroSection />
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
