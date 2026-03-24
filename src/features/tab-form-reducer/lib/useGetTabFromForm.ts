import type { RootState } from '@/app/config';
import type { Tab } from '@/entities/tab';
import { getCurrentCustomDate } from '@/shared/lib';
import { useSelector } from 'react-redux';

export const useGetTabFromForm = () => {
  const { tabTitle, tabSubtitle, tempo, tabNotesText } = useSelector(
    (root: RootState) => root.tabFormReducer,
  );

  return (id: string): Tab => {
    return {
      id,
      title: tabTitle,
      subtitle: tabSubtitle,
      tempo,
      notesText: tabNotesText,

      date: getCurrentCustomDate(),
    };
  };
};
