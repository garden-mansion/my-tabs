import type { RootState } from '@/app/config';
import { useDispatch, useSelector } from 'react-redux';
import {
  setIsTabNotesTextError,
  setIsTabTitleError,
  setTabNotesTextHelperText,
} from '../model/tabFormReducer';
import { isNotesTextValid } from '@/features/notes-text-validation';

export const useValidateFieldsBasic = () => {
  const { tabTitle, tabNotesText } = useSelector(
    (root: RootState) => root.tabFormReducer,
  );
  const dispatch = useDispatch();

  return () => {
    if (!tabTitle) {
      dispatch(setIsTabTitleError(true));
      return false;
    }

    if (!tabNotesText) {
      dispatch(setIsTabNotesTextError(true));
      dispatch(setTabNotesTextHelperText('Обязательное поле'));
      return false;
    }

    if (!isNotesTextValid(tabNotesText)) {
      dispatch(setIsTabNotesTextError(true));
      dispatch(setTabNotesTextHelperText('Некорректный синтаксис!'));
      return false;
    }

    return true;
  };
};
