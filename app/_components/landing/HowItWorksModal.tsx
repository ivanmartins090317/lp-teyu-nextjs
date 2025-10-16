import React from "react";
import HowItWorks from "./HowItWorks";

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HowItWorksModal = ({isOpen, onClose}: HowItWorksModalProps) => {
  // Não renderiza nada se não estiver aberto
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Overlay - fecha ao clicar fora */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Fechar modal"
      />

      {/* Modal Content */}
      <div className="relative overflow-x-hidden bg-white rounded-lg shadow-xl max-w-7xl w-full mx-4 max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="sticky top-8 right-4 float-right z-10 bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-900 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Fechar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Componente HowItWorks renderizado dentro do modal */}
        <div className="pt-4">
          <HowItWorks />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksModal;
