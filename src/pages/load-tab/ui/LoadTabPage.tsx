import { useAlphaTabApi, useTabReader } from '@/features/alpha-tab-api';
import { Notification, UploadFileButton } from '@/shared/ui';
import { supportedFormats } from '@/pages/load-tab/config/supportedFormats';
import type { AlphaTabApi } from '@coderline/alphatab';
import { Box, FormControl, FormHelperText, Stack, Typography } from '@mui/joy';
import { useRef, useState, type FC } from 'react';
import { useNotification } from '@/shared/lib';

export const LoadTabPage: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<AlphaTabApi>(null);

  const [file, setFile] = useState<File | null>(null);

  const {
    isNotificationShown,
    notificationMessage,
    notificationColor,
    handleNotificationOpen,
    handleNotificationClose,
  } = useNotification();

  useAlphaTabApi({ containerRef, apiRef, handleNotificationOpen });

  useTabReader({ file, apiRef, handleNotificationOpen });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <>
      <Stack spacing={2}>
        <Typography level="h2">Загрузка табулатуры</Typography>

        <Box>
          <FormControl>
            <UploadFileButton
              placeholder="Загрузите ваш файл"
              handleFileChange={handleFileChange}
              accept={supportedFormats}
            />

            <FormHelperText>
              Поддерживаемые форматы: {supportedFormats}
            </FormHelperText>
          </FormControl>
          <Box ref={containerRef} />
        </Box>
      </Stack>

      <Notification
        message={notificationMessage}
        open={isNotificationShown}
        handleClose={handleNotificationClose}
        color={notificationColor}
      />
    </>
  );
};
