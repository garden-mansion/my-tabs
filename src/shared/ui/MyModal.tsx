import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Modal,
  ModalDialog,
} from '@mui/joy';
import type { FC, ReactNode } from 'react';

export interface MyModalProps {
  title: ReactNode;
  content: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  actions: ReactNode;
}

export const MyModal: FC<MyModalProps> = ({
  title,
  content,
  isOpen,
  handleClose,
  actions,
}) => {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={isOpen}
      onClose={handleClose}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <ModalDialog variant="outlined" role="alertdialog">
        <DialogTitle>{title}</DialogTitle>

        <Divider />

        <DialogContent>{content}</DialogContent>

        <DialogActions>{actions}</DialogActions>
      </ModalDialog>
    </Modal>
  );
};
