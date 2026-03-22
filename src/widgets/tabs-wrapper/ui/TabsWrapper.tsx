import { Alert, Grid } from '@mui/joy';
import type { FC } from 'react';
import { TabCard } from './TabCard';
import { useSelector } from 'react-redux';
import type { RootState } from '@/app/config';

interface TabsWrapperProps {
  selectMode?: boolean;
  pathToTabPage: string;
}

export const TabsWrapper: FC<TabsWrapperProps> = ({
  selectMode = false,
  pathToTabPage,
}) => {
  const tabs = useSelector((state: RootState) => state.tabsReducer.tabs);

  if (!tabs.length) {
    return <Alert>Нет данных</Alert>;
  }

  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      {tabs.map((tab) => (
        <Grid key={tab.id}>
          <TabCard
            pathToTabPage={pathToTabPage}
            selectMode={selectMode}
            tab={tab}
          />
        </Grid>
      ))}
    </Grid>
  );
};
