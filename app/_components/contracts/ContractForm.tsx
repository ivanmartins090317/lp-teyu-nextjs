import React, {useState, useEffect} from "react";
import {Button} from "../shared/ui/button";
import {Input} from "../shared/ui/input";
import {Label} from "../shared/ui/label";
import {Textarea} from "../shared/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../shared/ui/select";
import type {Contract, User, ContractInput} from "../../_hooks/useContractsManagement";

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
    observacoes: "",
    // Campos específicos para guarda de prancha
    marca_prancha: "",
    modelo_prancha: "",
    tamanho_prancha: "",
    cor_prancha: "",
    valor_mensal: "",
    periodo_guarda: "",
    observacoes_prancha: ""
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
        observacoes: editingContract.observacoes || "",
        // Campos específicos para guarda de prancha
        marca_prancha: "",
        modelo_prancha: "",
        tamanho_prancha: "",
        cor_prancha: "",
        valor_mensal: "",
        periodo_guarda: "",
        observacoes_prancha: ""
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
        observacoes: "",
        // Campos específicos para guarda de prancha
        marca_prancha: "",
        modelo_prancha: "",
        tamanho_prancha: "",
        cor_prancha: "",
        valor_mensal: "",
        periodo_guarda: "",
        observacoes_prancha: ""
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

  const handleClientChange = (userId: string) => {
    console.log("Cliente selecionado:", userId);

    // Encontrar o usuário selecionado
    const selectedUser = users.find((user) => user.id === userId);

    if (selectedUser && selectedUser.numero_contrato_gerado) {
      console.log(
        "Preenchendo número do contrato automaticamente:",
        selectedUser.numero_contrato_gerado
      );
      // Atualizar tanto o cliente quanto o número do contrato
      setFormData((prev) => ({
        ...prev,
        usuario_id: userId,
        numero_contrato: selectedUser.numero_contrato_gerado || ""
      }));
    } else {
      // Se não houver número de contrato gerado, apenas atualizar o cliente
      setFormData((prev) => ({
        ...prev,
        usuario_id: userId
      }));
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6 p-1">
        {/* Seção Cliente */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            📋 Informações do Cliente
          </h3>
          <div className="space-y-3">
            <Label
              htmlFor="usuario_id"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Cliente *
            </Label>
            <Select value={formData.usuario_id} onValueChange={handleClientChange}>
              <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white h-11 text-base">
                <SelectValue placeholder="Selecione um cliente" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                {users.map((user) => (
                  <SelectItem
                    key={user.id}
                    value={user.id}
                    className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{user.nome}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {user.email}
                      </span>
                      {user.numero_contrato_gerado && (
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-mono">
                          📄 {user.numero_contrato_gerado}
                        </span>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Seção Contrato */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            📄 Detalhes do Contrato
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="numero_contrato"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Número do Contrato *
                </Label>
                <span className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                  ✨ Preenchido automaticamente
                </span>
              </div>
              <Input
                id="numero_contrato"
                value={formData.numero_contrato}
                onChange={(e) => updateFormData("numero_contrato", e.target.value)}
                placeholder="Selecione um cliente primeiro..."
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white h-11 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-3">
              <Label
                htmlFor="tipo_servico"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Tipo de Serviço *
              </Label>
              <Select
                value={formData.tipo_servico}
                onValueChange={(value: string) => updateFormData("tipo_servico", value)}
              >
                <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white h-11 text-base">
                  <SelectValue placeholder="Selecione o tipo de serviço" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                  <SelectItem
                    value="Guarda de Prancha de Surf"
                    className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    🏄‍♂️ Guarda de Prancha de Surf
                  </SelectItem>
                  <SelectItem
                    value="Consultoria Empresarial"
                    className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    💼 Consultoria Empresarial
                  </SelectItem>
                  <SelectItem
                    value="Desenvolvimento de Software"
                    className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    💻 Desenvolvimento de Software
                  </SelectItem>
                  <SelectItem
                    value="Suporte Técnico"
                    className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    🔧 Suporte Técnico
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-3">
            <Label
              htmlFor="descricao_servico"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Descrição do Serviço *
            </Label>
            <Textarea
              id="descricao_servico"
              value={formData.descricao_servico}
              onChange={(e) => updateFormData("descricao_servico", e.target.value)}
              placeholder="Descreva detalhadamente o serviço a ser prestado..."
              className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white min-h-[100px] text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Seção Financeiro e Datas */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            💰 Valor e Cronograma
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-3">
              <Label
                htmlFor="valor_servico"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Valor do Serviço (R$) *
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 font-medium">
                  R$
                </span>
                <Input
                  id="valor_servico"
                  type="number"
                  step="0.01"
                  value={formData.valor_servico}
                  onChange={(e) => updateFormData("valor_servico", e.target.value)}
                  placeholder="0,00"
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white h-11 text-base pl-10 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label
                htmlFor="data_inicio"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Data de Início *
              </Label>
              <Input
                id="data_inicio"
                type="date"
                value={formData.data_inicio}
                onChange={(e) => updateFormData("data_inicio", e.target.value)}
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white h-11 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-3">
              <Label
                htmlFor="data_fim"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Data de Fim (Opcional)
              </Label>
              <Input
                id="data_fim"
                type="date"
                value={formData.data_fim}
                onChange={(e) => updateFormData("data_fim", e.target.value)}
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white h-11 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Seção Status e Observações */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            ⚙️ Status e Observações
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <Label
                htmlFor="status"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Status do Contrato
              </Label>
              <Select
                value={formData.status}
                onValueChange={(value: string) => updateFormData("status", value)}
              >
                <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white h-11 text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                  <SelectItem
                    value="ativo"
                    className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    🟢 Ativo
                  </SelectItem>
                  <SelectItem
                    value="concluido"
                    className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    ✅ Concluído
                  </SelectItem>
                  <SelectItem
                    value="cancelado"
                    className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    ❌ Cancelado
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3 md:col-span-1">
              <Label
                htmlFor="observacoes"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Observações
              </Label>
              <Textarea
                id="observacoes"
                value={formData.observacoes}
                onChange={(e) => updateFormData("observacoes", e.target.value)}
                placeholder="Observações adicionais sobre o contrato..."
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white min-h-[80px] text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Seção Dados da Prancha */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4 space-y-4 border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-blue-200 dark:border-blue-700 pb-2 flex items-center gap-2">
            🏄‍♂️ Dados da Prancha de Surf
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <Label
                htmlFor="marca_prancha"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Marca da Prancha
              </Label>
              <Input
                id="marca_prancha"
                value={formData.marca_prancha}
                onChange={(e) => updateFormData("marca_prancha", e.target.value)}
                placeholder="Ex: Channel Islands, Lost, Firewire..."
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white h-11 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-3">
              <Label
                htmlFor="modelo_prancha"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Modelo da Prancha
              </Label>
              <Input
                id="modelo_prancha"
                value={formData.modelo_prancha}
                onChange={(e) => updateFormData("modelo_prancha", e.target.value)}
                placeholder="Ex: CI Pro, Lost Driver, Firewire Seaside..."
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white h-11 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-3">
              <Label
                htmlFor="tamanho_prancha"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Tamanho da Prancha
              </Label>
              <Input
                id="tamanho_prancha"
                value={formData.tamanho_prancha}
                onChange={(e) => updateFormData("tamanho_prancha", e.target.value)}
                placeholder="Ex: 5'8, 6'0, 6'2..."
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white h-11 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-3">
              <Label
                htmlFor="cor_prancha"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Cor da Prancha
              </Label>
              <Input
                id="cor_prancha"
                value={formData.cor_prancha}
                onChange={(e) => updateFormData("cor_prancha", e.target.value)}
                placeholder="Ex: Branca, Azul, Amarela..."
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white h-11 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-3">
              <Label
                htmlFor="valor_mensal"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Valor Mensal (R$)
              </Label>
              <Input
                id="valor_mensal"
                type="number"
                value={formData.valor_mensal}
                onChange={(e) => updateFormData("valor_mensal", e.target.value)}
                placeholder="Ex: 150, 200, 250..."
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white h-11 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-3">
              <Label
                htmlFor="periodo_guarda"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Período de Guarda
              </Label>
              <Input
                id="periodo_guarda"
                value={formData.periodo_guarda}
                onChange={(e) => updateFormData("periodo_guarda", e.target.value)}
                placeholder="Ex: 6 meses, 1 ano, Indefinido..."
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white h-11 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label
              htmlFor="observacoes_prancha"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Observações sobre a Prancha
            </Label>
            <Textarea
              id="observacoes_prancha"
              value={formData.observacoes_prancha}
              onChange={(e) => updateFormData("observacoes_prancha", e.target.value)}
              placeholder="Informações adicionais sobre a prancha, como estado, acessórios, etc..."
              className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white min-h-[80px] text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4 -mx-1 -mb-1 rounded-b-lg">
          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="w-full sm:w-auto px-6 py-2.5 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              disabled={isLoading}
            >
              ❌ Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Salvando...
                </div>
              ) : editingContract ? (
                "✏️ Atualizar Contrato"
              ) : (
                "✅ Criar Contrato"
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
