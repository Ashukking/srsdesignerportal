
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, accept any email/password
    toast.success("Login successful!");
    navigate("/dashboard");
  };

  return (
    <form
      onSubmit={handleLogin}
      className="w-full max-w-md space-y-6 animate-fadeIn"
    >
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 bg-white/50 backdrop-blur-sm border-gray-200"
          required
        />
      </div>
      <div className="space-y-2">
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-12 bg-white/50 backdrop-blur-sm border-gray-200"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full h-12 bg-designer-accent hover:bg-mint-dark transition-colors duration-300"
      >
        Sign In
      </Button>
    </form>
  );
};
