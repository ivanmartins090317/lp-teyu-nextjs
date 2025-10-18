"use client";

import React, {useState} from "react";
import {ChevronDown} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";

interface Product {
  name: string;
  description: string;
}

const PRODUCTS: Product[] = [
  {
    name: "Acessórios de Surfe",
    description: "Parafina, deck, leash e tudo que você precisa para surfar"
  },
  {
    name: "Acessórios de Praia",
    description: "Produtos essenciais para seu dia na praia"
  },
  {
    name: "Bem Estar",
    description: "Produtos para cuidar do seu corpo antes e depois do surf"
  },
  {
    name: "Equipamentos de Surf",
    description: "Roupas de neoprene, boots, luvas e mais"
  },
  {
    name: "Pranchas Novas",
    description: "Pranchas novas de diversas marcas e modelos"
  },
  {
    name: "Pranchas Usadas",
    description: "Pranchas seminovas com ótimo custo-benefício"
  },
  {
    name: "Moda e Vestuário",
    description: "Roupas e estilo para surfistas dentro e fora da água"
  }
];

interface ProductsDropdownProps {
  children: React.ReactNode;
  isDesktop?: boolean;
}

export const ProductsDropdown: React.FC<ProductsDropdownProps> = React.memo(
  ({children, isDesktop = true}) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!isDesktop) {
      // Para mobile, retorna apenas o link sem dropdown
      return (
        <a
          href="#produtos"
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

                {/* Teyu Prancharia - Produtos */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <h3 className="font-playfair text-lg font-semibold text-[#6a5c27] mb-4">
                      Teyu Prancharia
                    </h3>

                    <div className="space-y-2">
                      {PRODUCTS.map((product, idx) => (
                        <a key={idx} href="#produtos" className="block group">
                          <h4
                            className={`font-source font-medium text-sm text-[#6a5c27] group-hover:text-[#5f5f5e] transition-colors ${
                              product.name === "Teyu Soul Surfers" ? "font-extrabold" : ""
                            }`}
                          >
                            {product.name}
                          </h4>
                          <p className="font-source text-xs text-[#5f5f5e] mt-0.5">
                            {product.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="">
                    <h3 className="font-playfair text-lg font-semibold text-[#6a5c27] mb-4">
                      Teyu Soul Surfers
                    </h3>
                    <p className="font-source text-xs text-[#5f5f5e] mt-0.5 leading-relaxed">
                      {" "}
                      Sessão exclusiva na loja, com produtos criados especialmente para
                      você. Cada item é desenhado com a nossa identidade única, pensando
                      em oferecer uma experiência personalizada e inesquecível para nossos
                      clientes.
                    </p>
                  </div>
                </div>

                {/* Link para a seção */}
                <div className="mt-6 pt-4 border-t border-neutral-200">
                  <a
                    href="#produtos"
                    className="inline-flex items-center text-sm font-source font-medium text-[#6a5c27] hover:text-[#5f5f5e] transition-colors"
                  >
                    Ver todos os produtos →
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

ProductsDropdown.displayName = "ProductsDropdown";

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
