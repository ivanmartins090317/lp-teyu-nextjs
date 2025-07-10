import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "../_components/ui/table";
import {Button} from "../_components/ui/button";
import {Edit} from "lucide-react";
import type {Contract} from "../_hooks/useContractsManagement";

interface ContractsTableProps {
  contracts: Contract[];
  isLoading: boolean;
  onEdit: (contract: Contract) => void;
}

export const ContractsTable: React.FC<ContractsTableProps> = ({
  contracts,
  isLoading,
  onEdit
}) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("pt-BR");
  };

  if (isLoading && contracts.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p>Carregando contratos...</p>
      </div>
    );
  }

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Número</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Tipo de Serviço</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Data Início</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contracts.map((contract) => (
            <TableRow key={contract.id}>
              <TableCell className="font-medium">{contract.numero_contrato}</TableCell>
              <TableCell>{contract.usuarios?.nome || "Usuário não encontrado"}</TableCell>
              <TableCell>{contract.tipo_servico}</TableCell>
              <TableCell>{formatCurrency(contract.valor_servico)}</TableCell>
              <TableCell>{formatDate(contract.data_inicio)}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    contract.status === "ativo"
                      ? "bg-green-100 text-green-800"
                      : contract.status === "concluido"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {contract.status}
                </span>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm" onClick={() => onEdit(contract)}>
                  <Edit className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {contracts.length === 0 && !isLoading && (
        <div className="text-center py-8 text-gray-500">
          Nenhum contrato encontrado. Crie o primeiro contrato!
        </div>
      )}
    </div>
  );
};
