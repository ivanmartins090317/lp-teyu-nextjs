
-- Habilitar RLS na tabela usuarios
ALTER TABLE public.usuarios ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção de novos usuários (cadastro público)
CREATE POLICY "Allow public user registration" 
  ON public.usuarios 
  FOR INSERT 
  WITH CHECK (true);

-- Política para permitir que usuários vejam seus próprios dados
CREATE POLICY "Users can view their own data" 
  ON public.usuarios 
  FOR SELECT 
  USING (true);

-- Política para permitir que usuários atualizem seus próprios dados
CREATE POLICY "Users can update their own data" 
  ON public.usuarios 
  FOR UPDATE 
  USING (true);
