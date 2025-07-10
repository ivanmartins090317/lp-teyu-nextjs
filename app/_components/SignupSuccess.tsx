import React from "react";
import {CheckCircle} from "lucide-react";
import {ContractData} from "../_utils/contractTemplate";
import ContractDownloadButton from "./ContractDownloadButton";

interface SignupSuccessProps {
  contractData: ContractData;
  onClose: () => void;
}

const SignupSuccess = ({contractData, onClose}: SignupSuccessProps) => {
  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <CheckCircle className="w-16 h-16 text-green-600" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-open-sans font-bold text-primary">
          Cadastro Realizado com Sucesso!
        </h2>
        <p className="text-neutral-600 font-source">
          Seu contrato foi gerado com o número:{" "}
          <span className="font-bold">{contractData.numeroContrato}</span>
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-neutral-700 mb-4 font-source">
          Clique no botão abaixo para baixar seu contrato em PDF:
        </p>
        <ContractDownloadButton contractData={contractData} />
      </div>

      <div className="space-y-3">
        <p className="text-xs text-neutral-500 font-source">
          Guarde seu contrato em local seguro. Em caso de dúvidas, entre em contato
          conosco.
        </p>

        <button
          onClick={onClose}
          className="text-primary hover:underline text-sm font-source"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default SignupSuccess;
