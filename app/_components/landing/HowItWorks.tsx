"use client";

import React, {useRef} from "react";
import {Smartphone, Calendar, UserCheck, Star} from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Importação dinâmica do framer-motion para evitar erro de client boundary
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), {
  ssr: false,
  loading: () => <div className="flex gap-4 whitespace-nowrap" />
});

const HowItWorks = () => {
  // Criar referência para a seção de vídeo
  const videoSectionRef = useRef<HTMLElement>(null);

  // Função usando useRef
  const handleVideoClick = () => {
    console.log("scrollIntoView");
    if (videoSectionRef.current) {
      videoSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const steps = [
    {
      icon: Smartphone,
      title: "Escolha o Serviço",
      description:
        "Navegue pelos nossos 15+ serviços e escolha o que você precisa. Simples e intuitivo.",
      color: "",
      gradient: "from-[#e3b653] to-[#e3b653]/20",
      shadowColor: "[#e3b653]"
    },
    {
      icon: Calendar,
      title: "Agende o Horário",
      description:
        "Selecione a data e horário que melhor se adequa à sua agenda visita via whatsapp. Flexibilidade total.",
      color: "",
      gradient: "from-[#e3b653] to-[#e3b653]/20",
      shadowColor: "[#e3b653]"
    },
    {
      icon: UserCheck,
      title: "Confirmação",
      description: "Receba a confirmação para a visita.",
      color: "",
      gradient: "from-[#e3b653] to-[#e3b653]/20",
      shadowColor: "[#e3b653]"
    },
    {
      icon: Star,
      title: "Use o serviço",
      description:
        "Relaxe enquanto cuidamos do seu equipamento. Avalie e compartilhe sua experiência.",
      color: "",
      gradient: "from-[#e3b653] to-[#e3b653]/20",
      shadowColor: "[#e3b653]"
    }
  ];

  // Stats data
  const stats = [
    {
      value: "2min",
      label: "Tempo médio de agendamento"
    },
    {
      value: "24h",
      label: "Disponibilidade de horários"
    },
    {
      value: "100%",
      label: "Profissionais verificados"
    }
  ];

  // Create duplicated stats for infinite scroll
  const duplicatedStats = [...stats, ...stats];

  return (
    <section
      id="como-funciona"
      className="py-16 md:py-24 bg-gradient-to-br from-neutral-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-open-sans font-bold text-4xl md:text-5xl lg:text-6xl text-[#6a5c27] mb-6">
            Como Funciona a Guardaria
          </h2>
          <p className="font-source text-xl md:text-2xl text-[#5f5f5e] max-w-4xl mx-auto leading-relaxed">
            Um processo simples, rápido e seguro para você acessar os melhores serviços de
            surf e viver a praia com total liberdade.
          </p>
        </div>

        {/* Enhanced Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 md:gap-4 relative">
            {/* Modern Connection Line */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-full z-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative z-10 animate-slide-up group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Modern Card Design */}
                <div className="bg-white rounded-xl h-[500px] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-neutral-100 group-hover:border-neutral-200">
                  {/* Step Icon with Modern Design */}
                  <div className="relative mb-8">
                    <div
                      className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl ${step.shadowColor} group-hover:scale-110 transition-transform duration-500 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white opacity-20 rounded-full"></div>
                      <step.icon className="w-12 h-12 text-[#6a5c27] relative z-10" />
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full border-4 border-[#6a5c27] flex items-center justify-center shadow-lg">
                      <span className="font-source font-bold text-lg text-[#6a5c27]">
                        {index + 1}
                      </span>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#5e4e3d] to-transparent rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="font-open-sans font-bold text-2xl text-[#6a5c27] group-hover:text-[#e3b653]/70 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="font-source text-[#5f5f5e] leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        {/* Desktop Version */}
        <div className="mt-24 hidden md:grid md:grid-cols-3 gap-8 animate-fade-in">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100"
            >
              <div className="text-4xl font-open-sans font-bold text-[#6a5c27] mb-3">
                {stat.value}
              </div>
              <div className="font-source text-[#5f5f5e] text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mobile Version - Infinite Scroll */}
        <div className="mt-24 md:hidden relative overflow-hidden">
          {/* Blur overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling container */}
          <div className="overflow-hidden pb-5">
            <MotionDiv
              className="flex gap-6 whitespace-nowrap"
              animate={{
                x: [0, -100 * stats.length + "%"]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20, // Velocidade suave - 15 segundos para completar um ciclo
                  ease: "linear"
                }
              }}
            >
              {duplicatedStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg border border-neutral-100 flex-shrink-0 min-w-[250px]"
                >
                  <div className="text-3xl font-open-sans font-bold text-[#e3b653] mb-2">
                    {stat.value}
                  </div>
                  <div className="font-source text-[#5f5f5e] text-sm whitespace-normal">
                    {stat.label}
                  </div>
                </div>
              ))}
            </MotionDiv>
          </div>
        </div>

        {/* Enhanced Demo Section */}
        <div className="mt-20 bg-gradient-to-br from-[#6a5c27] via-[#5e4e3d] to-[#6a5c27] rounded-xl p-12 md:p-16 text-white text-center animate-scale-in relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 opacity-10 rounded-full animate-pulse">
              <Image
                src="/Vectorcoconut_01.svg"
                alt="how-it-works"
                width={100}
                height={100}
                className="w-full h-auto opacity-10"
              />
            </div>
            <div
              className="absolute bottom-10 right-10 w-32 h-32  opacity-5 rounded-full animate-pulse"
              style={{animationDelay: "1s"}}
            >
              <Image
                src="/Vectorconcha_icon.svg"
                alt="how-it-works"
                width={100}
                height={100}
                className="w-full h-auto opacity-10"
              />
            </div>
            <div
              className="absolute top-1/2 left-1/4 w-16 h-16 opacity-5 rounded-full animate-pulse"
              style={{animationDelay: "15s"}}
            >
              <Image
                src="/Vetorwave-icon.svg"
                alt="how-it-works"
                width={100}
                height={100}
                className="w-full h-auto opacity-50"
              />
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="font-open-sans font-bold text-3xl md:text-4xl mb-6">
              Quer ver na prática?
            </h3>
            <p className="font-source text-neutral-100 mb-10 max-w-3xl mx-auto text-xl leading-relaxed">
              Assista a demonstração de 2 minutos e sinta como é simples viver o surf com
              mais liberdade, deixando sua prancha segura e bem cuidada na Teyu.
            </p>
            <button
              onClick={handleVideoClick}
              className="border border-[#e3b653] hover:bg-[#e3b653]-600 transition duration-700 text-white font-source font-bold px-10 py-5 rounded-md hover:scale-105 shadow-2xl text-lg group"
            >
              <span className="group-hover:scale-105 transition-transform inline-block">
                Assistir Demonstração
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
