import { isCustomDate } from '@/shared/lib';
import type { Tab } from '../model/Tab';

export const isTab = (value: any): value is Tab => {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.title === 'string' &&
    (typeof value.subtitle === 'string' ||
      typeof value.subtitle === 'undefined') &&
    (typeof value.tempo === 'number' || typeof value.tempo === 'undefined') &&
    typeof value.notesText === 'string' &&
    typeof value.id === 'string' &&
    isCustomDate(value.date)
  );
};
