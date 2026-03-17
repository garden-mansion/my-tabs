import type { Tab } from "@/entities/tab";
import { getCustomDateFormatted } from "@/shared/lib";
import { Button, Card, Checkbox, Stack, Typography } from "@mui/joy";

import { append, remove, useIsTabIdInSelected } from '@/features/selected-tabs-reducer'

import { type ChangeEventHandler, type FC } from "react";
import { useDispatch } from "react-redux";

interface TabCardProps {
  tab: Tab,
  selectMode?: boolean;
}

export const TabCard: FC<TabCardProps> = ({ tab, selectMode = false }) => {
  const { name, date, id } = tab;

  const checked = useIsTabIdInSelected(id);

  const dispatch = useDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { checked } = event.currentTarget;

    dispatch(checked ? append(id) : remove(id));
  }

  return (
    <Card variant="soft">
      <Stack spacing={2}>
        <Stack>
          <Typography level="h3">{name}</Typography>

          {selectMode && <Checkbox size="sm" checked={checked} onChange={handleChange} />}
        </Stack>
        <Typography level="h4">{getCustomDateFormatted(date)}</Typography>
      </Stack>

      <Button>Перейти</Button>
    </Card>
  )
}