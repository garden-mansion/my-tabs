import type { RootState } from '@/app/config';
import { removeSelectedTabId } from '@/features/selected-tabs-reducer';
import { removeTab } from '@/features/tabs-reducer';
import { useDispatch, useSelector } from 'react-redux';

export const useHandleConfirm = (effect: () => void) => {
  const dispatch = useDispatch();
  const { selectedTabsIds } = useSelector(
    (state: RootState) => state.selectedTabsReducer,
  );

  return () => {
    selectedTabsIds.forEach((id) => {
      dispatch(removeTab(id));
      dispatch(removeSelectedTabId(id));
    });

    effect();
  };
};
