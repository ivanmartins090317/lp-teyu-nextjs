import React, {forwardRef} from "react";
import {Play} from "lucide-react";

// Usando forwardRef para expor a referência
const VideoSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref} // ← Referência React em vez de ID
      className="py-16 md:py-24 bg-gradient-to-br from-neutral-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-open-sans font-bold text-3xl md:text-4xl lg:text-5xl text-[#6a5c27]">
              Veja Como Funciona
            </h2>
            <p className="font-source text-lg md:text-xl text-[#5f5f5e] max-w-2xl mx-auto">
              Descubra como nossos serviços podem transformar sua experiência na praia,
              garantindo liberdade, segurança e cuidado total com sua prancha.
            </p>
          </div>

          {/* Video Container */}
          <div className="relative group">
            {/* Video Frame */}
            <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-gold/10 rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
              <iframe
                src="https://www.youtube.com/embed/4s11yqHBbLM"
                title="Conceitual - Vídeo Demonstrativo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />

              {/* Overlay for styling */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 pointer-events-none"></div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-[#6a5c27]/10 rounded-xl flex items-center justify-center mx-auto">
                <Play className="w-6 h-6 text-[#6a5c27]" />
              </div>
              <h3 className="font-source font-semibold text-[#6a5c27]">
                Demonstração Completa
              </h3>
              <p className="text-sm text-[#5f5f5e]">Veja como funciona a Guardaria</p>
            </div>

            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-[#6a5c27]/10 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-[#6a5c27] font-bold text-lg">15+</span>
              </div>
              <h3 className="font-source font-semibold text-[#6a5c27]">
                Serviços Premium
              </h3>
              <p className="text-sm text-[#5f5f5e]">
                Você aproveita o surf, nós cuidamos do resto
              </p>
            </div>

            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-[#6a5c27]/10 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-[#6a5c27] font-bold text-lg">4.9</span>
              </div>
              <h3 className="font-source font-semibold text-[#6a5c27]">
                Avaliação Média
              </h3>
              <p className="text-sm text-[#5f5f5e]">
                Clientes satisfeitos com nosso trabalho
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

VideoSection.displayName = "VideoSection"; // Importante para debugging
export default VideoSection;
