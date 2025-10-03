import React, {useState, useEffect} from "react";
import {Input} from "../../shared/ui/input";
import {Label} from "../../shared/ui/label";
import {supabase} from "../../../_integrations/supabase/client";
import {AlertCircle, CheckCircle, Loader2} from "lucide-react";

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
  onEmailStatusChange?: (status: "idle" | "checking" | "exists" | "available") => void;
}

const SignupFormFields = ({
  formData,
  isLoading,
  onInputChange,
  onEmailStatusChange
}: SignupFormFieldsProps) => {
  const [emailStatus, setEmailStatus] = useState<
    "idle" | "checking" | "exists" | "available"
  >("idle");
  const [emailMessage, setEmailMessage] = useState("");

  // Função para verificar se o email já existe
  const checkEmailExists = async (email: string) => {
    if (!email || !email.includes("@")) {
      setEmailStatus("idle");
      setEmailMessage("");
      onEmailStatusChange?.("idle");
      return;
    }

    setEmailStatus("checking");
    onEmailStatusChange?.("checking");

    try {
      const {data, error} = await supabase
        .from("usuarios")
        .select("email")
        .eq("email", email)
        .single();

      if (error && error.code === "PGRST116") {
        // Email não encontrado - disponível
        setEmailStatus("available");
        setEmailMessage("Email disponível para cadastro");
        onEmailStatusChange?.("available");
      } else if (data) {
        // Email encontrado - já existe
        setEmailStatus("exists");
        setEmailMessage(
          "Este email já está cadastrado. Entre em contato: (13) 99737-7070"
        );
        onEmailStatusChange?.("exists");
      } else {
        setEmailStatus("idle");
        setEmailMessage("");
        onEmailStatusChange?.("idle");
      }
    } catch (error) {
      console.error("Erro ao verificar email:", error);
      setEmailStatus("idle");
      setEmailMessage("");
      onEmailStatusChange?.("idle");
    }
  };

  // Debounce para evitar muitas consultas
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (formData.email) {
        checkEmailExists(formData.email);
      }
    }, 1000); // Aguarda 1 segundo após parar de digitar

    return () => clearTimeout(timeoutId);
  }, [formData.email]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e);
    // Reset status quando começar a digitar
    if (emailStatus === "exists") {
      setEmailStatus("idle");
      setEmailMessage("");
      onEmailStatusChange?.("idle");
    }
  };

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
          <div className="relative">
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleEmailChange}
              placeholder="Digite seu email"
              required
              disabled={isLoading}
              className={`h-9 bg-white text-[#5f5f5e] pr-10 ${
                emailStatus === "exists"
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : emailStatus === "available"
                  ? "border-green-500 focus:border-green-500 focus:ring-green-500"
                  : ""
              }`}
            />

            {/* Ícone de status do email */}
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {emailStatus === "checking" && (
                <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
              )}
              {emailStatus === "exists" && (
                <AlertCircle className="w-4 h-4 text-red-500" />
              )}
              {emailStatus === "available" && (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
            </div>
          </div>

          {/* Mensagem de status do email */}
          {emailMessage && (
            <div
              className={`text-xs flex items-center gap-1 ${
                emailStatus === "exists"
                  ? "text-red-600"
                  : emailStatus === "available"
                  ? "text-green-600"
                  : "text-gray-600"
              }`}
            >
              {emailStatus === "exists" && <AlertCircle className="w-3 h-3" />}
              {emailStatus === "available" && <CheckCircle className="w-3 h-3" />}
              {emailMessage}
            </div>
          )}
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

      {/* Aviso especial para email já cadastrado */}
      {emailStatus === "exists" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-red-800 mb-1">
                Email já cadastrado na Teyu
              </h4>
              <p className="text-sm text-red-700 mb-2">
                Este email já está registrado em nosso sistema. Entre em contato conosco
                para verificar sua conta.
              </p>
              <div className="text-sm text-red-600">
                <p>
                  <strong>Telefone:</strong> (13) 99737-7070
                </p>
                <p>
                  <strong>Email:</strong> teyusurf@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupFormFields;
