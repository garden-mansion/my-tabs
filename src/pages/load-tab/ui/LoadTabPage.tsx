import { TabViewer } from "@/widgets/tab-viewer";
import { Stack, Typography } from "@mui/joy";
import type { FC } from "react";

export const LoadTabPage: FC = () => {
  return (
    <Stack spacing={2}>
      <Typography level="h2">Загрузка табулатуры</Typography>

      <TabViewer />
    </Stack>
  )
}