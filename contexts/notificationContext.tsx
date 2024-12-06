'use client';

import { createContext, useContext, useEffect, ReactNode } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MessageType } from '@/types/message';

interface ShowMessageProps {
  type: MessageType;
  message: string;
}

interface NotificationContextType {
  showMessage: (params: ShowMessageProps) => void;
  redefinePathName: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider ({ children }: { children: ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const redefinePathName = () => {
    router.replace(pathname); 
  }

  const showMessage = ({
    type,
    message,
  }: ShowMessageProps) => {
    
  };

  const getTypeAndMessageParams = () => {
    
  };

  useEffect(() => {
    getTypeAndMessageParams();
  }, [searchParams]);

  return (
    <NotificationContext.Provider value={{
      showMessage,
      redefinePathName,
    }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('useNotification deve ser usado dentro de um NotificationProvider.');
  return context;
};