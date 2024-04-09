import { PropsWithChildren } from "react";

import styles from "./product-details-group.module.css";

type TProductDetailsGroupProps = PropsWithChildren;

const ProductDetailsGroup = ({ children }: TProductDetailsGroupProps) => {
  return <div className={styles["content-container"]}>{children}</div>;
};

export default ProductDetailsGroup;
