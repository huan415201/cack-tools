import type { TNoiCong, TNoiCongLevel } from "@models/noiCong";

export type TNoiCongTableData = Omit<
  TNoiCong,
  | "detail"
  | "hieuUngTang6"
  | "hieuUngTang16"
  | "hieuUngTang26"
  | "hieuUngTang36"
  | "hieuUngTang49"
  | "hieuUngTang64"
  | "hieuUngTang75"
  | "hieuUngTang86"
> & {
  detail: TNoiCongLevel;
  hieuUng: string;
  highestStat: number;
  secondHighestStat: number;
};
