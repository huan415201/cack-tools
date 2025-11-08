import { Button, type ButtonProps } from "@headlessui/react";
import type { FC } from "react";

type TChipProps = ButtonProps & {
  isActive?: boolean;
};

const Chip: FC<TChipProps> = ({ children, isActive, className, ...rest }) => {
  return (
    <Button
      className={`py-2 px-3 border border-gray-300 rounded-md cursor-pointer font-medium ${isActive ? "bg-blue-400 border-blue-400 text-white" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default Chip;
