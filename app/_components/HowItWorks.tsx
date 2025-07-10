import React from "react";
import {Smartphone, Calendar, UserCheck, Star} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Escolha o Serviço",
      description:
        "Navegue pelos nossos 15+ serviços e escolha o que você precisa. Simples e intuitivo.",
      color: "",
      gradient: "from-[#e3b653] to-[#e3b653]",
      shadowColor: "[#e3b653]"
    },
    {
      icon: Calendar,
      title: "Agende o Horário",
      description:
        "Selecione a data e horário que melhor se adequa à sua agenda visita via whatsapp. Flexibilidade total.",
      color: "",
      gradient: "from-[#e3b653] to-[#e3b653]",
      shadowColor: "[#e3b653]"
    },
    {
      icon: UserCheck,
      title: "Confirmação",
      description: "Receba a confirmação para a visita.",
      color: "",
      gradient: "from-[#e3b653] to-[#e3b653]",
      shadowColor: "[#e3b653]"
    },
    {
      icon: Star,
      title: "Use o serviço",
      description:
        "Relaxe enquanto cuidamos do seu equipamento. Avalie e compartilhe sua experiência.",
      color: "",
      gradient: "from-[#e3b653] to-[#e3b653]",
      shadowColor: "[#e3b653]"
    }
  ];

  return (
    <section
      id="como-funciona"
      className="py-16 md:py-24 bg-gradient-to-br from-neutral-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-open-sans font-bold text-4xl md:text-5xl lg:text-6xl text-[#5e4e3d] mb-6">
            Como Funciona
          </h2>
          <p className="font-source text-xl md:text-2xl text-[#5f5f5e] max-w-4xl mx-auto leading-relaxed">
            Um processo simples, rápido e seguro para você acessar os melhores serviços de
            surf e viver a praia com total liberdade.
          </p>
        </div>

        {/* Enhanced Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 relative">
            {/* Modern Connection Line */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-blue-500 via-green-500 via-orange-500 to-purple-500 rounded-full z-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 via-orange-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative z-10 animate-slide-up group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Modern Card Design */}
                <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-neutral-100 group-hover:border-neutral-200">
                  {/* Step Icon with Modern Design */}
                  <div className="relative mb-8">
                    <div
                      className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl ${step.shadowColor} group-hover:scale-110 transition-transform duration-500 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white opacity-20 rounded-full"></div>
                      <step.icon className="w-12 h-12 text-white relative z-10" />
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full border-4 border-[#5e4e3d] flex items-center justify-center shadow-lg">
                      <span className="font-source font-bold text-lg text-[#5e4e3d]">
                        {index + 1}
                      </span>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#5e4e3d] to-transparent rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="font-open-sans font-bold text-2xl text-[#5e4e3d] group-hover:text-[#e3b653] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="font-source text-[#5f5f5e] leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100">
            <div className="text-4xl font-open-sans font-bold text-[#e3b653] mb-3">
              2min
            </div>
            <div className="font-source text-[#5f5f5e] text-lg">
              Tempo médio de agendamento
            </div>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100">
            <div className="text-4xl font-open-sans font-bold text-[#e3b653] mb-3">
              24h
            </div>
            <div className="font-source text-[#5f5f5e] text-lg">
              Disponibilidade de horários
            </div>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100">
            <div className="text-4xl font-open-sans font-bold text-[#e3b653] mb-3">
              100%
            </div>
            <div className="font-source text-[#5f5f5e] text-lg">
              Profissionais verificados
            </div>
          </div>
        </div>

        {/* Enhanced Demo Section */}
        <div className="mt-20 bg-gradient-to-br from-[#5e4e3d] via-[#5e4e3d] to-[#5e4e3d] rounded-xl p-12 md:p-16 text-white text-center animate-scale-in relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-[#e3b653] opacity-10 rounded-full animate-pulse"></div>
            <div
              className="absolute bottom-10 right-10 w-32 h-32 bg-[#e3b653] opacity-5 rounded-full animate-pulse"
              style={{animationDelay: "1s"}}
            ></div>
            <div
              className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full animate-pulse"
              style={{animationDelay: "2s"}}
            ></div>
          </div>

          <div className="relative z-10">
            <h3 className="font-open-sans font-bold text-3xl md:text-4xl mb-6">
              Quer ver na prática?
            </h3>
            <p className="font-source text-neutral-100 mb-10 max-w-3xl mx-auto text-xl leading-relaxed">
              Assista nossa demonstração de 2 minutos e veja como é fácil agendar um
              serviço premium para sua casa.
            </p>
            <button className="bg-[#e3b653] hover:bg-[#e3b653]-600 text-white font-source font-bold px-10 py-5 rounded-md transition-all hover:scale-105 shadow-2xl text-lg group">
              <span className="group-hover:scale-105 transition-transform inline-block">
                Assistir Demonstração
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
