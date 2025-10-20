"use client";

import {useCallback} from "react";

interface UseWhatsAppOption {
  phoneNumber?: string;
  defaultMessage?: string;
}

export function useWhatsApp(options: UseWhatsAppOption = {}) {
  const phoneDefaultNumber = "5513997377070";
  const defaultMessage = "Olá! Gostaria de falar com um especialista sobre os serviços.";

  const openWhatsApp = useCallback(
    (customMessage?: string) => {
      const phoneNumber = options.phoneNumber || phoneDefaultNumber;
      const message = customMessage || options.defaultMessage || defaultMessage;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
    },
    [options.phoneNumber, options.defaultMessage]
  );

  return {openWhatsApp};
}
