import React from "react";
import {Button} from "../shared/ui/button";
import {Download} from "lucide-react";
import {downloadContractPDF} from "../../_utils/contractPDF";
import {ContractData} from "../../_utils/contractTemplate";

interface ContractDownloadButtonProps {
  contractData: ContractData;
}

const ContractDownloadButton = ({contractData}: ContractDownloadButtonProps) => {
  const handleDownload = () => {
    downloadContractPDF(contractData);
  };

  return (
    <Button
      onClick={handleDownload}
      className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-source font-bold text-base flex items-center gap-2"
    >
      <Download size={20} />
      Baixar Contrato em PDF
    </Button>
  );
};

export default ContractDownloadButton;
