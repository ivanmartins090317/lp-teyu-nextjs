# 🔄 Configuração Supabase Keep-Alive

## 📋 O que foi implementado?

Uma solução **automática e gratuita** para evitar que o projeto Supabase seja pausado por inatividade (após 7 dias sem uso).

## 🎯 Como funciona?

1. **API Route**: `/api/cron/keep-alive/route.ts` faz uma query simples ao Supabase
2. **Vercel Cron Job**: Configurado em `vercel.json` para executar a cada **3 dias**
3. **Resultado**: O Supabase permanece ativo indefinidamente, sem custos adicionais

## ⚙️ Configuração na Vercel

### Passo 1: Deploy Automático

Após fazer o push das alterações, a Vercel automaticamente detectará o `vercel.json` e configurará o cron job.

### Passo 2: Configurar Secret (Opcional, mas Recomendado)

Para proteger a rota de keep-alive, adicione uma variável de ambiente na Vercel:

1. Acesse: **Vercel Dashboard** → Seu Projeto → **Settings** → **Environment Variables**

2. Adicione a variável:

   - **Name**: `CRON_SECRET`
   - **Value**: Gere uma string aleatória segura (exemplo abaixo)
   - **Environment**: Production, Preview, Development

3. **Gerar um secret seguro**:

   ```bash
   # No terminal, execute:
   openssl rand -base64 32

   # Ou no Node.js:
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```

4. **Redeploy** o projeto após adicionar a variável

### Passo 3: Verificar se está funcionando

Após o deploy, você pode testar manualmente:

1. **Acesse a URL** (substitua pelo seu domínio):

   ```
   https://seu-dominio.vercel.app/api/cron/keep-alive
   ```

2. **Com CRON_SECRET configurado**, adicione o header:

   ```bash
   curl -H "Authorization: Bearer SEU_CRON_SECRET" \
        https://seu-dominio.vercel.app/api/cron/keep-alive
   ```

3. **Resposta esperada**:
   ```json
   {
     "success": true,
     "message": "Supabase keep-alive executado com sucesso",
     "timestamp": "2025-10-24T...",
     "recordsFound": 1
   }
   ```

## 📅 Programação do Cron

**Schedule**: `0 0 */3 * *`

Isso significa:

- **A cada 3 dias**
- **Às 00:00 UTC** (21:00 horário de Brasília)

### Modificar a frequência (opcional)

Edite o campo `schedule` em `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron/keep-alive",
      "schedule": "0 0 */2 * *" // A cada 2 dias
    }
  ]
}
```

**Exemplos de schedules:**

- `0 0 */2 * *` - A cada 2 dias
- `0 12 * * *` - Todo dia ao meio-dia (UTC)
- `0 0 * * 0` - Todo domingo à meia-noite
- `0 */6 * * *` - A cada 6 horas

## 🔍 Monitoramento

### Ver logs na Vercel

1. Acesse: **Vercel Dashboard** → Seu Projeto → **Deployments**
2. Clique no deployment mais recente
3. Vá para a aba **Functions**
4. Procure por `/api/cron/keep-alive`
5. Veja os logs de execução

### Logs no Supabase

Os acessos também aparecerão no dashboard do Supabase:

1. **Supabase Dashboard** → Seu Projeto → **Database** → **Activity**
2. Você verá queries regulares da tabela `usuarios`

## ❓ Perguntas Frequentes

### O cron job tem custo?

**Não!** Os cron jobs da Vercel são **gratuitos** para todos os planos, incluindo o plano Hobby (gratuito).

### Quantas execuções por mês?

Com a configuração padrão (a cada 3 dias):

- **~10 execuções por mês**
- Bem dentro do limite do plano gratuito da Vercel

### E se o projeto Supabase já estiver pausado?

A primeira execução do cron irá **reativar automaticamente** o projeto. O Supabase leva ~1-2 minutos para "acordar" na primeira query.

### Posso desativar temporariamente?

Sim! Para desativar:

**Opção 1: Remover o cron**

- Delete ou comente o conteúdo de `vercel.json`
- Faça novo deploy

**Opção 2: Desativar no Vercel**

- Vercel Dashboard → Settings → Crons → Pause

### Como testar localmente?

```bash
# Com servidor local rodando
npm run dev

# Em outro terminal
curl http://localhost:3000/api/cron/keep-alive
```

## 🎉 Benefícios

✅ **100% Automático** - Não precisa se preocupar mais
✅ **100% Gratuito** - Sem custos adicionais
✅ **Confiável** - Infraestrutura da Vercel
✅ **Simples** - 2 arquivos, zero manutenção
✅ **Seguro** - Opcional: protegido por secret

## 🛠️ Troubleshooting

### Cron não está executando

1. Verifique se o `vercel.json` está na **raiz do projeto**
2. Faça um novo **deploy** após adicionar o arquivo
3. Verifique os **logs** na Vercel

### Erro 401 Unauthorized

- Verifique se o `CRON_SECRET` está configurado corretamente
- Ou remova a validação do secret no código

### Projeto Supabase ainda pausou

- Verifique se o cron está sendo executado nos logs da Vercel
- Teste manualmente a rota `/api/cron/keep-alive`
- Considere reduzir a frequência para 2 dias

## 📚 Referências

- [Vercel Cron Jobs Documentation](https://vercel.com/docs/cron-jobs)
- [Supabase Pricing - Pausing](https://supabase.com/docs/guides/platform/pause-project)
- [Next.js Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

---

**Documentação criada em:** 24/10/2025  
**Última atualização:** 24/10/2025
