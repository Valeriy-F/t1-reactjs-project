import { PropsWithChildren } from "react";

import BaseTemplate from "../base-template/base-template";

import styles from "./error.module.css";

type TErrorTemplateProps = PropsWithChildren;

const Error = ({ children }: TErrorTemplateProps) => {
  return (
    <BaseTemplate>
      <div className={styles["error-container"]}>{children}</div>
    </BaseTemplate>
  );
};

export default Error;
