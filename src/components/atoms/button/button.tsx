import { ButtonHTMLAttributes, LinkHTMLAttributes } from "react";

import styles from "./button.module.css";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "button" | "link";
  size?: "sm" | "md" | "lg";
  color?: "primary" | "primary-transparent" | "secondary";
};

type TButtonLinkProps = LinkHTMLAttributes<HTMLAnchorElement> & {
  variant?: "link" | "button";
  size?: "sm" | "md" | "lg";
  color?: "primary" | "primary-transparent" | "secondary";
};

const Button = ({
  children,
  variant = "link",
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

const ButtonLink = ({
  children,
  variant = "button",
  size = "md",
  color = "primary",
  className = "",
  ...otherProps
}: TButtonLinkProps) => {
  const styleVariant = styles[`variant-${variant}`];
  const styleSize = styles[`size-${size}`];
  const styleColor = styles[`color-${color}`];

  className = `${styles.base} ${styleVariant} ${styleSize} ${styleColor} ${className}`;

  return (
    <a className={className} {...otherProps}>
      {children}
    </a>
  );
};

export { Button, ButtonLink };
