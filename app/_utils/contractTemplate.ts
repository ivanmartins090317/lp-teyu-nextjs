export interface ContractData {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  telefoneContato?: string;
  numeroContrato: string;
  dataContrato: string;
  // Campos específicos para guarda de prancha
  marcaPrancha?: string;
  modeloPrancha?: string;
  tamanhoPrancha?: string;
  corPrancha?: string;
  valorMensal?: string;
  periodoGuarda?: string;
  observacoesPrancha?: string;
}

export const generateContractNumber = (): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return `CONT-${timestamp}-${random}`;
};

export const generateContract = (data: ContractData): string => {
  return `
CONTRATO DE GUARDA DE PRANCHA DE SURF

Número do Contrato: ${data.numeroContrato}
Data: ${data.dataContrato}

CONTRATANTE:
Nome: ${data.nome}
E-mail: ${data.email}
CPF: ${data.cpf}
Telefone: ${data.telefone}
${data.telefoneContato ? `Telefone de Contato: ${data.telefoneContato}` : ""}

CONTRATADA:
TEYU GUARDARIA & PRANCHARIA LTDA
CNPJ: 61.070.542/0001-25
Endereço: Maranhão, 70 - Pompéia, Santos - SP, 11075-020
Telefone: (13) 99737-7070
E-mail: teyusurf@gmail.com

OBJETO DO CONTRATO:
A CONTRATADA compromete-se a prestar serviços de guarda de prancha de surf ao CONTRATANTE, incluindo:
- Armazenamento seguro da prancha
- Cuidado e manutenção básica
- Acesso controlado e monitorado
- Seguro contra danos e roubo

DADOS DA PRANCHA:
${data.marcaPrancha ? `Marca: ${data.marcaPrancha}` : ""}
${data.modeloPrancha ? `Modelo: ${data.modeloPrancha}` : ""}
${data.tamanhoPrancha ? `Tamanho: ${data.tamanhoPrancha}` : ""}
${data.corPrancha ? `Cor: ${data.corPrancha}` : ""}

PRAZO E VALOR:
${data.periodoGuarda ? `Período de Guarda: ${data.periodoGuarda}` : "Período: A definir"}
${data.valorMensal ? `Valor Mensal: R$ ${data.valorMensal}` : "Valor: A definir"}

CONDIÇÕES GERAIS:
1. A prancha será armazenada em local seguro e monitorado;
2. A CONTRATADA não se responsabiliza por Danos causados pelo uso normal da prancha;
3. O CONTRATANTE deve retirar a prancha no prazo estabelecido;
4. Eventuais alterações no contrato deverão ser formalizadas por escrito;
5. O presente contrato está sujeito às leis brasileiras.

${data.observacoesPrancha ? `OBSERVAÇÕES: ${data.observacoesPrancha}` : ""}

ACEITE DIGITAL:
Este contrato foi aceito digitalmente pelo CONTRATANTE através do sistema web em ${
    data.dataContrato
  }.

_____________________________
${data.nome}
CPF: ${data.cpf}

_____________________________
TEYU GUARDARIA & PRANCHARIA LTDA
CNPJ: 61.070.542/0001-25
`.trim();
};
