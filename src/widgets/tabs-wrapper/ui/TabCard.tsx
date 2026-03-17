import type { Tab } from "@/entities/tab";
import { getCustomDateFormatted } from "@/shared/lib";
import { Button, Card, Stack, Typography } from "@mui/joy";
import type { FC } from "react";

interface TabCardProps {
  tab: Tab
}

export const TabCard: FC<TabCardProps> = ({ tab }) => {
  const { name, date, id } = tab;

  return (
    <Card variant="soft">
      <Stack spacing={2}>
        <Typography level="h3">{name}</Typography>
        <Typography level="h4">{getCustomDateFormatted(date)}</Typography>

        <Typography level="title-sm">id: {id}</Typography>
      </Stack>

      <Button>Перейти</Button>
    </Card>
  )
}