import type { Dispatch, ChangeEvent as NativeChangeEvent, SetStateAction } from "react";

type ChangeEvent = NativeChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export const getChangeEventHandlerWithState = (
  setState: Dispatch<SetStateAction<string>>,
  effect?: () => void,
) => {
  return (e: ChangeEvent) => {
    const { value } = e.currentTarget;
    setState(value);
    effect?.();
  };
};
