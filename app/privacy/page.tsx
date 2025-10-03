import React from "react";
import {ArrowLeft, FileText, Download, Shield, Eye, Lock, Users} from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header com botão de voltar */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-[#6a5c27] hover:text-[#e3b653] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>

          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-8 h-8 text-[#6a5c27]" />
            <h1 className="text-4xl font-bold text-gray-900">
              Política de Privacidade e Proteção de Dados
            </h1>
          </div>

          <p className="text-gray-600 text-lg">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString("pt-BR")}
          </p>
        </div>

        {/* Seção do PDF */}
        <div className="bg-gradient-to-r from-[#6a5c27] to-[#e3b653] rounded-lg p-8 mb-8 text-white">
          <div className="text-center">
            <FileText className="w-16 h-16 text-white mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">
              Documento Completo da Política de Privacidade
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Acesse nossa política de privacidade completa em PDF. Este documento contém
              todas as informações detalhadas sobre como coletamos, usamos e protegemos
              seus dados pessoais.
            </p>

            <a
              href="/Política de Privacidade e Proteção de Dados Teyu Surf.pdf"
              target="_blank"
              className="inline-flex items-center px-8 py-4 bg-white text-[#6a5c27] rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
            >
              <Download className="w-6 h-6 mr-3" />
              Baixar Política Completa (PDF)
            </a>

            <p className="text-white/80 text-sm mt-4">
              * O documento será aberto em uma nova aba
            </p>
          </div>
        </div>

        {/* Visualizador do PDF */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Visualizar Documento
          </h2>
          <div className="bg-gray-100 rounded-lg p-4 border-2 border-gray-200">
            <iframe
              src="/Política de Privacidade e Proteção de Dados Teyu Surf.pdf#toolbar=1&navpanes=1&scrollbar=1"
              width="100%"
              height="800"
              className="rounded-lg border-0"
              title="Política de Privacidade Teyu Surf"
            />
            <p className="text-center text-gray-600 text-sm mt-4">
              Se o documento não carregar, clique no botão de download acima
            </p>
          </div>
        </div>

        {/* Resumo da política */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
              <Eye className="w-8 h-8 text-[#6a5c27] mr-3" />
              Resumo da Política
            </h2>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                A <strong>Teyu Guardaria & Prancharia</strong> está comprometida em
                proteger sua privacidade e dados pessoais de acordo com a Lei Geral de
                Proteção de Dados (LGPD) e demais legislações aplicáveis.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
              <Lock className="w-8 h-8 text-[#6a5c27] mr-3" />
              Principais Pontos
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Coleta de Dados
                </h3>
                <ul className="list-disc pl-6 text-green-700 space-y-2">
                  <li>Dados fornecidos voluntariamente</li>
                  <li>Informações de contato e identificação</li>
                  <li>Dados de navegação (cookies)</li>
                  <li>Informações de uso dos serviços</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Uso dos Dados
                </h3>
                <ul className="list-disc pl-6 text-blue-700 space-y-2">
                  <li>Fornecer e melhorar nossos serviços</li>
                  <li>Processar reservas e pagamentos</li>
                  <li>Comunicar sobre atualizações</li>
                  <li>Enviar newsletters (com consentimento)</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Proteção</h3>
                <ul className="list-disc pl-6 text-purple-700 space-y-2">
                  <li>Dados criptografados e seguros</li>
                  <li>Acesso restrito e controlado</li>
                  <li>Backup regular dos dados</li>
                  <li>Monitoramento de segurança</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-800 mb-4">
                  Seus Direitos
                </h3>
                <ul className="list-disc pl-6 text-orange-700 space-y-2">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir informações incorretas</li>
                  <li>Excluir dados desnecessários</li>
                  <li>Revogar consentimentos</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
              <Users className="w-8 h-8 text-[#6a5c27] mr-3" />
              Compromisso com a LGPD
            </h2>
            <div className="bg-[#6a5c27] bg-opacity-10 rounded-lg p-8">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Nossa política está em total conformidade com a Lei Geral de Proteção de
                Dados (Lei nº 13.709/2018) e demais regulamentações aplicáveis.
                Implementamos medidas técnicas e organizacionais adequadas para garantir a
                proteção dos seus dados pessoais.
              </p>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#6a5c27] mb-2">100%</div>
                  <div className="text-gray-600">Conformidade LGPD</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#6a5c27] mb-2">24/7</div>
                  <div className="text-gray-600">Monitoramento</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#6a5c27] mb-2">0</div>
                  <div className="text-gray-600">Vazamentos</div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Contato para Dúvidas
            </h2>
            <div className="bg-gradient-to-r from-[#6a5c27] to-[#e3b653] rounded-lg p-8 text-white">
              <p className="text-white/90 leading-relaxed text-lg mb-6">
                Se você tiver dúvidas sobre esta política de privacidade, sobre como
                tratamos seus dados pessoais, ou quiser exercer seus direitos, entre em
                contato conosco:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="font-semibold mr-3">E-mail:</span>
                      <a href="mailto:teyusurf@gmail.com" className="hover:underline">
                        teyusurf@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold mr-3">Telefone:</span>
                      <a href="tel:+5513997377070" className="hover:underline">
                        (13) 99737-7070
                      </a>
                    </div>
                    <div className="flex items-start">
                      <span className="font-semibold mr-3">Endereço:</span>
                      <span>
                        Maranhão, 70 - Pompéia
                        <br />
                        Santos - SP, 11075-020
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
                  <div className="space-y-2 text-white/90">
                    <div>Segunda - Sexta: 7h às 22h</div>
                    <div>Sábados: 8h às 18h</div>
                    <div>Domingos: 9h às 17h</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
