import jsPDF from "jspdf";
import {ContractData, generateContract} from "./contractTemplate";

export const generateContractPDF = (data: ContractData): jsPDF => {
  const doc = new jsPDF();

  const pageHeight = doc.internal.pageSize.height;
  const margin = 16;
  const lineHeight = 6;
  const maxWidth = doc.internal.pageSize.width - margin * 2;
  let currentY = 20;

  function checkPageBreak(requiredSpace: number = lineHeight): void {
    if (currentY + requiredSpace > pageHeight - margin) {
      doc.addPage();
      currentY = 20;
    }
  }

  const contractText = generateContract(data);
  const lines = contractText.split("\n");

  lines.forEach((rawLine) => {
    const line = rawLine.trimEnd();
    if (!line.trim()) {
      currentY += lineHeight * 0.5;
      return;
    }

    const isTitle = line === "CONTRATO DE GUARDA DE PRANCHA DE SURF";
    const isSectionHeader = /^[0-9]+\./.test(line) || line.endsWith(":");
    doc.setFont("helvetica", isTitle || isSectionHeader ? "bold" : "normal");
    doc.setFontSize(isTitle ? 13 : 10);

    const wrappedLines = doc.splitTextToSize(line, maxWidth) as string[];
    wrappedLines.forEach((wrappedLine) => {
      checkPageBreak(lineHeight);
      doc.text(wrappedLine, margin, currentY);
      currentY += lineHeight;
    });
  });

  return doc;
};

export const downloadContractPDF = (data: ContractData) => {
  const doc = generateContractPDF(data);
  doc.save(`Contrato_${data.numeroContrato}.pdf`);
};
