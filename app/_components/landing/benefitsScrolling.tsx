"use client";

import {CheckCircle} from "lucide-react";
// import {motion} from "framer-motion";
import dynamic from "next/dynamic";

const BenefitsScrolling = () => {
  // Importação dinâmica do framer-motion para evitar erro de client boundary
  const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), {
    ssr: false,
    loading: () => <div className="flex gap-4 whitespace-nowrap" />
  });

  // Benefits data
  const benefits = [
    "Pranchas seguras e prontas sempre que precisar",
    "Reparos e manutenção express",
    "Espaço confortável com café e loja exclusiva"
  ];

  // Create duplicated benefits for infinite scroll
  const duplicatedBenefits = [...benefits, ...benefits];
  const quadriplicatedBenefits = [
    ...benefits,
    ...benefits,
    ...benefits,
    ...benefits,
    ...benefits,
    ...benefits,
    ...benefits,
    ...benefits
  ];

  return (
    <>
      {/* Mobile Version - Infinite Scroll */}
      <div className="md:hidden relative overflow-hidden mb-0 bg-[#6a5c27]/80 p-8">
        {/* Blur overlays   */}
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
                duration: 40, // Velocidade suave - 20 segundos para completar um ciclo
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
      {/* Desktop Version */}
      <div className="hidden md:flex relative overflow-hidden bg-[#6a5c27]/80 p-16 ">
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
                duration: 120, // Velocidade suave - 20 segundos para completar um ciclo
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
    </>
  );
};

export default BenefitsScrolling;
