import type { RootState } from '@/app/config';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export const useIsDeleteButtonDisabled = () => {
  const { selectedTabsIds } = useSelector(
    (root: RootState) => root.selectedTabsReducer,
  );

  return useMemo<boolean>(
    () => selectedTabsIds.length === 0,
    [selectedTabsIds],
  );
};
