import type { FC, JSX } from "react";

type TTextProps = JSX.IntrinsicElements["p"];

const Text: FC<TTextProps> = ({ children, ...props }) => {
  const { className, ...rest } = props;
  return (
    <p className={`text-left ${className}`} {...rest}>
      {children}
    </p>
  );
};

export default Text;
