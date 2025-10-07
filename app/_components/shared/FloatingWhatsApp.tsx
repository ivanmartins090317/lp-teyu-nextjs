"use client";

import React from "react";
import {MessageCircle} from "lucide-react";
import {useWhatsApp} from "@/app/_hooks/useWhatsApp";

const FloatingWhatsApp = () => {
  // const handleWhatsAppClick = () => {
  //   const phoneNumber = "5511999999999"; // Substitua pelo número real
  //   const message = "Olá! Gostaria de falar com um especialista sobre os serviços.";
  //   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  //     message
  //   )}`;
  //   window.open(whatsappUrl, "_blank");
  // };
  const {openWhatsApp} = useWhatsApp();

  return (
    <button
      onClick={() => openWhatsApp()}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Falar no WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </button>
  );
};

export default FloatingWhatsApp;
