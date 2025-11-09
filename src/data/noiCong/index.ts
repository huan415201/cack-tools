import type { TNoiCong } from "@models/noiCong";

import NOI_CONG_CAI_BANG from "./refinedData/caiBang";
import NOI_CONG_CAM_Y_VE from "./refinedData/camYVe";
import NOI_CONG_CON_LUAN from "./refinedData/conLuan";
import NOI_CONG_CUC_LAC_COC from "./refinedData/cucLacCoc";
import NOI_CONG_DUONG_MON from "./refinedData/duongMon";
import NOI_CONG_MINH_GIAO from "./refinedData/minhGiao";
import NOI_CONG_NGA_MI from "./refinedData/ngaMi";
import NOI_CONG_QUAN_TU_DUONG from "./refinedData/quanTuDuong";
import NOI_CONG_THIEN_SON from "./refinedData/thienSon";
import NOI_CONG_THIEU_LAM from "./refinedData/thieuLam";
import NOI_CONG_VO_DANG from "./refinedData/voDang";

export const NOI_CONG_ALL: TNoiCong[] = [
  ...NOI_CONG_CAI_BANG,
  ...NOI_CONG_CAM_Y_VE,
  ...NOI_CONG_CON_LUAN,
  ...NOI_CONG_CUC_LAC_COC,
  ...NOI_CONG_DUONG_MON,
  ...NOI_CONG_MINH_GIAO,
  ...NOI_CONG_NGA_MI,
  ...NOI_CONG_QUAN_TU_DUONG,
  ...NOI_CONG_THIEN_SON,
  ...NOI_CONG_THIEU_LAM,
  ...NOI_CONG_VO_DANG,
];

export const NOI_1: TNoiCong[] = [
  NOI_CONG_CAI_BANG[0],
  NOI_CONG_NGA_MI[0],
  NOI_CONG_THIEU_LAM[0],
  NOI_CONG_VO_DANG[0],
];

export const NOI_2: TNoiCong[] = [NOI_CONG_THIEU_LAM[1], NOI_CONG_VO_DANG[1]];

export const NOI_3: TNoiCong[] = [NOI_CONG_THIEU_LAM[2], NOI_CONG_VO_DANG[2]];
