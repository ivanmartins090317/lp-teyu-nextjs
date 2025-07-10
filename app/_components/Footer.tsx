import React from "react";
import {Phone, Mail, MapPin, Instagram, Facebook, Linkedin} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#5e4e3d] text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#71A2C1] to-[#e3b653] rounded-lg flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-xl">T</span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl">Teyu</h3>
                <span className="text-xs text-white">Guardaria & Prancharia</span>
              </div>
            </div>
            <p className="font-source text-neutral-300 leading-relaxed">
              Transformando casas em ambientes premium através de serviços especializados
              e profissionais qualificados. Sua satisfação é nossa prioridade.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
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
                <a href="#" className="hover:text-[#e3b653] transition-colors">
                  Limpeza Residencial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e3b653] transition-colors">
                  Manutenção & Reparos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e3b653] transition-colors">
                  Beleza & Bem-estar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Serviços Automotivos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Cuidados Pessoais
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Gastronomia
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-playfair font-bold text-lg">Links Rápidos</h4>
            <ul className="space-y-3 font-source text-neutral-300">
              <li>
                <a href="#servicos" className="hover:text-gold transition-colors">
                  Nossos Serviços
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
                <a href="#" className="hover:text-gold transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Carreiras
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
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold" />
                <span>contato@teyu.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-1" />
                <div>
                  <div>Santos, SP</div>
                  <div className="text-sm text-neutral-400">Rua Maranhão, 72</div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-2">
              <div className="font-source font-semibold text-sm">
                Horário de Atendimento:
              </div>
              <div className="font-source text-sm text-neutral-300">
                <div>Segunda - Sexta: 7h às 22h</div>
                <div>Sábados: 8h às 18h</div>
                <div>Domingos: 9h às 17h</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-source text-neutral-300 text-sm">
              © {currentYear} Teyu | Guardaria & Prancharia. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 font-source text-sm text-neutral-300">
              <a href="#" className="hover:text-gold transition-colors">
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
