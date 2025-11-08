import type { TNoiCong } from "@models/noiCong";

import NOI_CONG_THIEU_LAM from "./refinedData/thieuLam";
import NOI_CONG_VO_DANG from "./refinedData/voDang";

export const NOI_CONG_ALL: TNoiCong[] = [
  ...NOI_CONG_THIEU_LAM,
  ...NOI_CONG_VO_DANG,
];

export const NOI_1: TNoiCong[] = [NOI_CONG_THIEU_LAM[0], NOI_CONG_VO_DANG[0]];
