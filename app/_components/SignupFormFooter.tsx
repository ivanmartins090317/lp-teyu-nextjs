import React from "react";
import {Button} from "../_components/ui/button";

interface SignupFormFooterProps {
  isLoading: boolean;
}

const SignupFormFooter = ({isLoading}: SignupFormFooterProps) => {
  return (
    <>
      <div className="pt-4">
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-10 bg-[#323232] hover:bg-gold-600 text-white font-source font-bold text-base disabled:opacity-50"
        >
          {isLoading ? "Criando Contrato..." : "Cadastrar e Gerar Contrato"}
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
