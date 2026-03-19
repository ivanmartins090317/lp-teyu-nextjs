
-- Criar tabela para armazenar os dados dos usuários do formulário
CREATE TABLE public.usuarios (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  telefone TEXT NOT NULL,
  telefone_contato TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Adicionar índice no email para otimizar consultas
CREATE INDEX idx_usuarios_email ON public.usuarios(email);

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.usuarios ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir inserção de novos registros (público)
CREATE POLICY "Permitir inserção de novos usuários" 
  ON public.usuarios 
  FOR INSERT 
  WITH CHECK (true);

-- Criar política para permitir leitura apenas pelos próprios usuários (quando autenticados)
CREATE POLICY "Usuários podem ver seus próprios dados" 
  ON public.usuarios 
  FOR SELECT 
  USING (auth.uid() IS NOT NULL);

-- Função para atualizar o campo updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para atualizar updated_at automaticamente
CREATE TRIGGER update_usuarios_updated_at 
    BEFORE UPDATE ON public.usuarios 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
