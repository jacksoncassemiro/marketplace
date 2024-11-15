'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { createClient } from "@/utils/supabase/client";
import { useRouter } from 'next/navigation';
import { getOrigin } from "@/utils/getOrigin";

type User = {
  id: string;
  email: string;
};

interface AuthContextType {
  user: User | null;
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
  const [user, setUser] = useState<User | null>(null);
  const origin = getOrigin();

  const getProfile = () => {
    console.log(user);
  };

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
      setUser((prevUser) => {
        const sessionUser = session?.user ?? null;

        if (event === "SIGNED_IN" && sessionUser?.id !== prevUser?.id) {
          console.log("signed in");
          return { id: sessionUser?.id!, email: sessionUser?.email! };
        } else if (event === "SIGNED_OUT") {
          console.log("signed out");
          return null;
        }
        return prevUser;
      });
    })

    return () => {
      subscription.unsubscribe()
    }
  }, []);

  useEffect(() => {
    getProfile();
  },[user])

  return (
    <AuthContext.Provider value={{
      user,
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