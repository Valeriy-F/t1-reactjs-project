import { ReactNode } from "react";

import { Typography, TypographyVariant } from "../../../atoms";

import styles from "./product-details-item.module.css";

type TProductDetailsItemProps = {
  name: string;
  value: ReactNode | string;
  justifyItems?: "start" | "space-between";
};

const ProductDetailsItem = ({ name, value, justifyItems = "start" }: TProductDetailsItemProps) => {
  return (
    <div className={`${styles.container} ${styles[`justify-items_${justifyItems}`]}`}>
      <div className={styles.name}>
        <Typography variant={TypographyVariant.TEXT_BOLD} color="primary-light">
          {name}
        </Typography>
      </div>
      <div className={styles.value}>
        {typeof value !== "object" ? <Typography variant={TypographyVariant.TEXT_BOLD}>{value}</Typography> : value}
      </div>
    </div>
  );
};

export default ProductDetailsItem;
