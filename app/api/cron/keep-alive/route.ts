import {NextResponse} from "next/server";
import {supabase} from "@/app/_integrations/supabase/client";

/**
 * API Route para manter o Supabase ativo
 * Executada automaticamente a cada 3 dias pelo Vercel Cron
 * Faz uma query simples para evitar que o projeto seja pausado
 */
export async function GET(request: Request) {
  try {
    // Verificar autorização (apenas o cron da Vercel pode chamar)
    const authHeader = request.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;

    // Se o CRON_SECRET estiver configurado, validar
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }

    // Fazer uma query simples para manter o Supabase ativo
    const {data, error} = await supabase.from("usuarios").select("id").limit(1);

    if (error) {
      console.error("❌ [Keep-Alive] Erro ao consultar Supabase:", error);
      return NextResponse.json(
        {
          success: false,
          error: error.message,
          timestamp: new Date().toISOString()
        },
        {status: 500}
      );
    }

    console.log("✅ [Keep-Alive] Supabase está ativo! Query executada com sucesso.");

    return NextResponse.json({
      success: true,
      message: "Supabase keep-alive executado com sucesso",
      timestamp: new Date().toISOString(),
      recordsFound: data?.length || 0
    });
  } catch (err) {
    console.error("❌ [Keep-Alive] Erro inesperado:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Erro inesperado ao executar keep-alive",
        timestamp: new Date().toISOString()
      },
      {status: 500}
    );
  }
}
