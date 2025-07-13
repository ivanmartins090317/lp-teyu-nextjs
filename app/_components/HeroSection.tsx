"use client";

import React, {useState} from "react";
import {ArrowRight, CheckCircle} from "lucide-react";
import {Button} from "../_components/ui/button";
import SignupModal from "./SignupModal";
import {motion} from "framer-motion";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [counts, setCounts] = useState({
  //   clients: 0,
  //   services: 0,
  //   rating: 0,
  //   satisfaction: 0
  // });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("servicos");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  // Benefits data
  const benefits = [
    "Pranchas seguras e prontas sempre que precisar",
    "Reparos e manutenção express",
    "Espaço confortável com café e loja exclusiva"
  ];

  // Create duplicated benefits for infinite scroll
  const duplicatedBenefits = [...benefits, ...benefits];

  // Animation for counting numbers
  // useEffect(() => {
  //   const targets = {
  //     clients: 500,
  //     services: 35,
  //     rating: 4.9,
  //     satisfaction: 98
  //   };

  //   const duration = 2000; // 2 seconds
  //   const frameRate = 60;
  //   const totalFrames = (duration / 1000) * frameRate;

  //   let frame = 0;
  //   const timer = setInterval(() => {
  //     frame++;
  //     const progress = frame / totalFrames;
  //     const easeOutQuart = 1 - Math.pow(1 - progress, 4);

  //     setCounts({
  //       clients: Math.floor(targets.clients * easeOutQuart),
  //       services: Math.floor(targets.services * easeOutQuart),
  //       rating: parseFloat((targets.rating * easeOutQuart).toFixed(1)),
  //       satisfaction: Math.floor(targets.satisfaction * easeOutQuart)
  //     });

  //     if (frame >= totalFrames) {
  //       clearInterval(timer);
  //       setCounts(targets);
  //     }
  //   }, 1000 / frameRate);

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <section className="bg-[#e5dfda] text-[#5e4e3d] py-20 md:pt-30 md:pb-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <h1 className="font-open-sans text-[#5e4e3d] font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
                Mais tempo no mar,
                <span className="text-[#5e4e3d] block">
                  Menos preocupação com a prancha.
                </span>
              </h1>
              <p className="font-source text-sm md:text-xl text-[#5f5f5e] leading-relaxed max-w-3xl mx-auto">
                Guarde, repare e viva a experiência completa do surfe <br /> em um único
                lugar, fácil, prático e seguro.
              </p>
            </div>

            {/* Benefits */}
            {/* <div className="flex flex-wrap justify-center gap-6">
              {[
                "Pranchas seguras e prontas sempre que precisar",
                "Reparos e manutenção express",
                "Espaço confortável com café e loja exclusiva"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#e3b653]" />
                  <span className="font-source text-sm text-[#5f5f5e]">{benefit}</span>
                </div>
              ))}
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleOpenModal}
                className="bg-[#e3b653] hover:bg-[#71a2c1] text-[#ffffff] font-source font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-xl"
              >
                Quero minha experiência completa
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={scrollToServices}
                variant="outline"
                className=" text-[#5e4e3d] hover:bg-[#e3b653]/20 hover:text-[#5e4e3d] font-source font-semibold px-8 py-4 rounded-lg text-lg transition-all"
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Social Proof with Animated Numbers */}
            {/* <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-[#5e4e3d]/5">
              <div className="text-center">
                <div className="font-open-sans font-bold text-2xl text-[#e3b653]">
                  {counts.clients}+
                </div>
                <div className="font-source text-sm text-[#5f5f5e]">
                  Clientes satisfeitos
                </div>
              </div>
              <div className="text-center">
                <div className="font-open-sans font-bold text-2xl text-[#e3b653]">
                  {counts.services}+
                </div>
                <div className="font-source text-sm text-[#5f5f5e]">
                  Serviços disponíveis
                </div>
              </div>
              <div className="text-center">
                <div className="font-open-sans font-bold text-2xl text-[#e3b653]">
                  {counts.rating}★
                </div>
                <div className="font-source text-sm text-[#5f5f5e]">Avaliação média</div>
              </div>
              <div className="text-center">
                <div className="font-open-sans font-bold text-2xl text-[#e3b653]">
                  {counts.satisfaction}%
                </div>
                <div className="font-source text-sm text-[#5f5f5e]">Satisfação</div>
              </div>
            </div> */}

            {/* Benefits */}
            {/* Desktop Version */}
            <div className="hidden md:flex flex-wrap justify-center gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-[#5f5f5e]/10 px-4 py-2 rounded-full"
                >
                  <CheckCircle className="w-5 h-5 text-[#5f5f5e]" />
                  <span className="font-source text-sm text-[#5f5f5e]">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Mobile Version - Infinite Scroll */}
            <div className="md:hidden relative overflow-hidden">
              {/* Blur overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#e5dfda] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#e5dfda] to-transparent z-10 pointer-events-none"></div>

              {/* Scrolling container */}
              <div className="overflow-hidden">
                <motion.div
                  className="flex gap-4 whitespace-nowrap"
                  animate={{
                    x: [0, -100 * benefits.length + "%"]
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20, // Velocidade suave - 20 segundos para completar um ciclo
                      ease: "linear"
                    }
                  }}
                >
                  {duplicatedBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-[#5f5f5e]/10 px-4 py-2 rounded-full flex-shrink-0"
                    >
                      <CheckCircle className="w-5 h-5 text-[#5f5f5e]" />
                      <span className="font-source text-sm text-[#5f5f5e] whitespace-nowrap">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SignupModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default HeroSection;
