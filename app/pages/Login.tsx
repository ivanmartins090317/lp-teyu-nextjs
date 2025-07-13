"use client";

import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {useAuth} from "../_contexts/AuthContext";
import {Button} from "../_components/ui/button";
import {Input} from "../_components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "../_components/ui/card";
import {Label} from "../_components/ui/label";
import {useToast} from "../_hooks/use-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {login} = useAuth();
  const router = useRouter();
  const {toast} = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const success = login(username, password);
      if (success) {
        toast({
          title: "Login realizado com sucesso",
          description: "Redirecionando para a página de contratos..."
        });
        router.push("/contracts");
      } else {
        toast({
          title: "Erro no login",
          description: "Usuário ou senha incorretos. Tente novamente.",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Entre com suas credenciais para acessar os contratos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Usuário</Label>
              <Input
                id="username"
                type="text"
                placeholder="Digite seu usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>Credenciais padrão:</p>
            <p>
              Usuário: <code className="bg-gray-100 px-1 rounded">teyu</code>
            </p>
            <p>
              Senha: <code className="bg-gray-100 px-1 rounded">teyu0000</code>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
