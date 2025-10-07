"use client";

import {motion} from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-[#e5dfda] overflow-hidden">
      <div id="sobre-nos" />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex lg:flex-row flex-col gap-8 lg:gap-10 items-center">
            {/* Conteúdo Principal */}
            <motion.div
              initial={{opacity: 0, x: -50}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8, ease: "easeOut"}}
              viewport={{once: true}}
              className="flex-1 lg:pr-8"
            >
              {/* Título */}
              <motion.h2
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.2}}
                viewport={{once: true}}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#6a5c27] mb-6 font-source leading-tight"
              >
                Sobre nós
              </motion.h2>

              {/* Texto Principal */}
              <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.4}}
                viewport={{once: true}}
                className="space-y-4 text-gray-700 leading-relaxed"
              >
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
              </motion.div>
            </motion.div>

            {/* Seção de Imagens */}
            <motion.div
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8, ease: "easeOut", delay: 0.3}}
              viewport={{once: true}}
              className="flex-1 relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 lg:gap-8">
                {/* Primeira imagem */}
                <motion.div
                  initial={{opacity: 0, y: 30}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.6, delay: 0.5}}
                  viewport={{once: true}}
                  className="relative group"
                >
                  <div className="md:w-[100%] absolute overflow-hidden rounded-2xl shadow-x z-10 right-4">
                    <Image
                      src="/imagem_sobre_nos_02.png"
                      alt="Nossa equipe - Foto 1"
                      width={1000}
                      height={500}
                      className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>

                {/* Segunda imagem */}
                <motion.div
                  initial={{opacity: 0, y: 30}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.6, delay: 0.7}}
                  viewport={{once: true}}
                  className="relative group md:mt-8"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl ml-10">
                    <Image
                      src="/pele_teyu_verdemusgo.svg"
                      alt="textura pele teyu"
                      width={400}
                      height={500}
                      className="w-full h-[300px] md:h-[400px] lg:h-[450px] lg:max-w-[100%] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="relative inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </div>

              {/* Elemento decorativo de fundo */}
              <motion.div
                initial={{opacity: 0, scale: 0.8}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1, delay: 0.8}}
                viewport={{once: true}}
                className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full opacity-30 -z-10 hidden lg:block"
              />

              <motion.div
                initial={{opacity: 0, scale: 0.8}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 1, delay: 1}}
                viewport={{once: true}}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full opacity-40 -z-10 hidden lg:block"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
