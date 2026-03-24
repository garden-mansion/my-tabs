import { useParams } from 'react-router';
import { EDIT_TAB_ID_PARAM } from '../config/pageConfig';
import { useSelector } from 'react-redux';
import type { RootState } from '@/app/config';
import type { Tab } from '@/entities/tab';

export const useGetTabFromParams = (): Tab | undefined => {
  const params = useParams();
  const { tabs } = useSelector((root: RootState) => root.tabsReducer);

  const tabId = params[EDIT_TAB_ID_PARAM];

  if (tabId === undefined) {
    return;
  }

  const currentTab = tabs.find((tab) => tab.id === tabId);

  if (!currentTab) {
    return;
  }

  return currentTab;
};
