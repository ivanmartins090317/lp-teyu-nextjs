import {useState} from "react";
import {supabase} from "../_integrations/supabase/client";
import {useToast} from "../_hooks/use-toast";
import {
  generateContract,
  generateContractNumber,
  ContractData
} from "../_utils/contractTemplate";

interface SignupFormData {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  telefoneContato: string;
}

export const useSignupForm = (onSuccess: (contractData: ContractData) => void) => {
  const [formData, setFormData] = useState<SignupFormData>({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    telefoneContato: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const {toast} = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      nome: "",
      email: "",
      cpf: "",
      telefone: "",
      telefoneContato: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Gerar número do contrato e data atual
      const numeroContrato = generateContractNumber();
      const dataContrato = new Date().toLocaleDateString("pt-BR");

      // Preparar dados do contrato
      const contractData: ContractData = {
        nome: formData.nome,
        email: formData.email,
        cpf: formData.cpf,
        telefone: formData.telefone,
        telefoneContato: formData.telefoneContato,
        numeroContrato,
        dataContrato
      };

      // Gerar o contrato completo com os dados do usuário
      const contratoCompleto = generateContract(contractData);

      console.log("Salvando usuário com contrato completo...");

      const {data, error} = await supabase
        .from("usuarios")
        .insert([
          {
            nome: formData.nome,
            email: formData.email,
            cpf: formData.cpf,
            telefone: formData.telefone,
            telefone_contato: formData.telefoneContato || null,
            contrato: contratoCompleto,
            numero_contrato_gerado: numeroContrato
          }
        ])
        .select()
        .single();

      if (error) {
        console.error("Erro ao salvar usuário:", error);

        if (error.code === "23505") {
          toast({
            title: "🏄‍♂️ Email já cadastrado na Teyu",
            description:
              "Este email já está registrado em nosso sistema. Entre em contato conosco para verificar sua conta: (13) 99737-7070 ou teyusurf@gmail.com",
            variant: "destructive",
            duration: 8000 // 8 segundos para dar tempo de ler
          });
        } else {
          toast({
            title: "❌ Erro ao cadastrar",
            description:
              "Ocorreu um erro ao criar sua conta. Tente novamente ou entre em contato: (13) 99737-7070",
            variant: "destructive",
            duration: 6000
          });
        }
        return;
      }

      console.log("Usuário salvo com sucesso:", data);

      toast({
        title: "✅ Cadastro realizado com sucesso!",
        description: `Sua conta foi criada. Contrato ${numeroContrato} pronto para download.`,
        duration: 5000
      });

      resetForm();
      onSuccess(contractData);
    } catch (error) {
      console.error("Erro inesperado:", error);
      toast({
        title: "❌ Erro inesperado",
        description: "Algo deu errado. Entre em contato conosco: (13) 99737-7070",
        variant: "destructive",
        duration: 6000
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    handleInputChange,
    handleSubmit
  };
};
