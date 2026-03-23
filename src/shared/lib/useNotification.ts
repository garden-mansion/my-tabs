import type { ColorPaletteProp } from '@mui/joy';
import { useState } from 'react';

export type HandleNotificationOpenType = (
  message: string,
  color: ColorPaletteProp,
) => void;

export const useNotification = () => {
  const [isNotificationShown, setIsNotificationShown] =
    useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>('');
  const [notificationColor, setNotificationColor] =
    useState<ColorPaletteProp>('success');

  const handleNotificationOpen: HandleNotificationOpenType = (
    message,
    color,
  ) => {
    setNotificationMessage(message);
    setNotificationColor(color);
    setIsNotificationShown(true);
  };

  const handleNotificationClose = () => {
    setIsNotificationShown(false);
  };

  return {
    isNotificationShown,
    notificationMessage,
    notificationColor,
    handleNotificationOpen,
    handleNotificationClose,
  };
};
