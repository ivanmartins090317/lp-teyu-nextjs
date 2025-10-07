"use client";

import React, {useState} from "react";
import {CheckCircle, Gift, Clock, Shield} from "lucide-react";
import SignupModal from "./signup/SignupModal";

const FinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log("Abrindo modal...");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Fechando modal...");
    setIsModalOpen(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = "Olá! Gostaria de falar com um especialista sobre os serviços.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#e5dfda] via-[#e5dfda]/95 to-[#e5dfda]/90 text-[#6a5c27] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-20 h-20 border border-gold rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border border-gold rounded-lg rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Header */}
          <div className="space-y-6 mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl">
              Comece hoje mesmo a ter mais tempo para o que importa
            </h2>
            <p className="font-source text-lg md:text-xl text-[#5f5f5e] max-w-2xl mx-auto leading-relaxed">
              Cadastre-se agora e ganhe 10% de desconto no primeiro serviço. Oferta válida
              por tempo limitado.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              {icon: Gift, text: "10% de desconto"},
              {icon: Clock, text: "Sem compromisso"},
              {icon: Shield, text: "Segurança garantida"},
              {icon: CheckCircle, text: "Qualidade premium"}
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-12 h-12 bg-[#e3b653]/20 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-[#e3b653]" />
                </div>
                <span className="font-source text-sm text-[#5f5f5e]">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="space-y-6 mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleOpenModal}
                className="bg-[#e3b653] hover:bg-[#6a5c27]/70 text-[#6a5c27  ] hover:text-[#e5dfda] font-source font-bold px-12 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-2xl hover:shadow-gold/20"
              >
                Criar Minha Conta Grátis
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="border-1 border-[#6a5c27] text-[#6a5c27] hover:bg-[#6a5c27]/20 hover:text-[#6a5c27] font-source font-semibold px-12 py-4 rounded-lg text-lg transition-all"
              >
                Falar com Especialista
              </button>
            </div>

            {/* Urgency */}
            <div className="inline-flex items-center space-x-2 bg-[#e3b653]/20 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-[#e3b653]" />
              <span className="font-source text-sm text-[#e3b653] font-medium">
                Oferta válida até o final do mês
              </span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="border-t border-[#5f5f5e]/20 pt-8">
            <p className="font-source text-[#5f5f5e] mb-4">
              Junte-se a mais de 500 clientes que já transformaram sua rotina
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-[#ca8454] rounded-full"></div>
                <span className="text-[#5f5f5e]">Cadastro em 2 minutos</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-[#71a2c1] rounded-full"></div>
                <span className="text-[#5f5f5e]">Sem taxa de adesão</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-[#5e4e3d] rounded-full"></div>
                <span className="text-[#5f5f5e]">Cancelamento fácil</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

      {/* Modal */}
      <SignupModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default FinalCTA;
