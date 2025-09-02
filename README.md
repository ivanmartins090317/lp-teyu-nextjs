# 🏄‍♂️ Teyu - Landing Page & Sistema de Contratos

> **"Mais tempo no mar, menos preocupação com a prancha"**

Uma plataforma completa para surfistas gerenciarem suas pranchas, contratos de seguro e acompanharem condições do mar, desenvolvida com Next.js 15 e Supabase.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Configuração](#configuração)
- [Desenvolvimento](#desenvolvimento)
- [Deploy](#deploy)
- [Contribuição](#contribuição)

## 🎯 Sobre o Projeto

O **Teyu** é uma solução completa para surfistas que desejam:

- Gerenciar contratos de seguro para suas pranchas
- Acompanhar previsões do mar em tempo real
- Ter uma experiência digital integrada para suas necessidades de surfe

O projeto combina uma landing page atrativa com funcionalidades práticas para o dia a dia do surfista.

## ✨ Funcionalidades

### 🏠 Landing Page

- **Hero Section**: Apresentação da marca com call-to-action
- **Sobre Nós**: Informações sobre a empresa e valores
- **Serviços**: Visão geral dos serviços oferecidos
- **Como Funciona**: Explicação do processo de contratação
- **Depoimentos**: Testimonials de clientes satisfeitos
- **Formulário de Cadastro**: Modal para captura de leads

### 📄 Sistema de Contratos

- **Gestão de Contratos**: CRUD completo para contratos
- **Autenticação**: Sistema de login protegido
- **Download de PDFs**: Geração automática de contratos
- **Dashboard**: Visualização organizada dos contratos

### 🌊 Previsão do Mar

- **Surf Report**: Integração com Surfguru para previsões
- **Tempo Real**: Dados meteorológicos atualizados
- **Interface Responsiva**: Acesso em qualquer dispositivo

## 🛠️ Tecnologias

### Frontend

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework de estilos
- **Framer Motion** - Animações e transições
- **Radix UI** - Componentes acessíveis

### Backend & Banco de Dados

- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - Banco de dados relacional
- **Edge Functions** - Funções serverless

### Ferramentas de Desenvolvimento

- **ESLint** - Linting de código
- **PostCSS** - Processamento de CSS
- **Lucide React** - Ícones vetoriais

## 📁 Estrutura do Projeto

```
lp-teyu-nextjs/
├── app/                          # App Router do Next.js
│   ├── _components/             # Componentes reutilizáveis
│   │   ├── contracts/          # Componentes de contratos
│   │   ├── landing/            # Componentes da landing page
│   │   ├── shared/             # Componentes compartilhados
│   │   └── ui/                 # Biblioteca de componentes UI
│   ├── _contexts/              # Contextos React (Auth)
│   ├── _hooks/                 # Hooks customizados
│   ├── _integrations/          # Integrações externas
│   ├── _lib/                   # Utilitários e configurações
│   ├── _utils/                 # Funções utilitárias
│   ├── contracts/              # Página de contratos
│   ├── forecast/               # Página de previsão do mar
│   └── login/                  # Página de autenticação
├── supabase/                    # Configurações do Supabase
│   ├── functions/              # Edge Functions
│   └── migrations/             # Migrações do banco
├── public/                      # Arquivos estáticos
└── docs/                       # Documentação técnica
```

## ⚙️ Configuração

### Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm
- Conta no Supabase

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd lp-teyu-nextjs
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
SUPABASE_SERVICE_ROLE_KEY=sua_chave_de_servico
```

### 4. Configure o Supabase

```bash
# Instale o CLI do Supabase
npm install -g supabase

# Faça login
supabase login

# Inicie o projeto local (opcional)
supabase start

# Aplique as migrações
supabase db push
```

## 🚀 Desenvolvimento

### Scripts disponíveis

```bash
# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm run start

# Linting
npm run lint
```

### Estrutura de desenvolvimento

O projeto segue as melhores práticas do Next.js 15:

- **App Router**: Estrutura de pastas para roteamento
- **Server Components**: Componentes renderizados no servidor por padrão
- **Client Components**: Marcados com `"use client"` quando necessário
- **TypeScript**: Tipagem completa para melhor DX
- **Tailwind CSS**: Sistema de design responsivo

### Padrões de código

- Componentes funcionais com hooks
- Props tipadas com TypeScript
- CSS-in-JS com Tailwind CSS
- Estrutura de pastas por domínio
- Componentes reutilizáveis na pasta `ui/`

## 🌐 Deploy

### Vercel (Recomendado)

```bash
# Instale o Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Outras plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contribuição

### 1. Fork o projeto

### 2. Crie uma branch para sua feature

```bash
git checkout -b feature/nova-funcionalidade
```

### 3. Commit suas mudanças

```bash
git commit -m 'feat: adiciona nova funcionalidade'
```

### 4. Push para a branch

```bash
git push origin feature/nova-funcionalidade
```

### 5. Abra um Pull Request

### Convenções de commit

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação de código
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Tarefas de manutenção

## 📚 Documentação Adicional

- [Documentação Técnica](./docs/documentacao-tecnica.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 Licença

Este projeto é privado e proprietário da Teyu.

## 🆘 Suporte

Para dúvidas técnicas ou problemas:

- Abra uma issue no repositório
- Entre em contato com a equipe de desenvolvimento
- Consulte a documentação técnica

---

**Desenvolvido com ❤️ pela equipe Teyu**
