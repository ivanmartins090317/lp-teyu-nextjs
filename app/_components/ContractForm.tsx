import React, {useState, useEffect} from "react";
import {Button} from "../_components/ui/button";
import {Input} from "../_components/ui/input";
import {Label} from "../_components/ui/label";
import {Textarea} from "../_components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../_components/ui/select";
import type {Contract, User, ContractInput} from "../_hooks/useContractsManagement";

interface ContractFormProps {
  users: User[];
  editingContract: Contract | null;
  isLoading: boolean;
  onSubmit: (
    contractData: ContractInput,
    editingContract: Contract | null
  ) => Promise<boolean>;
  onCancel: () => void;
}

export const ContractForm: React.FC<ContractFormProps> = ({
  users,
  editingContract,
  isLoading,
  onSubmit,
  onCancel
}) => {
  const [formData, setFormData] = useState({
    usuario_id: "",
    numero_contrato: "",
    tipo_servico: "",
    descricao_servico: "",
    valor_servico: "",
    data_inicio: "",
    data_fim: "",
    status: "ativo",
    observacoes: ""
  });

  useEffect(() => {
    if (editingContract) {
      setFormData({
        usuario_id: editingContract.usuario_id,
        numero_contrato: editingContract.numero_contrato,
        tipo_servico: editingContract.tipo_servico,
        descricao_servico: editingContract.descricao_servico,
        valor_servico: editingContract.valor_servico.toString(),
        data_inicio: editingContract.data_inicio,
        data_fim: editingContract.data_fim || "",
        status: editingContract.status,
        observacoes: editingContract.observacoes || ""
      });
    } else {
      setFormData({
        usuario_id: "",
        numero_contrato: "",
        tipo_servico: "",
        descricao_servico: "",
        valor_servico: "",
        data_inicio: "",
        data_fim: "",
        status: "ativo",
        observacoes: ""
      });
    }
  }, [editingContract]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submetendo formulário:", formData);

    if (
      !formData.usuario_id ||
      !formData.numero_contrato ||
      !formData.tipo_servico ||
      !formData.descricao_servico ||
      !formData.valor_servico ||
      !formData.data_inicio
    ) {
      return;
    }

    const contractData = {
      usuario_id: formData.usuario_id,
      numero_contrato: formData.numero_contrato,
      tipo_servico: formData.tipo_servico,
      descricao_servico: formData.descricao_servico,
      valor_servico: parseFloat(formData.valor_servico),
      data_inicio: formData.data_inicio,
      data_fim: formData.data_fim || null,
      status: formData.status,
      observacoes: formData.observacoes || null
    };

    const success = await onSubmit(contractData, editingContract);
    if (success) {
      onCancel();
    }
  };

  const updateFormData = (field: string, value: string) => {
    console.log(`Alterando ${field}:`, value);
    setFormData((prev) => ({...prev, [field]: value}));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="usuario_id">Cliente</Label>
        <Select
          value={formData.usuario_id}
          onValueChange={(value: string) => updateFormData("usuario_id", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione um cliente" />
          </SelectTrigger>
          <SelectContent>
            {users.map((user) => (
              <SelectItem key={user.id} value={user.id}>
                {user.nome} - {user.email}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="numero_contrato">Número do Contrato</Label>
        <Input
          id="numero_contrato"
          value={formData.numero_contrato}
          onChange={(e) => updateFormData("numero_contrato", e.target.value)}
          placeholder="CONT-0001"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tipo_servico">Tipo de Serviço</Label>
        <Select
          value={formData.tipo_servico}
          onValueChange={(value: string) => updateFormData("tipo_servico", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione o tipo de serviço" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Consultoria Empresarial">
              Consultoria Empresarial
            </SelectItem>
            <SelectItem value="Desenvolvimento de Software">
              Desenvolvimento de Software
            </SelectItem>
            <SelectItem value="Suporte Técnico">Suporte Técnico</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="descricao_servico">Descrição do Serviço</Label>
        <Textarea
          id="descricao_servico"
          value={formData.descricao_servico}
          onChange={(e) => updateFormData("descricao_servico", e.target.value)}
          placeholder="Descrição detalhada do serviço"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="valor_servico">Valor do Serviço (R$)</Label>
        <Input
          id="valor_servico"
          type="number"
          step="0.01"
          value={formData.valor_servico}
          onChange={(e) => updateFormData("valor_servico", e.target.value)}
          placeholder="0.00"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="data_inicio">Data de Início</Label>
          <Input
            id="data_inicio"
            type="date"
            value={formData.data_inicio}
            onChange={(e) => updateFormData("data_inicio", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="data_fim">Data de Fim (Opcional)</Label>
          <Input
            id="data_fim"
            type="date"
            value={formData.data_fim}
            onChange={(e) => updateFormData("data_fim", e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">Status</Label>
        <Select
          value={formData.status}
          onValueChange={(value: string) => updateFormData("status", value)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ativo">Ativo</SelectItem>
            <SelectItem value="concluido">Concluído</SelectItem>
            <SelectItem value="cancelado">Cancelado</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="observacoes">Observações</Label>
        <Textarea
          id="observacoes"
          value={formData.observacoes}
          onChange={(e) => updateFormData("observacoes", e.target.value)}
          placeholder="Observações adicionais"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Salvando..." : editingContract ? "Atualizar" : "Criar"}
        </Button>
      </div>
    </form>
  );
};
