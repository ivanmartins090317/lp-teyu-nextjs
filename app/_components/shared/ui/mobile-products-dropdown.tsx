"use client";

import React from "react";
import {ChevronDown} from "lucide-react";

interface MobileProductsDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
  onItemClick: () => void;
}

const PRODUCTS = [
  {
    name: "Acessórios de Surfe",
    description: "Parafina, deck, leash e tudo que você precisa"
  },
  {
    name: "Acessórios de Praia",
    description: "Produtos essenciais para seu dia na praia"
  },
  {
    name: "Bem Estar",
    description: "Produtos para cuidar do seu corpo"
  },
  {
    name: "Equipamentos de Surf",
    description: "Roupas de neoprene, boots, luvas"
  },
  {
    name: "Pranchas Novas",
    description: "Pranchas novas de diversas marcas"
  },
  {
    name: "Pranchas Usadas",
    description: "Pranchas seminovas com ótimo custo-benefício"
  },
  {
    name: "Teyu Soul Surfers",
    description:
      " Sessão exclusiva na loja, com produtos criados especialmente para você. Cada item é desenhado com a nossa identidade única, pensandoem oferecer uma experiência personalizada e inesquecível para nossos clientes."
  }
];

export const MobileProductsDropdown: React.FC<MobileProductsDropdownProps> = ({
  isOpen,
  onToggle,
  onItemClick
}) => {
  return (
    <div className="space-y-1">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-[#6a5c27] hover:text-primary hover:bg-[#e5dfda] transition-all font-source font-medium py-3 px-4 rounded-lg"
      >
        <span>Produtos</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="ml-4 space-y-1 animate-in slide-in-from-top-2">
          {PRODUCTS.map((product, idx) => (
            <a
              key={idx}
              href="#produtos"
              onClick={onItemClick}
              className="block py-2 px-4 text-sm text-[#5f5f5e] hover:text-[#6a5c27] hover:bg-[#e5dfda] rounded-lg transition-all font-source"
            >
              <div className="font-medium">{product.name}</div>
              <div className="text-xs text-[#5f5f5e] mt-0.5">{product.description}</div>
            </a>
          ))}
          <a
            href="#produtos"
            onClick={onItemClick}
            className="block py-2 px-4 text-sm font-medium text-[#6a5c27] hover:bg-[#e5dfda] rounded-lg transition-all font-source mt-2"
          >
            Ver todos os produtos →
          </a>
        </div>
      )}
    </div>
  );
};
