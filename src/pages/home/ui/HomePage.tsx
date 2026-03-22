import { useNavigateToPage } from '@/shared/lib';
import { MyModal } from '@/shared/ui';
import { TabsWrapper } from '@/widgets/tabs-wrapper';
import { Button, Checkbox, Input, Stack, Typography } from '@mui/joy';
import { useState, type FC } from 'react';
import { useHandleCheckedChange } from '../lib/useHandleCheckedChange';
import { useHandleSelectAll } from '../lib/useHandleSelectAll';
import { useHandleConfirm } from '../lib/useHandleConfirm';
import { useIsDeleteButtonDisabled } from '../lib/useIsDeleteButtonDisabled';
import { useWatchTabsChange } from '../lib/useWatchTabsChange';

interface HomePageProps {
  pathToNewTabPage: string;
  pathToLoadTabPage: string;
  pathToTabPage: string;
}

export const HomePage: FC<HomePageProps> = ({
  pathToNewTabPage,
  pathToLoadTabPage,
  pathToTabPage,
}) => {
  const handleCreateTabClick = useNavigateToPage(pathToNewTabPage);
  const handleLoadTabClick = useNavigateToPage(pathToLoadTabPage);

  const [checked, setChecked] = useState<boolean>(false);

  const handleCheckedChange = useHandleCheckedChange((checkedValue) =>
    setChecked(checkedValue),
  );

  const handleClickSelectAll = useHandleSelectAll();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleConfirm = useHandleConfirm(() => {
    setIsModalOpen(false);
    setChecked(false);
  });

  const deleteButtonDisabled = useIsDeleteButtonDisabled();

  useWatchTabsChange();

  return (
    <Stack spacing={2}>
      <Typography level="h2">Главная</Typography>

      {/* TODO: не использовать sx, попробовать либо scss либо можно tailwind */}
      <Stack
        spacing={2}
        sx={{
          alignItems: 'flex-start',
        }}
      >
        <Stack direction={'row'} spacing={2}>
          <Button onClick={handleCreateTabClick}>Создать табулатуру</Button>

          <Button onClick={handleLoadTabClick}>Загрузить табулатуру</Button>
        </Stack>

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

          {checked && (
            <Button onClick={handleClickSelectAll}>Выбрать все</Button>
          )}
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

        <Input placeholder="Поиск табулатур" fullWidth />
      </Stack>

      <TabsWrapper pathToTabPage={pathToTabPage} selectMode={checked} />

      <MyModal
        isOpen={isModalOpen}
        title="Подтвердите удаление"
        content="Вы уверены что хотите удалить выбранные табулатуры?"
        confirmTitle="Удалить"
        confirmColor="danger"
        handleClose={handleClose}
        handleConfirm={handleConfirm}
      />
    </Stack>
  );
};
