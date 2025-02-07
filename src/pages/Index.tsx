
import { LoginForm } from "@/components/LoginForm";
import { Dashboard } from "@/components/Dashboard";
import { useState } from "react";

const Index = () => {
  const [isAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-designer-bg">
      {!isAuthenticated ? (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-designer-bg to-black/90">
          <div className="w-full max-w-md space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-white">
                Designer Portal
              </h1>
              <p className="text-designer-muted">
                Sign in to manage your design projects
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Index;
