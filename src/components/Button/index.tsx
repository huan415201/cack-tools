import { Button as HeadlessButton, type ButtonProps } from "@headlessui/react";
import type { FC } from "react";

type TButtonProps = ButtonProps;

const Button: FC<TButtonProps> = ({ children, ...props }) => {
  const { className, ...rest } = props;
  return (
    <HeadlessButton
      className={`py-2 px-3 border border-border rounded-md cursor-pointer font-medium ${className}`}
      {...rest}
    >
      {children}
    </HeadlessButton>
  );
};

export default Button;
