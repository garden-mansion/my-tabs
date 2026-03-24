import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetForm } from '../model/tabFormReducer';

export const useResetFormOnUnmount = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetForm());
    };
  }, [dispatch]);
};
