import React from "react";
import {Sparkles, Wrench, Scissors, Car, Baby, Utensils} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "../shared/ui/card";
import {Badge} from "../shared/ui/badge";

const ServicesOverview = () => {
  const serviceCategories = [
    {
      icon: Sparkles,
      title: "Limpeza & Organização",
      description: "Faxina completa, limpeza pós-obra, organização de ambientes",
      services: [
        "Faxina residencial",
        "Limpeza pós-obra",
        "Organização",
        "Limpeza de carpetes"
      ],
      color: "bg-[#e3b653]",
      popular: true
    },
    {
      icon: Wrench,
      title: "Manutenção & Reparos",
      description: "Eletricista, encanador, pintor e serviços gerais",
      services: ["Eletricista", "Encanador", "Pintor", "Marcenaria"],
      color: "bg-[#e3b653]",
      popular: false
    },
    {
      icon: Scissors,
      title: "Beleza & Bem-estar",
      description: "Cabeleireiro, manicure, massagem no conforto da sua casa",
      services: ["Cabelo", "Manicure", "Massagem", "Estética"],
      color: "bg-[#e3b653]",
      popular: false
    },
    {
      icon: Car,
      title: "Automotivo",
      description: "Lavagem, enceramento e detalhamento do seu veículo",
      services: ["Lavagem", "Enceramento", "Detalhamento", "Limpeza interna"],
      color: "bg-[#e3b653]",
      popular: false
    },
    {
      icon: Baby,
      title: "Cuidados Pessoais",
      description: "Babá, cuidador de idosos, pet sitting",
      services: ["Babá", "Cuidador", "Pet sitting", "Acompanhante"],
      color: "bg-[#e3b653]",
      popular: false
    },
    {
      icon: Utensils,
      title: "Gastronomia",
      description: "Chef particular, eventos, refeições saudáveis",
      services: ["Chef particular", "Eventos", "Meal prep", "Confeitaria"],
      color: "bg-[#e3b653]",
      popular: false
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-[#5e4e3d] mb-6">
              Nossos Serviços
            </h2>
            <p className="font-source text-lg md:text-xl text-[#5f5f5e] max-w-3xl mx-auto leading-relaxed">
              Mais de 15 tipos de serviços especializados para transformar sue dia de
              surf. Tudo com a qualidade que você merece.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg relative animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {category.popular && (
                  <Badge className="absolute -top-3 left-6 bg-[#71A2C1] text-white hover:bg-[#5e4e3d]/80 font-source font-semibold">
                    Mais Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4`}
                  >
                    <category.icon className="w-8 h-8 text-[#6a5c27]" />
                  </div>
                  <CardTitle className="font-playfair text-xl text-[#5e4e3d]">
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  <p className="font-source text-[#5f5f5e] text-center leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-2">
                    <div className="font-source font-semibold text-sm text-[#5e4e3d] mb-3">
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
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
