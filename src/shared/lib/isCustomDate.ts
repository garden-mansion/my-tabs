import type { CustomDate } from '../model';

export const isCustomDate = (value: any): value is CustomDate => {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.year === 'number' &&
    typeof value.month === 'number' &&
    typeof value.date === 'number' &&
    typeof value.hour === 'number' &&
    typeof value.minute === 'number'
  );
};
