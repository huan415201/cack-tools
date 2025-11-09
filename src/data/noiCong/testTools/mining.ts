import type { TNoiCong, TNoiCongLevel } from "@models/noiCong";

import { NOI_CONG_TYPE } from "@constants/noiCongType";
import miningJSON from "./mining.json";

export const mining = () => {
  const refinedDetail: TNoiCongLevel[] = miningJSON.map((item) => {
    const detail = item?.data.detail;
    return {
      lucTay: detail.lucTay,
      thanPhap: detail.thanPhap,
      noiTuc: detail.noiTuc,
      canhKhi: detail.canhKhi,
      thePhach: detail.thePhach,
      tongDiem:
        detail.lucTay +
        detail.thanPhap +
        detail.noiTuc +
        detail.canhKhi +
        detail.thePhach,
      tongDiemNgoai: detail.lucTay + detail.thanPhap + detail.thePhach,
      tongDiemNoi: detail.noiTuc + detail.canhKhi + detail.thePhach,
      khiHuyet: detail.maxHp,
      noiLuc: detail.maxMp,
      doDon: detail.maxParry,
      noiPhong: detail.innerDef,
      level: detail.level,
      diemNoiCong: detail.point,
      tuViTienCap: detail.tuViTienCap,
      tuViTong: detail.tuViTong,
    };
  });
  const result: TNoiCong = {
    id: miningJSON[0]?.data.slug,
    icon: "",
    colorKey: miningJSON[0]?.data.school.slug.replace(/-/g, ""),
    ten: miningJSON[0]?.data.name,
    moTa: miningJSON[0]?.data.desc,
    tangToiDa: miningJSON[0]?.data.maxLevel,
    type:
      miningJSON[0]?.data.type === "0"
        ? NOI_CONG_TYPE.duongCuong
        : miningJSON[0]?.data.type === "1"
          ? NOI_CONG_TYPE.amNhu
          : NOI_CONG_TYPE.thaiCuc,
    hieuUngTang6: miningJSON[5]?.data.detail.effectInfo,
    hieuUngTang16: miningJSON[15]?.data.detail.effectInfo,
    hieuUngTang26: miningJSON[25]?.data.detail.effectInfo,
    hieuUngTang36: miningJSON[35]?.data.detail.effectInfo,
    hieuUngTang49: miningJSON[48]?.data.detail.effectInfo,
    hieuUngTang64: miningJSON[63]?.data.detail.effectInfo,
    hieuUngTang75: miningJSON[74]?.data.detail.effectInfo,
    hieuUngTang86: miningJSON[85]?.data.detail.effectInfo,
    detail: refinedDetail,
  };
  console.log("result:::", result);
};
