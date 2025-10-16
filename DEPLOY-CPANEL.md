# 📦 Deploy no cPanel da Hostgator

## 🌟 Visão Geral

Este projeto Next.js está configurado para funcionar em **dois ambientes**:

1. **Vercel** (SSR - Server-Side Rendering): Deploy automático com todas as otimizações
2. **cPanel** (Export Estático): Build manual para hospedagem compartilhada sem Node.js

---

## Pré-requisitos

- ✅ Acesso ao cPanel da Hostgator
- ✅ FileZilla ou outro cliente FTP (recomendado)
- ✅ Node.js instalado localmente (v18 ou superior)
- ✅ Projeto atualizado localmente (`git pull` ou download)

---

## 🚀 Passo a Passo Completo

### 📝 Etapa 1: Preparar o Build Localmente

```bash
# 1. Instale as dependências (se ainda não fez)
npm install

# 2. Gere o build estático para cPanel
npm run build:cpanel
```

**O que acontece:**

- O Next.js cria uma pasta `out/` na raiz do projeto
- Todos os arquivos HTML, CSS, JS e assets são gerados
- O arquivo `.htaccess` da pasta `public/` é copiado automaticamente

**⏱️ Tempo estimado:** 2-5 minutos (dependendo do computador)

---

### 📤 Etapa 2: Upload para o Servidor

#### ⭐ Opção A: FTP (RECOMENDADO - Mais Rápido)

1. **Baixe e instale o FileZilla:**

   - Windows: https://filezilla-project.org/download.php?type=client
   - Mac/Linux: Use o gerenciador de pacotes

2. **Configure a conexão FTP:**
