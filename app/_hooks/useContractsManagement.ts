import {useState, useEffect} from "react";
import {supabase} from "../_integrations/supabase/client";
import {useToast} from "../_hooks/use-toast";

interface Contract {
  id: string;
  usuario_id: string;
  numero_contrato: string;
  tipo_servico: string;
  descricao_servico: string;
  valor_servico: number;
  data_inicio: string;
  data_fim: string | null;
  status: string;
  observacoes: string | null;
  usuarios?: {
    nome: string;
    email: string;
  };
}

interface ContractInput {
  usuario_id: string;
  numero_contrato: string;
  tipo_servico: string;
  descricao_servico: string;
  valor_servico: number;
  data_inicio: string;
  data_fim?: string | null;
  status: string;
  observacoes?: string | null;
}

interface User {
  id: string;
  nome: string;
  email: string;
}

export const useContractsManagement = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const {toast} = useToast();

  const fetchContracts = async () => {
    console.log("Iniciando busca de contratos...");
    try {
      setIsLoading(true);

      const {data: contractsData, error: contractsError} = await supabase
        .from("contratos")
        .select("*")
        .order("created_at", {ascending: false});

      console.log("Resposta da busca de contratos:", {contractsData, contractsError});

      if (contractsError) {
        console.error("Erro ao buscar contratos:", contractsError);
        toast({
          title: "Erro ao carregar contratos",
          description: `Erro: ${contractsError.message}`,
          variant: "destructive"
        });
        return;
      }

      if (contractsData && contractsData.length > 0) {
        const userIds = [
          ...new Set(contractsData.map((contract) => contract.usuario_id))
        ];
        console.log("IDs de usuários encontrados:", userIds);

        const {data: usersData, error: usersError} = await supabase
          .from("usuarios")
          .select("id, nome, email")
          .in("id", userIds);

        console.log("Dados dos usuários:", {usersData, usersError});

        if (usersError) {
          console.error("Erro ao buscar dados dos usuários:", usersError);
        }

        const contractsWithUsers = contractsData.map((contract) => ({
          ...contract,
          usuarios: usersData?.find((user) => user.id === contract.usuario_id)
        }));

        console.log("Contratos com dados de usuários:", contractsWithUsers);
        setContracts(contractsWithUsers);
      } else {
        console.log("Nenhum contrato encontrado");
        setContracts([]);
      }
    } catch (error) {
      console.error("Erro inesperado ao buscar contratos:", error);
      toast({
        title: "Erro inesperado",
        description: "Ocorreu um erro ao carregar os contratos.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUsers = async () => {
    console.log("Iniciando busca de usuários...");
    try {
      const {data, error} = await supabase
        .from("usuarios")
        .select("id, nome, email")
        .order("nome");

      console.log("Resposta da busca de usuários:", {data, error});

      if (error) {
        console.error("Erro ao buscar usuários:", error);
        toast({
          title: "Erro ao carregar usuários",
          description: `Erro: ${error.message}`,
          variant: "destructive"
        });
        return;
      }

      setUsers(data || []);
    } catch (error) {
      console.error("Erro inesperado ao buscar usuários:", error);
    }
  };

  const saveContract = async (
    contractData: ContractInput,
    editingContract: Contract | null
  ) => {
    console.log("Dados do contrato para salvar:", contractData);

    let error;

    if (editingContract) {
      console.log("Atualizando contrato existente...");
      const {error: updateError} = await supabase
        .from("contratos")
        .update(contractData)
        .eq("id", editingContract.id);
      error = updateError;
    } else {
      console.log("Criando novo contrato...");
      const {error: insertError} = await supabase
        .from("contratos")
        .insert([contractData]);
      error = insertError;
    }

    if (error) {
      console.error("Erro ao salvar contrato:", error);
      toast({
        title: "Erro ao salvar contrato",
        description: `Erro: ${error.message}`,
        variant: "destructive"
      });
      return false;
    }

    toast({
      title: editingContract ? "Contrato atualizado!" : "Contrato criado!",
      description: editingContract
        ? "O contrato foi atualizado com sucesso."
        : "O contrato foi criado com sucesso."
    });

    fetchContracts();
    return true;
  };

  useEffect(() => {
    console.log("useContractsManagement: Hook carregado, iniciando busca de dados...");
    fetchContracts();
    fetchUsers();
  }, [fetchContracts, fetchUsers]);

  return {
    contracts,
    users,
    isLoading,
    setIsLoading,
    fetchContracts,
    saveContract,
    toast
  };
};

export type {Contract, User, ContractInput};
