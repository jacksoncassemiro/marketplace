// app/context/AuthContext.tsx
"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { createClient } from "@/utils/supabase/client";

type User = {
  id: string;
  email: string;
};

interface AuthContextType {
  user: User | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);

  const getUserProfile = async () => {
    const { data } = await supabase.auth.getUser();
    if (data.user) setUser({ id: data.user.id, email: data.user.email! });
    console.log("data", data);
  };
  
  useEffect(() => {

    getUserProfile();
    console.log("rodou o context");

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      getUserProfile();
      console.log("event", event);
      console.log("session", session);
      if (event === 'INITIAL_SESSION') {
        console.log("INITIAL_SESSION");
      } else if (event === 'SIGNED_IN') {
        console.log("SIGNED_IN");
      } else if (event === 'SIGNED_OUT') {
        console.log("SIGNED_OUT");
      } else if (event === 'PASSWORD_RECOVERY') {
        console.log("PASSWORD_RECOVERY");
      } else if (event === 'TOKEN_REFRESHED') {
        console.log("TOKEN_REFRESHED");
      } else if (event === 'USER_UPDATED') {
        console.log("USER_UPDATED");
      }
    });

    return () => authListener?.subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth deve ser usado dentro de um AuthProvider.');
  return context;
};