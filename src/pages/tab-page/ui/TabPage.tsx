import type { RootState } from '@/app/config';
import { getCustomDateFormatted } from '@/shared/lib';
import {
  Stack,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Textarea,
  Typography,
} from '@mui/joy';
import type { FC } from 'react';
import { useSelector } from 'react-redux';

export const TabPage: FC = () => {
  const { currentTab } = useSelector(
    (root: RootState) => root.currentTabReducer,
  );

  if (!currentTab) {
    return;
  }

  const { title, subtitle, tempo, date, notesText } = currentTab;

  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <Typography level="h2">{title}</Typography>

        {subtitle && <Typography level="h3">{subtitle}</Typography>}
        {tempo && <Typography level="h3">{tempo} BPM</Typography>}

        <Typography level="h4">{getCustomDateFormatted(date)}</Typography>
      </Stack>

      <Tabs>
        <TabList>
          <Tab>Исходный текст</Tab>
          <Tab>Нотный вид</Tab>
        </TabList>

        <TabPanel value={0}>
          <Textarea disabled value={notesText} />
        </TabPanel>

        <TabPanel value={1}>empty for now</TabPanel>
      </Tabs>
    </Stack>
  );
};
