import COLOR_KEYS from "@constants/colorKeys";

export const dynamicColor = (key: string, type: "text" | "bg"): string => {
  if (type === "text") {
    switch (key) {
      case COLOR_KEYS.caibang:
        return "text-caibang";
      case COLOR_KEYS.camyve:
        return "text-camyve";
      case COLOR_KEYS.conluan:
        return "text-conluan";
      case COLOR_KEYS.cuclaccoc:
        return "text-cuclaccoc";
      case COLOR_KEYS.duongmon:
        return "text-duongmon";
      case COLOR_KEYS.minhgiao:
        return "text-minhgiao";
      case COLOR_KEYS.ngami:
        return "text-ngami";
      case COLOR_KEYS.quantuduong:
        return "text-quantuduong";
      case COLOR_KEYS.thienson:
        return "text-thienson";
      case COLOR_KEYS.thieulam:
        return "text-thieulam";
      case COLOR_KEYS.vodang:
        return "text-vodang";
    }
  }
  if (type === "bg") {
    switch (key) {
      case COLOR_KEYS.caibang:
        return "bg-caibang";
      case COLOR_KEYS.camyve:
        return "bg-camyve";
      case COLOR_KEYS.conluan:
        return "bg-conluan";
      case COLOR_KEYS.cuclaccoc:
        return "bg-cuclaccoc";
      case COLOR_KEYS.duongmon:
        return "bg-duongmon";
      case COLOR_KEYS.minhgiao:
        return "bg-minhgiao";
      case COLOR_KEYS.ngami:
        return "bg-ngami";
      case COLOR_KEYS.quantuduong:
        return "bg-quantuduong";
      case COLOR_KEYS.thienson:
        return "bg-thienson";
      case COLOR_KEYS.thieulam:
        return "bg-thieulam";
      case COLOR_KEYS.vodang:
        return "bg-vodang";
    }
  }
  return "";
};
