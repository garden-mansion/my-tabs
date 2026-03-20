import { AlphaTabApi } from "@coderline/alphatab";
import { useEffect, type RefObject } from "react";

interface UseTabRenderParams {
  containerRef: RefObject<HTMLDivElement | null>;
  apiRef: RefObject<AlphaTabApi | null>;
}

export const useAlphaTabApi = ({ containerRef, apiRef }: UseTabRenderParams) =>
  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const api = new AlphaTabApi(containerRef.current, {
      player: {
        enablePlayer: true,
      },
      core: {
        fontDirectory: "/alphatab/font/",
      },
    });

    // TODO: мб потом убрать
    api.scoreLoaded.on(() => console.log("LOADED"));
    api.renderFinished.on(() => console.log("RENDERED"));
    api.error.on((e) => console.error(e));

    apiRef.current = api;

    return () => {
      api.destroy();
      apiRef.current = null;
    };
  }, []);
