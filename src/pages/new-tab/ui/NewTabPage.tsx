import type { RootState } from "@/app/config";
import type { Tab } from "@/entities/tab";
import { isNotesTextValid } from "@/features/notes-text-validation";
import { appendTab } from "@/features/tabs-reducer";
import { saveTabsInStorage } from "@/features/tabs-reducer/lib/saveTabsInStorage";
import { getChangeEventHandlerWithState } from "@/shared/lib";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Textarea,
  Typography,
} from "@mui/joy";
import dayjs from "dayjs";
import { useEffect, useState, type FC, type SubmitEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "../scss/NewTabPage.module.scss";

import { v4 } from "uuid";

export const NewTabPage: FC = () => {
  const [tabTitle, setTabTitle] = useState<string>("");
  const [tabSubtitle, setTabSubtitle] = useState<string>("");
  const [tabNotesText, setTabNotesText] = useState<string>("");
  const [isTabNameError, setIsTabNameError] = useState<boolean>(false);
  const [isTabNotesTextError, setIsTabNotesTextError] = useState<boolean>(false);
  const [tabNotesTextHelper, setTabNotesTextHelper] = useState<string>("");

  const handleTabTitleChange = getChangeEventHandlerWithState(setTabTitle, () =>
    setIsTabNameError(false),
  );
  const handleTabSubtitleChange = getChangeEventHandlerWithState(setTabSubtitle);
  const handleTabNotesTextChange = getChangeEventHandlerWithState(setTabNotesText, () => {
    setIsTabNotesTextError(false);
    setTabNotesTextHelper("");
  });

  const [wasSave, setWasSave] = useState<boolean>(false);

  const tabNameHelperText = isTabNameError
    ? "Обязательное поле!"
    : "Хорошее название поможет легче находить табулатуру";

  const tabs = useSelector((state: RootState) => state.tabsReducer.tabs);
  const dispatch = useDispatch();

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!tabTitle) {
      setIsTabNameError(true);
      return;
    }

    if (!tabNotesText) {
      setIsTabNotesTextError(true);
      setTabNotesTextHelper("Обязательное поле");
      return;
    }

    if (!isNotesTextValid(tabNotesText)) {
      setIsTabNotesTextError(true);
      setTabNotesTextHelper("Некорректный синтаксис!");
      return;
    }

    const now = dayjs();

    const newTab: Tab = {
      title: tabTitle,
      subtitle: tabSubtitle,
      notesText: tabNotesText,
      id: v4(),
      date: {
        year: now.year(),
        month: now.month(),
        date: now.date(),

        hour: now.hour(),
        minute: now.hour(),
      },
    };

    dispatch(appendTab(newTab));
    setWasSave(true);
  };

  useEffect(() => {
    saveTabsInStorage(tabs);
  }, [tabs]);

  // TODO: не использовать sx
  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: "flex-start",
      }}
    >
      <Typography level="h2">Создание табулатуры</Typography>

      <form onSubmit={handleSubmit} className={styles["new-tab-form"]}>
        <FormControl error={isTabNameError} disabled={wasSave} required>
          <FormLabel>Название табулатуры</FormLabel>
          <Input placeholder="Новая табулатура" value={tabTitle} onChange={handleTabTitleChange} />
          <FormHelperText>{tabNameHelperText}</FormHelperText>
        </FormControl>

        <FormControl disabled={wasSave}>
          <FormLabel>Подзаголовок</FormLabel>
          <Input placeholder="..." value={tabSubtitle} onChange={handleTabSubtitleChange} />
          <FormHelperText>Можете указать автора</FormHelperText>
        </FormControl>

        <FormControl error={isTabNotesTextError} disabled={wasSave} required>
          <FormLabel>Текстовая табулатура</FormLabel>
          <Textarea
            value={tabNotesText}
            onChange={handleTabNotesTextChange}
            minRows={8}
            maxRows={16}
          />
          <FormHelperText>{tabNotesTextHelper}</FormHelperText>
        </FormControl>

        <Button disabled={wasSave} type="submit">
          Сохранить
        </Button>
      </form>
    </Stack>
  );
};
