import { PropsWithChildren } from "react";

import { IResponseError } from "../../../models/app";
import { Typography, TypographyVariant } from "../../atoms";
import BaseTemplate from "../base-template/base-template";

import styles from "./info.module.css";

type TInfoTemplateProps = PropsWithChildren & {
  title?: string;
  subtitle?: string;
  content?: string;
  variant?: "info" | "error";
};

type TErrorResponseProps = {
  response: IResponseError;
};

const Info = ({ children, title, subtitle, content, variant = "info" }: TInfoTemplateProps) => {
  return (
    <BaseTemplate>
      <div className={`${styles["content-container"]} ${styles[`variant-${variant}`]}`}>
        {title && (
          <div className={styles["title"]}>
            <Typography variant={TypographyVariant.H1} color={variant === "error" ? "important" : "primary"}>
              {title}
            </Typography>
          </div>
        )}
        {subtitle && (
          <div className={styles["subtitle"]}>
            <Typography variant={TypographyVariant.H3}>{subtitle}</Typography>
          </div>
        )}
        {content && (
          <div className={styles["content"]}>
            <Typography variant={TypographyVariant.TEXT_LG}>{content}</Typography>
          </div>
        )}
        <div className={styles["children-block"]}>{children}</div>
      </div>
    </BaseTemplate>
  );
};

const ResponseError = ({ response: { status, error } }: TErrorResponseProps) => {
  const errorData = {
    title: "Somthing went wrong :-(",
    subtitle: "",
  };

  if (status && status >= 400 && status < 500) {
    errorData.title = `Error: ${status}`;
    errorData.subtitle = error;
  }

  return <Info variant="error" {...errorData} />;
};

export { Info, ResponseError };
