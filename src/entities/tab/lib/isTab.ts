import { isCustomDate } from "@/shared/lib";
import type { Tab } from "../model/Tab";

export const isTab = (value: any): value is Tab => {
  return typeof value === 'object' && value !== null &&  typeof value.name === 'string' && typeof value.id === 'string' && isCustomDate(value.date)
}