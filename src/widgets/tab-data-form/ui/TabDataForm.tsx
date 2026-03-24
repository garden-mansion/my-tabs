import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from '@mui/joy';
import { type FC, type SubmitEventHandler } from 'react';

import styles from '../scss/TabDataForm.module.scss';
import { useSelector } from 'react-redux';
import type { RootState } from '@/app/config';
import {
  useHandleTabNotesTextChange,
  useHandleTabSubtitleChange,
  useHandleTabTitleChange,
  useHandleTempoChange,
} from '@/features/tab-form-reducer';

interface TabDataFormProps {
  handleSubmit: SubmitEventHandler<HTMLFormElement>;
}

export const TabDataForm: FC<TabDataFormProps> = ({ handleSubmit }) => {
  const {
    isTabTitleError,
    isTabSubtitleError,
    wasSave,
    tabTitle,
    tabSubtitle,
    tabTitleHelperText,
    tabSubtitleHelperText,
    tempo,
    isTabNotesTextError,
    tabNotesText,
    tabNotesTextHelperText,
  } = useSelector((root: RootState) => root.tabFormReducer);
  const handleTabTitleChange = useHandleTabTitleChange();
  const handleTabSubtitleChange = useHandleTabSubtitleChange();
  const handleTempoChange = useHandleTempoChange();
  const handleTabNotesTextChange = useHandleTabNotesTextChange();

  return (
    <form onSubmit={handleSubmit} className={styles.TabDataForm}>
      <FormControl error={isTabTitleError} disabled={wasSave} required>
        <FormLabel>Название табулатуры</FormLabel>
        <Input
          placeholder="Новая табулатура"
          value={tabTitle}
          onChange={handleTabTitleChange}
        />
        <FormHelperText>{tabTitleHelperText}</FormHelperText>
      </FormControl>

      <FormControl error={isTabSubtitleError} disabled={wasSave}>
        <FormLabel>Подзаголовок</FormLabel>
        <Input
          placeholder="..."
          value={tabSubtitle}
          onChange={handleTabSubtitleChange}
        />
        <FormHelperText>{tabSubtitleHelperText}</FormHelperText>
      </FormControl>

      <FormControl disabled={wasSave}>
        <FormLabel>Темп (BPM)</FormLabel>

        <Input
          type="number"
          value={tempo}
          onChange={handleTempoChange}
          slotProps={{
            input: {
              min: 1,
            },
          }}
        />
      </FormControl>

      <FormControl error={isTabNotesTextError} disabled={wasSave} required>
        <FormLabel>Текстовая табулатура</FormLabel>
        <Textarea
          value={tabNotesText}
          onChange={handleTabNotesTextChange}
          minRows={8}
          maxRows={16}
        />
        <FormHelperText>{tabNotesTextHelperText}</FormHelperText>
      </FormControl>

      <Button disabled={wasSave} type="submit">
        Сохранить
      </Button>
    </form>
  );
};
