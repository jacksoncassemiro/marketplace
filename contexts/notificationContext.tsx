'use client';

import { TypesMessageType } from '@/types/utils/encodeRedirect';
import { typesMessage } from '@/utils/defaultObjects';
import { Notifications } from '@mantine/notifications';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { createContext, ReactNode, useContext, useEffect } from 'react';

interface ShowMessageProps {
  type: TypesMessageType;
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
    const listKey = searchParams.keys().toArray() as TypesMessageType[];
    const listValues = searchParams.values().toArray() as string[];
    
    listKey.map((key: TypesMessageType, index: number) => {
      if(typesMessage.includes(key)) {
        showMessage({
          type: key,
          message: listValues[index],
        })
      }
    })
  };

  useEffect(() => {
    getTypeAndMessageParams();
  }, [searchParams]);

  return (
    <NotificationContext.Provider value={{
      showMessage,
      redefinePathName,
    }}>
      <Notifications />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('useNotification deve ser usado dentro de um NotificationProvider.');
  return context;
};