import type { RootState } from "@/app/config";
import { append, removeAll } from "@/features/selected-tabs-reducer";
import { remove } from "@/features/tabs-reducer";
import { saveTabsInStorage } from "@/features/tabs-reducer/lib/saveTabsInStorage";
import { TabsWrapper } from "@/widgets/tabs-wrapper";
import { Button, Checkbox, Input, Stack, Typography } from "@mui/joy";
import { useEffect, useMemo, useState, type ChangeEventHandler, type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

interface HomePageProps {
  pathToNewTabPage: string;
  pathToLoadTabPage: string;
}

export const HomePage: FC<HomePageProps> = ({ pathToNewTabPage, pathToLoadTabPage }) => {
  const navigate = useNavigate();

  const handleCreateTabClick = () => {
    navigate(pathToNewTabPage);
  };

  const handleLoadTabClick = () => {
    navigate(pathToLoadTabPage);
  };

  const [checked, setChecked] = useState<boolean>(false);

  const dispatch = useDispatch();

  const { selectedTabsIds } = useSelector((state: RootState) => state.selectedTabsReducer);
  const { tabs } = useSelector((state: RootState) => state.tabsReducer);

  const handleCheckedChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { checked } = event.currentTarget;

    if (!checked) {
      dispatch(removeAll());
    }

    setChecked(checked);
  };

  const handleClickSelectAll = () =>
    tabs.forEach((tab) => {
      if (selectedTabsIds.includes(tab.id)) {
        return;
      }

      dispatch(append(tab.id));
    });

  const handleDelete = () => {
    selectedTabsIds.forEach((id) => {
      dispatch(remove(id));
    });
  };

  const deleteButtonDisabled = useMemo<boolean>(
    () => selectedTabsIds.length === 0,
    [selectedTabsIds],
  );

  useEffect(() => {
    saveTabsInStorage(tabs);

    if (!tabs.length) {
      dispatch(removeAll());
    }
  }, [tabs]);

  return (
    <Stack spacing={2}>
      <Typography level="h2">Главная</Typography>

      {/* TODO: не использовать sx, попробовать либо scss либо можно tailwind */}
      <Stack
        spacing={2}
        sx={{
          alignItems: "flex-start",
        }}
      >
        <Stack direction={"row"} spacing={2}>
          <Button onClick={handleCreateTabClick}>Создать табулатуру</Button>

          <Button onClick={handleLoadTabClick}>Загрузить табулатуру</Button>
        </Stack>

        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          sx={{ minHeight: "37px" }}
          className="asdf"
        >
          <Checkbox label="Выбрать" checked={checked} onChange={handleCheckedChange} />

          {checked && <Button onClick={handleClickSelectAll}>Выбрать все</Button>}
          {checked && (
            <Button onClick={handleDelete} disabled={deleteButtonDisabled}>
              Удалить
            </Button>
          )}
        </Stack>

        <Input placeholder="Поиск табулатур" />
      </Stack>

      <TabsWrapper selectMode={checked} />
    </Stack>
  );
};
