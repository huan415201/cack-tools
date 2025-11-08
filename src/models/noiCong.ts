export type TNoiCong = {
  id: string;
  icon: string;
  colorKey: string;
  ten: string;
  moTa: string;
  tangToiDa: number;
  hieuUngTang6?: string;
  hieuUngTang16?: string;
  hieuUngTang26?: string;
  hieuUngTang36?: string;
  hieuUngTang49?: string;
  hieuUngTang64?: string;
  hieuUngTang75?: string;
  hieuUngTang86?: string;
  detail: TNoiCongLevel[];
};

export type TNoiCongLevel = {
  level: number;
  // Main stats
  lucTay: number;
  thanPhap: number;
  noiTuc: number;
  canhKhi: number;
  thePhach: number;
  tongDiem: number;
  tongDiemNgoai: number;
  tongDiemNoi: number;
  // Sub stats
  khiHuyet: number;
  noiLuc: number;
  doDon: number;
  noiPhong: number;
  diemNoiCong: number;
  // System stats
  tuViTienCap: number;
  tuViTong: number;
};
