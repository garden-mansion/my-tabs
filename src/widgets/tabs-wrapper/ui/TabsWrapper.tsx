import { Alert } from "@mui/joy";
import Grid from '@mui/joy/Grid'
import type { FC } from "react";
import { TabCard } from "./TabCard";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/config";

export const TabsWrapper: FC = () => {
  const tabs = useSelector((state: RootState) => state.tabsReducer.tabs);

  return tabs.length ? <Grid container columnSpacing={2} rowSpacing={2} sx={{ flexGrow: 1}}>
  {tabs.map(tab => <Grid key={tab.id}><TabCard  tab={tab} /></Grid>)}
</Grid> : <Alert>Нет данных</Alert>
}