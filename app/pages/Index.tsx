import React from "react";
import Header from "../_components/Header";
import HeroSection from "../_components/HeroSection";
import ValueProposition from "../_components/ValueProposition";
import ServicesOverview from "../_components/ServicesOverview";
import HowItWorks from "../_components/HowItWorks";
import VideoSection from "../_components/VideoSection";
import Testimonials from "../_components/Testimonials";
import FinalCTA from "../_components/FinalCTA";
import Footer from "../_components/Footer";
import FloatingWhatsApp from "../_components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ValueProposition />
      <ServicesOverview />
      <HowItWorks />
      <VideoSection />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
