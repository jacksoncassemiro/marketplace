'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { createClient } from "@/utils/supabase/client";
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/navigation';

type User = {
  id: string;
  email: string;
};

interface AuthContextType {
  user: User | null;
  openedBurger: boolean;
  toggleBurger: () => void;
  logOut: () => void;
  logIn: ({ email, password }: AuthProps) => void;
}

interface AuthProps {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider ({ children }: { children: ReactNode }) {
  const router = useRouter()
  const supabase = createClient();
  const [origin, setOrigin] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [opened, { toggle }] = useDisclosure();

  async function logIn({ email, password }: AuthProps) {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      console.error(error)
    }
    router.push('/')
  };

  async function logOut() {
    await supabase.auth.signOut()
    router.push('/')
  };

  async function signUp({ email, password }: AuthProps) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
        data: {
          is_redefinindo_senha: false,
        },
      }
    })
    if (error) {
      console.error(error)
    }
    router.push('/')
  };

  useEffect(() => {
    const {data: { subscription }} = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        console.log('signed out');
        setUser(null);
      } else if (session) {
        console.log('signed in ', session);
        const { user } = session;
        setUser({ id: user.id, email: user.email! });
      }
    })

    const getOrigen = window.location.origin;
    setOrigin(getOrigen);

    return () => {
      subscription.unsubscribe()
    }
  }, []);


  return (
    <AuthContext.Provider value={{
      user,
      openedBurger: opened,
      toggleBurger: toggle,
      logOut,
      logIn,
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