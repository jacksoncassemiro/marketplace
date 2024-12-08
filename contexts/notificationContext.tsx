'use client';

import { TypesMessageType } from '@/types/utils/encodeRedirect';
import { typesMessage } from '@/utils/defaultObjects';
import { Notifications, NotificationData } from '@mantine/notifications';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { createContext, ReactNode, useContext, useEffect } from 'react';

interface ShowMessageProps {
  type: TypesMessageType;
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

  const clearNotificationParams = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    typesMessage.forEach((key) => newSearchParams.delete(key));
    router.replace(`${pathname}?${newSearchParams.toString()}`);
  };

  const showMessage = ({
    type,
    message,
  }: ShowMessageProps) => {
    clearNotificationParams();
    if(!message) return;

    const config: NotificationData = {
      message,
      color: "gray",
      radius: "md",
      withBorder: true,
      position: "top-center",
    }

    switch (type) {
      case "success":
        config.color = "green";
        break;
      case "error":
        config.color = "red";
        break;
      case "warning":
        config.color = "yellow";
        break;
      case "info":
        config.color = "blue";
        break;
    }

    Notifications.show(config);
  };

  const getTypeAndMessageParams = () => {
    const listKey = Array.from(searchParams.keys()) as TypesMessageType[];
    const listValues = Array.from(searchParams.values()) as string[];

    listKey.forEach((key: TypesMessageType, index: number) => {
      if (typesMessage.includes(key)) {
        showMessage({
          type: key,
          message: listValues[index],
        });
      }
    });  
  };

  useEffect(() => {
    getTypeAndMessageParams();
  }, [searchParams.toString()]);

  return (
    <NotificationContext.Provider value={{
      showMessage,
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