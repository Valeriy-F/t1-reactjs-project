import { InputHTMLAttributes } from "react";

import styles from "./text.module.css";

type TTextProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  size?: "sm" | "md" | "lg";
};

const Text = ({ className, value, onChange, size = "md", ...otherProps }: TTextProps) => {
  const styleSize = styles[`size-${size}`];

  className = className ? ` ${className}` : "";

  return (
    <input
      type="text"
      value={value}
      className={`${styles["text-field"]} ${styleSize}${className}`}
      onChange={onChange}
      {...otherProps}
    />
  );
};

export default Text;
