"use client";

import dynamic from "next/dynamic";
import Header from "./_components/shared/Header";
import HeroSection from "./_components/landing/HeroSection";
import LoadingSkeleton from "./_components/shared/LoadingSkeleton";

// Lazy loading para componentes pesados com loading otimizado
const ServicesOverview = dynamic(() => import("./_components/landing/ServicesOverview"), {
  loading: () => <LoadingSkeleton height="h-96" />
});

const HowItWorks = dynamic(() => import("./_components/landing/HowItWorks"), {
  loading: () => <LoadingSkeleton height="h-[600px]" />
});

const AboutTeyu = dynamic(() => import("./_components/landing/AboutTeyu"), {
  loading: () => <LoadingSkeleton height="h-96" />
});

const Testimonials = dynamic(() => import("./_components/landing/Testimonials"), {
  loading: () => <LoadingSkeleton height="h-96" />
});

const FinalCTA = dynamic(() => import("./_components/landing/FinalCTA"), {
  loading: () => <LoadingSkeleton height="h-96" />
});

const Footer = dynamic(() => import("./_components/shared/Footer"), {
  loading: () => <LoadingSkeleton height="h-32" />
});

const FloatingWhatsApp = dynamic(() => import("./_components/shared/FloatingWhatsApp"), {
  ssr: false // Não renderizar no servidor
});

const AboutUs = dynamic(() => import("./_components/landing/AboutUs"), {
  loading: () => <LoadingSkeleton height="h-96" />
});

const BenefitsScrolling = dynamic(
  () => import("./_components/landing/benefitsScrolling"),
  {
    loading: () => <LoadingSkeleton height="h-96" />
  }
);

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
