import { PropsWithChildren } from "react";

import styles from "./typography.module.css";

type TTypographyProps = PropsWithChildren & {
  variant?: ETypographyVariant;
  color?: "primary" | "primary-light" | "secondary" | "important";
};

type TTypographyComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

enum ETypographyVariant {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  TEXT = "text",
  TEXT_BOLD = "text_bold",
  TEXT_SM = "text-sm",
  TEXT_SM_BOLD = "text-sm_bold",
  TEXT_LG = "text-lg",
  TEXT_LG_BOLD = "text-lg_bold",
  TEXT_XL = "text-xl",
  TEXT_XL_BOLD = "text-xl_bold",
}

const Typography = ({ children, variant = ETypographyVariant.TEXT, color = "primary" }: TTypographyProps) => {
  let TypographyComponent: TTypographyComponent = "p";

  switch (variant) {
    case ETypographyVariant.H1:
    case ETypographyVariant.H2:
    case ETypographyVariant.H3:
    case ETypographyVariant.H4:
    case ETypographyVariant.H5:
    case ETypographyVariant.H6:
      TypographyComponent = variant;
  }

  const stylesVariant = styles[`variant-${variant}`];
  const styleColor = styles[`color-${color}`];

  return <TypographyComponent className={`${stylesVariant} ${styleColor}`}>{children}</TypographyComponent>;
};

export default Typography;

export { ETypographyVariant };
