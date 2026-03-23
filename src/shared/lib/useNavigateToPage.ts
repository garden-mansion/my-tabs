import { useNavigate } from 'react-router';

export const useNavigateToPage = (path: string, preEffect?: () => void) => {
  const navigate = useNavigate();

  return async () => {
    preEffect?.();
    await navigate(path);
  };
};
