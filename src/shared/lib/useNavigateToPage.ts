import { useNavigate } from 'react-router';

export const useNavigateToPage = (path: string) => {
  const navigate = useNavigate();

  return async () => {
    await navigate(path);
  };
};
