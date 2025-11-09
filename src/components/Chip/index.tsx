import Button from "@components/Button";
import { ACTIVE_BUTTON, HOVER_BUTTON } from "@constants/classNames";
import { type ButtonProps } from "@headlessui/react";
import type { FC } from "react";

type TChipProps = ButtonProps & {
  isActive?: boolean;
};

const Chip: FC<TChipProps> = ({ children, isActive, className, ...rest }) => {
  return (
    <Button
      className={`${isActive ? ACTIVE_BUTTON : HOVER_BUTTON} ${className}`}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default Chip;
