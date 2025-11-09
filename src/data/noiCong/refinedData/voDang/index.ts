import type { TNoiCong } from "@models/noiCong";

import LUONG_NGHI_HO_TAM_CONG from "./1_luongNghiHoTamCong";
import NOI_DAN_THUAT from "./2_noiDanThuat";
import THUONG_THANH_VO_CUC_CONG from "./3_thuongThanhVoCucCong";

const NOI_CONG_VO_DANG: TNoiCong[] = [
  LUONG_NGHI_HO_TAM_CONG,
  NOI_DAN_THUAT,
  THUONG_THANH_VO_CUC_CONG,
];

export default NOI_CONG_VO_DANG;
