"use client";

import React, {useState} from "react";
import {Button} from "../_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../_components/ui/dialog";
import {Plus} from "lucide-react";
import {
  useContractsManagement,
  type Contract,
  type ContractInput
} from "../_hooks/useContractsManagement";
import {ContractForm} from "../_components/ContractForm";
import {ContractsTable} from "../_components/ContractsTable";

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
            <Button onClick={handleCreate}>
              <Plus className="w-4 h-4 mr-2" />
              Novo Contrato
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Criar Novo Contrato</DialogTitle>
            </DialogHeader>
            <ContractForm
              users={users}
              editingContract={null}
              isLoading={isLoading}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </DialogContent>
        </Dialog>
      </div>

      <ContractsTable contracts={contracts} isLoading={isLoading} onEdit={handleEdit} />

      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Editar Contrato</DialogTitle>
          </DialogHeader>
          <ContractForm
            users={users}
            editingContract={editingContract}
            isLoading={isLoading}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContractsManagement;
