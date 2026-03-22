import { Button, Checkbox, Stack } from '@mui/joy';
import type { ChangeEventHandler, FC } from 'react';
import { useHandleSelectAll } from '../lib/useHandleSelectAll';
import { useIsDeleteButtonDisabled } from '../lib/useIsDeleteButtonDisabled';

interface SelectTabsPanelProps {
  checked: boolean;
  handleCheckedChange: ChangeEventHandler<HTMLInputElement>;
  handleModalOpen: () => void;
}

export const SelectTabsPanel: FC<SelectTabsPanelProps> = ({
  checked,
  handleModalOpen,
  handleCheckedChange,
}) => {
  const handleClickSelectAll = useHandleSelectAll();
  const deleteButtonDisabled = useIsDeleteButtonDisabled();

  return (
    <Stack
      direction={'row'}
      spacing={2}
      alignItems={'center'}
      sx={{ minHeight: '37px' }}
    >
      <Checkbox
        label="Выбрать"
        checked={checked}
        onChange={handleCheckedChange}
      />

      {checked && <Button onClick={handleClickSelectAll}>Выбрать все</Button>}
      {checked && (
        <Button
          onClick={handleModalOpen}
          disabled={deleteButtonDisabled}
          color="danger"
        >
          Удалить
        </Button>
      )}
    </Stack>
  );
};
