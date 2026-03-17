import type { RootState } from "@/app/config";
import type { Tab } from "@/entities/tab";
import { append } from "@/features/tab";
import { saveTabsInStorage } from "@/features/tab/lib/saveTabsInStorage";
import { Button, FormControl, FormHelperText, FormLabel, Input, Stack, Typography } from "@mui/joy";
import dayjs from "dayjs";
import { uniqueId } from "lodash";
import { useEffect, useState, type ChangeEventHandler, type FC, type SubmitEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";

export const NewTabPage: FC = () => {
  const [tabName, setTabName] = useState<string>('');
  const [isTabNameError, setIsTabNameError] = useState<boolean>(false);

  const handleTabNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    setTabName(value);
    setIsTabNameError(false);
  }

  const [wasSave, setWasSave] = useState<boolean>(false);

  const tabNameHelperText = isTabNameError ? 'Обязательное поле!' : 'Хорошее название поможет легче находить табулатуру'

  const tabs = useSelector((state: RootState) => state.tabsReducer.tabs)
  const dispatch = useDispatch();

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!tabName) {
      setIsTabNameError(true);
      return;
    }

    const now = dayjs();

    const newTab: Tab = {
      name: tabName,
      id: uniqueId(),
      date: {
        year: now.year(),
        month: now.month(),
        date: now.date(),

        hour: now.hour(),
        minute: now.hour(),
      }
    }

    dispatch(append(newTab));
    setWasSave(true);
  }

  useEffect(() => {
    return () => {
      saveTabsInStorage(tabs)
    }
  }, [])

  return (
    <Stack spacing={2}>
      <Typography level="h2">Создание табулатуры</Typography>

      <form onSubmit={handleSubmit}>
        <FormControl error={isTabNameError} disabled={wasSave}>
          <FormLabel>Название табулатуры</FormLabel>
          <Input placeholder="Новая табулатура" value={tabName} onChange={handleTabNameChange} />
          <FormHelperText>{tabNameHelperText}</FormHelperText>
        </FormControl>

        <Button disabled={wasSave} type="submit">Сохранить</Button>
      </form>
    </Stack>
  )
}