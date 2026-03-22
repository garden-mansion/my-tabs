import { MyModal } from '@/shared/ui';
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
      title="Подтвердите удаление"
      content="Вы уверены что хотите удалить выбранные табулатуры?"
      confirmTitle="Удалить"
      confirmColor="danger"
      handleClose={handleClose}
      handleConfirm={handleConfirm}
    />
  );
};
