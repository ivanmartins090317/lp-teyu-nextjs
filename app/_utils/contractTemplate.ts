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

function getPeriodoLabel(periodoGuarda?: string): string {
  if (!periodoGuarda) return "1 mês";
  const periodoNormalizado = periodoGuarda.toLowerCase();
  if (periodoNormalizado.includes("ano")) return "1 ano";
  return "1 mês";
}

function getBoardIdentifier(data: ContractData): string {
  const marcaModelo = [data.marcaPrancha, data.modeloPrancha].filter(Boolean).join(" / ");
  return marcaModelo || "_________________________";
}

function getBoardDimensions(data: ContractData): string {
  if (!data.tamanhoPrancha) return "Comprimento: _____ / Largura: _____ / Espessura: _____";
  return `Comprimento: ${data.tamanhoPrancha} / Largura: _____ / Espessura: _____`;
}

function getColor(data: ContractData): string {
  return data.corPrancha || "_________________________";
}

function getAmount(data: ContractData): string {
  return data.valorMensal ? `R$ ${data.valorMensal}` : "R$ ______";
}

export const generateContract = (data: ContractData): string => {
  const periodoLabel = getPeriodoLabel(data.periodoGuarda);
  const identificacaoPrancha = getBoardIdentifier(data);
  const dimensoesPrancha = getBoardDimensions(data);
  const corPrancha = getColor(data);
  const valorMensal = getAmount(data);

  return `
CONTRATO DE GUARDA DE PRANCHA DE SURF
Número do Contrato: ${data.numeroContrato}
Data de emissão: ${data.dataContrato}

CONTRATANTE:
Nome: ${data.nome}
E-mail: ${data.email}
CPF: ${data.cpf}
Telefone: ${data.telefone}
${data.telefoneContato ? `Telefone de contato: ${data.telefoneContato}` : "Telefone de contato: _________________________"}

CONTRATADO:
Teyu Guardaria

1. OBJETO
1.1. Este contrato regula o serviço de guarda da prancha de surf de propriedade do CONTRATANTE, sob responsabilidade do CONTRATADO.
1.2. A prancha deve ser identificada por:
IDENTIFICAÇÃO DA PRANCHA
Shaper/Marca/Modelo: ${identificacaoPrancha}
Dimensões: ${dimensoesPrancha}
Cor predominante: ${corPrancha}
Número de quilhas: _____ / Tipo: [ ] Fixas [ ] Removíveis
Acessórios: ____________________________________________
[ ] Inexistente
Estado atual: [ ] Sem danos | [ ] Com avarias (descrever: _______________).

2. PERÍODO DE GUARDA
2.1. O CONTRATANTE escolhe o período de guarda:
[ ] 1 mês (R$ __) - De ___/____/______ a ___/____/______.
[ ] 1 ano (R$ __) - De ___/____/______ a ___/____/______.
Período selecionado no cadastro: ${periodoLabel}
2.2. O não comparecimento para retirada da prancha no prazo acordado implicará na renovação automática do serviço, autorizando a prorrogação da guarda e a cobrança correspondente até a data da efetiva retirada.

3. LOCAL E CONDIÇÕES DE ARMAZENAMENTO
3.1. A prancha será guardada em:
[ ] Área coberta e ventilada.
[ ] Suporte vertical protegido.
3.2. É proibido armazenar pranchas com quilhas ou acessórios pontiagudos sem proteção.

4. TAXAS E PAGAMENTO
4.1. Valores:
Mensalidade: ${valorMensal} (desconto de ___% para pagamento mensal).
Anuidade: R$ ______ (desconto de ___% para pagamento anual).
4.2. Em caso de não retirada da prancha na data prevista para término do contrato, serão devidas as seguintes obrigações:
a) Mensalidade extra correspondente ao valor previsto para um mês.
b) Multa moratória de 2% sobre o valor total devido.
c) Juros de mora de 1% ao mês, calculados pro rata die.
d) Honorários advocatícios.

5. RESPONSABILIDADES
5.1. DO CONTRATADO:
Zelar pela integridade da prancha, exceto em casos de força maior e caso fortuito.
Permitir inspeção do CONTRATANTE mediante agendamento prévio.
5.2. DO CONTRATANTE:
Retirar a prancha no prazo contratado.
Comunicar avarias pré-existentes no momento da entrega da prancha.

6. DANOS E EXTRAVIO
6.1. Em caso de dano por negligência do CONTRATADO, será custeado o reparo ou indenizado 80% do valor de mercado.
6.2. Não são cobertos: desgaste natural, rachaduras por uso anterior ou eventos climáticos extremos.

7. RESCISÃO
7.1. O CONTRATANTE pode rescindir a qualquer momento, com aviso de 24h.
7.2. O CONTRATADO pode encerrar o serviço se houver inadimplência superior a 15 dias.

8. DA PERDA DO OBJETO POR INADIMPLEMENTO
8.1. Em caso de inadimplemento superior a 60 (sessenta) dias, o CONTRATADO notificará o CONTRATANTE por e-mail e/ou carta registrada, concedendo prazo de 10 (dez) dias úteis para regularização.
8.2. Não resolvida a pendência no prazo acima, a prancha será considerada abandonada, e o CONTRATADO poderá:
a) Retê-la para cobrança dos valores devidos + custos de armazenamento (limitados a 6 meses).
b) Doá-la a instituição sem fins lucrativos.
c) Vendê-la em leilão promovido pela CONTRATADA.
8.3. O CONTRATANTE renuncia expressamente à propriedade da prancha após os 60 dias de inadimplência + 10 dias de notificação, conforme Art. 1.275 do Código Civil.
8.4. Antes da perda definitiva, o CONTRATADO permitirá a retirada da prancha mediante pagamento integral dos débitos acumulados.

8. ACEITE
As partes declaram estar cientes das condições do presente contrato, escolhendo o foro de Santos/SP para dirimir quaisquer questões.

Observações do cadastro:
${data.observacoesPrancha || "Sem observações adicionais."}

CONTRATANTE: __________________________________________
Nome: ${data.nome}
CPF: ${data.cpf}

CONTRATADO: ___________________________________________
TEYU GUARDARIA & PRANCHARIA LTDA
CNPJ: 61.070.542/0001-25

ANEXO I - TERMO DE VISTORIA DA PRANCHA DE SURF
CONTRATANTE: ${data.nome}
CONTRATADO: TEYU
IDENTIFICAÇÃO DA PRANCHA
Shaper/Marca/Modelo: ${identificacaoPrancha}
Dimensões: ${dimensoesPrancha}
Cor predominante: ${corPrancha}
Número de quilhas: _____ / Tipo: [ ] Fixas [ ] Removíveis
Acessórios: ____________________________________________
[ ] Inexistente
ESTADO DE CONSERVAÇÃO
Estrutura geral: [ ] Sem avarias visíveis [ ] Com os seguintes danos: _________________________
Nível de desgaste: [ ] Novo [ ] Pouco usado [ ] Usado [ ] Muito usado
Partes específicas:
Resina: [ ] Integra [ ] Trincada [ ] Com reparos
Quilhas: [ ] Integras [ ] Desgastadas [ ] Danificada [ ] Inexistente
Deck: [ ] Firme [ ] Com falhas [ ] Inexistente
Obs.: Fotos anexas? [ ] Sim (nº de fotos: _____) [ ] Não
DECLARAÇÕES
O CONTRATANTE afirma que a prancha não possui danos ocultos não mencionados acima.
O CONTRATADO atesta que recebeu a prancha nas condições descritas.
DATA DA VISTORIA: ___/____/______
Contratante: _________________________________________
Contratado: _________________________________________
`.trim();
};
