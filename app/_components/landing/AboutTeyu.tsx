"use client";

// import {motion} from "framer-motion";
import Image from "next/image";

export default function AboutTeyu() {
  return (
    <section className="pb-16 md:py-16 bg-[#6a5c27] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex lg:flex-row flex-col gap-12 items-center">
            {/* Ilustração do Teyu */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="relative">
                  <Image
                    src="/animal_teyu_icon.svg"
                    alt="Ilustração do Teyu"
                    width={400}
                    height={400}
                    loading="lazy"
                    className="w-full hidden lg:block max-w-md lg:max-w-[100%] rotate-z-[-153deg] mt-[80%] opacity-40"
                  />
                </div>
              </div>
            </div>
            {/* Texto principal */}
            <div className="space-y-6 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#dcd7d1] leading-tight">
                Da onde vem o <br className="block md:hidden" /> nome{" "}
                <span className="text-[#e3b653]">
                  <Image
                    src="/logo_about_us_.webp"
                    alt="Logo Teyu"
                    width={400}
                    height={400}
                    sizes="(max-width: 768px) 80px, 120px"
                    loading="lazy"
                    className="w-full max-w-20 lg:max-w-30 inline-block"
                  />
                </span>
              </h2>

              <div className="w-full z-10 bg-[#e5dfda]/40 rounded-2xl p-8 shadow-lg border border-[#5e4e3d]">
                <p className="text-[#e5dfda] leading-relaxed text-lg">
                  Gênero de répteis <strong>Tupinambis</strong>, a família{" "}
                  <strong>Teiidae</strong>, é popularmente conhecido como{" "}
                  <em>
                    teiú, tiú, tivaçu, tejuaçu, lagartiu, teju, tegu, jacuraru, jacuaru,
                    jacururaru, jacruaru e caruaru
                  </em>
                  .
                </p>

                <div className="mt-6 pt-6 border-t border-[#5e4e3d]">
                  <p className="text-[#e5dfda] leading-relaxed text-lg">
                    Compreende os <strong>maiores lagartos do Novo Mundo</strong> e
                    abrange sete espécies em dois gêneros, todas nativas da{" "}
                    <strong>América do Sul</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Ilustração do Teyu */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative top-[-150%] lg:top-0 left-[10%] lg:left-0">
                <div className="relative">
                  <Image
                    src="/animal_teyu_icon.svg"
                    alt="Ilustração do Teyu"
                    width={400}
                    height={400}
                    loading="lazy"
                    className="w-full max-w-[66%] lg:max-w-[100%] opacity-40"
                  />
                </div>

                {/* Elementos decorativos */}
                {/* <div
                  initial={{opacity: 0, scale: 0}}
                  whileInView={{opacity: 1, scale: 1}}
                  transition={{duration: 0.8, delay: 0.8}}
                  viewport={{once: true}}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-orange-200 rounded-full opacity-30"
                />
                <div
                  initial={{opacity: 0, scale: 0}}
                  whileInView={{opacity: 1, scale: 1}}
                  transition={{duration: 0.8, delay: 1}}
                  viewport={{once: true}}
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-200 rounded-full opacity-40"
                /> */}
              </div>
            </div>
          </div>

          {/* Informações adicionais */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              {/* <div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.7}}
                viewport={{once: true}}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-green-100"
              >
                <div className="text-3xl font-bold text-green-700 mb-2">7</div>
                <p className="text-gray-600">Espécies conhecidas</p>
              </div> */}

              {/* <div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.8}}
                viewport={{once: true}}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-green-100"
              >
                <div className="text-3xl font-bold text-orange-500 mb-2">2</div>
                <p className="text-gray-600">Gêneros distintos</p>
              </div> */}

              {/* <div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.9}}
                viewport={{once: true}}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-green-100"
              >
                <div className="text-3xl font-bold text-green-700 mb-2">🌎</div>
                <p className="text-gray-600">América do Sul</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
