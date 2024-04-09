import { PropsWithChildren } from "react";

import { IResponseError } from "../../../models/app";
import { Typography, TypographyVariant } from "../../atoms";

import styles from "./info-block.module.css";

type TInfoBlockProps = PropsWithChildren & {
  title?: string;
  subtitle?: string;
  content?: string;
  variant?: "info" | "error";
};

type TResponseErrorBlockProps = {
  response: IResponseError;
};

const InfoBlock = ({ children, title, subtitle, content, variant = "info" }: TInfoBlockProps) => {
  return (
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
  );
};

const ResponseErrorBlock = ({ response: { status, error } }: TResponseErrorBlockProps) => {
  const errorData = {
    title: "Somthing went wrong :-(",
    subtitle: "",
  };

  if (status && status >= 400 && status < 500) {
    errorData.title = `Error: ${status}`;
    errorData.subtitle = error;
  }

  return <InfoBlock variant="error" {...errorData} />;
};

export { InfoBlock, ResponseErrorBlock, type TInfoBlockProps, type TResponseErrorBlockProps };
