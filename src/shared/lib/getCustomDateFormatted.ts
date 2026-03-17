import dayjs from "dayjs";
import type { CustomDate } from "../model";

export const getCustomDateFormatted = (customDate: CustomDate): string => {
  const { year, month, date, hour, minute } = customDate;

  const dateString = `${date.toString().padStart(2, '0')} ${dayjs().month(month).format('MMM')} ${year}`;
  const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`

  return `${dateString} ${time}`
}