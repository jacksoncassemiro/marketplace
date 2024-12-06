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
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider ({ children }: { children: ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const showMessage = ({
    type,
    message,
  }: ShowMessageProps) => {
    
  };

  const getTypeAndMessageParams = () => {
    const message = searchParams.get("message");
    if (message) {
      return message;
    }
  };

  useEffect(() => {
    getTypeAndMessageParams();
  }, [searchParams]);

  return (
    <NotificationContext.Provider value={{
      showMessage,
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