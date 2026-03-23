// import type { HandleNotificationOpenType } from "@/shared/lib";
import { AlphaTabApi } from '@coderline/alphatab';
import { useEffect, type RefObject } from 'react';

interface UseRenderTextTabParams {
  containerRef: RefObject<HTMLDivElement | null>;
  apiRef: RefObject<AlphaTabApi | null>;
  text: string;

  enabled: boolean;
}

export const useRenderTextTab = ({
  containerRef,
  apiRef,
  text,
  enabled,
}: UseRenderTextTabParams) =>
  useEffect(() => {
    if (!enabled || !containerRef.current) {
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
    api.tex(text);
    // api.error.on((e) => console.log(e.message, 'danger'));

    apiRef.current = api;

    return () => {
      api.destroy();
      apiRef.current = null;
    };
  }, [containerRef, apiRef, text, enabled]);
