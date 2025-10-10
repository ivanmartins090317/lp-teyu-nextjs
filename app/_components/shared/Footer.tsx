import React from "react";
import {Phone, Mail, MapPin, Instagram, Facebook, Linkedin} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#6a5c27] text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              {/* <div className="w-10 h-10  rounded-lg flex items-center justify-center"></div> */}
              <div className="w-10 h-10 lg:w-12 lg:h-12">
                <Image
                  src="/logo_footer.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <span className="text-xs text-white">
                  Guardaria, Prancharia e Soul Surfers
                </span>
              </div>
              <div></div>
            </div>

            <p className="font-source text-neutral-300 leading-relaxed">
              Transformamos a forma de viver o surfe: cuidado premium, profissionais
              qualificados e liberdade total para você aproveitar cada onda.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/teyusurf?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e3b653] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e3b653] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e3b653] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-playfair font-bold text-lg">Serviços</h4>
            <ul className="space-y-3 font-source text-neutral-300">
              <li>
                <a
                  href="#servicos"
                  className="hover:text-[#servicose3b653] transition-colors"
                >
                  Guardaria de pranchas
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-[#servicose3b653] transition-colors"
                >
                  Guardaria de volumes / lockers
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-[#servicose3b653] transition-colors"
                >
                  Reparos de pranchas
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-gold transition-colors">
                  Aulas de surf
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-gold transition-colors">
                  Acessórios de surf
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-gold transition-colors">
                  Acessórios de praia
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-gold transition-colors">
                  Bem estar
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-gold transition-colors">
                  Equipamentos de surf
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-gold transition-colors">
                  Pranchas nova
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-gold transition-colors">
                  Pranchas usadas
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-gold transition-colors">
                  Moda e vestuário
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-playfair font-bold text-lg">Links Rápidos</h4>
            <ul className="space-y-3 font-source text-neutral-300">
              <li>
                <a href="#sobre-nos" className="hover:text-gold transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-gold transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-gold transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-gold transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="/forecast" className="hover:text-gold transition-colors">
                  Previsão
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-playfair font-bold text-lg">Contato</h4>
            <div className="space-y-4 font-source text-neutral-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold" />
                <span>(13) 99737-7070</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold" />
                <span>teyusurf@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-1" />
                <div>
                  <div>Santos, SP</div>
                  <div className="text-sm text-neutral-400">
                    Maranhão, 70 - Pompéia, 11075-020
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-2">
              <div className="font-source font-semibold text-sm">
                Horário de Atendimento:
              </div>
              <div className="font-source text-sm text-neutral-300">
                <div>Segunda - Sexta: 10h às 17h</div>
                <div>Sábados: 8h às 12h</div>
                <div>Domingos: 8h às 12h</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-source text-neutral-300 text-sm">
              © {currentYear} <span className="font-bold">Teyu</span> Guardaria,
              Prancharia e Soul Surfers. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 font-source text-sm text-neutral-300">
              <a href="/privacy" className="hover:text-gold transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
