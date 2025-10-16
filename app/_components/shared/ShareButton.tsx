// app/_components/shared/ShareButton.tsx
"use client";

import {Button} from "./ui/button";
import {Share2} from "lucide-react";

export function ShareButton({children}: {children?: string}) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Teyu Guardaria",
          text: "🏄‍♂️ Viva a experiência completa do surfe",
          url: "https://www.teyuguardaria.com"
        });
      } catch (error) {
        console.log("Erro ao compartilhar:", error);
      }
    } else {
      // Fallback: copiar URL para clipboard
      navigator.clipboard.writeText("https://www.teyuguardaria.com");
      alert("Link copiado para a área de transferência!");
    }
  };

  return (
    <Button
      onClick={handleShare}
      variant="outline"
      size="sm"
      className="gap-2 text-[#6a5c27] hover:shadow-lg shadow-[#6a5c27] transition duration-700 font-source font-medium text-sm xl:text-base relative group"
    >
      <Share2 size={16} />
      {children}
    </Button>
  );
}
