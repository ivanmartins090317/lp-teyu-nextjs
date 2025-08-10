"use client";

import React, {useState} from "react";
import ContractsManagement from "../_components/contracts/ContractsManagement";
import UserContractsView from "../_components/contracts/UserContractsView";
import LogoutButton from "../_components/contracts/LogoutButton";
import ProtectedRoute from "../_components/contracts/ProtectedRoute";
import {Button} from "../_components/shared/ui/button";

const Contracts = () => {
  const [activeTab, setActiveTab] = useState<"management" | "users">("users");

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8 bg-white text-black">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Contratos</h1>
          <LogoutButton />
        </div>

        <div className="flex space-x-4 mb-6">
          <Button
            variant={activeTab === "users" ? "default" : "outline"}
            onClick={() => setActiveTab("users")}
          >
            Contratos de Usuários
          </Button>
          <Button
            variant={activeTab === "management" ? "default" : "outline"}
            onClick={() => setActiveTab("management")}
          >
            Gerenciamento de Contratos
          </Button>
        </div>

        {activeTab === "users" && <UserContractsView />}
        {activeTab === "management" && <ContractsManagement />}
      </div>
    </ProtectedRoute>
  );
};

export default Contracts;
