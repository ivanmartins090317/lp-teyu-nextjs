"use client";

import React, {useState} from "react";
import {Button} from "../shared/ui/button";
import SignupModal from "./signup/SignupModal";
import Image from "next/image";
import {motion} from "framer-motion";
import {ArrowRight} from "lucide-react";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const MotionImage = motion(Image);
  const MotionButton = motion(Button);

  return (
    <section className="bg-[#6a5c27] text-[#dcd7d1] pb-10 md:min-h-screen pt-16 md:pt-35 md:pb-0 relative overflow-hidden">
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
              <div className="w-full flex justify-center p-0 m-0 mt-20 md:mt-15 2xl:mt-18 lg:mt-15">
                <MotionImage
                  src="/logo_hero_teyu_02.svg"
                  width={400}
                  height={400}
                  alt="Logo hero Teyu"
                  initial={{opacity: 0, scale: 0.8}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 0.6}}
                  className="w-[92%] h-auto md:w-[52%] ml-[1%] lg:w-[50%]"
                />
              </div>
              <div className="w-[90%] mx-auto text-center mt-5">
                <motion.p
                  initial={{opacity: 0, y: 10}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.6, delay: 0.8}}
                  className="font-semibold font-libre-baskerville-italic italic text-sm md:text-2xl lg:text-2xl text-[#e5dfda] mb-0 leading-relaxed max-w-2.4xl mx-auto"
                >
                  Guarde, repare e viva a experiência completa <br /> do surfe em um único
                  lugar.
                </motion.p>
              </div>
            </div>

            {/* CTA Buttons */}
            {
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:mb-20 md:mt-10">
                <MotionButton
                  initial={{opacity: 0, scale: 0.9}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 0.4, delay: 0.5}}
                  onClick={handleOpenModal}
                  className="w-[53%] md:w-[20%] text-sm mx-auto bg-[#e3b653] hover:bg-[#e3b653]/20 hover:text-[#e5dfda] text-[#5e4e3d] font-source font-semibold px-20 py-4 rounded-lg  transition-all hover:scale-105 shadow-xl"
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
          </div>
        </div>
      </div>

      <SignupModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default HeroSection;
