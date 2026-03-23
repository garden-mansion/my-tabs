import { MyModal } from '@/shared/ui';
import { WarningOutlined } from '@mui/icons-material';
import { Button } from '@mui/joy';
import type { FC } from 'react';

interface DeleteTabsModalProps {
  isModalOpen: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
}

export const DeleteTabsModal: FC<DeleteTabsModalProps> = ({
  isModalOpen,
  handleClose,
  handleConfirm,
}) => {
  return (
    <MyModal
      isOpen={isModalOpen}
      title={
        <>
          <WarningOutlined />
          Подтвердите удаление
        </>
      }
      content="Вы уверены что хотите удалить выбранные табулатуры?"
      handleClose={handleClose}
      actions={
        <>
          <Button variant="solid" color="neutral" onClick={handleClose}>
            Отмена
          </Button>
          <Button variant="solid" color="danger" onClick={handleConfirm}>
            Удалить
          </Button>
        </>
      }
    />
  );
};
