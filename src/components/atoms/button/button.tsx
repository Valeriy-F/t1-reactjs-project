import { ButtonHTMLAttributes } from "react";

import styles from "./button.module.css";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "button" | "link";
  size?: "sm" | "md" | "lg";
  color?: "primary" | "primary-transparent" | "secondary";
};

const Button = ({
  children,
  variant = "button",
  size = "md",
  color = "primary",
  className = "",
  ...otherProps
}: TButtonProps) => {
  const styleVariant = styles[`variant-${variant}`];
  const styleSize = styles[`size-${size}`];
  const styleColor = styles[`color-${color}`];

  className = `${styles.base} ${styleVariant} ${styleSize} ${styleColor} ${className}`;

  return (
    <button className={className} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
