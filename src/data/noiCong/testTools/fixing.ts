import LA_HAN_PHUC_MA_CONG from "../refinedData/thieuLam/3_laHanPhucMaCong";

export const fixing = () => {
  let data = { ...LA_HAN_PHUC_MA_CONG };
  data.detail = data.detail.map((level) => {
    return {
      lucTay: level.lucTay,
      thanPhap: level.thanPhap,
      noiTuc: level.noiTuc,
      canhKhi: level.canhKhi,
      thePhach: level.thePhach,
      tongDiem: level.tongDiem,
      tongDiemNgoai: level.lucTay + level.thanPhap + level.thePhach,
      tongDiemNoi: level.noiTuc + level.canhKhi + level.thePhach,
      khiHuyet: level.khiHuyet,
      noiLuc: level.noiLuc,
      doDon: level.doDon,
      noiPhong: level.noiPhong,
      level: level.level,
      diemNoiCong: level.diemNoiCong,
      tuViTienCap: level.tuViTienCap,
      tuViTong: level.tuViTong,
    };
  });
  console.log("data:::", data);
};
