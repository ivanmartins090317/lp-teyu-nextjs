import React from "react";
import {Button} from "../../shared/ui/button";

interface SignupFormFooterProps {
  isLoading: boolean;
  emailExists?: boolean;
}

const SignupFormFooter = ({isLoading, emailExists = false}: SignupFormFooterProps) => {
  return (
    <>
      <div className="pt-4">
        <Button
          type="submit"
          disabled={isLoading || emailExists}
          className={`w-full h-10 font-source font-bold text-base disabled:opacity-50 ${
            emailExists
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#323232] hover:bg-gold-600 text-white"
          }`}
        >
          {isLoading
            ? "Criando Contrato..."
            : emailExists
            ? "Email já cadastrado - Entre em contato"
            : "Cadastrar e Gerar Contrato"}
        </Button>
      </div>

      <p className="text-xs text-neutral-500 text-center font-source">
        Ao se cadastrar, você concorda com nossos termos de uso e política de privacidade.
        Um contrato será gerado automaticamente para download em PDF.
      </p>
    </>
  );
};

export default SignupFormFooter;
