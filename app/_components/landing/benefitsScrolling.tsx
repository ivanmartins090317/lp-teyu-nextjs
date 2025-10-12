"use client";

import {CheckCircle} from "lucide-react";
import {CSSProperties} from "react";

// Tipo que permite CSS custom properties (variáveis --*)
type CSSPropertiesWithVars = CSSProperties & {
  [key: `--${string}`]: string | number;
};

function BenefitsScrolling() {
  // Conteúdo exibido como "marquee". CSS de animação está em app/globals.css
  const benefits = [
    "Pranchas seguras e prontas sempre que precisar",
    "Reparos e manutenção express",
    "Espaço confortável com café e loja exclusiva"
  ];

  const loopShort = [...benefits, ...benefits];
  const loopLong = [...benefits, ...benefits, ...benefits, ...benefits];

  function renderChip(text: string, index: number, size: "sm" | "md") {
    const sizeClasses = size === "sm" ? "px-4 py-2 text-sm" : "px-5 py-2.5 text-base";

    return (
      <div
        key={`${text}-${index}`}
        className={`flex items-center gap-2 bg-[#e5dfda]/10 text-[#e5dfda] rounded-full flex-shrink-0 ${sizeClasses}`}
      >
        <CheckCircle className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />
        <span className="font-source whitespace-nowrap">{text}</span>
      </div>
    );
  }

  return (
    <>
      {/* Mobile - uma faixa */}
      <div className="md:hidden relative bg-[#6a5c27]/80 py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#6a5c27] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-r from-[#6a5c27] to-transparent" />

        <div className="marquee" aria-label="Benefícios Teyu">
          <div
            className="marquee__inner"
            style={{"--duration": "20s"} as CSSPropertiesWithVars}
          >
            {loopShort.map((text, idx) => renderChip(text, idx, "sm"))}
          </div>
        </div>
      </div>

      {/* Desktop - duas faixas contra-animadas */}
      <div className="hidden md:block relative bg-[#6a5c27]/80 py-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#6a5c27] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#6a5c27] to-transparent" />

        <div className="space-y-4">
          <div className="marquee" aria-hidden="true">
            <div
              className="marquee__inner"
              style={{"--duration": "55s"} as CSSPropertiesWithVars}
            >
              {loopLong.map((text, idx) => renderChip(text, idx, "md"))}
            </div>
          </div>
          {/* <div className="marquee marquee--reverse" aria-hidden="true">
            <div
              className="marquee__inner"
              style={{"--duration": "65s"} as CSSPropertiesWithVars}
            >
              {loopLong.map((text, idx) => renderChip(text, idx, "md"))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default BenefitsScrolling;
