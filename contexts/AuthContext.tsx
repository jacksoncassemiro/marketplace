'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useTransition } from 'react';
import { createClient } from "@/utils/supabase/client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { actionSignOut } from '@/app/(paginas-de-autenticacao)/authUtils';

type User = {
  id: string;
  email: string;
};

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
}

interface AuthProps {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider ({ children }: { children: ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
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

      if(user && user.user_metadata?.is_redefinindo_senha) {
        await supabase.auth.updateUser({ data: { is_redefinindo_senha: false } });
        await actionSignOut();
      };

      setUser(null);
    });
  };

  useEffect(() => {
    const redirect = searchParams.get("redirect");
    if(redirect === "auth") {
      router.replace(pathname); 
      getUserProfile();
    };
  }, [searchParams]);

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