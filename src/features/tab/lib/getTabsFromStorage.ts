import { isTab, type Tab } from "@/entities/tab"
import { TABS_LOCAL_STORAGE_KEY } from "../config/localStorageKey";

type GetTabsFromStorageType = () => Tab[];

export const getTabsFromStorage: GetTabsFromStorageType = () => {
  const savedTabsRaw = localStorage.getItem(TABS_LOCAL_STORAGE_KEY) ?? '';

  let savedTabs: unknown[] = [];

  try {
    savedTabs = JSON.parse(savedTabsRaw)
  } catch {
    return [];
  }

  return savedTabs.every(isTab) ? savedTabs : [];
};