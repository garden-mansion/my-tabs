import type { HandleNotificationOpenType } from '@/shared/lib';
import { AlphaTabApi } from '@coderline/alphatab';
import { useEffect, type RefObject } from 'react';

interface UseTabRenderParams {
  containerRef: RefObject<HTMLDivElement | null>;
  apiRef: RefObject<AlphaTabApi | null>;
  handleNotificationOpen: HandleNotificationOpenType;
}

export const useAlphaTabApi = ({
  containerRef,
  apiRef,
  handleNotificationOpen,
}: UseTabRenderParams) =>
  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const api = new AlphaTabApi(containerRef.current, {
      player: {
        enablePlayer: true,
      },
      core: {
        fontDirectory: '/alphatab/font/',
      },
    });

    // api.scoreLoaded.on(() => handleNotificationOpen('loaded', 'success'));
    // api.renderFinished.on(() =>
    //   handleNotificationOpen('render has finished', 'success'),
    // );
    api.error.on((e) => handleNotificationOpen(e.message, 'danger'));

    apiRef.current = api;

    return () => {
      api.destroy();
      apiRef.current = null;
    };
  }, [containerRef, apiRef, handleNotificationOpen]);
