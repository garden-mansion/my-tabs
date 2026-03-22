import type { Tab } from "@/entities/tab";
import { getCustomDateFormatted } from "@/shared/lib";
import { Button, Card, Checkbox, Stack, Typography } from "@mui/joy";

import { append, remove, useIsTabIdInSelected } from "@/features/selected-tabs-reducer";

import { type ChangeEventHandler, type FC } from "react";
import { useDispatch } from "react-redux";
import { setCurrentTab } from "@/features/current-tab-reducer";
import { useNavigate } from "react-router";

import styles from "../scss/TabCard.module.scss";

interface TabCardProps {
  tab: Tab;
  selectMode?: boolean;
  pathToTabPage: string;
}

export const TabCard: FC<TabCardProps> = ({ tab, selectMode = false, pathToTabPage }) => {
  const { title, subtitle, date, id } = tab;

  const checked = useIsTabIdInSelected(id);

  const dispatch = useDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { checked } = event.currentTarget;

    dispatch(checked ? append(id) : remove(id));
  };

  const navigate = useNavigate();

  const handleGoToTabClick = async () => {
    dispatch(setCurrentTab(tab));

    await navigate(pathToTabPage);
  };

  return (
    <Card
      variant="outlined"
      sx={{ justifyContent: "space-between" }}
      className={styles["tab-card"]}
    >
      <Stack spacing={2}>
        <Stack>
          <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Typography level="body-lg" noWrap>
              {title}
            </Typography>

            {selectMode && <Checkbox size="sm" checked={checked} onChange={handleChange} />}
          </Stack>

          <Typography level="body-md">{subtitle}</Typography>
        </Stack>
        <Typography level="body-sm">{getCustomDateFormatted(date)}</Typography>
      </Stack>

      <Button sx={{ alignSelf: "flex-end" }} onClick={handleGoToTabClick} variant="outlined">
        Перейти
      </Button>
    </Card>
  );
};
