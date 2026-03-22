import { useNavigateToPage } from '@/shared/lib';
import { TabsWrapper } from '@/widgets/tabs-wrapper';
import { Button, Input, Stack, Typography } from '@mui/joy';
import { useState, type FC } from 'react';
import { useHandleCheckedChange } from '../lib/useHandleCheckedChange';
import { useHandleConfirm } from '../lib/useHandleConfirm';
import { useWatchTabsChange } from '../lib/useWatchTabsChange';
import { SelectTabsPanel } from './SelectTabsPanel';
import { DeleteTabsModal } from './DeleteTabsModal';

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

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleConfirm = useHandleConfirm(() => {
    setIsModalOpen(false);
    setChecked(false);
  });

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

        <SelectTabsPanel
          checked={checked}
          handleCheckedChange={handleCheckedChange}
          handleModalOpen={handleModalOpen}
        />

        <Input placeholder="Поиск табулатур" fullWidth />
      </Stack>

      <TabsWrapper pathToTabPage={pathToTabPage} selectMode={checked} />

      <DeleteTabsModal
        isModalOpen={isModalOpen}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
      />
    </Stack>
  );
};
