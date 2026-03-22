import { AlphaTabApi } from '@coderline/alphatab';
import { useEffect, type RefObject } from 'react';

interface UseTabReaderParams {
  file: File | null;
  apiRef: RefObject<AlphaTabApi | null>;
}

export const useTabReader = ({ file, apiRef }: UseTabReaderParams) =>
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
        console.error(err);
      }
    };

    reader.readAsArrayBuffer(file);
  }, [file]);
