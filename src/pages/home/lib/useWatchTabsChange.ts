import type { RootState } from '@/app/config';
import { removeAllSelectedTabsIds } from '@/features/selected-tabs-reducer';
import { saveTabsInStorage } from '@/features/tabs-reducer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useWatchTabsChange = () => {
  const { tabs } = useSelector((root: RootState) => root.tabsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    saveTabsInStorage(tabs);

    if (!tabs.length) {
      dispatch(removeAllSelectedTabsIds());
    }

    return () => {
      dispatch(removeAllSelectedTabsIds());
    };
  }, [tabs, dispatch]);
};
