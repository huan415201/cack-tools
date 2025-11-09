import { Input as HeadlessInput, type InputProps } from "@headlessui/react";
import type { FC, RefObject } from "react";

type TInputProps = InputProps & {
  inputRef: RefObject<HTMLInputElement | null>;
};

const Input: FC<TInputProps> = ({ inputRef, className, ...props }) => {
  return (
    <HeadlessInput
      ref={inputRef}
      className={`py-2 px-3 border border-border rounded-md ${className}`}
      {...props}
    />
  );
};

export default Input;
