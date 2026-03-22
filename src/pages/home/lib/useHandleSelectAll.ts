import type { RootState } from '@/app/config';
import { appendSelectedTabId } from '@/features/selected-tabs-reducer';
import { useDispatch, useSelector } from 'react-redux';

export const useHandleSelectAll = () => {
  const dispatch = useDispatch();
  const { selectedTabsIds } = useSelector(
    (state: RootState) => state.selectedTabsReducer,
  );
  const { tabs } = useSelector((root: RootState) => root.tabsReducer);

  return () => {
    tabs.forEach((tab) => {
      if (selectedTabsIds.includes(tab.id)) {
        return;
      }

      dispatch(appendSelectedTabId(tab.id));
    });
  };
};
