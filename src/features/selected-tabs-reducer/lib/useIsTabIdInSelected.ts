import type { RootState } from '@/app/config';
import { useSelector } from 'react-redux';

export const useIsTabIdInSelected = (id: string): boolean => {
  const { selectedTabsIds } = useSelector(
    (state: RootState) => state.selectedTabsReducer,
  );

  return !!selectedTabsIds.find((currentId) => currentId === id);
};
