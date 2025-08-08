# Documentação Técnica do Projeto

## Visão Geral

Este projeto é uma plataforma web para gestão e geração de contratos digitais, com cadastro de usuários, autenticação, gerenciamento de contratos e geração de PDFs personalizados. O objetivo é simplificar o processo de contratação de serviços, centralizando informações e automatizando a documentação.

## Identidade Visual da Marca

### Paleta de Cores

**Cores Primárias:**

- **#6a5c27** - Verde oliva escuro (cor principal da marca)
- **#e3b653** - Dourado/amarelo (cor de destaque)
- **#5e4e3d** - Marrom terroso (cor de fundo)

**Cores Secundárias:**

- **#71A2C1** - Azul claro (tons de água/surf)
- **#ca8454** - Laranja terroso
- **#873d4e** - Vinho/roxo escuro
- **#616160** - Cinza escuro
- **#e5dfda** - Bege claro/creme

**Estudo Cromático Completo:**

```
Paleta Principal:
• #6a5c27 - Verde oliva (marca principal)
• #e3b653 - Dourado (destaque)
• #5e4e3d - Marrom terroso (fundo)
• #e5dfda - Bege claro (texto/contraste)

Paleta Complementar:
• #71A2C1 - Azul surf
• #ca8454 - Laranja natural
• #873d4e - Vinho/roxo
• #616160 - Cinza neutro
```

### Elementos Visuais

**Logo Principal:**

- Tipografia: "TEYU" em letras maiúsculas bold
- Tagline: "Guardaria e Prancharia" / "Soul Surfers"
- Elemento gráfico: Silhueta de prancha de surf estilizada
- Aplicações: Disponível em versões para diferentes fundos (claro, escuro, colorido)

**Ícones e Símbolos:**

- Teyu (lagarto) estilizado com textura de escamas
- Elementos surf: pranchas, ondas, coqueiros
- Símbolos naturais: sol, folhas, conchas
- Texturas orgânicas: escamas, padrões naturais

**Aplicações da Marca:**

- Logotipo circular com letra "T" texturizada
- Variações para diferentes contextos (fundos diversos)
- Elementos decorativos inspirados na natureza
- Padrões geométricos com referências ao surf

**Elementos Específicos das Imagens:**

- **Texturas**: Padrões de escamas em preto e branco para backgrounds
- **Slogan**: "FIM DE SEMANA de muito sol e ondas VEM PRA TEYU"
- **Localização**: "PICO DO TEYU - CANAL 1 SANTOS"
- **Serviços**: "Segurança e flexibilidade para guardar a sua prancha"
- **Horário**: "ABERTO TODOS OS DIAS"
- **Seção Educativa**: "DA ONDE VEM O NOME TEYU?" com ilustração do animal
- **Elementos Decorativos**: Ondas, pranchas, coqueiros, sol, símbolo da paz, conchas
- **Variações do Logo**: Adaptações para diferentes fundos (verde, azul, cinza, dourado)

### Conceito Visual

A identidade visual combina elementos naturais (teyu/lagarto) com a cultura surf, utilizando cores terrosas e orgânicas que remetem ao meio ambiente natural e à praia. O design equilibra modernidade com elementos orgânicos, criando uma identidade única que conecta natureza e lifestyle surf.

### Diretrizes de Aplicação

**Hierarquia Cromática:**

1. **Cor Principal**: #6a5c27 (verde oliva) - Usada em títulos principais e elementos de destaque
2. **Cor de Destaque**: #e3b653 (dourado) - Para CTAs, links e elementos interativos
3. **Cor de Fundo**: #5e4e3d (marrom terroso) - Para seções e backgrounds
4. **Cores de Apoio**: Azul, laranja, vinho - Para variações e contextos específicos

**Contextos de Uso:**

- **Fundos Claros**: Usar cores escuras (#6a5c27, #5e4e3d) para texto e elementos
- **Fundos Escuros**: Usar cores claras (#e5dfda, #e3b653) para contraste
- **Elementos Interativos**: Priorizar #e3b653 (dourado) para botões e links
- **Texto Secundário**: Usar #616160 (cinza escuro) para informações auxiliares

**Inspiração Temática:**

- **Natureza**: Cores terrosas que remetem ao habitat natural do teyu
- **Surf**: Tons de azul e elementos aquáticos
- **Orgânico**: Texturas e padrões inspirados em escamas e elementos naturais
- **Lifestyle**: Combinação harmoniosa entre natureza e cultura surf

### Referências Visuais

**Arquivo de Referência**: As imagens fornecidas contêm:

1. **Estudo Cromático**: Círculos com códigos de cores e suas aplicações
2. **Variações de Logo**: Aplicações do logo TEYU em diferentes contextos
3. **Elementos Gráficos**: Ícones, símbolos e padrões da marca
4. **Aplicações Práticas**: Exemplos de uso em materiais promocionais
5. **Identidade Expandida**: Elementos complementares e variações temáticas

**Uso na Aplicação Web**:

- As cores definidas no estudo cromático são aplicadas nos componentes React
- O componente `AboutTeyu` utiliza as cores principais (#5e4e3d, #e3b653, #e5dfda)
- A identidade visual é mantida consistente em toda a aplicação

## Tecnologias Utilizadas

- **Next.js**: Framework React para aplicações web com SSR/SSG.
- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **Tailwind CSS**: Framework utilitário para estilização.
- **shadcn-ui**: Biblioteca de componentes UI acessíveis e customizáveis.
- **Supabase**: Backend as a Service (BaaS) para banco de dados, autenticação e funções serverless.
- **React Router DOM**: Gerenciamento de rotas SPA.
- **React Hook Form**: Gerenciamento de formulários com validação.
- **JSPDF**: Geração de arquivos PDF no frontend.
- **Framer Motion**: Biblioteca para animações e transições.
- **Radix UI**: Componentes primitivos para UI acessível.

## Estrutura de Pastas

```
lp-teyu-nextjs/
├── app/
│   ├── _components/        # Componentes reutilizáveis
│   │   └── ui/            # Componentes UI (shadcn-ui)
│   ├── _contexts/         # Context providers
│   ├── _hooks/            # Custom hooks
│   ├── _integrations/     # Integrações externas
│   ├── _lib/              # Utilitários e helpers
│   ├── _utils/            # Funções utilitárias
│   ├── contracts/         # Página de contratos
│   ├── login/             # Página de login
│   └── pages/             # Páginas da aplicação
├── docs/                  # Documentação técnica
├── public/                # Arquivos estáticos
├── supabase/             # Configurações do Supabase
└── package.json
```

## Correções Realizadas

### 📈 Correção de Importações dos Componentes UI

**Problema**: Os componentes UI estavam utilizando importações incorretas com alias `@/lib/utils` em vez de caminhos relativos.

**Solução Implementada**:

- Corrigidas **28 componentes UI** com importações incorretas
- Alteração de `@/lib/utils` para `../../_lib/utils`
- Correção de importações entre componentes UI para usar caminhos relativos (`./ `)

**Arquivos Corrigidos**:

- `tooltip.tsx`, `toggle.tsx`, `toggle-group.tsx`, `tabs.tsx`, `switch.tsx`
- `slider.tsx`, `skeleton.tsx`, `sidebar.tsx`, `sheet.tsx`, `separator.tsx`
- `scroll-area.tsx`, `resizable.tsx`, `radio-group.tsx`, `progress.tsx`
- `pagination.tsx`, `popover.tsx`, `navigation-menu.tsx`, `menubar.tsx`
- `input-otp.tsx`, `hover-card.tsx`, `form.tsx`, `dropdown-menu.tsx`
- `context-menu.tsx`, `checkbox.tsx`, `breadcrumb.tsx`, `alert.tsx`
- `toaster.tsx`, `use-toast.ts`

### 📦 Dependências Instaladas

**Dependências Radix UI**:

- `@radix-ui/react-aspect-ratio`, `@radix-ui/react-checkbox`
- `@radix-ui/react-context-menu`, `@radix-ui/react-dropdown-menu`
- `@radix-ui/react-hover-card`, `@radix-ui/react-menubar`
- `@radix-ui/react-navigation-menu`, `@radix-ui/react-popover`
- `@radix-ui/react-progress`, `@radix-ui/react-radio-group`
- `@radix-ui/react-scroll-area`, `@radix-ui/react-separator`
- `@radix-ui/react-slider`, `@radix-ui/react-switch`
- `@radix-ui/react-tabs`, `@radix-ui/react-toggle`
- `@radix-ui/react-toggle-group`, `@radix-ui/react-tooltip`

**Outras Dependências**:

- `react-hook-form` - Gerenciamento de formulários
- `input-otp` - Componente para códigos OTP
- `react-resizable-panels` - Painéis redimensionáveis
- `next-themes` - Gerenciamento de temas
- `sonner` - Notificações toast

### 🔧 Configurações do TypeScript

**Alterações no `tsconfig.json`**:

- Excluída pasta `supabase/functions` da compilação para evitar conflitos com sintaxe Deno
- Configuração: `"exclude": ["node_modules", "supabase/functions"]`

### 🎨 Correções de Estilo

**HowItWorks.tsx**:

- Corrigido conflito de classes CSS no gradiente
- Removida classe `via-orange-500` conflitante
- Gradiente atualizado: `from-blue-500 via-green-500 to-purple-500`

**layout.tsx**:

- Removida importação não utilizada `Myriad_Pro` do Google Fonts
- Mantidas apenas fontes utilizadas: `Open_Sans` e `Source_Sans_3`

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

- Node.js 18+ (recomendado: 20+)
- npm ou yarn

### Instalação

```sh
git clone <REPO_URL>
cd lp-teyu-nextjs
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

- O deploy pode ser feito via Vercel, Netlify ou outras plataformas.
- Para conectar domínio personalizado, siga as instruções da plataforma escolhida.

### Variáveis de Ambiente

- As credenciais do Supabase estão configuradas em `app/_integrations/supabase/client.ts`.
- Para produção, recomenda-se mover as chaves para variáveis de ambiente.

## Banco de Dados (Supabase)

- **Tabelas principais**:
  - `usuarios`: Armazena dados dos usuários e contratos gerados.
  - `contratos`: Armazena contratos, status, valores e relacionamento com usuários.
- **Migrações**: Scripts SQL em `supabase/migrations`.
- **Funções**: Edge functions em `supabase/functions` (excluídas da compilação TypeScript).

## Status do Projeto

### ✅ Funcionalidades Implementadas

- Sistema de autenticação com Supabase
- Componentes UI totalmente funcionais
- Geração de contratos em PDF
- Interface responsiva e animada
- Sistema de notificações

### 🔍 Verificações Realizadas

- **Build**: ✅ Compilação bem-sucedida
- **Linter**: ✅ Sem erros críticos
- **Dependências**: ✅ Todas instaladas e funcionais
- **Importações**: ✅ Caminhos corrigidos e otimizados

## Boas Práticas e Manutenção

- O código está modularizado por domínio (componentes, hooks, pages, etc.).
- Evite duplicação de lógica, reutilize hooks e componentes.
- Para novas features, siga o padrão de organização e utilize Context/Hook quando necessário.
- Testes unitários e de integração são recomendados para garantir cobertura mínima de 80%.
- Sempre crie branches descritivas e siga convenções de commit.
- Mantenha arquivos com menos de 300 linhas, refatore quando necessário.

## Próximos Passos Sugeridos

- Implementar testes automatizados (unitários e integração).
- Otimizar warnings do useEffect em `useContractsManagement.ts`.
- Refatorar componentes grandes para manter arquivos < 300 linhas.
- Externalizar chaves sensíveis para variáveis de ambiente.
- Melhorar controle de permissões e perfis de usuário.
- Considerar atualização para Node.js 20+ para eliminar warnings.

---

_Documentação atualizada em: 15/01/2025_
_Última revisão: Correção de importações e dependências dos componentes UI_
