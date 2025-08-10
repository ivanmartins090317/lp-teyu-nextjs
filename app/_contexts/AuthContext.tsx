"use client";

import React, {createContext, useContext, useState, useEffect} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Credenciais padrão (deve ser mudado mais tarde)
  const DEFAULT_USERNAME = "teyu";
  const DEFAULT_PASSWORD = "teyu0000";

  useEffect(() => {
    // Verificar se o usuário já está logado (usando localStorage)
    // Só acessa localStorage no lado do cliente
    if (typeof window !== "undefined") {
      const authStatus = localStorage.getItem("isAuthenticated");
      if (authStatus === "true") {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
      setIsAuthenticated(true);
      if (typeof window !== "undefined") {
        localStorage.setItem("isAuthenticated", "true");
        // Também definir um cookie para maior segurança
        document.cookie = "isAuthenticated=true; path=/; max-age=86400"; // 24 horas
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("isAuthenticated");
      // Remover cookie também
      document.cookie = "isAuthenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  };

  return (
    <AuthContext.Provider value={{isAuthenticated, isLoading, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
