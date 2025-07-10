
import jsPDF from 'jspdf';
import { ContractData } from './contractTemplate';

export const generateContractPDF = (data: ContractData): jsPDF => {
  const doc = new jsPDF();
  
  // Configurações de fonte e espaçamento
  const pageWidth = doc.internal.pageSize.width;
  const margin = 20;
  const lineHeight = 6;
  let currentY = 30;

  // Título
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('CONTRATO DE PRESTAÇÃO DE SERVIÇOS', pageWidth / 2, currentY, { align: 'center' });
  
  currentY += lineHeight * 2;
  
  // Número e data do contrato
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`Número do Contrato: ${data.numeroContrato}`, margin, currentY);
  currentY += lineHeight;
  doc.text(`Data: ${data.dataContrato}`, margin, currentY);
  
  currentY += lineHeight * 2;
  
  // Seção CONTRATANTE
  doc.setFont('helvetica', 'bold');
  doc.text('CONTRATANTE:', margin, currentY);
  currentY += lineHeight;
  
  doc.setFont('helvetica', 'normal');
  doc.text(`Nome: ${data.nome}`, margin, currentY);
  currentY += lineHeight;
  doc.text(`E-mail: ${data.email}`, margin, currentY);
  currentY += lineHeight;
  doc.text(`CPF: ${data.cpf}`, margin, currentY);
  currentY += lineHeight;
  doc.text(`Telefone: ${data.telefone}`, margin, currentY);
  currentY += lineHeight;
  
  if (data.telefoneContato) {
    doc.text(`Telefone de Contato: ${data.telefoneContato}`, margin, currentY);
    currentY += lineHeight;
  }
  
  currentY += lineHeight;
  
  // Seção CONTRATADA
  doc.setFont('helvetica', 'bold');
  doc.text('CONTRATADA:', margin, currentY);
  currentY += lineHeight;
  
  doc.setFont('helvetica', 'normal');
  doc.text('Empresa de Consultoria Empresarial LTDA', margin, currentY);
  currentY += lineHeight;
  doc.text('CNPJ: 12.345.678/0001-90', margin, currentY);
  currentY += lineHeight;
  doc.text('Endereço: Rua das Empresas, 123 - São Paulo/SP', margin, currentY);
  
  currentY += lineHeight * 2;
  
  // OBJETO DO CONTRATO
  doc.setFont('helvetica', 'bold');
  doc.text('OBJETO DO CONTRATO:', margin, currentY);
  currentY += lineHeight;
  
  doc.setFont('helvetica', 'normal');
  const objetoTexto = [
    'A CONTRATADA compromete-se a prestar serviços de consultoria empresarial ao CONTRATANTE, incluindo:',
    '• Análise organizacional',
    '• Consultoria estratégica', 
    '• Desenvolvimento de processos',
    '• Suporte técnico especializado'
  ];
  
  objetoTexto.forEach(linha => {
    doc.text(linha, margin, currentY);
    currentY += lineHeight;
  });
  
  currentY += lineHeight;
  
  // PRAZO
  doc.setFont('helvetica', 'bold');
  doc.text('PRAZO:', margin, currentY);
  currentY += lineHeight;
  
  doc.setFont('helvetica', 'normal');
  doc.text('O presente contrato terá vigência de 12 (doze) meses, podendo ser renovado mediante acordo entre as partes.', margin, currentY, { maxWidth: pageWidth - (margin * 2) });
  
  currentY += lineHeight * 2;
  
  // VALOR
  doc.setFont('helvetica', 'bold');
  doc.text('VALOR:', margin, currentY);
  currentY += lineHeight;
  
  doc.setFont('helvetica', 'normal');
  doc.text('O valor dos serviços será definido conforme escopo específico e comunicado ao contratante antes do início dos trabalhos.', margin, currentY, { maxWidth: pageWidth - (margin * 2) });
  
  currentY += lineHeight * 2;
  
  // CONDIÇÕES GERAIS
  doc.setFont('helvetica', 'bold');
  doc.text('CONDIÇÕES GERAIS:', margin, currentY);
  currentY += lineHeight;
  
  doc.setFont('helvetica', 'normal');
  const condicoes = [
    '1. Os serviços serão prestados de acordo com as melhores práticas de mercado;',
    '2. A CONTRATADA manterá sigilo sobre todas as informações do CONTRATANTE;',
    '3. Eventuais alterações no contrato deverão ser formalizadas por escrito;',
    '4. O presente contrato está sujeito às leis brasileiras.'
  ];
  
  condicoes.forEach(condicao => {
    doc.text(condicao, margin, currentY, { maxWidth: pageWidth - (margin * 2) });
    currentY += lineHeight;
  });
  
  currentY += lineHeight * 2;
  
  // ACEITE DIGITAL
  doc.setFont('helvetica', 'bold');
  doc.text('ACEITE DIGITAL:', margin, currentY);
  currentY += lineHeight;
  
  doc.setFont('helvetica', 'normal');
  doc.text(`Este contrato foi aceito digitalmente pelo CONTRATANTE através do sistema web em ${data.dataContrato}.`, margin, currentY, { maxWidth: pageWidth - (margin * 2) });
  
  currentY += lineHeight * 3;
  
  // Assinaturas
  doc.text('_____________________________', margin, currentY);
  currentY += lineHeight;
  doc.text(data.nome, margin, currentY);
  currentY += lineHeight;
  doc.text(`CPF: ${data.cpf}`, margin, currentY);
  
  currentY += lineHeight * 2;
  
  doc.text('_____________________________', margin, currentY);
  currentY += lineHeight;
  doc.text('Empresa de Consultoria Empresarial LTDA', margin, currentY);
  currentY += lineHeight;
  doc.text('CNPJ: 12.345.678/0001-90', margin, currentY);
  
  return doc;
};

export const downloadContractPDF = (data: ContractData) => {
  const doc = generateContractPDF(data);
  doc.save(`Contrato_${data.numeroContrato}.pdf`);
};
