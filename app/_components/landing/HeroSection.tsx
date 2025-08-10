"use client";

import React, {useState} from "react";
import {Button} from "../shared/ui/button";
import SignupModal from "./signup/SignupModal";
import dynamic from "next/dynamic";
import Image from "next/image";
import {motion} from "framer-motion";
import {ArrowRight, CheckCircle} from "lucide-react";

// Importação dinâmica do framer-motion para evitar erro de client boundary
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), {
  ssr: false,
  loading: () => <div className="flex gap-4 whitespace-nowrap" />
});

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

  // const scrollToServices = () => {
  //   const servicesSection = document.getElementById("servicos");
  //   if (servicesSection) {
  //     servicesSection.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start"
  //     });
  //   }
  // };

  // Benefits data
  const benefits = [
    "Pranchas seguras e prontas sempre que precisar",
    "Reparos e manutenção express",
    "Espaço confortável com café e loja exclusiva"
  ];

  // Create duplicated benefits for infinite scroll
  const duplicatedBenefits = [...benefits, ...benefits];
  const quadriplicatedBenefits = [...benefits, ...benefits, ...benefits, ...benefits];

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
  const MotionImage = motion(Image);
  const MotionButton = motion(Button);

  return (
    <section className="bg-[#6a5c27] text-[#dcd7d1] h-auto md:min-h-screen pt-16 md:pt-35 md:pb-0 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              {/* <h1 className="font-open-sans text-[#5e4e3d] font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
                Mais tempo no mar,
                <span className="text-[#5e4e3d] block">
                  Menos preocupação com a prancha.
                </span>
              </h1> */}
              <div className="w-full flex justify-center p-0 m-0 mt-20 md:mt-0">
                <MotionImage
                  src="/logo_hero_teyu_02.svg"
                  width={400}
                  height={400}
                  alt="Logo hero Teyu"
                  initial={{opacity: 0, scale: 0.8}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 0.6}}
                  className="w-[89%] h-auto md:w-[50%] ml-[-2%]"
                />
              </div>
              <motion.p
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.8}}
                className="font-light text-sm md:text-xl text-[#e5dfda] mb-0 leading-relaxed max-w-3xl mx-auto"
              >
                Guarde, repare e viva a experiência completa do surfe <br /> em um único
                lugar, fácil, prático e seguro.
              </motion.p>
              {/* <motion.span
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.4}}
                className="text-sm font-thin"
              >
                Inspirado pela natureza, feito para quem vive o mar
              </motion.span> */}
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
            {
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:mb-20 ">
                <MotionButton
                  initial={{opacity: 0, scale: 0.9}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 0.4, delay: 0.5}}
                  onClick={handleOpenModal}
                  className="w-[73%] mx-auto md:w-auto bg-[#e3b653] hover:bg-[#e3b653]/20 hover:text-[#e5dfda] text-[#5e4e3d] font-source font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-xl"
                >
                  Experiência completa
                  <ArrowRight className="w-5 h-5 ml-2" />
                </MotionButton>
                {/* <MotionButton
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.4, delay: 0.7}}
                onClick={scrollToServices}
                variant="outline"
                className=" text-[#e5dfda]/20 hover:bg-[#e3b653]/20 hover:text-[#e5dfda] font-source font-semibold px-8 py-4 rounded-lg text-lg transition-all"
              >
                Nossos Serviços
              </MotionButton> */}
              </div>
            }
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

            {/* Mobile Version - Infinite Scroll */}
            <div className="md:hidden relative overflow-hidden mb-10 ">
              {/* Blur overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-[#6a5c27] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-l from-[#6a5c27] to-transparent z-10 pointer-events-none"></div>

              {/* Scrolling container */}
              <div className="overflow-hidden">
                <MotionDiv
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
                      className="flex items-center space-x-2 bg-[#e5dfda]/10 px-4 py-2 rounded-full flex-shrink-0"
                    >
                      <CheckCircle className="w-5 h-5 text-[#e5dfda]" />
                      <span className="font-source text-sm text-[#e5dfda] whitespace-nowrap">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </MotionDiv>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      {/* Desktop Version */}
      <div className="hidden md:flex relative overflow-hidden bg-[#5e4e3d]/20 p-16 ">
        {/* Blur overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-38 bg-gradient-to-r from-[#6a5c27] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-38 bg-gradient-to-l from-[#6a5c27] to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling container */}
        <div className="overflow-hidden">
          <MotionDiv
            className="flex gap-4 whitespace-nowrap"
            animate={{
              x: [0, -100 * benefits.length + "%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 90, // Velocidade suave - 20 segundos para completar um ciclo
                ease: "linear"
              }
            }}
          >
            {quadriplicatedBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-[#e5dfda]/10 px-4 py-2 rounded-full flex-shrink-0"
              >
                <CheckCircle className="w-5 h-5 text-[#e5dfda]" />
                <span className="font-source text-sm text-[#e5dfda] whitespace-nowrap">
                  {benefit}
                </span>
              </div>
            ))}
          </MotionDiv>
        </div>
      </div>
      <SignupModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default HeroSection;
