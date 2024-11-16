'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { createClient } from "@/utils/supabase/client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type User = {
  id: string;
  email: string;
};

interface AuthContextType {
  user: User | null;
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

  const getUserProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    console.log(user);
    if(user) {
      const { id, email } = user;
      setUser({ id, email: email! });
      return;
    };

    setUser(null);
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