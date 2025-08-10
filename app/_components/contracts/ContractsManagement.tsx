"use client";

import React, {useState} from "react";
import {Button} from "../shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../shared/ui/dialog";
import {Plus} from "lucide-react";
import {
  useContractsManagement,
  type Contract,
  type ContractInput
} from "../../_hooks/useContractsManagement";
import {ContractForm} from "./ContractForm";
import {ContractsTable} from "./ContractsTable";

const ContractsManagement = () => {
  const {contracts, users, isLoading, setIsLoading, saveContract, toast} =
    useContractsManagement();

  const [editingContract, setEditingContract] = useState<Contract | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleEdit = (contract: Contract) => {
    console.log("Editando contrato:", contract);
    setEditingContract(contract);
    setIsEditModalOpen(true);
  };

  const handleCreate = () => {
    console.log("Criando novo contrato...");
    setEditingContract(null);
    setIsCreateModalOpen(true);
  };

  const handleSubmit = async (
    contractData: ContractInput,
    editingContract: Contract | null
  ) => {
    if (
      !contractData.usuario_id ||
      !contractData.numero_contrato ||
      !contractData.tipo_servico ||
      !contractData.descricao_servico ||
      !contractData.valor_servico ||
      !contractData.data_inicio
    ) {
      toast({
        title: "Erro de validação",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return false;
    }

    setIsLoading(true);

    try {
      const success = await saveContract(contractData, editingContract);
      return success;
    } catch (error) {
      console.error("Erro inesperado ao salvar:", error);
      toast({
        title: "Erro inesperado",
        description: "Algo deu errado. Tente novamente.",
        variant: "destructive"
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditModalOpen(false);
    setIsCreateModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gerenciamento de Contratos</h2>
        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={handleCreate}
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Plus className="w-5 h-5 mr-2" />
              Novo Contrato
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[95vh] overflow-hidden bg-white dark:bg-gray-900 border-0 shadow-2xl">
            <DialogHeader className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-2">
              <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                📄 Criar Novo Contrato
              </DialogTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Preencha as informações abaixo para criar um novo contrato
              </p>
            </DialogHeader>
            <div className="overflow-y-auto max-h-[calc(95vh-120px)] pr-2">
              <ContractForm
                users={users}
                editingContract={null}
                isLoading={isLoading}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <ContractsTable contracts={contracts} isLoading={isLoading} onEdit={handleEdit} />

      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-4xl max-h-[95vh] overflow-hidden bg-white dark:bg-gray-900 border-0 shadow-2xl">
          <DialogHeader className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-2">
            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              ✏️ Editar Contrato
            </DialogTitle>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Atualize as informações do contrato {editingContract?.numero_contrato}
            </p>
          </DialogHeader>
          <div className="overflow-y-auto max-h-[calc(95vh-120px)] pr-2">
            <ContractForm
              users={users}
              editingContract={editingContract}
              isLoading={isLoading}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContractsManagement;
