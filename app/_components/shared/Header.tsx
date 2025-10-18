"use client";

import React, {useState} from "react";
import {Menu, X} from "lucide-react";
import {ShareButton} from "./ShareButton";
import {MobileServicesDropdown} from "./ui/mobile-services-dropdown";
import {MobileProductsDropdown} from "./ui/mobile-products-dropdown";
import dynamic from "next/dynamic";
import Image from "next/image";

// Lazy loading dos dropdowns - carrega só quando o usuário mostrar interesse
const ServicesDropdown = dynamic(
  () => import("./ui/services-dropdown").then((mod) => ({default: mod.ServicesDropdown})),
  {
    ssr: false,
    loading: () => (
      <span className="text-[#5f5f5e] hover:text-[#6a5c27] transition-colors font-source font-medium text-sm xl:text-base relative group flex items-center gap-1">
        Serviços
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6a5c27] transition-all duration-300 group-hover:w-full"></span>
      </span>
    )
  }
);

const ProductsDropdown = dynamic(
  () => import("./ui/products-dropdown").then((mod) => ({default: mod.ProductsDropdown})),
  {
    ssr: false,
    loading: () => (
      <span className="text-[#5f5f5e] hover:text-[#6a5c27] transition-colors font-source font-medium text-sm xl:text-base relative group flex items-center gap-1">
        Produtos
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6a5c27] transition-all duration-300 group-hover:w-full"></span>
      </span>
    )
  }
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <header className="bg-[#e5dfda] backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50 border-b border-neutral-100">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12">
              <Image
                src="/logo_header_.webp"
                alt="logo"
                width={48}
                height={48}
                priority
                className="w-full h-auto"
                sizes="(max-width: 768px) 40px, 48px"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center ml-24 space-x-8 xl:space-x-10">
            <a
              href="#sobre-nos"
              className=" text-[#5f5f5e] hover:text-[#6a5c27] transition-colors font-source font-medium text-sm xl:text-base relative group"
            >
              Sobre Nós
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6a5c27] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <ServicesDropdown isDesktop={true}>Serviços</ServicesDropdown>
            <ProductsDropdown isDesktop={true}>Produtos</ProductsDropdown>
            <a
              href="#depoimentos"
              className=" text-[#5f5f5e] hover:text-[#6a5c27] transition-colors font-source font-medium text-sm xl:text-base relative group"
            >
              Depoimentos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6a5c27] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/forecast"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-[#5f5f5e] hover:text-[#6a5c27] transition-colors font-source font-medium text-sm xl:text-base relative group"
            >
              Previsão de Ondas
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6a5c27] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className=" text-[#5f5f5e] hover:text-[#6a5c27] transition-colors font-source font-medium text-sm xl:text-base relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6a5c27] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className=" text-[#5f5f5e] hover:text-[#6a5c27] transition-colors font-source font-medium text-sm xl:text-base relative group"
            >
              Escola de Surfe
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6a5c27] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className=" text-[#5f5f5e] hover:text-[#6a5c27] transition-colors font-source font-medium text-sm xl:text-base relative group"
            >
              Parceiros
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6a5c27] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <div className="hidden lg:block">
            <ShareButton></ShareButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#6a5c27] rounded-lg hover:bg-neutral-100 transition-colors"
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
                href="#sobre-nos"
                className="text-[#6a5c27] hover:text-primary hover:bg-[#e5dfda] transition-all font-source font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre nós
              </a>

              {/* Dropdown de Serviços - Mobile */}
              <MobileServicesDropdown
                isOpen={mobileServicesOpen}
                onToggle={() => setMobileServicesOpen(!mobileServicesOpen)}
                onItemClick={() => setIsMenuOpen(false)}
              />

              {/* Dropdown de Produtos - Mobile */}
              <MobileProductsDropdown
                isOpen={mobileProductsOpen}
                onToggle={() => setMobileProductsOpen(!mobileProductsOpen)}
                onItemClick={() => setIsMenuOpen(false)}
              />
              <a
                href="#depoimentos"
                className="text-[#6a5c27] hover:text-primary hover:bg-[#e5dfda] transition-all font-source font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a
                href="/forecast"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6a5c27] hover:text-primary hover:bg-[#e5dfda] transition-all font-source font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Previsão de Ondas
              </a>
              <a
                href="#"
                className="text-[#6a5c27] hover:text-primary hover:bg-[#e5dfda] transition-all font-source font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#"
                className="text-[#6a5c27] hover:text-primary hover:bg-[#e5dfda] transition-all font-source font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Escola de Surfe
              </a>
              <a
                href="#"
                className="text-[#6a5c27] hover:text-primary hover:bg-[#e5dfda] transition-all font-source font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Parceiros
              </a>

              <ShareButton>Compartilhar</ShareButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
