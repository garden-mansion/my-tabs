import { WarningOutlined } from '@mui/icons-material';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Modal,
  ModalDialog,
  type ColorPaletteProp,
} from '@mui/joy';
import type { FC } from 'react';

interface MyModalProps {
  title: string;
  content: string;
  isOpen: boolean;
  confirmTitle: string;
  confirmColor: ColorPaletteProp;
  handleClose: () => void;
  handleConfirm: () => void;
}

export const MyModal: FC<MyModalProps> = ({
  title,
  content,
  isOpen,
  confirmTitle,
  confirmColor,
  handleClose,
  handleConfirm,
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
        <DialogTitle>
          <WarningOutlined />
          {title}
        </DialogTitle>

        <Divider />

        <DialogContent>{content}</DialogContent>

        <DialogActions>
          <Button variant="solid" color="neutral" onClick={handleClose}>
            Отмена
          </Button>
          <Button variant="solid" color={confirmColor} onClick={handleConfirm}>
            {confirmTitle}
          </Button>
        </DialogActions>
      </ModalDialog>
    </Modal>
  );
};
