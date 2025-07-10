# Documentação Técnica do Projeto

## Visão Geral

Este projeto é uma plataforma web para gestão e geração de contratos digitais, com cadastro de usuários, autenticação, gerenciamento de contratos e geração de PDFs personalizados. O objetivo é simplificar o processo de contratação de serviços, centralizando informações e automatizando a documentação.

## Tecnologias Utilizadas

- **Next.js**: Bundler moderno para aplicações web.
- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **Tailwind CSS**: Framework utilitário para estilização.
- **shadcn-ui**: Biblioteca de componentes UI acessíveis e customizáveis.
- **Supabase**: Backend as a Service (BaaS) para banco de dados, autenticação e funções serverless.
- **React Router DOM**: Gerenciamento de rotas SPA.
- **React Query**: Gerenciamento de cache e requisições assíncronas.
- **JSPDF**: Geração de arquivos PDF no frontend.

## Estrutura de Pastas

## Fluxo da Aplicação

1. **Acesso Inicial**: Usuário acessa a página inicial (`/`), visualiza informações institucionais e pode se cadastrar via modal.
2. **Cadastro**: O usuário preenche o formulário, os dados são validados e salvos no Supabase. Um contrato personalizado é gerado e vinculado ao usuário.
3. **Login**: Usuário acessa `/login` e autentica com credenciais. O estado de autenticação é gerenciado via Context API e localStorage.
4. **Área de Contratos**: Após login, o usuário acessa `/contracts`, onde pode:
   - Visualizar contratos próprios e de outros usuários.
   - Gerar, editar ou excluir contratos (dependendo do perfil).
   - Baixar contratos em PDF.
5. **Gerenciamento**: Usuários com permissão podem criar novos contratos, editar existentes e gerenciar usuários.
6. **Geração de PDF**: O contrato pode ser baixado em PDF, gerado dinamicamente com os dados do usuário.

## Instruções de Uso

### Requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```sh
git clone <REPO_URL>
cd <NOME_DO_PROJETO>
npm install
```

### Ambiente de Desenvolvimento

```sh
npm run dev
```

Acesse: http://localhost:3000

### Build para Produção

```sh
npm run build
```

### Deploy

- O deploy pode ser feito via Lovable ou hospedagem estática (Vercel, Netlify, etc.).
- Para conectar domínio personalizado, siga as instruções no painel do Lovable.

### Variáveis de Ambiente

- As credenciais do Supabase estão configuradas em `src/integrations/supabase/client.ts`.
- Para produção, recomenda-se mover as chaves para variáveis de ambiente.

## Banco de Dados (Supabase)

- **Tabelas principais**:
  - `usuarios`: Armazena dados dos usuários e contratos gerados.
  - `contratos`: Armazena contratos, status, valores e relacionamento com usuários.
- **Migrações**: Scripts SQL em `supabase/migrations`.
- **Funções**: Possível uso de edge functions em `supabase/functions`.

## Boas Práticas e Manutenção

- O código está modularizado por domínio (componentes, hooks, pages, etc.).
- Evite duplicação de lógica, reutilize hooks e componentes.
- Para novas features, siga o padrão de organização e utilize Context/Hook quando necessário.
- Testes unitários e de integração são recomendados para garantir cobertura mínima de 80%.
- Sempre crie branches descritivas e siga convenções de commit.

## Próximos Passos Sugeridos

- Implementar autenticação real via Supabase Auth.
- Adicionar testes automatizados (unitários e integração).
- Refatorar componentes grandes para manter arquivos < 300 linhas.
- Externalizar chaves sensíveis para variáveis de ambiente.
- Melhorar controle de permissões e perfis de usuário.

---

_Documentação gerada automaticamente para facilitar onboarding e manutenção._
