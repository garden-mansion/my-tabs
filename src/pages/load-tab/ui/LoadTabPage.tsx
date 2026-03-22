import { useAlphaTabApi, useTabReader } from "@/features/tab-reader";
import { UploadFileButton } from "@/shared/ui";
import { supportedFormats } from "@/pages/load-tab/config/supportedFormats";
import type { AlphaTabApi } from "@coderline/alphatab";
import { Box, FormControl, FormHelperText, Stack, Typography } from "@mui/joy";
import { useRef, useState, type FC } from "react";

export const LoadTabPage: FC = () => {
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
    <Stack spacing={2}>
      <Typography level="h2">Загрузка табулатуры</Typography>

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
    </Stack>
  );
};
