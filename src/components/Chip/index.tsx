import { ACTIVE_BUTTON, HOVER_BUTTON } from "@constants/classNames";
import { Button, type ButtonProps } from "@headlessui/react";
import type { FC } from "react";

type TChipProps = ButtonProps & {
  isActive?: boolean;
};

const Chip: FC<TChipProps> = ({ children, isActive, className, ...rest }) => {
  return (
    <Button
      className={`py-2 px-3 border border-border rounded-md cursor-pointer font-medium ${isActive ? ACTIVE_BUTTON : HOVER_BUTTON} ${className}`}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default Chip;
