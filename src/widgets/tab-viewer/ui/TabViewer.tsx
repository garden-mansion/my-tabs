import { AlphaTabApi } from "@coderline/alphatab";
import { Box, FormControl, FormHelperText, Input } from "@mui/joy";
import { useEffect, useRef, useState, type FC } from "react";
import { supportedFormats } from "../config/supportedFormats";

export const TabViewer: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<AlphaTabApi>(null);

  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const api = new AlphaTabApi(containerRef.current, {
      player: {
        enablePlayer: true,
      },
      core: {
        fontDirectory: '/alphatab/font/'
      }
    });

    // TODO: мб потом убрать
    api.scoreLoaded.on(() => console.log('LOADED'));
    api.renderFinished.on(() => console.log('RENDERED'));
    api.error.on((e) => console.error(e));

    apiRef.current = api;

    return () => {
      api.destroy();
      apiRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!file || !apiRef.current) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target?.result;
      if (!data) {
        return
      }

      try {
        // alphaTab принимает ArrayBuffer
        apiRef.current!.load(data as ArrayBuffer);
      } catch (err) {
        console.error(err)
      }
    }; 
    
    reader.readAsArrayBuffer(file);
  }, [file]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <Box>
      <FormControl>
        <Input type="file" placeholder="Загрузите ваш файл" slotProps={{
          input: {
            accept: supportedFormats,
            onChange: handleFileChange
          }
        }} />

        <FormHelperText>Поддерживаемые форматы: {supportedFormats}</FormHelperText>
      </FormControl>
      <Box ref={containerRef} />
    </Box>
  )
}