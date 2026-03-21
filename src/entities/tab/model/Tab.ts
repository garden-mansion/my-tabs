import type { CustomDate } from "@/shared/model";

export interface Tab {
  id: string;
  title: string;
  subtitle?: string;
  tempo?: number;
  notesText: string;

  date: CustomDate;
}
