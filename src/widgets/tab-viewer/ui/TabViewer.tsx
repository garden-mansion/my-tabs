import { AlphaTabApi } from "@coderline/alphatab";
import { Box, FormControl, FormHelperText } from "@mui/joy";
import { useRef, useState, type FC } from "react";
import { supportedFormats } from "../config/supportedFormats";
import { UploadFileButton } from "@/shared/ui";
import { useAlphaTabApi, useTabReader } from "@/features/tab-reader";

export const TabViewer: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<AlphaTabApi>(null);

  const [file, setFile] = useState<File | null>(null);

  useAlphaTabApi({ containerRef, apiRef });

  useTabReader({ file, apiRef });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <Box>
      <FormControl>
        <UploadFileButton
          placeholder="Загрузите ваш файл"
          handleFileChange={handleFileChange}
          accept={supportedFormats}
        />

        <FormHelperText>Поддерживаемые форматы: {supportedFormats}</FormHelperText>
      </FormControl>
      <Box ref={containerRef} />
    </Box>
  );
};
