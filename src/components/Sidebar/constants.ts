export const SIDEBAR_ITEMS = {
  Home: { label: "Trang Chủ", value: "home", path: "/" },
  NoiCong: { label: "Nội Công", value: "noi-cong", path: "/noi-cong" },
  KinhMach: { label: "Kinh Mạch", value: "kinh-mach", path: "/kinh-mach" },
} as const;

export type TSidebarKey = keyof typeof SIDEBAR_ITEMS;

export type TSidebarItem = (typeof SIDEBAR_ITEMS)[TSidebarKey];
