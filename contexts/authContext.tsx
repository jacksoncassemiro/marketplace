'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useTransition } from 'react';
import { createClient } from "@/utils/supabase/client";
import { useSearchParams } from 'next/navigation';

export type User = {
  id: string;
  email: string;
};

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider ({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [isPending, startTransition] = useTransition();

  const getUserProfile = () => {
    startTransition( async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if(user && !user.user_metadata?.is_redefinindo_senha) {
        const { id, email } = user;
        setUser({ id, email: email! });
        return;
      };

      setUser(null);
    });
  };

  useEffect(() => {
    if(searchParams.has("redirect")) {
      getUserProfile();
    };
  }, [searchParams.toString()]);

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      isLoading: isPending,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth deve ser usado dentro de um AuthProvider.');
  return context;
};