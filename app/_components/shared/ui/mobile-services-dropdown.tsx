"use client";

import React from "react";
import {ChevronDown} from "lucide-react";

interface MobileServicesDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
  onItemClick: () => void;
}

const SERVICES = [
  {
    name: "Guardaria de Pranchas",
    description: "Armazenamento seguro para suas pranchas"
  },
  {
    name: "Guarda Volumes/Lockers",
    description: "Armários para guardar seus pertences"
  },
  {
    name: "Chuveiro",
    description: "Chuveiros limpos após sua sessão"
  },
  {
    name: "Reparo de Prancha",
    description: "Conserto profissional para sua prancha"
  },
  {
    name: "Uber Reparo de Prancha",
    description: "Busca e entrega do reparo"
  },
  {
    name: "Aulas de Surfe",
    description: "Aprenda com instrutores qualificados"
  }
];

export const MobileServicesDropdown: React.FC<MobileServicesDropdownProps> = ({
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
        <span>Serviços</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="ml-4 space-y-1 animate-in slide-in-from-top-2">
          {SERVICES.map((service, idx) => (
            <a
              key={idx}
              href="#servicos"
              onClick={onItemClick}
              className="block py-2 px-4 text-sm text-[#5f5f5e] hover:text-[#6a5c27] hover:bg-[#e5dfda] rounded-lg transition-all font-source"
            >
              <div className="font-medium">{service.name}</div>
              <div className="text-xs text-[#5f5f5e] mt-0.5">{service.description}</div>
            </a>
          ))}
          <a
            href="#servicos"
            onClick={onItemClick}
            className="block py-2 px-4 text-sm font-medium text-[#6a5c27] hover:bg-[#e5dfda] rounded-lg transition-all font-source mt-2"
          >
            Ver todos os serviços →
          </a>
        </div>
      )}
    </div>
  );
};
