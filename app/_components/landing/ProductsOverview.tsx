import React from "react";
import {Card, CardContent, CardHeader, CardTitle} from "../shared/ui/card";
import {Badge} from "../shared/ui/badge";
import {Store} from "lucide-react";

const ServicesOverview = () => {
  const productsCategories = [
    {
      icon: Store,
      title: "Teyu Prancharia",
      description:
        "Local onde você encontra as melhores pranchas e acessórios para surfar.",
      products: [
        "Acessórios de Surfe",
        "Acessórios de Praia",
        "Bem Estar",
        "Equipamentos de Surf",
        "Pranchas Nova",
        "Pranchas Usadas",
        "Moda e vestuário",
        "Uber surfe"
      ],
      color: "bg-[#e3b653]/20",
      popular: false
    }
  ];

  return (
    <section id="produtos" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-[#6a5c27] mb-6">
              Nossos Produtos
            </h2>
            <p className="font-source text-lg md:text-xl text-[#5f5f5e] max-w-3xl mx-auto leading-relaxed">
              Encontre tudo o que você precisa em um só lugar.
              <br /> A Teyu Prancharia oferece acessórios, pranchas, moda surf e produtos
              de bem-estar com qualidade e preço camarada.
            </p>
          </div>

          <div className="grid">
            {productsCategories.map((category, index) => (
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
                      Produtos inclusos:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.products.map((product, productIndex) => (
                        <Badge
                          key={productIndex}
                          variant="secondary"
                          className={`font-source text-xs bg-white text-[#5f5f5e] border border-neutral-200 ${
                            product === "Uber surfe" ? "bg-[#71A2C1]/20" : ""
                          }`}
                        >
                          {product}
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
              *A nossa loja física (Teyu Prancharia) fica aberta ao público das 09:00 às
              17:00. Não necessita marcar horário.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
