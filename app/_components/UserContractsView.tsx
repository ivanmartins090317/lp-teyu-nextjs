import React, {useState, useEffect} from "react";
import {supabase} from "../_integrations/supabase/client";
import {useToast} from "../_hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "../_components/ui/table";
import {Button} from "../_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../_components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "../_components/ui/alert-dialog";
import {FileText, Download, Trash2} from "lucide-react";
import {downloadContractPDF} from "../_utils/contractPDF";
import {ContractData} from "../_utils/contractTemplate";

interface Usuario {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  telefone_contato: string | null;
  numero_contrato_gerado: string;
  contrato: string;
  created_at: string;
}

const UserContractsView = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedContract, setSelectedContract] = useState<string | null>(null);
  const [deletingContractId, setDeletingContractId] = useState<string | null>(null);
  const {toast} = useToast();

  useEffect(() => {
    console.log(
      "UserContractsView: Componente carregado, iniciando busca de usuários..."
    );
    const fetchUsuarios = async () => {
      console.log("Iniciando busca de usuários com contratos...");
      try {
        setIsLoading(true);

        const {data, error} = await supabase
          .from("usuarios")
          .select("*")
          .not("numero_contrato_gerado", "is", null)
          .order("created_at", {ascending: false});

        console.log("Resposta da busca de usuários:", {data, error});

        if (error) {
          console.error("Erro ao buscar usuários:", error);
          toast({
            title: "Erro ao carregar contratos",
            description: `Erro: ${error.message}`,
            variant: "destructive"
          });
          return;
        }

        setUsuarios(
          (data || []).map((u) => ({
            ...u,
            cpf: u.cpf || "",
            telefone_contato: u.telefone_contato || "",
            numero_contrato_gerado: u.numero_contrato_gerado || "",
            contrato: u.contrato || ""
          }))
        );
      } catch (error) {
        console.error("Erro inesperado ao buscar usuários:", error);
        toast({
          title: "Erro inesperado",
          description: "Ocorreu um erro ao carregar os contratos.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsuarios();
  }, [toast]);

  const handleDeleteContract = async (usuario: Usuario) => {
    console.log("Deletando contrato do usuário:", usuario.id);
    try {
      setDeletingContractId(usuario.id);

      const {error} = await supabase.from("usuarios").delete().eq("id", usuario.id);

      if (error) {
        console.error("Erro ao deletar contrato:", error);
        toast({
          title: "Erro ao deletar contrato",
          description: `Erro: ${error.message}`,
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Contrato deletado!",
        description: `O contrato ${usuario.numero_contrato_gerado} foi deletado com sucesso.`
      });

      // Atualizar a lista removendo o usuário deletado
      setUsuarios((prev) => prev.filter((u) => u.id !== usuario.id));
    } catch (error) {
      console.error("Erro inesperado ao deletar contrato:", error);
      toast({
        title: "Erro inesperado",
        description: "Ocorreu um erro ao deletar o contrato.",
        variant: "destructive"
      });
    } finally {
      setDeletingContractId(null);
    }
  };

  const handleDownloadPDF = (usuario: Usuario) => {
    const contractData: ContractData = {
      nome: usuario.nome,
      email: usuario.email,
      cpf: usuario.cpf || "",
      telefone: usuario.telefone,
      telefoneContato: usuario.telefone_contato || "",
      numeroContrato: usuario.numero_contrato_gerado,
      dataContrato: new Date(usuario.created_at).toLocaleDateString("pt-BR")
    };

    downloadContractPDF(contractData);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("pt-BR");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p>Carregando contratos de usuários...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Contratos de Usuários</h2>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Número do Contrato</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>CPF</TableHead>
              <TableHead>Data de Criação</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usuarios.map((usuario) => (
              <TableRow key={usuario.id}>
                <TableCell className="font-medium">
                  {usuario.numero_contrato_gerado}
                </TableCell>
                <TableCell>{usuario.nome}</TableCell>
                <TableCell>{usuario.email}</TableCell>
                <TableCell>{usuario.cpf || "N/A"}</TableCell>
                <TableCell>{formatDate(usuario.created_at)}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedContract(usuario.contrato)}
                        >
                          <FileText className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>
                            Contrato - {usuario.numero_contrato_gerado}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-4 rounded border">
                            {selectedContract}
                          </pre>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownloadPDF(usuario)}
                    >
                      <Download className="w-4 h-4" />
                    </Button>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={deletingContractId === usuario.id}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Tem certeza que deseja apagar este contrato?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Esta ação não pode ser desfeita. O contrato{" "}
                            <strong>{usuario.numero_contrato_gerado}</strong> do usuário{" "}
                            <strong>{usuario.nome}</strong> será permanentemente removido
                            do sistema.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDeleteContract(usuario)}
                            className="bg-red-600 hover:bg-red-700"
                            disabled={deletingContractId === usuario.id}
                          >
                            {deletingContractId === usuario.id
                              ? "Deletando..."
                              : "Sim, apagar contrato"}
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {usuarios.length === 0 && !isLoading && (
          <div className="text-center py-8 text-gray-500">
            Nenhum contrato de usuário encontrado.
          </div>
        )}
      </div>
    </div>
  );
};

export default UserContractsView;
