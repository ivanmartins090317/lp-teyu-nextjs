
-- Adicionar coluna contrato na tabela usuarios para armazenar o texto do contrato gerado
ALTER TABLE public.usuarios ADD COLUMN contrato TEXT;

-- Adicionar coluna numero_contrato_gerado para armazenar o número do contrato gerado
ALTER TABLE public.usuarios ADD COLUMN numero_contrato_gerado TEXT;
