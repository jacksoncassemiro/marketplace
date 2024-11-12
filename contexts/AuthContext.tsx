'use client';

import { createContext, useContext, useEffect, useState, ReactNode, FC } from 'react';
import { createClient } from "@/utils/supabase/client";
import { useDisclosure } from '@mantine/hooks';

type User = {
  id: string;
  email: string;
};

interface AuthContextType {
  user: User | null;
  openedBurger: boolean;
  toggleBurger: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider ({ children }: { children: ReactNode }) {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [opened, { toggle }] = useDisclosure();

  const getUserProfile = async () => {
    const { data } = await supabase.auth.getUser();
    if (data.user) setUser({ id: data.user.id, email: data.user.email! });
    console.log("data", data);
  };

  useEffect(() => {
    getUserProfile();
    console.log("rodou o context");
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      openedBurger: opened,
      toggleBurger: toggle,
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