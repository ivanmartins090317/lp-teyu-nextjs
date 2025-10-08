"use client";

import React, {useState} from "react";
import ContractsManagement from "../_components/contracts/ContractsManagement";
import UserContractsView from "../_components/contracts/UserContractsView";
import LogoutButton from "../_components/contracts/LogoutButton";
import ProtectedRoute from "../_components/contracts/ProtectedRoute";
import {Button} from "../_components/shared/ui/button";
import {FileText, Download, Eye} from "lucide-react";

const Contracts = () => {
  const [activeTab, setActiveTab] = useState<"management" | "users" | "template">(
    "users"
  );

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8 bg-white text-black">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Contratos</h1>
          <LogoutButton />
        </div>

        <div className="flex space-x-4 mb-6">
          <Button
            variant={activeTab === "users" ? "outline" : "ghost"}
            onClick={() => setActiveTab("users")}
          >
            Contratos de Usuários
          </Button>
          <Button
            variant={activeTab === "management" ? "outline" : "ghost"}
            onClick={() => setActiveTab("management")}
          >
            Gerenciamento de Contratos
          </Button>
          <Button
            variant={activeTab === "template" ? "outline" : "ghost"}
            onClick={() => setActiveTab("template")}
            className="flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Contrato Modelo
          </Button>
        </div>

        {activeTab === "users" && <UserContractsView />}
        {activeTab === "management" && <ContractsManagement />}
        {activeTab === "template" && (
          <div className="space-y-6">
            {/* Header do Contrato Modelo */}
            <div className="bg-gradient-to-r from-[#6a5c27] to-[#e3b653] rounded-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8" />
                <h2 className="text-2xl font-bold">
                  Contrato de Guarda de Prancha de Surf
                </h2>
              </div>
              <p className="text-white/90 text-lg">
                Visualize e baixe o modelo oficial do contrato de guarda de prancha de
                surf da Teyu.
              </p>
            </div>

            {/* Visualizador do PDF */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Visualizar Contrato Modelo
                </h3>
              </div>

              <div className="p-4">
                <div className="bg-gray-100 rounded-lg p-4 border-2 border-dashed border-gray-300">
                  <iframe
                    src="/CONTRATO DE GUARDA DE PRANCHA DE SURF - TEYU SANTOS_02 JULHO 2025_VERSAO 02.pdf#toolbar=1&navpanes=1&scrollbar=1"
                    width="100%"
                    height="600"
                    className="rounded-lg border-0"
                    title="Contrato de Guarda de Prancha de Surf - Teyu"
                  />
                  <p className="text-center text-gray-600 text-sm mt-4">
                    Se o documento não carregar, clique no botão de download abaixo
                  </p>
                </div>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() =>
                  window.open(
                    "/CONTRATO DE GUARDA DE PRANCHA DE SURF - TEYU SANTOS_02 JULHO 2025_VERSAO 02.pdf",
                    "_blank"
                  )
                }
                className="flex items-center gap-2 bg-[#6a5c27] hover:bg-[#e3b653] text-white px-6 py-3"
              >
                <Download className="w-5 h-5" />
                Baixar Contrato Modelo (PDF)
              </Button>

              <Button
                onClick={() => setActiveTab("management")}
                variant="outline"
                className="flex items-center gap-2 px-6 py-3"
              >
                <FileText className="w-5 h-5" />
                Criar Novo Contrato
              </Button>
            </div>

            {/* Informações do Contrato */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                📋 Informações sobre o Contrato
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
                <div>
                  <strong>Versão:</strong> 02 - Julho 2025
                </div>
                <div>
                  <strong>Empresa:</strong> Teyu Guardaria & Prancharia
                </div>
                <div>
                  <strong>Serviço:</strong> Guarda de Prancha de Surf
                </div>
                <div>
                  <strong>Conformidade:</strong> LGPD e legislação brasileira
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default Contracts;
