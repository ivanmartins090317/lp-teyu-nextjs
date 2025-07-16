"use client";

import React, {useState} from "react";
import {Menu, X} from "lucide-react";
import {Button} from "../_components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50 border-b border-neutral-100">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#71A2C1] to-[#e3b653] rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-playfair font-bold text-xl lg:text-2xl">
                T
              </span>
            </div>
            <div>
              <h1 className="font-playfair font-bold text-xl lg:text-2xl text-[#5e4e3d]">
                Teyu
              </h1>
              <span className="text-xs lg:text-sm text-neutral-600 hidden sm:block">
                Guardaria & Prancharia
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <a
              href="#servicos"
              className=" text-[#5f5f5e] hover:text-[#5e4e3d] transition-colors font-source font-medium text-sm xl:text-base relative group"
            >
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5e4e3d] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#como-funciona"
              className=" text-[#5f5f5e] hover:text-[#5e4e3d] transition-colors font-source font-medium text-sm xl:text-base relative group"
            >
              Como Funciona
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5e4e3d] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#depoimentos"
              className=" text-[#5f5f5e] hover:text-[#5e4e3d] transition-colors font-source font-medium text-sm xl:text-base relative group"
            >
              Depoimentos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5e4e3d] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className=" text-[#5f5f5e] hover:text-[#5e4e3d] transition-colors font-source font-medium text-sm xl:text-base relative group"
            >
              Sobre nós
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5e4e3d] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#e3b653] hover:bg-[#71a2c1] text-[#ffffff] font-source font-semibold px-6 lg:px-8 py-2 lg:py-3 rounded-xl transition-all hover:scale-105 shadow-md hover:shadow-lg text-sm lg:text-base">
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-lg">
            <nav className="flex flex-col space-y-1 px-4 py-6">
              <a
                href="#servicos"
                className="text-neutral-700 hover:text-primary hover:bg-neutral-50 transition-all font-source font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#como-funciona"
                className="text-neutral-700 hover:text-primary hover:bg-neutral-50 transition-all font-source font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a
                href="#depoimentos"
                className="text-neutral-700 hover:text-primary hover:bg-neutral-50 transition-all font-source font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <div className="pt-4 border-t border-neutral-200 mt-4">
                <Button className="w-full bg-gold hover:bg-gold-600 text-white font-source font-semibold px-6 py-3 rounded-xl transition-all shadow-md">
                  Começar Agora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
