import type { FC, ReactNode } from "react";

type TChipProps = {
  children?: ReactNode;
};

const Chip: FC<TChipProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Chip;
