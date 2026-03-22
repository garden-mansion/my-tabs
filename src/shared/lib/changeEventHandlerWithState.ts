import type { Dispatch, ChangeEvent as NativeChangeEvent, SetStateAction } from "react";

type ChangeEvent = NativeChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface GetChangeEventHandlerWithStateParams<T> {
  setState: Dispatch<SetStateAction<T>>;
  eventValueExtractor: (e: ChangeEvent) => T;
  effect?: () => void;
}

export const getChangeEventHandlerWithState = <T = string>({
  setState,
  eventValueExtractor,
  effect,
}: GetChangeEventHandlerWithStateParams<T>) => {
  return (e: ChangeEvent) => {
    const value: T | string = eventValueExtractor(e);
    setState(value);
    effect?.();
  };
};
