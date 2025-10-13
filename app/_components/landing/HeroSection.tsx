"use client";

import React, {useState} from "react";
import {Button} from "../shared/ui/button";
import SignupModal from "./signup/SignupModal";
import Image from "next/image";
import {ArrowRight} from "lucide-react";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section className="bg-[#6a5c27] text-[#dcd7d1] pb-10 md:min-h-screen pt-16 md:pt-35 md:pb-0 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 ">
        <div className="flex justify-center items-center max-w-7xl md:min-h-[80vh] mx-auto text-center">
          {/* Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="w-full flex justify-center p-0 m-0 mt-20 md:mt-15 2xl:mt-18 lg:mt-15">
                <Image
                  src="/logo_teyu_hero_.svg"
                  width={400}
                  height={400}
                  alt="Logo hero Teyu"
                  priority={true}
                  className="md:w-2xl lg:max-w-xl animate-fade-in"
                />
              </div>
              <div className="w-[90%] mx-auto text-center mt-5">
                <p className="font-semibold font-libre-baskerville-italic italic  text-sm md:text-2xl lg:text-xl text-[#e5dfda] mb-0 leading-relaxed max-w-2.4xl mx-auto xsm:text-xs">
                  Guarde, repare e viva a experiência completa{" "}
                  <br className="max-[379px]:hidden" /> do surfe em um único lugar.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            {
              <div className="flex  gap-4 justify-center md:mb-20 md:mt-10">
                <Button
                  onClick={handleOpenModal}
                  className=" text-sm bg-[#e3b653] hover:bg-[#e3b653]/20 hover:text-[#e5dfda] text-[#5e4e3d] transition duration-700 font-source font-semibold px-10 py-4 rounded-lg hover:scale-105 shadow-xl animate-fade-in"
                >
                  Experiência completa
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
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
