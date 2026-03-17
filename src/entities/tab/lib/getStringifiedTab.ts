import type { Tab } from "../model/Tab";

export const getStringifiedTab = (tab: Tab): string => {
  const { name, id, date } = tab;

  return JSON.stringify({
    name,
    id,
    date,
  })
}