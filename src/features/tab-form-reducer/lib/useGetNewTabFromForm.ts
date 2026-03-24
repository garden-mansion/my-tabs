import type { RootState } from '@/app/config';
import type { Tab } from '@/entities/tab';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

export const useGetNewTabFromForm = () => {
  const { tabTitle, tabSubtitle, tabNotesText, tempo } = useSelector(
    (root: RootState) => root.tabFormReducer,
  );

  return (): Tab => {
    const now = dayjs();

    const newTab: Tab = {
      title: tabTitle,
      subtitle: tabSubtitle,
      notesText: tabNotesText,
      tempo,
      id: v4(),
      date: {
        year: now.year(),
        month: now.month(),
        date: now.date(),

        hour: now.hour(),
        minute: now.hour(),
      },
    };

    return newTab;
  };
};
