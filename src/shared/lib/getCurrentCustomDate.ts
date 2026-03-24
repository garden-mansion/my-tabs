import dayjs from 'dayjs';
import type { CustomDate } from '../model';

export const getCurrentCustomDate = (): CustomDate => {
  const now = dayjs();

  return {
    year: now.year(),
    month: now.month(),
    date: now.date(),

    hour: now.hour(),
    minute: now.minute(),
  };
};
