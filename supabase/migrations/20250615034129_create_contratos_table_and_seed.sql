
-- Criar tabela para contratos de serviço
CREATE TABLE public.contratos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  usuario_id UUID NOT NULL REFERENCES public.usuarios(id) ON DELETE CASCADE,
  numero_contrato TEXT NOT NULL UNIQUE,
  tipo_servico TEXT NOT NULL,
  descricao_servico TEXT NOT NULL,
  valor_servico DECIMAL(10,2) NOT NULL,
  data_inicio DATE NOT NULL,
  data_fim DATE,
  status TEXT NOT NULL DEFAULT 'ativo' CHECK (status IN ('ativo', 'concluido', 'cancelado')),
  observacoes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Adicionar índices para otimizar consultas
CREATE INDEX idx_contratos_usuario_id ON public.contratos(usuario_id);
CREATE INDEX idx_contratos_numero ON public.contratos(numero_contrato);
CREATE INDEX idx_contratos_status ON public.contratos(status);

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.contratos ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção de contratos (público para facilitar criação)
CREATE POLICY "Permitir inserção de contratos" 
  ON public.contratos 
  FOR INSERT 
  WITH CHECK (true);

-- Política para permitir leitura de contratos
CREATE POLICY "Permitir leitura de contratos" 
  ON public.contratos 
  FOR SELECT 
  USING (true);

-- Política para permitir atualização de contratos
CREATE POLICY "Permitir atualização de contratos" 
  ON public.contratos 
  FOR UPDATE 
  USING (true);

-- Trigger para atualizar updated_at automaticamente nos contratos
CREATE TRIGGER update_contratos_updated_at 
    BEFORE UPDATE ON public.contratos 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Inserir alguns contratos fictícios de exemplo
INSERT INTO public.contratos (
  usuario_id, 
  numero_contrato, 
  tipo_servico, 
  descricao_servico, 
  valor_servico, 
  data_inicio, 
  data_fim, 
  status, 
  observacoes
) 
SELECT 
  u.id,
  'CONT-' || LPAD((row_number() OVER ())::text, 4, '0'),
  CASE 
    WHEN random() < 0.3 THEN 'Consultoria Empresarial'
    WHEN random() < 0.6 THEN 'Desenvolvimento de Software'
    ELSE 'Suporte Técnico'
  END,
  CASE 
    WHEN random() < 0.3 THEN 'Consultoria estratégica para melhoria de processos empresariais'
    WHEN random() < 0.6 THEN 'Desenvolvimento de sistema web personalizado'
    ELSE 'Suporte técnico 24/7 para infraestrutura de TI'
  END,
  (random() * 50000 + 5000)::decimal(10,2),
  CURRENT_DATE - (random() * 30)::integer,
  CURRENT_DATE + (random() * 365)::integer,
  CASE 
    WHEN random() < 0.7 THEN 'ativo'
    WHEN random() < 0.9 THEN 'concluido'
    ELSE 'cancelado'
  END,
  'Contrato gerado automaticamente para demonstração'
FROM public.usuarios u
LIMIT 5;
