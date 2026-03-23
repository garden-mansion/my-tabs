import { Snackbar, type SnackbarProps } from '@mui/joy';
import { useEffect, type FC } from 'react';

interface NotificationProps extends SnackbarProps {
  open: boolean;
  duration?: number;
  message: string;
  handleClose: () => void;
  vertical?: 'top' | 'bottom';
  horizontal?: 'left' | 'center' | 'right';
}

export const Notification: FC<NotificationProps> = ({
  open,
  vertical = 'top',
  horizontal = 'center',
  message,
  handleClose,
  duration = 3333,
  variant = 'outlined',
  color = 'success',
}) => {
  useEffect(() => {
    if (!open) {
      return;
    }

    const delayedClose = setTimeout(() => handleClose(), duration);

    return () => clearTimeout(delayedClose);
  }, [open]);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical, horizontal }}
      variant={variant}
      color={color}
    >
      {message}
    </Snackbar>
  );
};
