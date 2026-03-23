import type { RootState } from '@/app/config';
import { useRenderTextTab } from '@/features/alpha-tab-api';
import { getCustomDateFormatted } from '@/shared/lib';
import { AlphaTabApi } from '@coderline/alphatab';
import {
  Box,
  Stack,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Textarea,
  Typography,
} from '@mui/joy';
import { useRef, useState, type FC } from 'react';
import { useSelector } from 'react-redux';

export const TabPage: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<AlphaTabApi>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  const { currentTab } = useSelector(
    (root: RootState) => root.currentTabReducer,
  );

  const handleActiveTabChange = (value: string | number | null) => {
    if (typeof value === 'number') {
      setActiveTab(value);
    }
  };

  useRenderTextTab({
    containerRef,
    apiRef,
    text: currentTab?.notesText ?? '',
    enabled: activeTab === 1,
  });

  if (!currentTab) {
    return null;
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

      <Tabs
        value={activeTab}
        defaultValue={activeTab}
        onChange={(_, value) => handleActiveTabChange(value)}
      >
        <TabList>
          <Tab>Исходный текст</Tab>
          <Tab>Нотный вид</Tab>
        </TabList>

        <TabPanel value={0}>
          <Textarea disabled value={notesText} />
        </TabPanel>

        <TabPanel value={1} keepMounted>
          <Box ref={containerRef} />
        </TabPanel>
      </Tabs>
    </Stack>
  );
};
