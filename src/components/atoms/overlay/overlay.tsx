import { HTMLAttributes, PropsWithChildren } from "react";

import styles from "./overlay.module.css";

type TOverlayProps = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

const Overlay = ({ children, className }: TOverlayProps) => {
  const localClassName = styles["overlay-container"];

  className = className ? `${localClassName} ${className}` : localClassName;

  return <div className={className}>{children}</div>;
};

export default Overlay;
