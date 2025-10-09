"use client";
import {ArrowLeft} from "lucide-react";
import Image from "next/image";
// import {useState, useEffect, useRef} from "react";

const Forecast = () => {
  // const iframeRef = useRef<HTMLIFrameElement>(null);
  // const [showIframe, setShowIframe] = useState(false);

  // useEffect(() => {
  //   console.log("Iframe carregado");
  //   setShowIframe(true);
  // }, []);

  // const renderIframe = () => {
  //   if (!showIframe) return null;
  //   return (
  //     <iframe
  //       ref={iframeRef}
  //       src="https://www.surfline.com/surf-report/quebra-mar/5842041f4e65fad6a7708efa"
  //       frameBorder="0"
  //       className="w-full h-full"
  //       title="Surf Report - Quebra Mar"
  //       loading="eager"
  //       onLoad={() => console.log("Iframe carregado com sucesso!")}
  //     />
  //   );
  // };
  const renderIframe = () => {
    return (
      <iframe
        src="https://surfguru.com.br/previsao/brasil/sao-paulo/santos/oceanica"
        frameBorder="0"
        className="w-full h-full scrollbar-hide"
        title="Surf Report - Quebra Mar"
        loading="lazy"
        onLoad={() => console.log("Iframe carregado com sucesso!")}
        sandbox="allow-same-origin allow-scripts allow-forms"
      />
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header integrado com logo */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/logo_blue.svg"
              alt="logo Teyu azul"
              width={500}
              height={500}
              className="h-24 w-auto"
            />
            <button
              onClick={() => window.open("/", "_blank")}
              className="flex items-center gap-2 bg-[#71a2c1] rounded-lg px-4 py-2 mt-10 text-sm"
            >
              <ArrowLeft className="w-3 h-3" />
              Voltar a pagina inicial
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {/* Título da página */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Previsão do Tempo</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Acompanhe as condições meteorológicas e do mar em tempo real
            </p>
          </div>
        </div>

        {/* Iframe integrado */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                Surf Report - Quebra Mar
              </h2>
              <p className="text-sm text-gray-600 mt-1">Dados em tempo real</p>
            </div>

            <div className="w-full h-[600px] lg:h-[700px] overflow-hidden">
              {renderIframe()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Forecast;
