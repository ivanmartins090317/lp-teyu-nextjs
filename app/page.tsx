import Header from "./_components/shared/Header";
import HeroSection from "./_components/landing/HeroSection";
// import ServicesOverview from "./_components/landing/ServicesOverview";
import HowItWorks from "./_components/landing/HowItWorks";
// import AboutTeyu from "./_components/landing/AboutTeyu";
// import Testimonials from "./_components/landing/Testimonials";
// import VideoSection from "./_components/landing/VideoSection";
import FinalCTA from "./_components/landing/FinalCTA";
import Footer from "./_components/shared/Footer";
import FloatingWhatsApp from "./_components/shared/FloatingWhatsApp";
// import AboutUs from "./_components/landing/AboutUs";
import BenefitsScrolling from "./_components/landing/benefitsScrolling";
import dynamic from "next/dynamic";

const AboutUs = dynamic(() => import("./_components/landing/AboutUs"), {
  loading: () => <div className="py-16 md:py-24 bg-[#e5dfda] min-h-[400px]" />
});

const AboutTeyu = dynamic(() => import("./_components/landing/AboutTeyu"), {
  loading: () => <div className="pb-16 md:py-16 bg-[#6a5c27] min-h-[400px]" />
});

const ServicesOverview = dynamic(() => import("./_components/landing/ServicesOverview"), {
  loading: () => <div className="py-16 md:py-24 min-h-[400px]" />
});

const Testimonials = dynamic(() => import("./_components/landing/Testimonials"), {
  loading: () => <div className="py-16 md:py-24 bg-[#e5dfda] min-h-[400px]" />
});

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
        {/* <VideoSection /> */}
        <Testimonials />
        <FinalCTA />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
