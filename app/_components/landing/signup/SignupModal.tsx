import React, {useState} from "react";
import {useSignupForm} from "../../../_hooks/useSignupForm";
import {ContractData} from "../../../_utils/contractTemplate";
import SignupFormFields from "./SignupFormFields";
import SignupFormFooter from "./SignupFormFooter";
import SignupSuccess from "./SignupSuccess";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal = ({isOpen, onClose}: SignupModalProps) => {
  console.log("SignupModal renderizado com isOpen:", isOpen);

  const [showSuccess, setShowSuccess] = useState(false);
  const [contractData, setContractData] = useState<ContractData | null>(null);
  const [emailStatus, setEmailStatus] = useState<
    "idle" | "checking" | "exists" | "available"
  >("idle");

  const handleSuccess = (data: ContractData) => {
    setContractData(data);
    setShowSuccess(true);
  };

  const handleClose = () => {
    console.log("SignupModal handleClose chamado");
    setShowSuccess(false);
    setContractData(null);
    setEmailStatus("idle");
    onClose();
  };

  const {formData, isLoading, handleInputChange, handleSubmit} =
    useSignupForm(handleSuccess);

  return (
    <>
      {/* Modal temporário para teste */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50" onClick={handleClose} />

          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[85vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-primary">
                  {showSuccess ? "Sucesso!" : "Criar Minha Conta Grátis"}
                </h2>
                <button
                  onClick={handleClose}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {showSuccess && contractData ? (
                <SignupSuccess contractData={contractData} onClose={handleClose} />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <SignupFormFields
                    formData={formData}
                    isLoading={isLoading}
                    onInputChange={handleInputChange}
                    onEmailStatusChange={setEmailStatus}
                  />
                  <SignupFormFooter
                    isLoading={isLoading}
                    emailExists={emailStatus === "exists"}
                  />
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupModal;
