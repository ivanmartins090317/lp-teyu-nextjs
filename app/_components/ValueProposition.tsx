import React from "react";
import {Clock, Shield, Star, Smartphone} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";

const ValueProposition = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Economia de Tempo",
      description:
        "Mais tempo para o que realmente importa. Cuidamos do seu equipamento enquanto você foca no essencial.",
      color: "text-[#e3b653]"
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Ambiente monitorado. Segurança é nossa prioridade número um.",
      color: "text-[#e3b653]"
    },
    {
      icon: Star,
      title: "Qualidade Premium",
      description:
        "Padrão de excelência em todos os serviços. Garantia de satisfação ou cliente.",
      color: "text-[#e3b653]"
    },
    {
      icon: Smartphone,
      title: "Facilidade Total",
      description: "Agendamento pelo whatsapp.",
      color: "text-[#e3b653]"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-open-sans font-bold text-3xl md:text-4xl lg:text-5xl text-[#5e4e3d] mb-6">
            Por que escolher a <span className="text-[#e3b653]">Teyu?</span>
          </h2>
          <p className="font-source text-lg md:text-xl text-[#5f5f5e] max-w-3xl mx-auto leading-relaxed">
            Muitos surfistas já transformaram sua rotina com nossos serviços. Descubra o
            que torna nossa proposta única no mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-slide-up bg-white"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 text-center space-y-6">
                <div
                  className={`w-16 h-16 mx-auto rounded-full bg-[#e5dfda] flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>

                <div className="space-y-3">
                  <h3 className="font-open-sans font-bold text-xl text-[#5e4e3d]">
                    {benefit.title}
                  </h3>
                  <p className="font-source text-[#5f5f5e] leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-[#71A2C1] rounded-xl p-8 md:p-12 text-[#ffffff] animate-fade-in">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="font-open-sans font-bold text-3xl md:text-4xl text-[#e3b653]">
                150+
              </div>
              <div className="font-source text-[#ffffff]">Clientes Atendidos</div>
            </div>
            <div className="space-y-2">
              <div className="font-open-sans font-bold text-3xl md:text-4xl text-[#e3b653]">
                15+
              </div>
              <div className="font-source text-[#ffffff]">Tipos de Serviços</div>
            </div>
            <div className="space-y-2">
              <div className="font-open-sans font-bold text-3xl md:text-4xl text-[#e3b653]">
                4.9★
              </div>
              <div className="font-source text-[#ffffff]">Avaliação Média</div>
            </div>
            <div className="space-y-2">
              <div className="font-open-sans font-bold text-3xl md:text-4xl text-[#e3b653]">
                98%
              </div>
              <div className="font-source text-[#ffffff]">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
