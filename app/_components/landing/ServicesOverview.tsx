import React from "react";
import {LockKeyhole, Store} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "../shared/ui/card";
import {Badge} from "../shared/ui/badge";

const ServicesOverview = () => {
  const serviceCategories = [
    {
      icon: LockKeyhole,
      title: "Teyu Guardaria",
      description: "Local seguro para a sua pranchas e espaço para seus pertences.",
      services: [
        "Guardaria de Pranchas",
        "Guarda Volumes/Lockers",
        "Chuveiro",
        "Reparo de Prancha",
        "Uber reparo de prancha",
        "Aulas de Surfe"
      ],
      color: "bg-[#e3b653]/20",
      popular: false
    },
    {
      icon: Store,
      title: "Teyu Prancharia",
      description:
        "Local onde você encontra as melhores pranchas e acessórios para surfar.",
      services: [
        "Acessórios de Surfe",
        "Acessórios de Praia",
        "Bem Estar",
        "Equipamentos de Surf",
        "Pranchas Nova",
        "Pranchas Usadas",
        "Moda e vestuário"
      ],
      color: "bg-[#e3b653]/20",
      popular: false
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-[#6a5c27] mb-6">
              Nossos Serviços
            </h2>
            <p className="font-source text-lg md:text-xl text-[#5f5f5e] max-w-3xl mx-auto leading-relaxed">
              Mais de 15 tipos de serviços especializados para transformar sue dia de
              surf. Tudo com a qualidade que você merece.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg relative animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {category.popular && (
                  <Badge className="absolute -top-3 left-6 bg-[#71A2C1] text-white hover:bg-[#6a5c27]/80 font-source font-semibold">
                    Mais Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4`}
                  >
                    <category.icon className="w-8 h-8 text-[#6a5c27]" />
                  </div>
                  <CardTitle className="font-playfair text-xl text-[#6a5c27]">
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  <p className="font-source text-[#5f5f5e] text-center leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-2">
                    <div className="font-source font-semibold text-sm text-[#6a5c27] mb-3">
                      Serviços inclusos:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.services.map((service, serviceIndex) => (
                        <Badge
                          key={serviceIndex}
                          variant="secondary"
                          className="font-source text-xs bg-white text-[#5f5f5e] border border-neutral-200"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center text-center text-[#6a5c27] mt-10">
            <small>
              *A nossa loja fisica (Teyu Prancharia) fica aberto ao publico da 09:00 as
              17:00 não nescessita marcar horario
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
