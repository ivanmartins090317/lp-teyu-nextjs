"use client";

import dynamic from "next/dynamic";
import Header from "./_components/shared/Header";
import HeroSection from "./_components/landing/HeroSection";

// Lazy loading dos componentes abaixo do fold
const BenefitsScrolling = dynamic(
  () => import("./_components/landing/benefitsScrolling"),
  {
    loading: () => <div className="bg-[#6a5c27]/80 py-6 md:py-10 min-h-[100px]" />
  }
);
const ValueProposition = dynamic(() => import("./_components/landing/ValueProposition"), {
  loading: () => <div className="py-16 md:py-24 bg-[#FAFAFA] min-h-[400px]" />
});
const AboutUs = dynamic(() => import("./_components/landing/AboutUs"), {
  loading: () => <div className="py-16 md:py-24 bg-[#e5dfda] min-h-[400px]" />
});

const AboutTeyu = dynamic(() => import("./_components/landing/AboutTeyu"), {
  loading: () => <div className="pb-16 md:py-16 bg-[#6a5c27] min-h-[400px]" />
});

const ServicesOverview = dynamic(() => import("./_components/landing/ServicesOverview"), {
  loading: () => <div className="py-16 md:py-24 min-h-[400px]" />
});
const ProductsOverview = dynamic(() => import("./_components/landing/ProductsOverview"), {
  loading: () => <div className="py-16 md:py-24 min-h-[400px]" />
});

const Testimonials = dynamic(() => import("./_components/landing/Testimonials"), {
  loading: () => <div className="py-16 md:py-24 bg-[#e5dfda] min-h-[400px]" />
});

const FinalCTA = dynamic(() => import("./_components/landing/FinalCTA"), {
  loading: () => <div className="py-16 min-h-[300px]" />
});

const Footer = dynamic(() => import("./_components/shared/Footer"), {
  loading: () => <div className="bg-[#6a5c27] min-h-[200px]" />
});
const FloatingWhatsApp = dynamic(() => import("./_components/shared/FloatingWhatsApp"), {
  ssr: false,
  loading: () => null
});

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col">
        <HeroSection />
        <BenefitsScrolling />
        <ValueProposition />
        <AboutUs />
        <AboutTeyu />
        <ServicesOverview />
        <ProductsOverview />
        {/* <VideoSection /> */}
        <Testimonials />
        <FinalCTA />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
