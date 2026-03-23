import { MyModal, type MyModalProps } from '@/shared/ui';
import { Button, Link, Stack, Typography } from '@mui/joy';
import type { FC } from 'react';

import TextFieldsIcon from '@mui/icons-material/TextFields';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

import { PATH as NEW_TAB_TEXT_MODE_PATH } from '@/pages/new-tab-text-mode';

import SettingsIcon from '@mui/icons-material/Settings';
import { NewTabModeCard } from './NewTabModeCard';

type NewTabModal = Pick<MyModalProps, 'isOpen' | 'handleClose'>;

export const NewTabModal: FC<NewTabModal> = ({ isOpen, handleClose }) => {
  return (
    <MyModal
      isOpen={isOpen}
      handleClose={handleClose}
      title={
        <>
          <SettingsIcon />
          Выберите режим
        </>
      }
      content={
        <>
          <Typography sx={{ marginBottom: '1rem' }}>
            Можно писать табулатуры текстом (соблюдая синтаксис{' '}
            <Link href="https://alphatab.net/docs/alphatex/syntax">
              Alpha Api
            </Link>
            ) или же воспользоваться визуальным редактором
          </Typography>

          <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
            <NewTabModeCard
              title="Текст"
              icon={<TextFieldsIcon />}
              path={NEW_TAB_TEXT_MODE_PATH}
              ariaLabelName="text"
              description="Табулатуру нужно писать текстом, используя синтаксис AlphaTab"
            />
            <NewTabModeCard
              title="Визуал"
              icon={<MusicNoteIcon />}
              path={NEW_TAB_TEXT_MODE_PATH}
              ariaLabelName="visual-editor"
              description="Визуальный интерфейс для создания табулатур"
            />
          </Stack>
        </>
      }
      actions={
        <>
          <Button variant="solid" onClick={handleClose}>
            Отмена
          </Button>
        </>
      }
    />
  );
};
