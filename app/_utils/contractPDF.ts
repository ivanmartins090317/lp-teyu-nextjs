import jsPDF from "jspdf";
import {ContractData} from "./contractTemplate";

export const generateContractPDF = (data: ContractData): jsPDF => {
  const doc = new jsPDF();

  // Configurações de fonte e espaçamento
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const margin = 20;
  const lineHeight = 4.5; // Reduzido ainda mais para caber em uma página
  let currentY = 25; // Reduzido de 30 para 25

  // Função para verificar se precisa de nova página
  const checkPageBreak = (requiredSpace: number = lineHeight) => {
    if (currentY + requiredSpace > pageHeight - margin) {
      doc.addPage();
      currentY = 25;
      return true;
    }
    return false;
  };

  // Função para adicionar texto com quebra de página automática
  const addText = (
    text: string,
    options: {maxWidth?: number; align?: "left" | "center" | "right" | "justify"} = {}
  ) => {
    checkPageBreak();
    doc.text(text, margin, currentY, options);
    currentY += lineHeight;
  };

  // Função para adicionar múltiplas linhas
  const addTextLines = (
    lines: string[],
    options: {maxWidth?: number; align?: "left" | "center" | "right" | "justify"} = {}
  ) => {
    lines.forEach((line) => {
      addText(line, options);
    });
  };

  // Título
  doc.setFontSize(16); // Reduzido de 18 para 16
  doc.setFont("helvetica", "bold");
  doc.text("CONTRATO DE GUARDA DE PRANCHA DE SURF", pageWidth / 2, currentY, {
    align: "center"
  });
  currentY += lineHeight * 1.5; // Reduzido

  // Número e data do contrato
  doc.setFontSize(10); // Reduzido de 12 para 10
  doc.setFont("helvetica", "normal");
  addText(`Número do Contrato: ${data.numeroContrato}`);
  addText(`Data: ${data.dataContrato}`);
  currentY += lineHeight * 0.5; // Reduzido

  // Seção CONTRATANTE
  doc.setFont("helvetica", "bold");
  addText("CONTRATANTE:");

  doc.setFont("helvetica", "normal");
  addText(`Nome: ${data.nome}`);
  addText(`E-mail: ${data.email}`);
  addText(`CPF: ${data.cpf}`);
  addText(`Telefone: ${data.telefone}`);

  if (data.telefoneContato) {
    addText(`Telefone de Contato: ${data.telefoneContato}`);
  }
  currentY += lineHeight * 0.5; // Reduzido

  // Seção CONTRATADA
  doc.setFont("helvetica", "bold");
  addText("CONTRATADA:");

  doc.setFont("helvetica", "normal");
  addText("TEYU GUARDARIA & PRANCHARIA LTDA");
  addText("CNPJ: 61.070.542/0001-25");
  addText("Endereço: Maranhão, 70 - Pompéia, Santos - SP, 11075-020");
  addText("Telefone: (13) 99737-7070");
  addText("E-mail: teyusurf@gmail.com");
  currentY += lineHeight * 0.5; // Reduzido

  // OBJETO DO CONTRATO
  doc.setFont("helvetica", "bold");
  addText("OBJETO DO CONTRATO:");

  doc.setFont("helvetica", "normal");
  const objetoTexto = [
    "A CONTRATADA compromete-se a prestar serviços de guarda de prancha de surf ao CONTRATANTE, incluindo:",
    "• Armazenamento seguro da prancha",
    "• Cuidado e manutenção básica",
    "• Acesso controlado e monitorado",
    "• Seguro contra danos e roubo"
  ];
  addTextLines(objetoTexto);
  currentY += lineHeight * 0.5; // Reduzido

  // DADOS DA PRANCHA
  doc.setFont("helvetica", "bold");
  addText("DADOS DA PRANCHA:");

  doc.setFont("helvetica", "normal");
  if (data.marcaPrancha) addText(`Marca: ${data.marcaPrancha}`);
  if (data.modeloPrancha) addText(`Modelo: ${data.modeloPrancha}`);
  if (data.tamanhoPrancha) addText(`Tamanho: ${data.tamanhoPrancha}`);
  if (data.corPrancha) addText(`Cor: ${data.corPrancha}`);
  currentY += lineHeight * 0.5; // Reduzido

  // PRAZO E VALOR
  doc.setFont("helvetica", "bold");
  addText("PRAZO E VALOR:");

  doc.setFont("helvetica", "normal");
  if (data.periodoGuarda) {
    addText(`Período de Guarda: ${data.periodoGuarda}`);
  } else {
    addText("Período: A definir");
  }

  if (data.valorMensal) {
    addText(`Valor Mensal: R$ ${data.valorMensal}`);
  } else {
    addText("Valor: A definir");
  }
  currentY += lineHeight * 0.5; // Reduzido

  // CONDIÇÕES GERAIS - CORRIGIDAS
  doc.setFont("helvetica", "bold");
  addText("CONDIÇÕES GERAIS:");

  doc.setFont("helvetica", "normal");
  const condicoes = [
    "1. A prancha será armazenada em local seguro e monitorado;",
    "2. A CONTRATADA não se responsabiliza por danos causados pelo uso normal da prancha;",
    "3. O CONTRATANTE deve retirar a prancha no prazo estabelecido;",
    "4. Eventuais alterações no contrato deverão ser formalizadas por escrito;",
    "5. O presente contrato está sujeito às leis brasileiras."
  ];
  addTextLines(condicoes, {maxWidth: pageWidth - margin * 2});
  currentY += lineHeight * 0.5; // Reduzido

  // OBSERVAÇÕES
  if (data.observacoesPrancha) {
    doc.setFont("helvetica", "bold");
    addText("OBSERVAÇÕES:");

    doc.setFont("helvetica", "normal");
    addText(data.observacoesPrancha, {maxWidth: pageWidth - margin * 2});
    currentY += lineHeight * 0.5; // Reduzido
  }

  // ACEITE DIGITAL
  doc.setFont("helvetica", "bold");
  addText("ACEITE DIGITAL:");

  doc.setFont("helvetica", "normal");
  addText(
    `Este contrato foi aceito digitalmente pelo CONTRATANTE através do sistema web em ${data.dataContrato}.`,
    {maxWidth: pageWidth - margin * 2}
  );
  currentY += lineHeight * 1.5; // Reduzido

  // Assinaturas
  addText("_____________________________");
  addText(data.nome);
  addText(`CPF: ${data.cpf}`);
  currentY += lineHeight * 0.5; // Reduzido

  addText("_____________________________");
  addText("TEYU GUARDARIA & PRANCHARIA LTDA");
  addText("CNPJ: 61.070.542/0001-25");

  return doc;
};

export const downloadContractPDF = (data: ContractData) => {
  const doc = generateContractPDF(data);
  doc.save(`Contrato_${data.numeroContrato}.pdf`);
};
