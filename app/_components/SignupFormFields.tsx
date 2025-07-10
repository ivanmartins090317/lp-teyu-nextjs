import React from "react";
import {Input} from "../_components/ui/input";
import {Label} from "../_components/ui/label";

interface SignupFormFieldsProps {
  formData: {
    nome: string;
    email: string;
    cpf: string;
    telefone: string;
    telefoneContato: string;
  };
  isLoading: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignupFormFields = ({
  formData,
  isLoading,
  onInputChange
}: SignupFormFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label
            htmlFor="nome"
            className="text-sm font-source font-medium text-neutral-700"
          >
            Nome Completo
          </Label>
          <Input
            id="nome"
            name="nome"
            type="text"
            value={formData.nome}
            onChange={onInputChange}
            placeholder="Digite seu nome completo"
            required
            disabled={isLoading}
            className="h-9 bg-white text-[#5f5f5e]"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-sm font-source font-medium text-neutral-700"
          >
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={onInputChange}
            placeholder="Digite seu email"
            required
            disabled={isLoading}
            className="h-9 bg-white text-[#5f5f5e]"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="cpf"
            className="text-sm font-source font-medium text-neutral-700"
          >
            CPF
          </Label>
          <Input
            id="cpf"
            name="cpf"
            type="text"
            value={formData.cpf}
            onChange={onInputChange}
            placeholder="000.000.000-00"
            required
            disabled={isLoading}
            className="h-9 bg-white text-[#5f5f5e]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label
            htmlFor="telefone"
            className="text-sm font-source font-medium text-neutral-700"
          >
            Telefone Principal
          </Label>
          <Input
            id="telefone"
            name="telefone"
            type="tel"
            value={formData.telefone}
            onChange={onInputChange}
            placeholder="(11) 99999-9999"
            required
            disabled={isLoading}
            className="h-9 bg-white text-[#5f5f5e]"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="telefoneContato"
            className="text-sm font-source font-medium text-neutral-700"
          >
            Telefone para Contato (Opcional)
          </Label>
          <Input
            id="telefoneContato"
            name="telefoneContato"
            type="tel"
            value={formData.telefoneContato}
            onChange={onInputChange}
            placeholder="(11) 99999-9999"
            disabled={isLoading}
            className="h-9 bg-white text-[#5f5f5e]"
          />
        </div>
      </div>
    </>
  );
};

export default SignupFormFields;
