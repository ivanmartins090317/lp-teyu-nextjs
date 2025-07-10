import React from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../_contexts/AuthContext";
import {Button} from "../_components/ui/button";
import {LogOut} from "lucide-react";
import {useToast} from "../_hooks/use-toast";

const LogoutButton = () => {
  const {logout} = useAuth();
  const navigate = useNavigate();
  const {toast} = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso."
    });
    navigate("/");
  };

  return (
    <Button onClick={handleLogout} variant="outline" size="sm" className="ml-4">
      <LogOut className="w-4 h-4 mr-2" />
      Sair
    </Button>
  );
};

export default LogoutButton;
