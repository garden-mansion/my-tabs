import { useDispatch } from 'react-redux';
import {
  setIsTabNotesTextError,
  setIsTabSubtitleError,
  setIsTabTitleError,
  setTabNotesText,
  setTabNotesTextHelperText,
  setTabSubtitle,
  setTabSubtitleHelperText,
  setTabTitle,
  setTabTitleHelperText,
  setTempo,
} from '../model/tabFormReducer';
import type { ChangeEvent, SubmitEventHandler } from 'react';
import {
  TAB_SUBTITLE_MAX_LENGTH,
  TAB_TITLE_MAX_LENGTH,
} from '@/widgets/tab-data-form/config';
import { useValidateFieldsBasic } from './useValidateFieldsBasic';

export const useHandleTabTitleChange = () => {
  const dispatch = useDispatch();

  return (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    dispatch(setTabTitle(value));

    if (value.length > TAB_TITLE_MAX_LENGTH) {
      dispatch(setIsTabTitleError(true));
      dispatch(
        setTabTitleHelperText(
          `Максимальная длина названия: ${TAB_TITLE_MAX_LENGTH} символов`,
        ),
      );
      return;
    }

    dispatch(
      setTabTitleHelperText('Хорошее название упрощает поиск табулатуры'),
    );
    dispatch(setIsTabTitleError(false));
  };
};

export const useHandleTabSubtitleChange = () => {
  const dispatch = useDispatch();

  return (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    dispatch(setTabSubtitle(value));

    if (value.length > TAB_SUBTITLE_MAX_LENGTH) {
      dispatch(setIsTabSubtitleError(true));
      dispatch(
        setTabSubtitleHelperText(
          `Максимальна длина подзаголовка: ${TAB_SUBTITLE_MAX_LENGTH} символов`,
        ),
      );
      return;
    }

    dispatch(setIsTabSubtitleError(false));
    dispatch(setTabSubtitleHelperText('Можете указать автора'));
  };
};

export const useHandleTabNotesTextChange = () => {
  const dispatch = useDispatch();

  return (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    dispatch(setTabNotesText(value));
    dispatch(setIsTabNotesTextError(false));
    dispatch(setTabNotesTextHelperText(''));
  };
};

export const useHandleTempoChange = () => {
  const dispatch = useDispatch();

  return (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    dispatch(setTempo(+value));
  };
};

export const useHandleSubmitTabForm = (
  effect?: () => void,
): SubmitEventHandler<HTMLFormElement> => {
  const validateFieldsBasic = useValidateFieldsBasic();

  return (event) => {
    event.preventDefault();

    if (!validateFieldsBasic()) {
      return;
    }

    effect?.();
  };
};
