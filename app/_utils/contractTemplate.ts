
export interface ContractData {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  telefoneContato?: string;
  numeroContrato: string;
  dataContrato: string;
}

export const generateContractNumber = (): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `CONT-${timestamp}-${random}`;
};

export const generateContract = (data: ContractData): string => {
  return `
CONTRATO DE PRESTAÇÃO DE SERVIÇOS

Número do Contrato: ${data.numeroContrato}
Data: ${data.dataContrato}

CONTRATANTE:
Nome: ${data.nome}
E-mail: ${data.email}
CPF: ${data.cpf}
Telefone: ${data.telefone}
${data.telefoneContato ? `Telefone de Contato: ${data.telefoneContato}` : ''}

CONTRATADA:
Empresa de Consultoria Empresarial LTDA
CNPJ: 12.345.678/0001-90
Endereço: Rua das Empresas, 123 - São Paulo/SP

OBJETO DO CONTRATO:
A CONTRATADA compromete-se a prestar serviços de consultoria empresarial ao CONTRATANTE, incluindo:
- Análise organizacional
- Consultoria estratégica
- Desenvolvimento de processos
- Suporte técnico especializado

PRAZO:
O presente contrato terá vigência de 12 (doze) meses, podendo ser renovado mediante acordo entre as partes.

VALOR:
O valor dos serviços será definido conforme escopo específico e comunicado ao contratante antes do início dos trabalhos.

CONDIÇÕES GERAIS:
1. Os serviços serão prestados de acordo com as melhores práticas de mercado;
2. A CONTRATADA manterá sigilo sobre todas as informações do CONTRATANTE;
3. Eventuais alterações no contrato deverão ser formalizadas por escrito;
4. O presente contrato está sujeito às leis brasileiras.

ACEITE DIGITAL:
Este contrato foi aceito digitalmente pelo CONTRATANTE através do sistema web em ${data.dataContrato}.

_____________________________
${data.nome}
CPF: ${data.cpf}

_____________________________
Empresa de Consultoria Empresarial LTDA
CNPJ: 12.345.678/0001-90
`.trim();
};
