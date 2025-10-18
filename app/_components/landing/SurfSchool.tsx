"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-[#e5dfda] overflow-hidden">
      <div id="sobre-nos" />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex lg:flex-row flex-col gap-8 lg:gap-10 items-center">
            {/* Seção de Imagens */}
            <div className="flex-1 relative animate-initial-right animate-slide-in-from-right animate-delay-300">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 lg:gap-8">
                {/* Primeira imagem */}
                <div className="relative group z-20 animate-initial-right-soft animate-slide-in-from-right-soft animate-delay-500">
                  <div className="md:w-[100%] absolute overflow-hidden rounded-2xl shadow-x z-10 right-4">
                    <Image
                      src="/imagem_sobre_nos_02_.webp"
                      alt="Nossa equipe - Foto 1"
                      width={1000}
                      height={500}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Segunda imagem */}
                <div className="relative group md:mt-8 animate-initial-right-soft animate-slide-in-from-right-soft animate-delay-700">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl ml-10 z-0">
                    <Image
                      src="/pele_teyu_verdemusgo.svg"
                      alt="textura pele teyu"
                      width={400}
                      height={500}
                      loading="lazy"
                      className="w-full h-[300px] md:h-[400px] lg:h-[450px] lg:max-w-[100%] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="relative inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Conteúdo Principal */}
            <div className="flex-1 lg:pr-8 animate-initial-right-soft animate-slide-in-from-right-soft">
              {/* Título */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#6a5c27] mb-6 font-source leading-tight animate-initial-right-soft animate-slide-in-from-right-soft animate-delay-200">
                Sobre nós
              </h2>
              <p>sjkljkjdl</p>
              {/* Texto Principal */}
              <div className="space-y-4 text-gray-700 leading-relaxed animate-initial-right-soft animate-slide-in-from-right-soft animate-delay-400">
                <p className="text-base md:text-lg text-[#6a5c27]">
                  Guilherme Penteado Campos Filho, ou Gui, começou a surfar nos anos 70 no
                  Guarujá, mas foi em 2006, após um tempo afastado das ondas, que ele
                  redescobriu sua paixão pelo surf. Foi nesse retorno que ele conheceu
                  Cisco Araña, mestre do longboard, e a partir daí, a conexão entre eles
                  se fortaleceu. Cisco, com sua sabedoria, também apresentou Gui a Samuel
                  Fragoas, outro grande amante do surf.
                </p>
                <p className="text-base md:text-lg text-[#6a5c27]">
                  Samuel sempre teve o surf no coração, mas com o tempo, o esporte foi
                  ficando em segundo plano. Sua vida tomou um novo rumo quando sua esposa
                  matriculou seu filho na escola de Cisco Araña. Para acompanhar o filho
                  nas aulas, Samuel decidiu voltar a surfar e, ao fazer isso, se
                  reconectou com sua verdadeira paixão. A amizade entre os três se
                  fortaleceu, e essa conexão profunda com o surf se transformou em algo
                  muito maior do que esporte – virou uma filosofia de vida.
                </p>

                <p className="text-base md:text-lg text-[#6a5c27]">
                  Juntos, Gui e Samuel criaram a Teyu, um espaço que reflete tudo o que
                  acreditam sobre o surf: uma experiência única de conexão com o mar,
                  muito mais que simples ondas, mas um estilo de vida que une família,
                  amigos e a busca constante pelo equilíbrio e pela paz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
