"use client";

import React, {useState} from "react";
import {ChevronDown} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";

interface Service {
  name: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    name: "Guardaria de Pranchas",
    description: "Armazenamento seguro para suas pranchas enquanto você descansa"
  },
  {
    name: "Guarda Volumes/Lockers",
    description: "Armários individuais para guardar seus pertences com segurança"
  },
  {
    name: "Chuveiro",
    description: "Chuveiros limpos e confortáveis após sua sessão de surf"
  },
  {
    name: "Reparo de Prancha",
    description: "Conserto profissional para sua prancha voltar às ondas"
  },
  {
    name: "Uber Reparo de Prancha",
    description: "Serviço de busca e entrega do reparo da sua prancha"
  },
  {
    name: "Aulas de Surfe",
    description: "Aprenda ou aprimore suas técnicas com instrutores qualificados"
  }
];

interface ServicesDropdownProps {
  children: React.ReactNode;
  isDesktop?: boolean;
}

export const ServicesDropdown: React.FC<ServicesDropdownProps> = React.memo(
  ({children, isDesktop = true}) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!isDesktop) {
      // Para mobile, retorna apenas o link sem dropdown
      return (
        <a
          href="#servicos"
          className="text-[#6a5c27] hover:text-primary hover:bg-[#e5dfda] transition-all font-source font-medium py-3 px-4 rounded-lg"
        >
          {children}
        </a>
      );
    }

    return (
      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className="text-[#5f5f5e] hover:text-[#6a5c27] transition-colors font-source font-medium text-sm xl:text-base relative group flex items-center gap-1">
          <span>{children}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6a5c27] transition-all duration-300 group-hover:w-full"></span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <>
              <Bridge />
              <motion.div
                initial={{opacity: 0, y: 8}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 8}}
                transition={{duration: 0.2}}
                className="absolute left-0 top-[calc(100%_+_16px)] w-[480px] rounded-lg border border-neutral-200 bg-white shadow-xl p-6 z-50"
              >
                <Nub />

                {/* Teyu Guardaria */}
                <div>
                  <h3 className="font-playfair text-lg font-semibold text-[#6a5c27] mb-4">
                    Teyu Guardaria
                  </h3>
                  <div className="space-y-3">
                    {SERVICES.map((service, idx) => (
                      <a key={idx} href="#servicos" className="block group">
                        <h4 className="font-source font-medium text-sm text-[#6a5c27] group-hover:text-[#5f5f5e] transition-colors">
                          {service.name}
                        </h4>
                        <p className="font-source text-xs text-[#5f5f5e] mt-0.5">
                          {service.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Link para a seção */}
                <div className="mt-6 pt-4 border-t border-neutral-200">
                  <a
                    href="#servicos"
                    className="inline-flex items-center text-sm font-source font-medium text-[#6a5c27] hover:text-[#5f5f5e] transition-colors"
                  >
                    Ver todos os serviços →
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

ServicesDropdown.displayName = "ServicesDropdown";

// Componentes estáticos memoizados para melhor performance
const Bridge = React.memo(() => <div className="absolute -top-4 left-0 right-0 h-4" />);
Bridge.displayName = "Bridge";

const Nub = React.memo(() => (
  <span
    style={{
      clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)"
    }}
    className="absolute left-8 top-0 h-3 w-3 -translate-y-1/2 rotate-45 border-l border-t border-neutral-200 bg-white"
  />
));
Nub.displayName = "Nub";
