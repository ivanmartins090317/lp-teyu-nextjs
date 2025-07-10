
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContractEmailRequest {
  userId: string;
  userEmail: string;
  userName: string;
  contractNumber: string;
  contractText: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
    
    const { userId, userEmail, userName, contractNumber, contractText }: ContractEmailRequest = await req.json();

    console.log('Enviando contrato por email para:', userEmail);

    // Gerar HTML do contrato para email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #333; text-align: center;">Seu Contrato foi Gerado!</h1>
        
        <p>Olá <strong>${userName}</strong>,</p>
        
        <p>Seu contrato foi gerado com sucesso! Segue abaixo os detalhes:</p>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Número do Contrato: ${contractNumber}</h3>
        </div>
        
        <div style="background: #fff; border: 1px solid #ddd; padding: 20px; border-radius: 8px; white-space: pre-line; font-family: monospace; font-size: 12px;">
          ${contractText}
        </div>
        
        <p style="margin-top: 30px;">
          <strong>Importante:</strong> Guarde este contrato em local seguro. Em caso de dúvidas, entre em contato conosco.
        </p>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        
        <p style="font-size: 12px; color: #666; text-align: center;">
          Este é um email automático. Para dúvidas, entre em contato conosco.
        </p>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "moderndeveloper9@gmail.com",
      to: [userEmail],
      subject: `Contrato ${contractNumber} - Confirmação de Cadastro`,
      html: htmlContent,
    });

    console.log("Email enviado com sucesso:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true,
      emailId: emailResponse.data?.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Erro ao enviar email do contrato:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
