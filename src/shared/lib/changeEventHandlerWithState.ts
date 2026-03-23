import type {
  Dispatch,
  ChangeEvent as NativeChangeEvent,
  SetStateAction,
} from 'react';

type ChangeEvent = NativeChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export const getChangeEventHandlerWithState = <T>(
  setState: Dispatch<SetStateAction<T>>,
  valueParser: (value: string) => T,
  effect?: () => void,
) => {
  return (e: ChangeEvent) => {
    const { value } = e.currentTarget;
    setState(valueParser(value));
    effect?.();
  };
};
