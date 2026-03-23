import type { HandleNotificationOpenType } from '@/shared/lib';
import { AlphaTabApi } from '@coderline/alphatab';
import { useEffect, type RefObject } from 'react';

interface UseTabReaderParams {
  file: File | null;
  apiRef: RefObject<AlphaTabApi | null>;
  handleNotificationOpen: HandleNotificationOpenType;
}

export const useTabReader = ({
  file,
  apiRef,
  handleNotificationOpen,
}: UseTabReaderParams) =>
  useEffect(() => {
    if (!file || !apiRef.current) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target?.result;
      if (!data) {
        return;
      }

      try {
        // alphaTab принимает ArrayBuffer
        apiRef.current!.load(data as ArrayBuffer);
      } catch (err) {
        // error never occurs for some reason
        // хз мб потом разберусь
        if (!(err instanceof Error)) {
          return;
        }
        handleNotificationOpen(err.message, 'danger');
      }
    };

    reader.readAsArrayBuffer(file);
  }, [file, apiRef, handleNotificationOpen]);
