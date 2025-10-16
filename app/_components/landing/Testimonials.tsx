"use client";

import React from "react";
import {Star, Quote, ChevronLeft, ChevronRight} from "lucide-react";
import {Card, CardContent} from "../shared/ui/card";
import {Avatar, AvatarFallback} from "../shared/ui/avatar";
import {Button} from "../shared/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi
} from "../shared/ui/carousel";
import {useWhatsApp} from "@/app/_hooks/useWhatsApp";

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const {openWhatsApp} = useWhatsApp({
    defaultMessage: "Vamos agendar um horário?"
  });

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  const testimonials = [
    {
      name: "Carlos Mendes",
      location: "Santos, SP",
      service: "Guardaria de Pranchas",
      rating: 5,
      comment:
        "Finalmente encontrei um lugar seguro para deixar minha prancha! O serviço da Teyu é excepcional, sempre cuidadas e organizadas.",
      initials: "CM"
    },
    {
      name: "Ana Beatriz",
      location: "São Paulo, SP",
      service: "Aulas de Surfe",
      rating: 5,
      comment:
        "As aulas de surfe da Teyu transformaram minha experiência na água. Instrutores experientes e muito pacientes. Recomendo!",
      initials: "AB"
    },
    {
      name: "Roberto Silva",
      location: "São Vicente, SP",
      service: "Reparo de Prancha",
      rating: 5,
      comment:
        "Minha prancha estava com um dano sério e eles fizeram um trabalho perfeito! Ficou como nova e o preço foi justo.",
      initials: "RS"
    },
    {
      name: "Marina Costa",
      location: "Praia Grande, SP",
      service: "Teyu Prancharia",
      rating: 5,
      comment:
        "A loja tem tudo que um surfista precisa! Equipamentos de qualidade, preços justos e atendimento personalizado.",
      initials: "MC"
    },
    {
      name: "Pedro Santos",
      location: "São Bernardo do Campo, SP",
      service: "Guarda Volumes",
      rating: 5,
      comment:
        "Perfeito para quem vem de longe! Deixo meus pertences seguros e posso curtir a praia sem preocupação.",
      initials: "PS"
    },
    {
      name: "Juliana Lima",
      location: "Mongaguá, SP",
      service: "Acessórios de Surfe",
      rating: 5,
      comment:
        "Encontrei todos os acessórios que precisava em um só lugar. Qualidade excelente e variedade incrível!",
      initials: "JL"
    },
    {
      name: "Ricardo",
      location: "Santos, SP",
      service: "Teyu Guardaria",
      rating: 5,
      comment: "Vocês criaram uma casa em que a gente se sente abraçado 👏🏼👏🏼👏🏼",
      initials: "R-"
    }
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-[#e5dfda]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-[#6a5c27] mb-6">
            O que nossos <br className="block md:hidden" /> clientes dizem
          </h2>
          <p className="font-source text-lg md:text-xl text-[#5f5f5e] max-w-3xl mx-auto leading-relaxed">
            Mais de 150 surfistas já confiam na Teyu. Veja alguns depoimentos reais de
            quem já transformou sua rotina conosco.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 pb-[3%]"
                >
                  <Card className="w-[95%] m-auto md:w-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg h-full">
                    <CardContent className="p-6 space-y-4 flex flex-col h-full">
                      {/* Quote Icon & Rating */}
                      <div className="flex justify-between items-start">
                        <Quote className="w-8 h-8 text-[#e3b653] opacity-50" />
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-[#e3b653] text-[#e3b653]"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Comment */}
                      <p className="font-source text-[#5f5f5e] leading-relaxed italic flex-grow">
                        &ldquo;{testimonial.comment}&rdquo;
                      </p>

                      {/* Service Tag */}
                      <div className="inline-block bg-[#e5dfda] text-[#5f5f5e] px-3 py-1 rounded-full text-sm font-source font-medium self-start">
                        {testimonial.service}
                      </div>

                      {/* Author */}
                      <div className="flex items-center space-x-3 pt-4 border-t border-neutral-100 mt-auto">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-[#5f5f5e] text-white font-source font-semibold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-source font-semibold text-[#5f5f5e]">
                            {testimonial.name}
                          </div>
                          <div className="font-source text-sm text-[#5f5f5e]">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Modern Navigation Controls */}
        <div className="flex items-center justify-center space-x-8 mb-16">
          {/* Previous Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollPrev}
            ria-label="Depoimento anterior"
            className="h-12 w-12 rounded-full border-2 border-[#5f5f5e]/10 hover:border-[#5f5f5e] hover:bg-[#5f5f5e]/20 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5 text-[#5f5f5e] hover:bg-white" />
          </Button>

          {/* Dots Indicators */}
          <div className="flex space-x-2">
            {Array.from({length: count}).map((_, index) => (
              <button
                key={index}
                aria-label={`Ir para depoimento ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index + 1 === current
                    ? "w-8 bg-[#5f5f5e] shadow-md"
                    : "w-2 bg-[#5f5f5e]/30 hover:bg-[#5f5f5e]/50"
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>

          {/* Next Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollNext}
            aria-label="Próximo depoimento"
            className="h-12 w-12 rounded-full border-2 border-[#5f5f5e]/10 hover:border-[#5f5f5e] hover:bg-[#5f5f5e]/20 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 text-[#5f5f5e] hover:text-white" />
          </Button>
        </div>

        {/* Mobile Navigation Hint */}
        <div className="md:hidden text-center mb-8">
          <p className="text-sm text-neutral-500 font-source">
            ← Deslize para ver mais depoimentos →
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-8 text-center animate-fade-in">
          <div className="space-y-2">
            <div className="text-3xl font-playfair font-bold text-[#e3b653]">4.9★</div>
            <div className="font-source text-neutral-600">Avaliação média</div>
            <div className="font-source text-sm text-neutral-500">
              + de 1.000 avaliações
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-playfair font-bold text-[#e3b653]">98%</div>
            <div className="font-source text-neutral-600">Satisfação</div>
            <div className="font-source text-sm text-neutral-500">
              Clientes satisfeitos
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-playfair font-bold text-[#e3b653]">24h</div>
            <div className="font-source text-neutral-600">Suporte</div>
            <div className="font-source text-sm text-neutral-500">
              Atendimento disponível
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-playfair font-bold text-[#e3b653]">100+</div>
            <div className="font-source text-neutral-600">Clientes</div>
            <div className="font-source text-sm text-neutral-500">
              Surfistas atendidos
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-scale-in">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-xl max-w-3xl mx-auto">
            <h3 className="font-playfair font-bold text-2xl md:text-3xl text-[#6a5c27] mb-4">
              Junte-se aos nossos clientes satisfeitos
            </h3>
            <p className="font-source text-[#5f5f5e] mb-6">
              Faça parte da nossa comunidade e transforme sua rotina com serviços premium.
            </p>
            <button
              onClick={() => openWhatsApp()}
              className="bg-[#e3b653] hover:bg-[#6a5c27] text-[#6a5c27] hover:text-[#e5dfda] transition duration-700 font-source font-bold px-8 py-4 rounded-lg hover:scale-105 shadow-xl"
            >
              Vamos conversar?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
