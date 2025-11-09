import type { TNoiCong } from "@models/noiCong";
import type { TNoiCongTableData } from "./types";

export const getHieuUng = (detail: TNoiCong, selectedLevel: number) => {
  let result = "";
  if (selectedLevel < 6) {
    return result;
  }
  if (selectedLevel >= 86) {
    result = detail.hieuUngTang86 || "";
  }
  if (75 <= selectedLevel && selectedLevel < 86) {
    result = detail.hieuUngTang75 || "";
  }
  if (64 <= selectedLevel && selectedLevel < 75) {
    result = detail.hieuUngTang64 || "";
  }
  if (49 <= selectedLevel && selectedLevel < 64) {
    result = detail.hieuUngTang49 || "";
  }
  if (36 <= selectedLevel && selectedLevel < 49) {
    result = detail.hieuUngTang36 || "";
  }
  if (26 <= selectedLevel && selectedLevel < 36) {
    result = detail.hieuUngTang26 || "";
  }
  if (16 <= selectedLevel && selectedLevel < 26) {
    result = detail.hieuUngTang16 || "";
  }
  if (6 <= selectedLevel && selectedLevel < 16) {
    result = detail.hieuUngTang6 || "";
  }
  if (!result) {
    result =
      detail.hieuUngTang86 ||
      detail.hieuUngTang75 ||
      detail.hieuUngTang64 ||
      detail.hieuUngTang49 ||
      detail.hieuUngTang36 ||
      detail.hieuUngTang26 ||
      detail.hieuUngTang16 ||
      detail.hieuUngTang6 ||
      "";
  }
  return result;
};

export const getStatClassName = (
  row: TNoiCongTableData,
  field: keyof TNoiCongTableData["detail"]
) => {
  const isHighest = row.highestStat === row.detail[field];
  const color = isHighest ? "font-bold text-attention" : "";
  return color;
};
