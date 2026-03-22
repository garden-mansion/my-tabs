import { removeAllSelectedTabsIds } from '@/features/selected-tabs-reducer';
import { type ChangeEventHandler } from 'react';
import { useDispatch } from 'react-redux';

export const useHandleCheckedChange = (
  effect: (checked: boolean) => void,
): ChangeEventHandler<HTMLInputElement> => {
  const dispatch = useDispatch();

  return (event) => {
    const { checked } = event.currentTarget;

    if (!checked) {
      dispatch(removeAllSelectedTabsIds());
    }

    effect(checked);
  };
};
