"use client";

import {motion} from "framer-motion";
import Image from "next/image";

export default function AboutTeyu() {
  return (
    <section className="pb-16 md:py-16 bg-[#6a5c27] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex lg:flex-row flex-col gap-12 items-center">
            {/* Ilustração do Teyu */}
            <motion.div
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8, ease: "easeOut"}}
              viewport={{once: true}}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                initial={{scale: 0.8, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{duration: 1, delay: 0.3, ease: "easeOut"}}
                viewport={{once: true}}
                className="relative"
              >
                <motion.div
                  animate={{
                    y: [0, 0, 0],
                    rotate: [0, 0, 0, 0, 0]
                  }}
                  transition={{
                    duration: 0,
                    repeat: 0,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <Image
                    src="/animal_teyu_icon.svg"
                    alt="Ilustração do Teyu"
                    width={400}
                    height={400}
                    className="w-full hidden lg:block max-w-md lg:max-w-[100%] rotate-z-[-153deg] mt-[80%] opacity-40"
                  />
                </motion.div>

                {/* Elementos decorativos */}
                {/* <motion.div
                  initial={{opacity: 0, scale: 0}}
                  whileInView={{opacity: 1, scale: 1}}
                  transition={{duration: 0.8, delay: 0.8}}
                  viewport={{once: true}}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-orange-200 rounded-full opacity-30"
                />
                <motion.div
                  initial={{opacity: 0, scale: 0}}
                  whileInView={{opacity: 1, scale: 1}}
                  transition={{duration: 0.8, delay: 1}}
                  viewport={{once: true}}
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-200 rounded-full opacity-40"
                /> */}
              </motion.div>
            </motion.div>
            {/* Texto principal */}
            <motion.div
              initial={{opacity: 0, x: -50}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8, ease: "easeOut"}}
              viewport={{once: true}}
              className="space-y-6 text-center"
            >
              <motion.h2
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.2}}
                viewport={{once: true}}
                className="text-4xl lg:text-5xl font-bold text-[#dcd7d1] leading-tight"
              >
                Da onde vem o nome{" "}
                <span className="text-[#e3b653]">
                  <Image
                    src="/logo_about_lp.png"
                    alt="Ilustração do Teyu"
                    width={400}
                    height={400}
                    className="w-full max-w-[26%] lg:max-w-[18%] inline-block"
                  />
                  ?
                </span>
              </motion.h2>

              <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.4}}
                viewport={{once: true}}
                className="w-full z-10 bg-[#e5dfda]/40 rounded-2xl p-8 shadow-lg border border-[#5e4e3d]"
              >
                <p className="text-[#e5dfda] leading-relaxed text-lg">
                  Gênero de répteis <strong>Tupinambis</strong>, a família{" "}
                  <strong>Teiidae</strong>, é popularmente conhecido como{" "}
                  <em>
                    teiú, tiú, tivaçu, tejuaçu, lagartiu, teju, tegu, jacuraru, jacuaru,
                    jacururaru, jacruaru e caruaru
                  </em>
                  .
                </p>

                <motion.div
                  initial={{opacity: 0, y: 10}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.6, delay: 0.6}}
                  viewport={{once: true}}
                  className="mt-6 pt-6 border-t border-[#5e4e3d]"
                >
                  <p className="text-[#e5dfda] leading-relaxed text-lg">
                    Compreende os <strong>maiores lagartos do Novo Mundo</strong> e
                    abrange sete espécies em dois gêneros, todas nativas da{" "}
                    <strong>América do Sul</strong>.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Ilustração do Teyu */}
            <motion.div
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8, ease: "easeOut"}}
              viewport={{once: true}}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                initial={{scale: 0.8, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{duration: 1, delay: 0.3, ease: "easeOut"}}
                viewport={{once: true}}
                className="relative top-[-150%] lg:top-0 left-[10%] lg:left-0"
              >
                <motion.div
                  animate={{
                    y: [0, 0, 0],
                    rotate: [0, 0, 0, 0, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <Image
                    src="/animal_teyu_icon.svg"
                    alt="Ilustração do Teyu"
                    width={400}
                    height={400}
                    className="w-full max-w-[66%] lg:max-w-[100%] opacity-40"
                  />
                </motion.div>

                {/* Elementos decorativos */}
                {/* <motion.div
                  initial={{opacity: 0, scale: 0}}
                  whileInView={{opacity: 1, scale: 1}}
                  transition={{duration: 0.8, delay: 0.8}}
                  viewport={{once: true}}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-orange-200 rounded-full opacity-30"
                />
                <motion.div
                  initial={{opacity: 0, scale: 0}}
                  whileInView={{opacity: 1, scale: 1}}
                  transition={{duration: 0.8, delay: 1}}
                  viewport={{once: true}}
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-200 rounded-full opacity-40"
                /> */}
              </motion.div>
            </motion.div>
          </div>

          {/* Informações adicionais */}
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.5}}
            viewport={{once: true}}
            className="mt-16 text-center"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {/* <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.7}}
                viewport={{once: true}}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-green-100"
              >
                <div className="text-3xl font-bold text-green-700 mb-2">7</div>
                <p className="text-gray-600">Espécies conhecidas</p>
              </motion.div> */}

              {/* <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.8}}
                viewport={{once: true}}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-green-100"
              >
                <div className="text-3xl font-bold text-orange-500 mb-2">2</div>
                <p className="text-gray-600">Gêneros distintos</p>
              </motion.div> */}

              {/* <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.9}}
                viewport={{once: true}}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-green-100"
              >
                <div className="text-3xl font-bold text-green-700 mb-2">🌎</div>
                <p className="text-gray-600">América do Sul</p>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
