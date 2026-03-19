"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-[#e5dfda] overflow-hidden">
      <div id="escola" />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex lg:flex-row flex-col gap-8 lg:gap-10 items-center">
            {/* Seção de Imagens */}
            <div className="flex-1 relative animate-initial-right animate-slide-in-from-right animate-delay-300">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 lg:gap-8">
                {/* Primeira imagem */}
                <div className="relative group z-20 animate-initial-right-soft animate-slide-in-from-right-soft animate-delay-500">
                  <div className="md:w-[100%] absolute overflow-hidden rounded-2xl shadow-x z-10 left-4">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1750439455684-aad246d40915?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=871"
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
                  <div className="relative overflow-hidden rounded-2xl shadow-xl mr-10 z-0">
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
                Escola de Surf Parceira
              </h2>
              {/* Texto Principal */}
              <div className="space-y-4 text-gray-700 leading-relaxed animate-initial-right-soft animate-slide-in-from-right-soft animate-delay-400">
                <p className="text-base md:text-lg text-[#6a5c27]">
                  A parceria entre a Cisco Araña Surf School e a TEYU Guardaria nasceu com
                  um objetivo simples: garantir que cada aluno viva a melhor experiência
                  possível dentro e fora d’água. Cada um faz o que sabe de melhor, somando
                  forças para deixar o surfe ainda mais fluido, seguro e organizado.
                </p>
                <p className="text-base md:text-lg text-[#6a5c27]">
                  A Cisco Araña Surf School é a única e exclusiva responsável pela
                  metodologia das aulas, bem como pela condução pedagógica e técnica,
                  sempre com instrutores de surfe qualificados e certificados pelo próprio
                  Cisco Araña, assegurando ensino de alto nível e evolução constante.
                </p>

                <p className="text-base md:text-lg text-[#6a5c27]">
                  Já a TEYU Guardaria cuida da base: oferece a infraestrutura física, a
                  guarda segura de pranchas e acessórios, além do apoio administrativo,
                  incluindo o agendamento das aulas — para que você só precise se
                  preocupar em pegar a próxima onda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
