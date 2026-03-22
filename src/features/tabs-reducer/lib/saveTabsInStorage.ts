import type { Tab } from '@/entities/tab';
import { TABS_LOCAL_STORAGE_KEY } from '../config/localStorageKey';

export const saveTabsInStorage = (tabs: Tab[]) => {
  localStorage.setItem(TABS_LOCAL_STORAGE_KEY, JSON.stringify(tabs));
};
