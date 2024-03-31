import { PropsWithChildren } from "react";

import styles from "./loading.module.css";

type TLoadingProps = PropsWithChildren & {
  contentPlacement?: "incolumn" | "inline";
  color?: "primary" | "secondary" | "tertiary";
  size?: "xs" | "sm" | "md" | "lg";
};

type TLoadingBlockProps = TLoadingProps & {
  blockSize?: "md" | "sm" | "lg";
};

const Loading = ({ children, contentPlacement = "incolumn", color = "secondary", size = "md" }: TLoadingProps) => {
  return (
    <div className={`${styles["contetnt-container"]} ${styles[`content-placement-${contentPlacement}`]}`}>
      <div className={`${styles["loader"]} ${styles[`loader-size-${size}`]} ${styles[`loader-color-${color}`]}`}></div>
      {children && <div>{children}</div>}
    </div>
  );
};

const LoadingBlock = ({ children, blockSize = "md", ...loadingProps }: TLoadingBlockProps) => {
  return (
    <div className={`${styles["loading-container"]} ${styles[`loading-container-size-${blockSize}`]}`}>
      <Loading {...loadingProps}>{children}</Loading>
    </div>
  );
};

export { Loading, LoadingBlock };
